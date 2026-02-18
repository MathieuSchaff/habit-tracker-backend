import { z } from 'zod'

import { ErrorResponseSchema, SuccessResponseSchema } from '../schemas'
// ─── OpenAPI Response Helpers ────────────────────────────

/**
 * Génère une définition de réponse success pour `createRoute`.
 *
 * @param schema - Schema Zod du champ `data`
 * @param description - Description affichée dans Swagger UI
 *
 * @example
 * ```ts
 * const route = createRoute({
 *   responses: {
 *     200: successResponse(userPublicSchema, 'User retrieved'),
 *     401: errorResponse('Not authenticated'),
 *   },
 * })
 * ```
 */
export function successResponse<T extends z.ZodType>(schema: T, description: string) {
  return {
    content: { 'application/json': { schema: SuccessResponseSchema(schema) } },
    description,
  }
}

/**
 * Génère une définition de réponse erreur pour `createRoute`.
 *
 * @param description - Description affichée dans Swagger UI
 */
export function errorResponse(description: string) {
  return {
    content: { 'application/json': { schema: ErrorResponseSchema } },
    description,
  }
}
// APRÈS
export function errorResponseWithOptionnalErrorCode(
  description: string,
  errorCodes?: readonly string[]
) {
  const schema = errorCodes
    ? ErrorResponseSchema.extend({ error: z.enum(errorCodes as [string, ...string[]]) })
    : ErrorResponseSchema

  return {
    content: { 'application/json': { schema } },
    description,
  }
}
