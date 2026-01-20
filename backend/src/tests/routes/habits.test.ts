import { beforeEach, describe, expect, it } from "bun:test";
import { Hono } from "hono";
import { AppEnv } from "../../app-env";
import { testDb } from "../db.test.config";
import { habits } from "../../features/habits/routes";
import { authRoutes } from "../../features/auth";
function createTestApp() {
  const app = new Hono<AppEnv>();

  app.use("*", async (c, next) => {
    c.set("db", testDb);
    c.set("env", "development");
    await next();
  });
  app.route("/auth", authRoutes);

  app.route("/habits", habits);

  return app;
}

describe("Habits routes", () => {
  let app: Hono<AppEnv>;
  let cookie: string;

  beforeEach(async () => {
    app = createTestApp();

    const res = await app.request("/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "test@test.com",
        password: "TestPass123!",
      }),
    });

    cookie = res.headers.get("set-cookie")!;
  });

  it("should create a habit", async () => {
    const res = await app.request("/habits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookie,
      },
      body: JSON.stringify({
        name: "Drink water",
      }),
    });

    expect(res.status).toBe(201);
  });
});
