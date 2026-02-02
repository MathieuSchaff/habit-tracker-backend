import { z } from 'zod'

// trucs réutilisables

const uuid = z.uuid()
// le format pour le temps:
// ^ = c'est le début, et $ la fin, pour bien dire que c'est pas juste une partie
// en gros ça peut faire 00 à 19 pour la première partie
// ou | 20 à 23

const timeFormat = z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, 'Format HH:MM requis (ex: 08:30)')

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

const dayOfMonth = z.number().int().min(1).max(31)

const month = z.number().int().min(1).max(12)
// fréquences
//  selon la valeur de "type", zod valide les données en fonction de "type"
// il regarde la valeur de type puis valide avec le schéma correspondant
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

// timings

export const timingSchema = z.object({
  time: timeFormat,
  label: z.string().max(50).optional(),
})

// remeinders ( les rappels)

export const reminderSchema = z.object({
  beforeMinutes: z.number().int().min(1).max(10080, 'Maximum 1 semaine (10080 min)'),
})
export const REMINDER_PRESETS = {
  '5min': 5,
  '15min': 15,
  '30min': 30,
  '1h': 60,
  '2h': 120,
  '1day': 1440,
} as const

// périodes
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

// el famoso habit
//
//  création d'habitudes
export const createHabitSchema = z.object({
  userId: uuid,
  name: z.string().min(1, 'Nom requis').max(100, 'Nom trop long (max 100 caractères)'),
  category: z.string().min(1, 'Catégorie requise').max(50, 'Catégorie trop longue'),
  frequency: frequencySchema.optional(),
  timings: z.array(timingSchema).max(10, 'Maximum 10 horaires').optional(),
  reminders: z.array(reminderSchema).max(5, 'Maximum 5 rappels').optional(),
  period: periodSchema.optional(),
})
// update

export const updateHabitSchema = z.object({
  name: z.string().min(1).max(100).optional(),
  category: z.string().min(1).max(50).optional(),
})
// habit check
export const checkHabitSchema = z.object({
  userId: uuid,
  habitId: uuid,
  date: dateFormat,
  timingId: uuid.optional(),
  actualTime: timeFormat.optional(),
})

export const uncheckHabitSchema = z.object({
  checkId: uuid,
})

export const uncheckByDateSchema = z.object({
  habitId: uuid,
  date: dateFormat,
})

export const toggleCheckSchema = z.object({
  userId: uuid,
  habitId: uuid,
  date: dateFormat,
  timingId: uuid.optional(),
  actualTime: timeFormat.optional(),
})

// query params

export const getHabitChecksQuerySchema = z.object({
  habitId: uuid,
  startDate: dateFormat,
  endDate: dateFormat,
})

export const getUserChecksQuerySchema = z.object({
  userId: uuid,
  date: dateFormat,
})

export const getHabitStatsQuerySchema = z.object({
  habitId: uuid,
  startDate: dateFormat,
  endDate: dateFormat,
})
// frequence update
export const updateFrequencySchema = z.object({
  habitId: uuid,
  frequency: frequencySchema,
})
// timings update
export const setTimingsSchema = z.object({
  habitId: uuid,
  timings: z.array(timingSchema).max(10),
})
// reminders update

export const setRemindersSchema = z.object({
  habitId: uuid,
  reminders: z.array(reminderSchema).max(5),
})
// periods update
export const setPeriodSchema = z.object({
  habitId: uuid,
  period: periodSchema,
})

// types

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
