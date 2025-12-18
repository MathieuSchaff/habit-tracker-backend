import { Hono } from "hono";
import type { AppEnv } from "../../app-env";
import { verify } from "argon2";
import { deleteCookie, getCookie, setCookie } from "hono/cookie";
import { generateSid, hashSid } from "./auth.utils";
import { rateLimiter } from "hono-rate-limiter";
import z from "zod";
import { createSession, revokeSession } from "./session.service";
import { getProfile, getUser } from "./user.utils";
export const authRoutes = new Hono<AppEnv>();
// Schema de validation
const loginSchema = z.object({
  email: z.email().trim().toLowerCase(),
  password: z.string().min(1),
});
authRoutes.get("/ping", (c) => c.json({ ok: true }));

authRoutes.post(
  "/login",
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 min
    limit: 5, // 5 tentatives max
    standardHeaders: "draft-7",
    keyGenerator: (c) => c.req.header("x-forwarded-for") ?? "unknown",
  }),
  async (c) => {
    // je récupé email et mdp

    const db = c.get("db");
    let body;
    try {
      body = loginSchema.parse(await c.req.json());
    } catch (error) {
      return c.json({ error: "Invalid input" }, 400);
    }
    const { email, password } = body;
    if (!email?.trim() || !password?.trim()) {
      return c.json({ error: "Email and password required" }, 400);
    }
    // je get ma db
    const user = await getUser(db, email);
    const passwordHash =
      user?.passwordHash ??
      "$argon2id$v=19$m=65536,t=3,p=4$dummysaltdummysaltdummysal$dummyhash";

    // là je dois vérifier que passwordHash correspond à password qui a été envoyé par utilisateur qui veut se connecter
    const isValid = await verify(passwordHash, password);
    if (!user || !isValid) {
      return c.json({ error: "Invalid credentials" }, 401);
    }
    // créer un sid avec bun. Comment? doc dis:
    // https://bun.com/docs/runtime/hashing#hmac-in-bun-cryptohasher
    const sid = generateSid();
    const sidHash = hashSid(sid);
    try {
      await createSession(db, {
        userId: user.id,
        sidHash: sidHash,
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      });
    } catch (e) {
      console.error("Session creation failed:", e);
      return c.json({ error: "server error" }, 500);
    }
    setCookie(c, "sid", sid, {
      httpOnly: true,
      //   secure: true, // à changer en prod , apparemment marche pas en https
      sameSite: "Lax",
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });

    return c.json({
      ok: true,
      user: {
        id: user.id,
        email: user.email,
      },
    });
  }
);
// 1. Lire cookie sid
// 2. Si pas de sid → déjà déco (200 quand même)
// 3. Re-hasher sid → sidHash
// 4. Trouver la session en DB
// 5. Marquer revokedAt = now() (ou DELETE si tu préfères)
// 6. Supprimer le cookie (Max-Age=0)
// 7. Répondre 200
authRoutes.post("/logout", async (c) => {
  const db = c.get("db");
  const sid = getCookie(c, "sid");
  if (!sid) return c.json("Disconnected", 200);
  const sidHash = hashSid(sid);
  try {
    await revokeSession(db, sidHash);
    deleteCookie(c, "sid");
    return c.json("Disconnected", 200);
  } catch (e) {
    console.error("In logout route: no session found", e);
    return c.json("Disconnected", 200);
  }
});

authRoutes.get("/me", async (c) => {
  const db = c.get("db");
  const userId = c.get("userId")!;

  try {
    const profile = await getProfile(db, userId);

    if (!profile) {
      return c.json({ error: "Profile not found" }, 404);
    }

    return c.json(profile, 200);
  } catch (e) {
    console.error("Error in /me:", e);
    return c.json({ error: "Failed to fetch profile" }, 500);
  }
});
