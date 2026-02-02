// import { Hono } from "hono";
// import {
//   createHabitSchema,
//   frequencySchema,
//   periodSchema,
//   reminderSchema,
//   timingSchema,
//   toggleCheckSchema,
//   updateHabitSchema,
// } from "./validation";
// import {
//   archiveHabit,
//   createHabit,
//   deleteHabit,
//   getHabitById,
//   getHabitChecks,
//   getHabitStats,
//   getTodayHabits,
//   getUserHabitsWithRelations,
//   HabitError,
//   restoreHabit,
//   setHabitPeriod,
//   setHabitReminders,
//   setHabitTimings,
//   toggleHabitCheck,
//   updateHabit,
//   updateHabitFrequency,
// } from "./service";
// import { AppEnv } from "../../app-env";
// // import { err, errorToStatus, HTTP_STATUS, ok } from "../../types/api";

// import { err, errorToStatus, HTTP_STATUS, ok } from "@habit-tracker/shared";
// import { requireAuth } from "../auth/middleware";
// import { zValidator } from "@hono/zod-validator";
// import { habitErrorToStatus } from "./types";
// import z from "zod";

// export const habits = new Hono<AppEnv>()
//   .use("*", requireAuth)

//   // GET /habits - Liste des habitudes de l'utilisateur connecté
//   .get("/", async (c) => {
//     try {
//       const userId = c.get("userId")!;
//       const habits = await getUserHabitsWithRelations(userId);

//       return c.json(ok(habits, "Habit récupérés"), HTTP_STATUS.OK);
//     } catch (error) {
//       if (error instanceof HabitError) {
//         const statusCode = errorToStatus(error.code, habitErrorToStatus);
//         return c.json(err(error.code, error.details), statusCode);
//       }

//       console.error("Unexpected error in GET /habits:", error);
//       return c.json(err("server_error"), HTTP_STATUS.INTERNAL_SERVER_ERROR);
//     }
//   })

//   // POST /habits - Créer une habitude
//   .post("/", zValidator("json", createHabitSchema), async (c) => {
//     try {
//       const input = c.req.valid("json");
//       const habit = await createHabit(input);
//       return c.json(ok(habit, "Habit créée avec succès"), HTTP_STATUS.CREATED);
//     } catch (error) {
//       if (error instanceof HabitError) {
//         const statusCode = errorToStatus(error.code, habitErrorToStatus);
//         return c.json(err(error.code, error.details), statusCode);
//       }

//       console.error("Unexpected error in POST /habits:", error);
//       return c.json(err("server_error"), HTTP_STATUS.INTERNAL_SERVER_ERROR);
//     }
//   })

//   // GET /habits/today - Habitudes du jour
//   .get("/today", async (c) => {
//     try {
//       const userId = c.get("userId")!;
//       const habit = await getTodayHabits(userId);

//       return c.json(ok(habit, "Habit récupéré"), HTTP_STATUS.OK);
//     } catch (error) {
//       if (error instanceof HabitError) {
//         const statusCode = errorToStatus(error.code, habitErrorToStatus);
//         return c.json(err(error.code, error.details), statusCode);
//       }

//       console.error("Unexpected error in get /today", error);
//       return c.json(err("server_error"), HTTP_STATUS.INTERNAL_SERVER_ERROR);
//     }
//   })

//   // GET /habits/:id - Récupérer une habitude
//     .get("/:id", async (c) => {

//         const habitId = c.req.param("id");
//         try {

//             const result = await getHabitById(habitId);

//             return c.json(result);
//         } catch (e: unknown) {
//             if (e instanceof HabitError) {
//                 return c.json(err(e.code, e.details))
//             }
//             return c.json(err("server_error"), HTTP_STATUS.INTERNAL_SERVER_ERROR);
//         }

//   })

//   // PATCH /habits/:id - Modifier une habitude
//   .patch("/:id", zValidator("json", updateHabitSchema), async (c) => {
//     const habitId = c.req.param("id");
//     const input = c.req.valid("json");
//     const result = await updateHabit(habitId, input);

//     if (!result.success) {
//       return c.json(result, habitErrorToStatus[result.error]);
//     }
//     return c.json(result);
//   })

//   // DELETE /habits/:id - Supprimer une habitude
//   .delete("/:id", async (c) => {
//     const habitId = c.req.param("id");
//     const result = await deleteHabit(habitId);

//     if (!result.success) {
//       return c.json(result, habitErrorToStatus[result.error]);
//     }
//     return c.json(result);
//   })

//   // POST /habits/:id/check - Toggle check
//   .post(
//     "/:id/check",
//     zValidator(
//       "json",
//       toggleCheckSchema.omit({ habitId: true }), // habitId vient de l'URL
//     ),
//     async (c) => {
//       // const userId = c.get("userId")!;
//       const habitId = c.req.param("id");
//       const input = c.req.valid("json");
//       const result = await toggleHabitCheck({ habitId, ...input });

//       if (!result.success) {
//         return c.json(result, habitErrorToStatus[result.error]);
//       }
//       return c.json(result);
//     },
//   )

//   // GET /habits/:id/checks - Historique des checks
//   .get(
//     "/:id/checks",
//     zValidator(
//       "query",
//       z.object({
//         startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
//         endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
//       }),
//     ),
//     async (c) => {
//       const habitId = c.req.param("id");
//       const { startDate, endDate } = c.req.valid("query");
//       const result = await getHabitChecks(habitId, startDate, endDate);

//       if (!result.success) {
//         return c.json(result, habitErrorToStatus[result.error]);
//       }
//       return c.json(result);
//     },
//   )

//   // GET /habits/:id/stats - Statistiques
//   .get(
//     "/:id/stats",
//     zValidator(
//       "query",
//       z.object({
//         startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
//         endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
//       }),
//     ),
//     async (c) => {
//       const habitId = c.req.param("id");
//       const { startDate, endDate } = c.req.valid("query");
//       const result = await getHabitStats(habitId, startDate, endDate);

//       if (!result.success) {
//         return c.json(result, habitErrorToStatus[result.error]);
//       }
//       return c.json(result);
//     },
//   )

//   // PUT /habits/:id/period - Modifier période
//   .put("/:id/period", zValidator("json", periodSchema), async (c) => {
//     const habitId = c.req.param("id");
//     const period = c.req.valid("json");
//     const result = await setHabitPeriod(habitId, period);

//     if (!result.success) {
//       return c.json(result, habitErrorToStatus[result.error]);
//     }
//     return c.json(result);
//   })

//   // POST /habits/:id/archive - Archiver une habitude
//   .post("/:id/archive", async (c) => {
//     const habitId = c.req.param("id");
//     const result = await archiveHabit(habitId);

//     if (!result.success) {
//       return c.json(result, habitErrorToStatus[result.error]);
//     }
//     return c.json(result);
//   })

//   // POST /habits/:id/restore - Restaurer une habitude
//   .post("/:id/restore", async (c) => {
//     const habitId = c.req.param("id");
//     const result = await restoreHabit(habitId);

//     if (!result.success) {
//       return c.json(result, habitErrorToStatus[result.error]);
//     }
//     return c.json(result);
//   })

//   // PUT /habits/:id/frequency - Modifier fréquence
//   .put("/:id/frequency", zValidator("json", frequencySchema), async (c) => {
//     const habitId = c.req.param("id");
//     const frequency = c.req.valid("json");

//     try {
//       const result = await updateHabitFrequency(habitId, frequency);
//       return c.json(ok(result));
//     } catch (error) {
//       return c.json(err("frequency_update_failed", error), 500);
//     }
//   })

//   // PUT /habits/:id/timings - Remplacer timings
//   .put(
//     "/:id/timings",
//     zValidator("json", z.array(timingSchema).max(10)),
//     async (c) => {
//       const habitId = c.req.param("id");
//       const timings = c.req.valid("json");
//       const result = await setHabitTimings(habitId, timings);

//       if (!result.success) {
//         return c.json(result, habitErrorToStatus[result.error]);
//       }
//       return c.json(result);
//     },
//   )

//   // PUT /habits/:id/reminders - Remplacer reminders
//   .put(
//     "/:id/reminders",
//     zValidator("json", z.array(reminderSchema).max(5)),
//     async (c) => {
//       const habitId = c.req.param("id");
//       const reminders = c.req.valid("json");
//       const result = await setHabitReminders(habitId, reminders);

//       if (!result.success) {
//         return c.json(result, habitErrorToStatus[result.error]);
//       }
//       return c.json(result);
//     },
//   );
import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'

import {
  createHabitSchema,
  frequencySchema,
  periodSchema,
  reminderSchema,
  timingSchema,
  toggleCheckSchema,
  updateHabitSchema,
} from './validation'
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
import { habitErrorToStatus } from './types'
import { AppEnv } from '../../app-env'
import { err, errorToStatus, HTTP_STATUS, ok } from '@habit-tracker/shared'
import { requireAuth } from '../auth/middleware'

export const habits = new Hono<AppEnv>()
  .use('*', requireAuth)

  // GET /habits - Liste des habitudes de l'utilisateur connecté
  .get('/', async (c) => {
    try {
      const userId = c.get('userId')!
      const habits = await getUserHabitsWithRelations(userId)
      return c.json(ok(habits, 'Habitudes récupérées'), HTTP_STATUS.OK)
    } catch (error) {
      if (error instanceof HabitError) {
        const statusCode = errorToStatus(error.code, habitErrorToStatus)
        return c.json(err(error.code, error.details), statusCode)
      }
      console.error('Unexpected error in GET /habits:', error)
      return c.json(err('server_error'), HTTP_STATUS.INTERNAL_SERVER_ERROR)
    }
  })

  // POST /habits - Créer une habitude
  .post('/', zValidator('json', createHabitSchema), async (c) => {
    try {
      const input = c.req.valid('json')
      const habit = await createHabit(input)
      return c.json(ok(habit, 'Habitude créée avec succès'), HTTP_STATUS.CREATED)
    } catch (error) {
      if (error instanceof HabitError) {
        const statusCode = errorToStatus(error.code, habitErrorToStatus)
        return c.json(err(error.code, error.details), statusCode)
      }
      console.error('Unexpected error in POST /habits:', error)
      return c.json(err('server_error'), HTTP_STATUS.INTERNAL_SERVER_ERROR)
    }
  })

  // GET /habits/today - Habitudes du jour
  .get('/today', async (c) => {
    try {
      const userId = c.get('userId')!
      const todayHabits = await getTodayHabits(userId)
      return c.json(ok(todayHabits, 'Habitudes du jour récupérées'), HTTP_STATUS.OK)
    } catch (error) {
      if (error instanceof HabitError) {
        const statusCode = errorToStatus(error.code, habitErrorToStatus)
        return c.json(err(error.code, error.details), statusCode)
      }
      console.error('Unexpected error in GET /habits/today:', error)
      return c.json(err('server_error'), HTTP_STATUS.INTERNAL_SERVER_ERROR)
    }
  })

  // GET /habits/:id - Récupérer une habitude
  .get('/:id', async (c) => {
    try {
      const habitId = c.req.param('id')
      const habit = await getHabitById(habitId)
      return c.json(ok(habit, 'Habitude récupérée'), HTTP_STATUS.OK)
    } catch (error) {
      if (error instanceof HabitError) {
        const statusCode = errorToStatus(error.code, habitErrorToStatus)
        return c.json(err(error.code, error.details), statusCode)
      }
      console.error('Unexpected error in GET /habits/:id:', error)
      return c.json(err('server_error'), HTTP_STATUS.INTERNAL_SERVER_ERROR)
    }
  })

  // PATCH /habits/:id - Modifier une habitude
  .patch('/:id', zValidator('json', updateHabitSchema), async (c) => {
    try {
      const habitId = c.req.param('id')
      const input = c.req.valid('json')
      const habit = await updateHabit(habitId, input)
      return c.json(ok(habit, 'Habitude mise à jour'), HTTP_STATUS.OK)
    } catch (error) {
      if (error instanceof HabitError) {
        const statusCode = errorToStatus(error.code, habitErrorToStatus)
        return c.json(err(error.code, error.details), statusCode)
      }
      console.error('Unexpected error in PATCH /habits/:id:', error)
      return c.json(err('server_error'), HTTP_STATUS.INTERNAL_SERVER_ERROR)
    }
  })

  // DELETE /habits/:id - Supprimer une habitude
  .delete('/:id', async (c) => {
    try {
      const habitId = c.req.param('id')
      await deleteHabit(habitId)
      return c.json(ok(null, 'Habitude supprimée'), HTTP_STATUS.OK)
    } catch (error) {
      if (error instanceof HabitError) {
        const statusCode = errorToStatus(error.code, habitErrorToStatus)
        return c.json(err(error.code, error.details), statusCode)
      }
      console.error('Unexpected error in DELETE /habits/:id:', error)
      return c.json(err('server_error'), HTTP_STATUS.INTERNAL_SERVER_ERROR)
    }
  })

  // POST /habits/:id/check - Toggle check
  .post('/:id/check', zValidator('json', toggleCheckSchema.omit({ habitId: true })), async (c) => {
    try {
      const habitId = c.req.param('id')
      const input = c.req.valid('json')
      const result = await toggleHabitCheck({ habitId, ...input })
      return c.json(ok(result, result.checked ? 'Check ajouté' : 'Check retiré'), HTTP_STATUS.OK)
    } catch (error) {
      if (error instanceof HabitError) {
        const statusCode = errorToStatus(error.code, habitErrorToStatus)
        return c.json(err(error.code, error.details), statusCode)
      }
      console.error('Unexpected error in POST /habits/:id/check:', error)
      return c.json(err('server_error'), HTTP_STATUS.INTERNAL_SERVER_ERROR)
    }
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
      try {
        const habitId = c.req.param('id')
        const { startDate, endDate } = c.req.valid('query')
        const checks = await getHabitChecks(habitId, startDate, endDate)
        return c.json(ok(checks, 'Checks récupérés'), HTTP_STATUS.OK)
      } catch (error) {
        if (error instanceof HabitError) {
          const statusCode = errorToStatus(error.code, habitErrorToStatus)
          return c.json(err(error.code, error.details), statusCode)
        }
        console.error('Unexpected error in GET /habits/:id/checks:', error)
        return c.json(err('server_error'), HTTP_STATUS.INTERNAL_SERVER_ERROR)
      }
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
      try {
        const habitId = c.req.param('id')
        const { startDate, endDate } = c.req.valid('query')
        const stats = await getHabitStats(habitId, startDate, endDate)
        return c.json(ok(stats, 'Statistiques récupérées'), HTTP_STATUS.OK)
      } catch (error) {
        if (error instanceof HabitError) {
          const statusCode = errorToStatus(error.code, habitErrorToStatus)
          return c.json(err(error.code, error.details), statusCode)
        }
        console.error('Unexpected error in GET /habits/:id/stats:', error)
        return c.json(err('server_error'), HTTP_STATUS.INTERNAL_SERVER_ERROR)
      }
    }
  )

  // PUT /habits/:id/period - Modifier période
  .put('/:id/period', zValidator('json', periodSchema), async (c) => {
    try {
      const habitId = c.req.param('id')
      const period = c.req.valid('json')
      const result = await setHabitPeriod(habitId, period)
      return c.json(ok(result, 'Période mise à jour'), HTTP_STATUS.OK)
    } catch (error) {
      if (error instanceof HabitError) {
        const statusCode = errorToStatus(error.code, habitErrorToStatus)
        return c.json(err(error.code, error.details), statusCode)
      }
      console.error('Unexpected error in PUT /habits/:id/period:', error)
      return c.json(err('server_error'), HTTP_STATUS.INTERNAL_SERVER_ERROR)
    }
  })

  // POST /habits/:id/archive - Archiver une habitude
  .post('/:id/archive', async (c) => {
    try {
      const habitId = c.req.param('id')
      const habit = await archiveHabit(habitId)
      return c.json(ok(habit, 'Habitude archivée'), HTTP_STATUS.OK)
    } catch (error) {
      if (error instanceof HabitError) {
        const statusCode = errorToStatus(error.code, habitErrorToStatus)
        return c.json(err(error.code, error.details), statusCode)
      }
      console.error('Unexpected error in POST /habits/:id/archive:', error)
      return c.json(err('server_error'), HTTP_STATUS.INTERNAL_SERVER_ERROR)
    }
  })

  // POST /habits/:id/restore - Restaurer une habitude
  .post('/:id/restore', async (c) => {
    try {
      const habitId = c.req.param('id')
      const habit = await restoreHabit(habitId)
      return c.json(ok(habit, 'Habitude restaurée'), HTTP_STATUS.OK)
    } catch (error) {
      if (error instanceof HabitError) {
        const statusCode = errorToStatus(error.code, habitErrorToStatus)
        return c.json(err(error.code, error.details), statusCode)
      }
      console.error('Unexpected error in POST /habits/:id/restore:', error)
      return c.json(err('server_error'), HTTP_STATUS.INTERNAL_SERVER_ERROR)
    }
  })

  // PUT /habits/:id/frequency - Modifier fréquence
  .put('/:id/frequency', zValidator('json', frequencySchema), async (c) => {
    try {
      const habitId = c.req.param('id')
      const frequency = c.req.valid('json')

      // Transformer le format Zod vers le format attendu par le service
      const frequencyInput = {
        type: frequency.type,
        intervalDays: frequency.type === 'interval' ? frequency.intervalDays : undefined,
        daysOfWeek: frequency.type === 'weekly' ? frequency.daysOfWeek : undefined,
        daysOfMonth: frequency.type === 'monthly' ? frequency.daysOfMonth : undefined,
      }

      const result = await updateHabitFrequency(habitId, frequencyInput)
      return c.json(ok(result, 'Fréquence mise à jour'), HTTP_STATUS.OK)
    } catch (error) {
      if (error instanceof HabitError) {
        const statusCode = errorToStatus(error.code, habitErrorToStatus)
        return c.json(err(error.code, error.details), statusCode)
      }
      console.error('Unexpected error in PUT /habits/:id/frequency:', error)
      return c.json(err('server_error'), HTTP_STATUS.INTERNAL_SERVER_ERROR)
    }
  })

  // PUT /habits/:id/timings - Remplacer timings
  .put('/:id/timings', zValidator('json', z.array(timingSchema).max(10)), async (c) => {
    try {
      const habitId = c.req.param('id')
      const timings = c.req.valid('json')
      const result = await setHabitTimings(habitId, timings)
      return c.json(ok(result, 'Timings mis à jour'), HTTP_STATUS.OK)
    } catch (error) {
      if (error instanceof HabitError) {
        const statusCode = errorToStatus(error.code, habitErrorToStatus)
        return c.json(err(error.code, error.details), statusCode)
      }
      console.error('Unexpected error in PUT /habits/:id/timings:', error)
      return c.json(err('server_error'), HTTP_STATUS.INTERNAL_SERVER_ERROR)
    }
  })

  // PUT /habits/:id/reminders - Remplacer reminders
  .put('/:id/reminders', zValidator('json', z.array(reminderSchema).max(5)), async (c) => {
    try {
      const habitId = c.req.param('id')
      const reminders = c.req.valid('json')
      const result = await setHabitReminders(habitId, reminders)
      return c.json(ok(result, 'Reminders mis à jour'), HTTP_STATUS.OK)
    } catch (error) {
      if (error instanceof HabitError) {
        const statusCode = errorToStatus(error.code, habitErrorToStatus)
        return c.json(err(error.code, error.details), statusCode)
      }
      console.error('Unexpected error in PUT /habits/:id/reminders:', error)
      return c.json(err('server_error'), HTTP_STATUS.INTERNAL_SERVER_ERROR)
    }
  })
