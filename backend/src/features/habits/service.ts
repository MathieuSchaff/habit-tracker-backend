import { eq, and, between, isNull, desc, asc, sql } from 'drizzle-orm'
import { differenceInDays, startOfDay } from 'date-fns'
import { db } from '../../db'
import {
  habits,
  habitFrequencies,
  habitTimings,
  habitReminders,
  habitPeriods,
  habitChecks,
  type Habit,
  type HabitFrequency,
  type HabitTiming,
  type HabitReminder,
  type HabitPeriod,
  type HabitCheck,
} from '../../db/schema/habits'
import { type CreateHabitInput, type UpdateHabitInput } from './validation'
import type { NodePgDatabase } from 'drizzle-orm/node-postgres'
import * as schema from '../../db/schema'

type Database = NodePgDatabase<typeof schema>

import { getToday } from '../../utils/dates'
import type { HabitErrorCode, HabitStats, HabitWithRelations, TodayHabit } from './types'

// ERREUR CUSTOM

export class HabitError extends Error {
  constructor(
    public code: HabitErrorCode,
    public details?: unknown
  ) {
    super(code)
    this.name = 'HabitError'
  }
}

// HABITS CRUD

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

  // Filtrer les nulls (ne devrait pas arriver, mais TypeScript)
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

// FREQUENCY

export async function updateHabitFrequency(
  habitId: string,
  input: {
    type: 'daily' | 'weekly' | 'monthly' | 'interval'
    intervalDays?: number
    daysOfWeek?: string[]
    daysOfMonth?: number[]
  },
  database: Database = db
): Promise<HabitFrequency> {
  const [frequency] = await database
    .insert(habitFrequencies)
    .values({
      habitId,
      type: input.type,
      intervalDays: input.intervalDays,
      daysOfWeek: input.daysOfWeek,
      daysOfMonth: input.daysOfMonth,
    })
    .onConflictDoUpdate({
      target: habitFrequencies.habitId,
      set: {
        type: input.type,
        intervalDays: input.intervalDays,
        daysOfWeek: input.daysOfWeek,
        daysOfMonth: input.daysOfMonth,
        updatedAt: new Date(),
      },
    })
    .returning()

  if (!frequency) {
    throw new HabitError('frequency_update_failed')
  }

  return frequency
}

// TIMINGS

export async function addHabitTiming(
  habitId: string,
  time: string,
  label?: string,
  database: Database = db
): Promise<HabitTiming> {
  const [timing] = await database.insert(habitTimings).values({ habitId, time, label }).returning()

  if (!timing) {
    throw new HabitError('timing_creation_failed')
  }

  return timing
}

export async function deleteHabitTiming(timingId: string, database: Database = db): Promise<void> {
  const result = await database.delete(habitTimings).where(eq(habitTimings.id, timingId))

  const deleted = (result.rowCount ?? 0) > 0

  if (!deleted) {
    throw new HabitError('timing_not_found')
  }
}

export async function setHabitTimings(
  habitId: string,
  timings: { time: string; label?: string }[],
  database: Database = db
): Promise<HabitTiming[]> {
  return database.transaction(async (tx) => {
    await tx.delete(habitTimings).where(eq(habitTimings.habitId, habitId))

    if (timings.length === 0) return []

    return tx
      .insert(habitTimings)
      .values(timings.map((t) => ({ habitId, time: t.time, label: t.label })))
      .returning()
  })
}

// REMINDERS

export async function addHabitReminder(
  habitId: string,
  beforeMinutes: number,
  database: Database = db
): Promise<HabitReminder> {
  const [reminder] = await database
    .insert(habitReminders)
    .values({ habitId, beforeMinutes })
    .returning()

  if (!reminder) {
    throw new HabitError('reminder_creation_failed')
  }

  return reminder
}

export async function deleteHabitReminder(
  reminderId: string,
  database: Database = db
): Promise<void> {
  const result = await database.delete(habitReminders).where(eq(habitReminders.id, reminderId))

  const deleted = (result.rowCount ?? 0) > 0

  if (!deleted) {
    throw new HabitError('reminder_not_found')
  }
}

export async function setHabitReminders(
  habitId: string,
  reminders: { beforeMinutes: number }[],
  database: Database = db
): Promise<HabitReminder[]> {
  return database.transaction(async (tx) => {
    await tx.delete(habitReminders).where(eq(habitReminders.habitId, habitId))

    if (reminders.length === 0) return []

    return tx
      .insert(habitReminders)
      .values(reminders.map((r) => ({ habitId, beforeMinutes: r.beforeMinutes })))
      .returning()
  })
}

// PERIODS

export async function setHabitPeriod(
  habitId: string,
  period: {
    startDate?: string
    endDate?: string
    activeMonths?: number[]
  },
  database: Database = db
): Promise<HabitPeriod> {
  if (period.startDate && period.endDate && period.startDate > period.endDate) {
    throw new HabitError('invalid_date_range')
  }

  const [result] = await database
    .insert(habitPeriods)
    .values({
      habitId,
      startDate: period.startDate,
      endDate: period.endDate,
      activeMonths: period.activeMonths,
    })
    .onConflictDoUpdate({
      target: habitPeriods.habitId,
      set: {
        startDate: period.startDate,
        endDate: period.endDate,
        activeMonths: period.activeMonths,
        updatedAt: new Date(),
      },
    })
    .returning()

  if (!result) {
    throw new HabitError('period_update_failed')
  }

  return result
}

export async function deleteHabitPeriod(habitId: string, database: Database = db): Promise<void> {
  const result = await database.delete(habitPeriods).where(eq(habitPeriods.habitId, habitId))

  const deleted = (result.rowCount ?? 0) > 0

  if (!deleted) {
    throw new HabitError('habit_not_found')
  }
}

// CHECKS - Le cœur du tracking

export async function checkHabit(
  input: {
    userId: string
    habitId: string
    date: string
    timingId?: string
    actualTime?: string
  },
  database: Database = db
): Promise<HabitCheck> {
  const [check] = await database
    .insert(habitChecks)
    .values({
      userId: input.userId,
      habitId: input.habitId,
      date: input.date,
      timingId: input.timingId,
      actualTime: input.actualTime,
    })
    .returning()

  if (!check) {
    throw new HabitError('check_creation_failed')
  }

  return check
}

export async function uncheckHabit(checkId: string, database: Database = db): Promise<void> {
  const result = await database.delete(habitChecks).where(eq(habitChecks.id, checkId))

  const deleted = (result.rowCount ?? 0) > 0

  if (!deleted) {
    throw new HabitError('check_not_found')
  }
}

export async function uncheckHabitByDate(
  habitId: string,
  date: string,
  database: Database = db
): Promise<void> {
  const result = await database
    .delete(habitChecks)
    .where(and(eq(habitChecks.habitId, habitId), eq(habitChecks.date, date)))

  const deleted = (result.rowCount ?? 0) > 0

  if (!deleted) {
    throw new HabitError('check_not_found')
  }
}

export async function getUserChecksForDate(
  userId: string,
  date: string,
  database: Database = db
): Promise<HabitCheck[]> {
  return database
    .select()
    .from(habitChecks)
    .where(and(eq(habitChecks.userId, userId), eq(habitChecks.date, date)))
}

export async function getHabitChecks(
  habitId: string,
  startDate: string,
  endDate: string,
  database: Database = db
): Promise<HabitCheck[]> {
  return database
    .select()
    .from(habitChecks)
    .where(and(eq(habitChecks.habitId, habitId), between(habitChecks.date, startDate, endDate)))
    .orderBy(asc(habitChecks.date))
}

export async function isHabitChecked(
  habitId: string,
  date: string,
  database: Database = db
): Promise<boolean> {
  const check = await database.query.habitChecks.findFirst({
    where: and(eq(habitChecks.habitId, habitId), eq(habitChecks.date, date)),
  })

  return !!check
}

export async function toggleHabitCheck(
  input: {
    userId: string
    habitId: string
    date: string
    timingId?: string
    actualTime?: string
  },
  database: Database = db
): Promise<{ checked: boolean; check?: HabitCheck }> {
  const existing = await database.query.habitChecks.findFirst({
    where: and(
      eq(habitChecks.habitId, input.habitId),
      eq(habitChecks.date, input.date),
      input.timingId ? eq(habitChecks.timingId, input.timingId) : isNull(habitChecks.timingId)
    ),
  })

  if (existing) {
    await uncheckHabit(existing.id, database)
    return { checked: false }
  } else {
    const check = await checkHabit(input, database)
    return { checked: true, check }
  }
}

// STATISTIQUES

export async function countHabitChecks(
  habitId: string,
  startDate: string,
  endDate: string,
  database: Database = db
): Promise<number> {
  const result = await database
    .select({ count: sql<number>`count(*)::int` })
    .from(habitChecks)
    .where(and(eq(habitChecks.habitId, habitId), between(habitChecks.date, startDate, endDate)))

  return result[0]?.count ?? 0
}

export async function getHabitStreak(habitId: string, database: Database = db): Promise<number> {
  const checks = await database
    .select({ date: habitChecks.date })
    .from(habitChecks)
    .where(eq(habitChecks.habitId, habitId))
    .orderBy(desc(habitChecks.date))

  if (checks.length === 0) {
    return 0
  }

  let streak = 0
  let expectedDate = startOfDay(new Date())

  for (const check of checks) {
    const checkDate = startOfDay(new Date(check.date))
    const diff = differenceInDays(expectedDate, checkDate)

    if (diff === 0 || diff === 1) {
      streak++
      expectedDate = checkDate
    } else {
      break
    }
  }

  return streak
}

export async function getHabitStats(
  habitId: string,
  startDate: string,
  endDate: string,
  database: Database = db
): Promise<HabitStats> {
  const [totalChecks, currentStreak] = await Promise.all([
    countHabitChecks(habitId, startDate, endDate, database),
    getHabitStreak(habitId, database),
  ])

  const start = new Date(startDate)
  const end = new Date(endDate)
  const totalDays = differenceInDays(end, start) + 1

  const completionRate = totalDays > 0 ? (totalChecks / totalDays) * 100 : 0

  return {
    totalChecks,
    currentStreak,
    completionRate: Math.round(completionRate * 10) / 10,
  }
}

// HELPERS - Habitudes du jour

export async function getTodayHabits(
  userId: string,
  database: Database = db
): Promise<TodayHabit[]> {
  const today = getToday()
  const currentMonth = new Date().getMonth() + 1

  const userHabits = await getUserHabitsWithRelations(userId, database)

  // Filtrer par période active
  const activeHabits = userHabits.filter((h) => {
    if (!h.period) return true

    if (h.period.activeMonths?.length) {
      if (!h.period.activeMonths.includes(currentMonth)) return false
    }

    if (h.period.startDate && today < h.period.startDate) return false
    if (h.period.endDate && today > h.period.endDate) return false

    return true
  })

  const todayChecks = await getUserChecksForDate(userId, today, database)

  const checksByHabit = new Map<string, HabitCheck[]>()
  todayChecks.forEach((c) => {
    const existing = checksByHabit.get(c.habitId) ?? []
    existing.push(c)
    checksByHabit.set(c.habitId, existing)
  })

  return activeHabits.map((h) => {
    const checks = checksByHabit.get(h.id) ?? []
    const requiredCount = h.timings.length || 1
    const isCompleted = checks.length >= requiredCount

    return {
      habit: h,
      timings: h.timings,
      checks,
      isCompleted,
    }
  })
}
