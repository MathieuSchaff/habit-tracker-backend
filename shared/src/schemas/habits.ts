import { z } from 'zod'

// ─── Primitives réutilisables ────────────────────────────────────────────────

const uuid = z.uuid()

// le format pour le temps:
// ^ = c'est le début, et $ la fin, pour bien dire que c'est pas juste une partie
// en gros ça peut faire 00 à 19 pour la première partie
// ou | 20 à 23
/**
 * Format `HH:MM` en 24h.
 * @example '08:30', '23:59'
 */
const timeFormat = z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, 'Format HH:MM requis (ex: 08:30)')

/**
 * Format `YYYY-MM-DD` (ISO 8601 date-only).
 * @example '2025-01-15'
 */
const dateFormat = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Format YYYY-MM-DD requis')

const dayOfWeek = z.enum([
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
])

/** Jour du mois — 1 à 31. Pas de validation calendaire (ex: 31 février accepté). */
const dayOfMonth = z.number().int().min(1).max(31)

const month = z.number().int().min(1).max(12)

// ─── Fréquence ───────────────────────────────────────────────────────────────

// fréquences
//  selon la valeur de "type", zod valide les données en fonction de "type"
// il regarde la valeur de type puis valide avec le schéma correspondant
/**
 * Fréquence d'exécution d'une habitude — discriminatedUnion sur `type`.
 *
 * @remarks
 * Zod sélectionne le schéma à valider selon la valeur de `type`.
 * Une habitude sans fréquence configurée est traitée comme `daily` par défaut.
 *
 * @example
 * { type: 'daily' }
 * { type: 'weekly', daysOfWeek: ['monday', 'wednesday', 'friday'] }
 * { type: 'monthly', daysOfMonth: [1, 15] }
 * { type: 'interval', intervalDays: 3 } // toutes les 3 jours
 */
export const frequencySchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('daily'),
  }),
  z.object({
    type: z.literal('weekly'),
    daysOfWeek: z.array(dayOfWeek).min(1, 'Au moins un jour requis'),
  }),
  z.object({
    type: z.literal('monthly'),
    daysOfMonth: z.array(dayOfMonth).min(1, 'Au moins un jour requis'),
  }),
  z.object({
    type: z.literal('interval'),
    intervalDays: z.number().int().min(1, 'Intervalle minimum: 1 jour'),
  }),
])

// ─── Timing ──────────────────────────────────────────────────────────────────

/**
 * Horaire associé à une habitude.
 *
 * @remarks
 * `label` permet de différencier plusieurs timings sur la même habitude.
 * Max 10 timings par habitude (voir `createHabitSchema`).
 * @example
 * { time: '08:00', label: 'Matin' }
 * { time: '21:30', label: 'Soir' }
 */
export const timingSchema = z.object({
  time: timeFormat,
  label: z.string().max(50).optional(),
})

// ─── Reminder ────────────────────────────────────────────────────────────────

/**
 * Rappel avant l'heure prévue d'une habitude.
 *
 * @remarks
 * `beforeMinutes` exprime le délai en minutes avant le timing associé.
 * Utiliser `REMINDER_PRESETS` pour les valeurs courantes.
 * Max 5 reminders par habitude (voir `createHabitSchema`).
 */
export const reminderSchema = z.object({
  beforeMinutes: z.number().int().min(1).max(10080, 'Maximum 1 semaine (10080 min)'),
})

/**
 * Valeurs prédéfinies pour `beforeMinutes`.
 * @example
 * { beforeMinutes: REMINDER_PRESETS['30min'] } // → 30
 */
export const REMINDER_PRESETS = {
  '5min': 5,
  '15min': 15,
  '30min': 30,
  '1h': 60,
  '2h': 120,
  '1day': 1440,
} as const

// ─── Period ──────────────────────────────────────────────────────────────────

/**
 * Période d'activité d'une habitude.
 *
 * @remarks
 * Tous les champs sont optionnels — une période partiellement définie est valide.
 * Contrainte cross-field : `endDate` doit être >= `startDate` si les deux sont présents.
 * `activeMonths` permet de restreindre une habitude à certains mois de l'année
 * (ex: running uniquement d'avril à octobre → `[4, 5, 6, 7, 8, 9, 10]`).
 */
export const periodSchema = z
  .object({
    startDate: dateFormat.optional(),
    endDate: dateFormat.optional(),
    activeMonths: z.array(month).optional(),
  })
  .refine(
    (data) => {
      if (data.startDate && data.endDate) {
        return data.startDate <= data.endDate
      }
      return true
    },
    { message: 'La date de fin doit être après la date de début' }
  )

// ─── Habit CRUD ──────────────────────────────────────────────────────────────

/**
 * Payload pour POST /habits — création d'une habitude.
 *
 * @remarks
 * `frequency`, `timings`, `reminders` et `period` sont tous optionnels à la création.
 * Ils peuvent être configurés séparément via leurs endpoints dédiés.
 */
export const createHabitSchema = z.object({
  userId: uuid,
  name: z.string().min(1, 'Nom requis').max(100, 'Nom trop long (max 100 caractères)'),
  category: z.string().min(1, 'Catégorie requise').max(50, 'Catégorie trop longue'),
  frequency: frequencySchema.optional(),
  timings: z.array(timingSchema).max(10, 'Maximum 10 horaires').optional(),
  reminders: z.array(reminderSchema).max(5, 'Maximum 5 rappels').optional(),
  period: periodSchema.optional(),
})

/**
 * Payload pour PATCH /habits/:id — mise à jour partielle.
 *
 * @remarks
 * Seuls `name` et `category` sont modifiables ici.
 * Pour modifier la fréquence, les timings, les reminders ou la période,
 * utiliser leurs endpoints dédiés.
 * @see {@link updateFrequencySchema}
 * @see {@link setTimingsSchema}
 * @see {@link setRemindersSchema}
 * @see {@link setPeriodSchema}
 */
export const updateHabitSchema = z.object({
  name: z.string().min(1).max(100).optional(),
  category: z.string().min(1).max(50).optional(),
})

// ─── Checks ──────────────────────────────────────────────────────────────────

/**
 * Payload pour POST /habits/check — cocher une habitude.
 *
 * @remarks
 * `timingId` est requis si l'habitude a des timings configurés.
 * `actualTime` permet d'enregistrer l'heure réelle d'exécution (peut différer du timing prévu).
 */
export const checkHabitSchema = z.object({
  userId: uuid,
  habitId: uuid,
  date: dateFormat,
  timingId: uuid.optional(),
  actualTime: timeFormat.optional(),
})

/** Payload pour DELETE /habits/check/:id — décocher via l'id du check. */
export const uncheckHabitSchema = z.object({
  checkId: uuid,
})

/** Payload pour DELETE /habits/:id/check — décocher tous les checks d'une date donnée. */
export const uncheckByDateSchema = z.object({
  habitId: uuid,
  date: dateFormat,
})

/**
 * Payload pour POST /habits/toggle — coche si absent, décoche si présent.
 *
 * @remarks
 * Préférer ce endpoint au couple check/uncheck pour les interactions UI
 * afin d'éviter les race conditions.
 */
export const toggleCheckSchema = z.object({
  userId: uuid,
  habitId: uuid,
  date: dateFormat,
  timingId: uuid.optional(),
  actualTime: timeFormat.optional(),
})

// ─── Query params ────────────────────────────────────────────────────────────

/** Query params pour GET /habits/:id/checks?startDate=...&endDate=... */
export const getHabitChecksQuerySchema = z.object({
  habitId: uuid,
  startDate: dateFormat,
  endDate: dateFormat,
})

/** Query params pour GET /habits/today?userId=...&date=... */
export const getUserChecksQuerySchema = z.object({
  userId: uuid,
  date: dateFormat,
})

/** Query params pour GET /habits/:id/stats?startDate=...&endDate=... */
export const getHabitStatsQuerySchema = z.object({
  habitId: uuid,
  startDate: dateFormat,
  endDate: dateFormat,
})

// ─── Mises à jour des sous-entités ───────────────────────────────────────────

/** Payload pour PUT /habits/:id/frequency — remplace la fréquence existante. */
export const updateFrequencySchema = z.object({
  habitId: uuid,
  frequency: frequencySchema,
})

/** Payload pour PUT /habits/:id/timings — remplace tous les timings existants. */
export const setTimingsSchema = z.object({
  habitId: uuid,
  timings: z.array(timingSchema).max(10),
})

/** Payload pour PUT /habits/:id/reminders — remplace tous les reminders existants. */
export const setRemindersSchema = z.object({
  habitId: uuid,
  reminders: z.array(reminderSchema).max(5),
})

/** Payload pour PUT /habits/:id/period — remplace la période existante. */
export const setPeriodSchema = z.object({
  habitId: uuid,
  period: periodSchema,
})

// ─── Types inférés ───────────────────────────────────────────────────────────

export type Frequency = z.infer<typeof frequencySchema>
export type Timing = z.infer<typeof timingSchema>
export type Reminder = z.infer<typeof reminderSchema>
export type Period = z.infer<typeof periodSchema>

export type CreateHabitInput = z.infer<typeof createHabitSchema>
export type UpdateHabitInput = z.infer<typeof updateHabitSchema>
export type CheckHabitInput = z.infer<typeof checkHabitSchema>
export type ToggleCheckInput = z.infer<typeof toggleCheckSchema>

export type GetHabitChecksQuery = z.infer<typeof getHabitChecksQuerySchema>
export type GetUserChecksQuery = z.infer<typeof getUserChecksQuerySchema>
export type GetHabitStatsQuery = z.infer<typeof getHabitStatsQuerySchema>

export type UpdateFrequencyInput = z.infer<typeof updateFrequencySchema>
export type SetTimingsInput = z.infer<typeof setTimingsSchema>
export type SetRemindersInput = z.infer<typeof setRemindersSchema>
export type SetPeriodInput = z.infer<typeof setPeriodSchema>
