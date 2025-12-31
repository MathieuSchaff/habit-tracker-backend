import { Hono } from "hono";
// https://hono.dev/docs/guides/validation
import { zValidator } from "@hono/zod-validator";
import { createHabitSchema } from "../../utils/habits/validation";
import { db } from "../../db";
import { createHabit } from "../../utils/habits/habitsCrudFuncs";

export const habitsRoute = new Hono();

habitsRoute.get("/", (c) => {
  return c.json([{ id: "1", name: "Drink water", completed: false }]);
});

habitsRoute.post("/", async (c) => {
  const body = await c.req.json();
  return c.json({ message: "Habit created", habit: body }, 201);
});

habitsRoute.post(
  "/create",
  zValidator("json", createHabitSchema),
  async (c) => {
    // a modifier après
    const userId = "550e8400-e29b-41d4-a716-446655440000"; // UUID temporaire

    const body = c.req.valid("json");
    console.log(c);
    console.log(body);
    const habit = await createHabit(
      {
        userId,
        name: body.name,
        category: body.category,
        // Optionnels
        frequency: body.frequency,
        timings: body.timings,
        reminders: body.reminders,
        period: body.period,
      },
      db
    );
    return c.json({ message: "Habits created", data: habit }, 201);
  }
);
