import type { CreateHabitInput, HabitWithRelations, UpdateHabitInput } from '@habit-tracker/shared'

import { and, asc, eq, isNull } from 'drizzle-orm'

import { db } from '../../db'
import {
  type Habit,
  habitFrequencies,
  habitPeriods,
  habitReminders,
  habits,
  habitTimings,
} from '../../db/schema/habits'
import { type Database, HabitError } from './habit-error'

export async function createHabit(
  input: CreateHabitInput,
  database: Database = db
): Promise<Habit> {
  const habit = await database.transaction(async (tx) => {
    const [habit] = await tx
      .insert(habits)
      .values({
        userId: input.userId,
        name: input.name,
        category: input.category,
      })
      .returning()

    if (!habit) {
      throw new HabitError('habit_creation_failed')
    }

    // fréquence
    if (input.frequency) {
      await tx.insert(habitFrequencies).values({
        habitId: habit.id,
        type: input.frequency.type,
        intervalDays: input.frequency.type === 'interval' ? input.frequency.intervalDays : null,
        daysOfWeek: input.frequency.type === 'weekly' ? input.frequency.daysOfWeek : null,
        daysOfMonth: input.frequency.type === 'monthly' ? input.frequency.daysOfMonth : null,
      })
    }

    // timings
    if (input.timings?.length) {
      await tx.insert(habitTimings).values(
        input.timings.map((t) => ({
          habitId: habit.id,
          time: t.time,
          label: t.label,
        }))
      )
    }

    // reminders
    if (input.reminders?.length) {
      await tx.insert(habitReminders).values(
        input.reminders.map((r) => ({
          habitId: habit.id,
          beforeMinutes: r.beforeMinutes,
        }))
      )
    }

    // period
    if (input.period) {
      await tx.insert(habitPeriods).values({
        habitId: habit.id,
        startDate: input.period.startDate,
        endDate: input.period.endDate,
        activeMonths: input.period.activeMonths,
      })
    }

    return habit
  })

  return habit
}

export async function getHabitById(
  habitId: string,
  database: Database = db
): Promise<HabitWithRelations> {
  const habit = await database.query.habits.findFirst({
    where: eq(habits.id, habitId),
  })

  if (!habit) {
    throw new HabitError('habit_not_found')
  }

  const [frequency, timings, reminders, period] = await Promise.all([
    database.query.habitFrequencies.findFirst({
      where: eq(habitFrequencies.habitId, habitId),
    }),
    database.query.habitTimings.findMany({
      where: eq(habitTimings.habitId, habitId),
      orderBy: asc(habitTimings.time),
    }),
    database.query.habitReminders.findMany({
      where: eq(habitReminders.habitId, habitId),
    }),
    database.query.habitPeriods.findFirst({
      where: eq(habitPeriods.habitId, habitId),
    }),
  ])

  return {
    ...habit,
    frequency: frequency ?? null,
    timings,
    reminders,
    period: period ?? null,
  }
}

export async function getUserHabits(userId: string, database: Database = db): Promise<Habit[]> {
  return database
    .select()
    .from(habits)
    .where(and(eq(habits.userId, userId), isNull(habits.archivedAt)))
    .orderBy(asc(habits.createdAt))
}

export async function getUserHabitsWithRelations(
  userId: string,
  database: Database = db
): Promise<HabitWithRelations[]> {
  const userHabits = await getUserHabits(userId, database)

  const habitsWithRelations = await Promise.all(userHabits.map((h) => getHabitById(h.id, database)))

  return habitsWithRelations.filter((h): h is HabitWithRelations => h !== null)
}

export async function updateHabit(
  habitId: string,
  input: UpdateHabitInput,
  database: Database = db
): Promise<Habit> {
  const [updated] = await database
    .update(habits)
    .set({
      ...input,
      updatedAt: new Date(),
    })
    .where(eq(habits.id, habitId))
    .returning()

  if (!updated) {
    throw new HabitError('habit_not_found')
  }

  return updated
}

export async function archiveHabit(habitId: string, database: Database = db): Promise<Habit> {
  const [archived] = await database
    .update(habits)
    .set({
      archivedAt: new Date(),
      updatedAt: new Date(),
    })
    .where(eq(habits.id, habitId))
    .returning()

  if (!archived) {
    throw new HabitError('habit_not_found')
  }

  return archived
}

export async function restoreHabit(habitId: string, database: Database = db): Promise<Habit> {
  const [restored] = await database
    .update(habits)
    .set({
      archivedAt: null,
      updatedAt: new Date(),
    })
    .where(eq(habits.id, habitId))
    .returning()

  if (!restored) {
    throw new HabitError('habit_not_found')
  }

  return restored
}

export async function deleteHabit(habitId: string, database: Database = db): Promise<void> {
  const result = await database.delete(habits).where(eq(habits.id, habitId))
  const deleted = (result.rowCount ?? 0) > 0

  if (!deleted) {
    throw new HabitError('habit_not_found')
  }
}
