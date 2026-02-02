import type {
  Habit,
  HabitFrequency,
  HabitTiming,
  HabitReminder,
  HabitPeriod,
  HabitCheck,
} from '../../db/schema/habits'

// Export des types Zod (inputs de validation)
export type {
  Frequency,
  Timing,
  Reminder,
  Period,
  CreateHabitInput,
  UpdateHabitInput,
  CheckHabitInput,
  ToggleCheckInput,
  GetHabitChecksQuery,
  GetUserChecksQuery,
  GetHabitStatsQuery,
  UpdateFrequencyInput,
  SetTimingsInput,
  SetRemindersInput,
  SetPeriodInput,
} from './validation'

// Types composés/enrichis
export type HabitWithRelations = Habit & {
  frequency: HabitFrequency | null
  timings: HabitTiming[]
  reminders: HabitReminder[]
  period: HabitPeriod | null
}

export type TodayHabit = {
  habit: Habit
  timings: HabitTiming[]
  checks: HabitCheck[]
  isCompleted: boolean
}

export type HabitStats = {
  totalChecks: number
  currentStreak: number
  completionRate: number
}
export type HabitErrorCode =
  | 'habit_not_found'
  | 'habit_creation_failed'
  | 'habit_update_failed'
  | 'habit_delete_failed'
  | 'frequency_update_failed'
  | 'timing_not_found'
  | 'timing_creation_failed'
  | 'timing_delete_failed'
  | 'reminder_not_found'
  | 'reminder_creation_failed'
  | 'reminder_delete_failed'
  | 'period_update_failed'
  | 'period_delete_failed'
  | 'check_creation_failed'
  | 'check_not_found'
  | 'check_delete_failed'
  | 'unauthorized_access'
  | 'invalid_date_range'
  | 'database_error'
export const habitErrorToStatus = {
  habit_not_found: 404,
  habit_creation_failed: 500,
  habit_update_failed: 500,
  habit_delete_failed: 500,
  frequency_update_failed: 500,
  timing_not_found: 404,
  timing_creation_failed: 500,
  timing_delete_failed: 500,
  reminder_not_found: 404,
  reminder_creation_failed: 500,
  reminder_delete_failed: 500,
  period_update_failed: 500,
  period_delete_failed: 500,
  check_creation_failed: 500,
  check_not_found: 404,
  check_delete_failed: 500,
  unauthorized_access: 403,
  invalid_date_range: 400,
  database_error: 500,
} as const
