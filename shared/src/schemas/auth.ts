import { z } from "zod";

export const authSchema = z.object({
  email: z.email().trim().toLowerCase(),
  password: z
    .string()
    .min(8, "Minimum 8 caractères")
    .max(128, "Maximum 128 caractères")
    .regex(/[a-z]/, "Au moins une minuscule")
    .regex(/[A-Z]/, "Au moins une majuscule")
    .regex(/[0-9]/, "Au moins un chiffre"),
});
export const UserPublicSchema = z.object({
  id: z.string(),
  email: z.email(),
});
export type AuthInput = z.infer<typeof authSchema>;
