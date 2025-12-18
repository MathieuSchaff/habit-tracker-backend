import { profiles, users } from "../../db/schema";
import type { DB } from "../../db/index";
import { eq } from "drizzle-orm";
export async function getUser(db: DB, email: string) {
  const result = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);
  return result[0];
}

export async function getProfile(db: DB, userId: string) {
  const result = await db
    .select()
    .from(profiles)
    .where(eq(profiles.userId, userId))
    .limit(1);
  return result[0];
}
