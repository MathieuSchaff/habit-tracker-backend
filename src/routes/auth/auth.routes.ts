import { Hono } from "hono";
import type { AppEnv } from "../../app-env";
import { verify } from "argon2";
import { setCookie } from "hono/cookie";
import { eq } from "drizzle-orm";
import { sessions, users } from "../../db/schema";
import { generateSid, hashSid } from "./auth.utils";
import { rateLimiter } from "hono-rate-limiter";
import z from "zod";

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
    const result = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    const user = result[0];
    //  je regarde si utilisateur existe et mdp correspond
    //   const user = await db.query.users.findFirst({
    //     where: eq(users.email, email),
    //   });
    const passwordHash =
      user?.passwordHash ??
      "$argon2id$v=19$m=65536,t=3,p=4$dummysaltdummysaltdummysal$dummyhash";

    // là je dois vérifier que passwordHash correspond à password qui a été envoyé par utilisateur qui veut se connecter
    const isValid = await verify(passwordHash, password);
    if (!user || !isValid) {
      return c.json({ error: "Invalid credentials" }, 401);
    }
    // créer un sid avec bun
    // https://bun.com/docs/runtime/hashing#hmac-in-bun-cryptohasher
    const sid = generateSid();
    //   const hasher = new CryptoHasher("sha256");
    //   hasher.update(sid);
    //   const sidHash = hasher.digest("base64url");
    const sidHash = hashSid(sid);
    try {
      await db.insert(sessions).values({
        sidHash: sidHash,
        userId: user.id,
        lastSeenAt: new Date(),
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      });
    } catch (e) {
      console.error("Session creation failed:", e);
      return c.json({ error: "server error" }, 500);
    }
    setCookie(c, "sid", sid, {
      httpOnly: true,
      secure: true,
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
