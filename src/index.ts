const port = Number(process.env.PORT ?? 3000);

import { Hono } from "hono";
import { healthRoute } from "./routes/health/health.routes";
import { habitsRoute } from "./routes/habits/habits.routes";
import { db } from "./db/index";
import { authRoutes } from "./routes/auth/auth.routes";
import type { AppEnv } from "./app-env";
const app = new Hono<AppEnv>();
app.use("*", async (c, next) => {
  c.set("db", db);
  c.set(
    "env",
    process.env.NODE_ENV === "production" ? "production" : "development"
  );
  await next();
});

app.route("/auth", authRoutes);
app.route("/", healthRoute);
app.route("/habits", habitsRoute);

export default {
  port: port,
  fetch: app.fetch,
};

console.log(`API listening on ${port}`);
