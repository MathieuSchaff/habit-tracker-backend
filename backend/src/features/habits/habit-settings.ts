import { eq } from 'drizzle-orm'

import { db } from '../../db'
import {
  type HabitFrequency,
  type HabitPeriod,
  type HabitReminder,
  type HabitTiming,
  habitFrequencies,
  habitPeriods,
  habitReminders,
  habitTimings,
} from '../../db/schema/habits'
import { type Database, HabitError } from './habit-error'

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
