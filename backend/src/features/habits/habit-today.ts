import type { TodayHabit } from '@habit-tracker/shared'

import { db } from '../../db'
import type { HabitCheck } from '../../db/schema/habits'
import { getToday } from '../../utils/dates'
import { getUserChecksForDate } from './habit-checks'
import { getUserHabitsWithRelations } from './habit-crud'
import type { Database } from './habit-error'

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
