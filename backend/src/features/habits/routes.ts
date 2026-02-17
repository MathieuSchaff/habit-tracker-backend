import {
  createHabitSchema,
  err,
  errorToStatus,
  frequencySchema,
  HTTP_STATUS,
  habitErrorToStatus,
  ok,
  periodSchema,
  reminderSchema,
  timingSchema,
  toggleCheckSchema,
  updateHabitSchema,
} from '@habit-tracker/shared'

import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import { z } from 'zod'

import type { AppEnv } from '../../app-env'
import { requireJwtAuth } from '../auth/middleware'
import {
  archiveHabit,
  createHabit,
  deleteHabit,
  getHabitById,
  getHabitChecks,
  getHabitStats,
  getTodayHabits,
  getUserHabitsWithRelations,
  HabitError,
  restoreHabit,
  setHabitPeriod,
  setHabitReminders,
  setHabitTimings,
  toggleHabitCheck,
  updateHabit,
  updateHabitFrequency,
} from './service'

export const habits = new Hono<AppEnv>()
  .use('*', requireJwtAuth)
  .onError((error, c) => {
    if (error instanceof HabitError) {
      const statusCode = errorToStatus(error.code, habitErrorToStatus)
      return c.json(err(error.code, error.details), statusCode)
    }
    console.error('Unexpected error:', error)
    return c.json(err('server_error'), HTTP_STATUS.INTERNAL_SERVER_ERROR)
  })

  // GET /habits - Liste des habitudes de l'utilisateur connecté
  .get('/', async (c) => {
    const userId = c.get('userId')
    const habits = await getUserHabitsWithRelations(userId)
    return c.json(ok(habits, 'Habitudes récupérées'), HTTP_STATUS.OK)
  })

  // POST /habits - Créer une habitude
  .post('/', zValidator('json', createHabitSchema), async (c) => {
    const input = c.req.valid('json')
    const habit = await createHabit(input)
    return c.json(ok(habit, 'Habitude créée avec succès'), HTTP_STATUS.CREATED)
  })

  // GET /habits/today - Habitudes du jour
  .get('/today', async (c) => {
    const userId = c.get('userId')
    const todayHabits = await getTodayHabits(userId)
    return c.json(ok(todayHabits, 'Habitudes du jour récupérées'), HTTP_STATUS.OK)
  })

  // GET /habits/:id - Récupérer une habitude
  .get('/:id', async (c) => {
    const habitId = c.req.param('id')
    const habit = await getHabitById(habitId)
    return c.json(ok(habit, 'Habitude récupérée'), HTTP_STATUS.OK)
  })

  // PATCH /habits/:id - Modifier une habitude
  .patch('/:id', zValidator('json', updateHabitSchema), async (c) => {
    const habitId = c.req.param('id')
    const input = c.req.valid('json')
    const habit = await updateHabit(habitId, input)
    return c.json(ok(habit, 'Habitude mise à jour'), HTTP_STATUS.OK)
  })

  // DELETE /habits/:id - Supprimer une habitude
  .delete('/:id', async (c) => {
    const habitId = c.req.param('id')
    await deleteHabit(habitId)
    return c.json(ok(null, 'Habitude supprimée'), HTTP_STATUS.OK)
  })

  // POST /habits/:id/check - Toggle check
  .post('/:id/check', zValidator('json', toggleCheckSchema.omit({ habitId: true })), async (c) => {
    const habitId = c.req.param('id')
    const input = c.req.valid('json')
    const result = await toggleHabitCheck({ habitId, ...input })
    return c.json(ok(result, result.checked ? 'Check ajouté' : 'Check retiré'), HTTP_STATUS.OK)
  })

  // GET /habits/:id/checks - Historique des checks
  .get(
    '/:id/checks',
    zValidator(
      'query',
      z.object({
        startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
        endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
      })
    ),
    async (c) => {
      const habitId = c.req.param('id')
      const { startDate, endDate } = c.req.valid('query')
      const checks = await getHabitChecks(habitId, startDate, endDate)
      return c.json(ok(checks, 'Checks récupérés'), HTTP_STATUS.OK)
    }
  )

  // GET /habits/:id/stats - Statistiques
  .get(
    '/:id/stats',
    zValidator(
      'query',
      z.object({
        startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
        endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
      })
    ),
    async (c) => {
      const habitId = c.req.param('id')
      const { startDate, endDate } = c.req.valid('query')
      const stats = await getHabitStats(habitId, startDate, endDate)
      return c.json(ok(stats, 'Statistiques récupérées'), HTTP_STATUS.OK)
    }
  )

  // PUT /habits/:id/period - Modifier période
  .put('/:id/period', zValidator('json', periodSchema), async (c) => {
    const habitId = c.req.param('id')
    const period = c.req.valid('json')
    const result = await setHabitPeriod(habitId, period)
    return c.json(ok(result, 'Période mise à jour'), HTTP_STATUS.OK)
  })

  // POST /habits/:id/archive - Archiver une habitude
  .post('/:id/archive', async (c) => {
    const habitId = c.req.param('id')
    const habit = await archiveHabit(habitId)
    return c.json(ok(habit, 'Habitude archivée'), HTTP_STATUS.OK)
  })

  // POST /habits/:id/restore - Restaurer une habitude
  .post('/:id/restore', async (c) => {
    const habitId = c.req.param('id')
    const habit = await restoreHabit(habitId)
    return c.json(ok(habit, 'Habitude restaurée'), HTTP_STATUS.OK)
  })

  // PUT /habits/:id/frequency - Modifier fréquence
  .put('/:id/frequency', zValidator('json', frequencySchema), async (c) => {
    const habitId = c.req.param('id')
    const frequency = c.req.valid('json')

    const frequencyInput = {
      type: frequency.type,
      intervalDays: frequency.type === 'interval' ? frequency.intervalDays : undefined,
      daysOfWeek: frequency.type === 'weekly' ? frequency.daysOfWeek : undefined,
      daysOfMonth: frequency.type === 'monthly' ? frequency.daysOfMonth : undefined,
    }

    const result = await updateHabitFrequency(habitId, frequencyInput)
    return c.json(ok(result, 'Fréquence mise à jour'), HTTP_STATUS.OK)
  })

  // PUT /habits/:id/timings - Remplacer timings
  .put('/:id/timings', zValidator('json', z.array(timingSchema).max(10)), async (c) => {
    const habitId = c.req.param('id')
    const timings = c.req.valid('json')
    const result = await setHabitTimings(habitId, timings)
    return c.json(ok(result, 'Timings mis à jour'), HTTP_STATUS.OK)
  })

  // PUT /habits/:id/reminders - Remplacer reminders
  .put('/:id/reminders', zValidator('json', z.array(reminderSchema).max(5)), async (c) => {
    const habitId = c.req.param('id')
    const reminders = c.req.valid('json')
    const result = await setHabitReminders(habitId, reminders)
    return c.json(ok(result, 'Reminders mis à jour'), HTTP_STATUS.OK)
  })
