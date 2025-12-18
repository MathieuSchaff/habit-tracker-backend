import { eq, and, isNull, gt } from "drizzle-orm";
import { sessions } from "../../db/schema";
import type { DB } from "../../db/index";

export async function createSession(
  db: DB,
  sessionArgs: {
    userId: string;
    sidHash: string;
    expiresAt: Date;
    ip?: string | null;
    userAgent?: string | null;
  }
) {
  await db.insert(sessions).values({
    userId: sessionArgs.userId,
    sidHash: sessionArgs.sidHash,
    expiresAt: sessionArgs.expiresAt,
    ip: sessionArgs.ip ?? null,
    userAgent: sessionArgs.userAgent ?? null,
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
export async function updateLastSeen(db: DB, sidHash: string) {
  await db
    .update(sessions)
    .set({ lastSeenAt: new Date() })
    .where(eq(sessions.sidHash, sidHash));
}
