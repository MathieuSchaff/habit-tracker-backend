import type {
  Habit,
  HabitCheck,
  HabitFrequency,
  HabitPeriod,
  HabitReminder,
  HabitTiming,
} from '../../../backend/src/db/schema'

// Export des types Zod (inputs de validation)
export type {
  CheckHabitInput,
  CreateHabitInput,
  Frequency,
  GetHabitChecksQuery,
  GetHabitStatsQuery,
  GetUserChecksQuery,
  Period,
  Reminder,
  SetPeriodInput,
  SetRemindersInput,
  SetTimingsInput,
  Timing,
  ToggleCheckInput,
  UpdateFrequencyInput,
  UpdateHabitInput,
} from '../schemas/habits'

// Types composés/enrichis

/**
 * Habitude avec toutes ses relations chargées.
 *
 * @remarks
 * Utilisé pour les réponses détaillées (GET /habits/:id).
 * `frequency` et `period` sont `null` si non configurés —
 * une habitude sans fréquence est considérée comme quotidienne par défaut.
 */
export type HabitWithRelations = Habit & {
  frequency: HabitFrequency | null
  timings: HabitTiming[]
  reminders: HabitReminder[]
  period: HabitPeriod | null
}

/**
 * Représentation d'une habitude pour la vue du jour (GET /habits/today).
 *
 * @remarks
 * `isCompleted` est calculé côté serveur selon la fréquence et les checks du jour.
 * Pour une habitude avec timings, `isCompleted` est `true` uniquement si
 * tous les timings ont été cochés.
 */
export type TodayHabit = {
  habit: Habit
  timings: HabitTiming[]
  checks: HabitCheck[]
  isCompleted: boolean
}

/**
 * Statistiques agrégées d'une habitude sur une période donnée.
 *
 * @remarks
 * Retourné par GET /habits/:id/stats?startDate=...&endDate=...
 * - `currentStreak` — nombre de jours consécutifs jusqu'à aujourd'hui
 * - `completionRate` — ratio entre 0 et 1 (ex: 0.85 = 85%)
 */
export type HabitStats = {
  totalChecks: number
  currentStreak: number
  completionRate: number
}

/**
 * Codes d'erreur spécifiques au domaine habits.
 *
 * @remarks
 * Ne pas étendre `CommonErrorCode` ici — les codes communs
 * (`unauthorized`, `server_error`, etc.) sont gérés au niveau du handler.
 * Voir `habitErrorToStatus` pour le mapping vers les status HTTP.
 * @see {@link habitErrorToStatus}
 */
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
  | 'unauthorized_access' // 403 — l'habitude appartient à un autre userId
  | 'invalid_date_range' // 400 — startDate > endDate dans les query params
  | 'database_error' // 500 — erreur Drizzle non catchée spécifiquement

/**
 * Mapping `HabitErrorCode` → status HTTP.
 *
 * @remarks
 * Utiliser avec `errorToStatus` depuis `@habit-tracker/shared/api`
 * plutôt que d'accéder directement à ce mapping dans les handlers.
 * @example
 * const status = habitErrorToStatus[error] ?? HTTP_STATUS.INTERNAL_SERVER_ERROR
 * return c.json(err(error), status)
 * @see {@link HabitErrorCode}
 */
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
