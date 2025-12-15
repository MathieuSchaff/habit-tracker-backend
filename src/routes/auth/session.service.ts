import { eq, and, isNull, gt } from "drizzle-orm";
import { sessions } from "../../db/schema"; // adapte si ton export est ailleurs
import type { DB } from "../../db/index"; // adapte le type (voir note plus bas)

export async function createSession(
  db: DB,
  args: {
    userId: string;
    sidHash: string;
    expiresAt: Date;
    ip?: string | null;
    userAgent?: string | null;
  }
) {
  await db.insert(sessions).values({
    userId: args.userId,
    sidHash: args.sidHash,
    expiresAt: args.expiresAt,
    ip: args.ip ?? null,
    userAgent: args.userAgent ?? null,
  });
}

export async function findValidSessionBySidHash(db: DB, sidHash: string) {
  const now = new Date();
  const [row] = await db
    .select()
    .from(sessions)
    .where(
      and(
        eq(sessions.sidHash, sidHash),
        isNull(sessions.revokedAt),
        gt(sessions.expiresAt, now)
      )
    )
    .limit(1);

  return row ?? null;
}

export async function revokeSession(db: DB, sidHash: string) {
  await db
    .update(sessions)
    .set({ revokedAt: new Date() })
    .where(eq(sessions.sidHash, sidHash));
}
