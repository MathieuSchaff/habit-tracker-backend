import { Hono } from "hono";

export const habitsRoute = new Hono();

habitsRoute.get("/", (c) => {
  return c.json([{ id: "1", name: "Drink water", completed: false }]);
});

habitsRoute.post("/", async (c) => {
  const body = await c.req.json();
  return c.json({ message: "Habit created", habit: body }, 201);
});
