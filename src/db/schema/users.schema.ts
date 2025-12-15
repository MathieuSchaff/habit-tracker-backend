// src/schemas/users.schema.ts
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { users } from "@/db/schema/users";

export const UserInsertSchema = createInsertSchema(users, {
  email: (s) => s.email.email(),
  passwordHash: (s) => s.passwordHash.min(60),
});

export const UserSelectSchema = createSelectSchema(users);
