import { Hono } from "hono";
import {
  createHabitSchema,
  frequencySchema,
  periodSchema,
  reminderSchema,
  timingSchema,
  toggleCheckSchema,
  updateHabitSchema,
} from "./validation";
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
} from "./service";
import { AppEnv } from "../../app-env";
import { err, errorToStatus, HTTP_STATUS, ok } from "../../types/api";
import { requireAuth } from "../auth/middleware";
import { zValidator } from "@hono/zod-validator";
import { habitErrorToStatus } from "./types";
import z from "zod";

export const habits = new Hono<AppEnv>();
habits.use("*", requireAuth);
// GET /habits - Liste des habitudes de l'utilisateur connecté
habits.get("/", async (c) => {
  try {
    const userId = c.get("userId")!;
    const habits = await getUserHabitsWithRelations(userId);

    return c.json(ok(habits, "Habit récupérés  "), HTTP_STATUS.OK);
  } catch (error) {
    if (error instanceof HabitError) {
      const statusCode = errorToStatus(error.code, habitErrorToStatus);
      return c.json(err(error.code, error.details), statusCode);
    }

    console.error("Unexpected error in POST /habits:", error);
    return c.json(err("server_error"), HTTP_STATUS.INTERNAL_SERVER_ERROR);
  }
});

// POST /habits - Créer une habitude
habits.post("/", zValidator("json", createHabitSchema), async (c) => {
  try {
    const input = c.req.valid("json");
    const habit = await createHabit(input);
    return c.json(ok(habit, "Habit créée avec succès"), HTTP_STATUS.CREATED);
  } catch (error) {
    if (error instanceof HabitError) {
      const statusCode = errorToStatus(error.code, habitErrorToStatus);
      return c.json(err(error.code, error.details), statusCode);
    }

    console.error("Unexpected error in POST /habits:", error);
    return c.json(err("server_error"), HTTP_STATUS.INTERNAL_SERVER_ERROR);
  }
});
// GET /habits/today - Habitudes du jour
habits.get("/today", async (c) => {
  try {
    const userId = c.get("userId")!;
    const habit = await getTodayHabits(userId);

    return c.json(ok(habit, "Habit récupéré"), HTTP_STATUS.OK);
  } catch (error) {
    if (error instanceof HabitError) {
      const statusCode = errorToStatus(error.code, habitErrorToStatus);
      return c.json(err(error.code, error.details), statusCode);
    }

    console.error("Unexpected error in get /today", error);
    return c.json(err("server_error"), HTTP_STATUS.INTERNAL_SERVER_ERROR);
  }
});

// GET /habits/:id - Récupérer une habitude
habits.get("/:id", async (c) => {
  const habitId = c.req.param("id");
  const result = await getHabitById(habitId);

  if (!result.success) {
    return c.json(result, habitErrorToStatus[result.error]);
  }
  return c.json(result);
});

// PATCH /habits/:id - Modifier une habitude
habits.patch("/:id", zValidator("json", updateHabitSchema), async (c) => {
  const habitId = c.req.param("id");
  const input = c.req.valid("json");
  const result = await updateHabit(habitId, input);

  if (!result.success) {
    return c.json(result, habitErrorToStatus[result.error]);
  }
  return c.json(result);
});

// DELETE /habits/:id - Supprimer une habitude
habits.delete("/:id", async (c) => {
  const habitId = c.req.param("id");
  const result = await deleteHabit(habitId);

  if (!result.success) {
    return c.json(result, habitErrorToStatus[result.error]);
  }
  return c.json(result);
});

// POST /habits/:id/check - Toggle check
habits.post(
  "/:id/check",
  zValidator(
    "json",
    toggleCheckSchema.omit({ habitId: true }), // habitId vient de l'URL
  ),
  async (c) => {
    // const userId = c.get("userId")!;
    const habitId = c.req.param("id");
    const input = c.req.valid("json");
    const result = await toggleHabitCheck({ habitId, ...input });

    if (!result.success) {
      return c.json(result, habitErrorToStatus[result.error]);
    }
    return c.json(result);
  },
);

// GET /habits/:id/checks - Historique des checks
habits.get(
  "/:id/checks",
  zValidator(
    "query",
    z.object({
      startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
      endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    }),
  ),
  async (c) => {
    const habitId = c.req.param("id");
    const { startDate, endDate } = c.req.valid("query");
    const result = await getHabitChecks(habitId, startDate, endDate);

    if (!result.success) {
      return c.json(result, habitErrorToStatus[result.error]);
    }
    return c.json(result);
  },
);
// GET /habits/:id/stats - Statistiques
habits.get(
  "/:id/stats",
  zValidator(
    "query",
    z.object({
      startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
      endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    }),
  ),
  async (c) => {
    const habitId = c.req.param("id");
    const { startDate, endDate } = c.req.valid("query");
    const result = await getHabitStats(habitId, startDate, endDate);

    if (!result.success) {
      return c.json(result, habitErrorToStatus[result.error]);
    }
    return c.json(result);
  },
);

// PUT /habits/:id/period - Modifier période
habits.put("/:id/period", zValidator("json", periodSchema), async (c) => {
  const habitId = c.req.param("id");
  const period = c.req.valid("json");
  const result = await setHabitPeriod(habitId, period);

  if (!result.success) {
    return c.json(result, habitErrorToStatus[result.error]);
  }
  return c.json(result);
});

// POST /habits/:id/archive - Archiver une habitude
habits.post("/:id/archive", async (c) => {
  const habitId = c.req.param("id");
  const result = await archiveHabit(habitId);

  if (!result.success) {
    return c.json(result, habitErrorToStatus[result.error]);
  }
  return c.json(result);
});

// POST /habits/:id/restore - Restaurer une habitude
habits.post("/:id/restore", async (c) => {
  const habitId = c.req.param("id");
  const result = await restoreHabit(habitId);

  if (!result.success) {
    return c.json(result, habitErrorToStatus[result.error]);
  }
  return c.json(result);
});

// PUT /habits/:id/frequency - Modifier fréquence
habits.put("/:id/frequency", zValidator("json", frequencySchema), async (c) => {
  const habitId = c.req.param("id");
  const frequency = c.req.valid("json");

  try {
    const result = await updateHabitFrequency(habitId, frequency);
    return c.json(ok(result));
  } catch (error) {
    return c.json(err("frequency_update_failed", error), 500);
  }
});

// PUT /habits/:id/timings - Remplacer timings
habits.put(
  "/:id/timings",
  zValidator("json", z.array(timingSchema).max(10)),
  async (c) => {
    const habitId = c.req.param("id");
    const timings = c.req.valid("json");
    const result = await setHabitTimings(habitId, timings);

    if (!result.success) {
      return c.json(result, habitErrorToStatus[result.error]);
    }
    return c.json(result);
  },
);

// PUT /habits/:id/reminders - Remplacer reminders
habits.put(
  "/:id/reminders",
  zValidator("json", z.array(reminderSchema).max(5)),
  async (c) => {
    const habitId = c.req.param("id");
    const reminders = c.req.valid("json");
    const result = await setHabitReminders(habitId, reminders);

    if (!result.success) {
      return c.json(result, habitErrorToStatus[result.error]);
    }
    return c.json(result);
  },
);
