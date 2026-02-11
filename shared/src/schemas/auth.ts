import { z } from 'zod'

//  Validation Schemas

export const authSchema = z.object({
  email: z.string().trim().toLowerCase().email(),
  password: z
    .string()
    .min(8, 'Minimum 8 caractères')
    .max(128, 'Maximum 128 caractères')
    .regex(/[a-z]/, 'Au moins une minuscule')
    .regex(/[A-Z]/, 'Au moins une majuscule')
    .regex(/[0-9]/, 'Au moins un chiffre'),
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
