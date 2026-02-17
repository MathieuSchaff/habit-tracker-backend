import { z } from 'zod'

//  Validation Schemas
// https://zod.dev/api#pipes
// On va tester les brand de zod aussi
export type Email = string & z.BRAND<'Email'>
export type RawPassword = string & z.BRAND<'RawPassword'>
export type HashedPassword = string & { readonly __brand: 'HashedPassword' }
export const emailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .pipe(z.email("Dans zod auth schema: format d'email invalide"))
  .brand<'Email'>()
export const passwordSchema = z
  .string()
  .min(8, 'Minimum 8 caractères')
  .max(128, 'Maximum 128 caractères')
  .regex(/[a-z]/, 'Au moins une minuscule')
  .regex(/[A-Z]/, 'Au moins une majuscule')
  .regex(/[0-9]/, 'Au moins un chiffre')
  .regex(/[^a-zA-Z0-9]/, 'Caractère spécial requis')
  .brand<'RawPassword'>()

export const authSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})
export const loginSchema = authSchema

export const signupSchema = authSchema

export const userPublicSchema = z.object({
  id: z.string(),
  email: z.email(),
})

//  Inferred Types

export type AuthInput = z.infer<typeof authSchema>

//  Validation Error Types

export type AuthFieldErrors = {
  email?: string[]
  password?: string[]
}
