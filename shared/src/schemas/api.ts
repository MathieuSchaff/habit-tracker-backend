import { z } from 'zod'

// Schéma de base pour les réponses success
// ─── OpenAPI Response Schemas (Zod) ──────────────────────

/**
 * Schema Zod générique pour une réponse API success.
 *
 * @remarks
 * Utilisé dans les définitions `createRoute` de `@hono/zod-openapi`
 * pour générer la documentation OpenAPI/Swagger.
 *
 * @param dataSchema - Schema Zod décrivant le contenu de `data`
 * @returns Schema `{ success: true, data: T, message?: string }`
 *
 * @example
 * ```ts
 * const schema = SuccessResponseSchema(userPublicSchema)
 * ```
 */
export const SuccessResponseSchema = <T extends z.ZodType>(dataSchema: T) =>
  z.object({
    success: z.literal(true),
    data: dataSchema,
    message: z.string().optional(),
  })

/**
 * Schema Zod générique pour une réponse API erreur.
 *
 * @remarks
 * Utilisé dans les définitions `createRoute` pour documenter
 * les réponses d'erreur dans OpenAPI/Swagger.
 */
export const ErrorResponseSchema = z.object({
  success: z.literal(false),
  error: z.string(),
  details: z.unknown().optional(),
})
