import { and, asc, between, eq, isNull } from 'drizzle-orm'

import { db } from '../../db'
import { type HabitCheck, habitChecks } from '../../db/schema/habits'
import { type Database, HabitError } from './habit-error'

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
