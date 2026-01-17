// features/auth/auth.routes.test.ts
import { describe, it, expect, beforeEach } from "bun:test";
import { Hono } from "hono";
import type { AppEnv } from "../../app-env";
import { testDb } from "../db.test.config";
import { authRoutes } from "../../features/auth/routes";
import { createTestUser } from "../helpers/test-factories";
import { hash } from "argon2";
import { profileRoute } from "../../features/profile";
import { HTTP_STATUS } from "../../types/api";

function createTestApp() {
  const app = new Hono<AppEnv>();

  app.use("*", async (c, next) => {
    c.set("db", testDb);
    c.set("env", "development");
    await next();
  });

  app.route("/auth", authRoutes);
  app.route("/profile", profileRoute);

  return app;
}

describe("Auth Routes", () => {
  let app: Hono<AppEnv>;

  beforeEach(() => {
    app = createTestApp();
  });

  describe("GET /auth/ping", () => {
    it("should return ok", async () => {
      const res = await app.request("/auth/ping");

      expect(res.status).toBe(200);
      const data = await res.json();
      expect(data.success).toBe(true);
      expect(data.data.ok).toBe(true);
    });
  });

  describe("POST /auth/signup", () => {
    it("should create a new user and set session cookie", async () => {
      const res = await app.request("/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "newuser@test.com",
          password: "TestPass123!",
        }),
      });

      expect(res.status).toBe(200);

      const data = await res.json();
      expect(data.success).toBe(true);
      expect(data.data.user).toBeDefined();
      expect(data.data.user.email).toBe("newuser@test.com");

      // Vérifie le cookie de session
      const setCookieHeader = res.headers.get("Set-Cookie");
      expect(setCookieHeader).toContain("sid=");
    });

    it("should reject invalid email", async () => {
      const res = await app.request("/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "invalid-email",
          password: "TestPass123!",
        }),
      });

      expect(res.status).toBe(400);
      const data = await res.json();
      expect(data.success).toBe(false);
      expect(data.error).toBe("invalid_input");
    });

    it("should reject weak password", async () => {
      const res = await app.request("/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "test@test.com",
          password: "weak",
        }),
      });

      expect(res.status).toBe(400);
      const data = await res.json();
      expect(data.success).toBe(false);
      expect(data.error).toBe("invalid_input");
    });

    it("should reject duplicate email", async () => {
      await createTestUser({ email: "existing@test.com" });

      const res = await app.request("/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "existing@test.com",
          password: "TestPass123!",
        }),
      });
      expect(res.status).toBe(409); // Conflict
      const data = await res.json();

      console.log(data.details);
      expect(data.success).toBe(false);
    });
  });

  describe("POST /auth/login", () => {
    it("should login existing user and set cookie", async () => {
      // Prépare un user avec un mot de passe connu
      const passwordHash = await hash("TestPass123!");
      await createTestUser({
        email: "login@test.com",
        password: passwordHash,
      });

      const res = await app.request("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "login@test.com",
          password: "TestPass123!",
        }),
      });

      expect(res.status).toBe(200);

      const data = await res.json();
      expect(data.success).toBe(true);
      expect(data.data.user).toBeDefined();
      expect(data.data.user.email).toBe("login@test.com");

      const setCookieHeader = res.headers.get("Set-Cookie");
      expect(setCookieHeader).toContain("sid=");
    });

    it("should reject wrong password", async () => {
      const passwordHash = await hash("TestPass123!");
      await createTestUser({
        email: "login@test.com",
        password: passwordHash,
      });

      const res = await app.request("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "login@test.com",
          password: "WrongPass123!",
        }),
      });

      expect(res.status).toBe(401);
      const data = await res.json();
      expect(data.success).toBe(false);
    });

    it("should reject non-existent user", async () => {
      const res = await app.request("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "notfound@test.com",
          password: "TestPass123!",
        }),
      });

      expect(res.status).toBe(401);
      const data = await res.json();
      expect(data.success).toBe(false);
    });
  });

  describe("POST /auth/logout", () => {
    it("should logout user and clear cookie", async () => {
      // D'abord login pour avoir une session
      const passwordHash = await hash("TestPass123!");
      await createTestUser({
        email: "logout@test.com",
        password: passwordHash,
      });

      const loginRes = await app.request("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "logout@test.com",
          password: "TestPass123!",
        }),
      });

      const cookies = loginRes.headers.get("Set-Cookie");

      // Maintenant logout
      const logoutRes = await app.request("/auth/logout", {
        method: "POST",
        headers: {
          Cookie: cookies || "",
        },
      });

      expect(logoutRes.status).toBe(200);
      const data = await logoutRes.json();
      expect(data.success).toBe(true);

      // Vérifie que le cookie est supprimé
      const setCookieHeader = logoutRes.headers.get("Set-Cookie");
      expect(setCookieHeader).toContain("sid=;");
    });

    it("should succeed even without session cookie", async () => {
      const res = await app.request("/auth/logout", {
        method: "POST",
      });

      expect(res.status).toBe(HTTP_STATUS.OK);
      const data = await res.json();
      expect(data.success).toBe(true);
    });
  });

  describe("GET /profile", () => {
    it("should return user profile when authenticated", async () => {
      const res = await app.request("/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "newuser@test.com",
          password: "TestPass123!",
        }),
      });

      const cookies = res.headers.get("Set-Cookie");

      // Request /me
      const meRes = await app.request("/profile", {
        headers: {
          Cookie: cookies || "",
        },
      });

      expect(meRes.status).toBe(HTTP_STATUS.OK);
      const data = await meRes.json();
      expect(data.success).toBe(true);
      expect(data.data.userId).toBeDefined();
    });

    it("should reject unauthenticated request", async () => {
      const res = await app.request("/profile");

      console.log(res);
      expect(res.status).toBe(HTTP_STATUS.UNAUTHORIZED);
      const data = await res.json();
      console.log(data);
      expect(data.success).toBe(false);
    });
  });
});
