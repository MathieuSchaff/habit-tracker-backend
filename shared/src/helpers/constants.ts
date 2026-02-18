import type { HttpStatus } from '../types'
// ─── HTTP Status Codes ───────────────────────────────────

/** Codes HTTP utilisés dans l'API. Utiliser ces constantes plutôt que des nombres littéraux. */
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  RATE_LIMIT_EXCEEDED: 429,
  INTERNAL_SERVER_ERROR: 500,
} as const

// ─── Error Mapping ───────────────────────────────────────

/**
 * Codes d'erreur communs à tous les endpoints.
 * Chaque domaine (auth, habits...) étend ce type avec ses propres codes.
 * @see {@link AuthErrorCode}
 * @see {@link HabitErrorCode}
 * @see {@link ProfileErrorCode}
 */
export const baseErrorMapping = {
  invalid_input: HTTP_STATUS.BAD_REQUEST,
  not_found: HTTP_STATUS.NOT_FOUND,
  unauthorized: HTTP_STATUS.UNAUTHORIZED,
  forbidden: HTTP_STATUS.FORBIDDEN,
  server_error: HTTP_STATUS.INTERNAL_SERVER_ERROR,
  rate_limit_exceeded: 429,
} as const satisfies Record<string, HttpStatus>
