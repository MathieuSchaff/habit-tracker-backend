// features/users/routes.ts
import { Hono } from "hono";
import { requireAuth } from "../auth/middleware";
import { getProfile, updateProfile } from "./service";
import { profileUpdateSchema } from "./validation";
import { AppEnv } from "../../app-env";
import { MeResponse } from "./types";
import { err, ok } from "../../types/api";
import { zValidator } from "@hono/zod-validator";

export const profileRoute = new Hono<AppEnv>();

// Toutes les routes users nécessitent l'auth
profileRoute.use("*", requireAuth);

// ROUTE ME
profileRoute.get("/me", async (c) => {
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

// PATCH /me - Mettre à jour le profil
profileRoute.patch(
  "/me",
  zValidator("json", profileUpdateSchema),
  async (c) => {
    const db = c.get("db");
    const userId = c.get("userId")!;

    try {
      const data = await c.req.json();
      const updated = await updateProfile(db, userId, data);

      if (!updated) {
        return c.json(err("not_found"), 404);
      }

      return c.json(ok(updated), 200);
    } catch (e) {
      console.error("Error in PATCH /me:", e);
      return c.json(err("server_error"), 500);
    }
  }
);
