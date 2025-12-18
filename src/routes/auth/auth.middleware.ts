import { getCookie } from "hono/cookie";
import { hashSid } from "./auth.utils";
import { findValidSessionBySidHash, updateLastSeen } from "./session.service";
import type { Context, Next } from "hono";
import type { AppEnv } from "../../app-env";
export const requireAuth = async (c: Context<AppEnv>, next: Next) => {
  const db = c.get("db");
  const sid = getCookie(c, "sid");

  if (!sid) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  const sidHash = hashSid(sid);
  const session = await findValidSessionBySidHash(db, sidHash);

  if (!session) {
    return c.json({ error: "Invalid session" }, 401);
  }
  updateLastSeen(db, sidHash).catch((err) =>
    console.error("Failed to update lastSeenAt:", err)
  );

  //  met session dans contexte
  c.set("session", session);
  c.set("userId", session.userId);

  await next();
};
