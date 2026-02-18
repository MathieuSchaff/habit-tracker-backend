/**
 * Réponse success générique de l'API.
 *
 * @template T - Type des données retournées
 * @example
 * const response: ApiSuccess<UserPublic> = {
 *   success: true,
 *   data: { id: 'uuid', email: 'user@example.com' }
 * }
 */
export type ApiSuccess<T> = {
  success: true
  data: T
  message?: string
}

/**
 * Réponse erreur générique de l'API.
 *
 * @template E - Union des codes d'erreur possibles pour cet endpoint.
 * Utiliser un union type précis plutôt que `string` pour bénéficier
 * de l'exhaustivité TypeScript.
 * @example
 * const response: ApiError<'invalid_credentials' | 'server_error'> = {
 *   success: false,
 *   error: 'invalid_credentials'
 * }
 */
export type ApiError<E extends string = string> = {
  success: false
  error: E
  details?: unknown
}

/**
 * Union type représentant toute réponse possible d'un endpoint.
 *
 * @remarks
 * Ne pas accéder à `data` ou `error` directement sans narrowing —
 * toujours utiliser les type guards `isApiSuccess` / `isApiError`
 * ou une vérification sur `response.success`.
 *
 * @template T - Type des données en cas de succès
 * @template E - Union des codes d'erreur possibles
 */
export type ApiResponse<T, E extends string = string> = ApiSuccess<T> | ApiError<E>

//  Helpers pour créer les réponses

/**
 * Crée une réponse success typée.
 *
 * @remarks
 * Toujours utiliser ce helper plutôt que de construire l'objet manuellement
 * pour garantir la cohérence du format de réponse.
 * @example
 * return c.json(ok(user), HTTP_STATUS.CREATED)
 * return c.json(ok(null, 'Disconnected'), HTTP_STATUS.OK)
 */
export const ok = <T>(data: T, message?: string): ApiSuccess<T> => ({
  success: true,
  data,
  message,
})

/**
 * Crée une réponse erreur typée.
 *
 * @remarks
 * Toujours utiliser ce helper plutôt que de construire l'objet manuellement
 * pour garantir la cohérence du format de réponse.
 * @example
 * return c.json(err('invalid_credentials'), HTTP_STATUS.UNAUTHORIZED)
 * return c.json(err('invalid_input', zodError.flatten()), HTTP_STATUS.BAD_REQUEST)
 */
export const err = <E extends string>(error: E, details?: unknown): ApiError<E> => ({
  success: false,
  error,
  details,
})

//  HTTP Status codes

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

export type HttpStatus = (typeof HTTP_STATUS)[keyof typeof HTTP_STATUS]

/**
 * Codes d'erreur communs à tous les endpoints.
 * Chaque domaine (auth, habits...) étend ce type avec ses propres codes.
 * @see {@link AuthErrorCode}
 * @see {@link HabitErrorCode}
 * @see {@link ProfileErrorCode}
 */
const baseErrorMapping = {
  invalid_input: HTTP_STATUS.BAD_REQUEST,
  not_found: HTTP_STATUS.NOT_FOUND,
  unauthorized: HTTP_STATUS.UNAUTHORIZED,
  forbidden: HTTP_STATUS.FORBIDDEN,
  server_error: HTTP_STATUS.INTERNAL_SERVER_ERROR,
  rate_limit_exceeded: 429,
} as const satisfies Record<string, HttpStatus>

export type CommonErrorCode = keyof typeof baseErrorMapping

/**
 * Convertit un code d'erreur en status HTTP.
 *
 * @remarks
 * Fusionne le mapping de base avec un mapping spécifique au domaine.
 * Si le code est absent des deux mappings, retourne 500 par défaut.
 * @example
 * // Dans un handler Hono :
 * const status = errorToStatus(error, authErrorMapping)
 * return c.json(err(error), status)
 */
export const errorToStatus = <E extends string>(
  error: E,
  customMapping: Record<Exclude<E, CommonErrorCode>, HttpStatus>
): HttpStatus => {
  const mapping = { ...baseErrorMapping, ...customMapping }
  return mapping[error] ?? HTTP_STATUS.INTERNAL_SERVER_ERROR
}

//  Type guards

/**
 * Type guard — narrowe `ApiResponse<T, E>` vers `ApiSuccess<T>`.
 * @example
 * if (isApiSuccess(response)) {
 *   console.log(response.data) // T
 * }
 */
export const isApiSuccess = <T, E extends string>(
  response: ApiResponse<T, E>
): response is ApiSuccess<T> => {
  return response.success === true
}

/**
 * Type guard — narrowe `ApiResponse<T, E>` vers `ApiError<E>`.
 * @example
 * if (isApiError(response)) {
 *   console.log(response.error) // E
 * }
 */
export const isApiError = <T, E extends string>(
  response: ApiResponse<T, E>
): response is ApiError<E> => {
  return response.success === false
}
