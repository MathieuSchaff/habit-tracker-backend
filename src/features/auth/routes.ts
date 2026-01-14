import { Hono } from "hono";
import type { AppEnv } from "../../app-env";
import { deleteCookie, getCookie, setCookie } from "hono/cookie";
import { cookieOptions, hashSid } from "./utils";
import { rateLimiter } from "hono-rate-limiter";
import z, { treeifyError } from "zod";
import { revokeSession } from "./session.service";
import { getProfile } from "./user.utils";
import { loginUser, signupUser } from "./service";
import { requireAuth } from "./middleware";

// Import des types et helpers
import {
  ok,
  err,
  errorToStatus,
  isApiSuccess,
  type ApiError,
  HTTP_STATUS,
} from "../../types/api";
import {
  type LoginResponse,
  type SignupResponse,
  type LogoutResponse,
  type MeResponse,
  type PingResponse,
  type ValidationErrorCode,
  authErrorMapping,
} from "./auth.types";
export const authRoutes = new Hono<AppEnv>();

// Schema de validation
const authSchema = z.object({
  email: z.string().email().trim().toLowerCase(),
  password: z
    .string()
    .min(8, "Minimum 8 caractères")
    .max(128, "Maximum 128 caractères")
    .regex(/[a-z]/, "Au moins une minuscule")
    .regex(/[A-Z]/, "Au moins une majuscule")
    .regex(/[0-9]/, "Au moins un chiffre"),
});

// ROUTE PING
authRoutes.get("/ping", (c) => {
  return c.json<PingResponse>(ok({ ok: true }));
});

// ROUTE LOGIN
authRoutes.post(
  "/login",
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    standardHeaders: "draft-7",
    keyGenerator: (c) => c.req.header("x-forwarded-for") ?? "unknown",
  }),
  async (c) => {
    const env = c.get("env");
    const db = c.get("db");

    // Validation
    const parseResult = authSchema.safeParse(await c.req.json());
    if (!parseResult.success) {
      // return c.json<ApiError<ValidationErrorCode>>(
      //   err("invalid_input", parseResult.error.flatten()),
      //   400
      // );
      return c.json<ApiError<ValidationErrorCode>>(
        err("invalid_input", treeifyError(parseResult.error)),
        HTTP_STATUS.BAD_REQUEST
      );
    }

    const { email, password } = parseResult.data;

    // Appel service
    const result = await loginUser(db, email, password);

    // Erreur
    if (!isApiSuccess(result)) {
      return c.json<LoginResponse>(
        result,
        errorToStatus(result.error, authErrorMapping)
      );
    }

    // Succès : set cookie et retourne user
    setCookie(c, "sid", result.data.sid, cookieOptions(env));

    return c.json<LoginResponse>(ok({ user: result.data.user }), 200);
  }
);

// ROUTE SIGNUP
authRoutes.post(
  "/signup",
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    standardHeaders: "draft-7",
    keyGenerator: (c) => c.req.header("x-forwarded-for") ?? "unknown",
  }),
  async (c) => {
    const db = c.get("db");
    const env = c.get("env");

    // Validation
    const parseResult = authSchema.safeParse(await c.req.json());
    if (!parseResult.success) {
      return c.json<ApiError<ValidationErrorCode>>(
        err("invalid_input", z.treeifyError(parseResult.error)),
        400
      );
    }

    const { email, password } = parseResult.data;

    // Appel service
    const result = await signupUser(db, email, password);

    // Erreur
    if (!isApiSuccess(result)) {
      return c.json<SignupResponse>(
        result,
        errorToStatus(result.error, authErrorMapping)
      );
    }

    // Succès : set cookie et retourne user
    setCookie(c, "sid", result.data.sid, cookieOptions(env));

    return c.json<SignupResponse>(ok({ user: result.data.user }), 200);
  }
);

// ROUTE LOGOUT
authRoutes.post("/logout", async (c) => {
  const db = c.get("db");
  const sid = getCookie(c, "sid");

  // Pas de session = déjà déconnecté, on retourne succès quand même
  if (!sid) {
    return c.json<LogoutResponse>(ok(null, "Already disconnected"), 200);
  }

  const sidHash = hashSid(sid);

  try {
    await revokeSession(db, sidHash);
  } catch (e) {
    // On log mais on retourne succès (côté client = déconnecté)
    console.error("Logout - session not found:", e);
  }

  deleteCookie(c, "sid");
  return c.json<LogoutResponse>(ok(null, "Disconnected"), 200);
});

// ROUTE ME
authRoutes.get("/me", requireAuth, async (c) => {
  const db = c.get("db");
  const userId = c.get("userId")!;

  try {
    const profile = await getProfile(db, userId);

    if (!profile) {
      return c.json<MeResponse>(err("not_found"), 404);
    }

    return c.json<MeResponse>(ok(profile), 200);
  } catch (e) {
    console.error("Error in /me:", e);
    return c.json<MeResponse>(err("server_error"), 500);
  }
});
