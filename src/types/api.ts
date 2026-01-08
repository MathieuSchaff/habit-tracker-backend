// ============================================================
// Types génériques pour toutes les réponses API

//  Types de base

export type ApiSuccess<T> = {
  success: true;
  data: T;
  message?: string;
};

export type ApiError<E extends string = string> = {
  success: false;
  error: E;
  details?: unknown;
};

export type ApiResponse<T, E extends string = string> =
  | ApiSuccess<T>
  | ApiError<E>;

//  Helpers pour créer les réponses

export const ok = <T>(data: T, message?: string): ApiSuccess<T> => ({
  success: true,
  data,
  message,
});

export const err = <E extends string>(
  error: E,
  details?: unknown
): ApiError<E> => ({
  success: false,
  error,
  details,
});

//  HTTP Status codes

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
} as const;
// cette function sert si on ajoute des HTTP_STATUS.
// pas besoin de répéter type HttpStatus = ....
export type HttpStatus = (typeof HTTP_STATUS)[keyof typeof HTTP_STATUS];

// --- Codes d'erreur communs ---

export type CommonErrorCode =
  | "invalid_input"
  | "not_found"
  | "unauthorized"
  | "forbidden"
  | "server_error";

//  Mapping erreurs -> status codes

const baseErrorMapping: Record<string, HttpStatus> = {
  invalid_input: HTTP_STATUS.BAD_REQUEST,
  not_found: HTTP_STATUS.NOT_FOUND,
  unauthorized: HTTP_STATUS.UNAUTHORIZED,
  forbidden: HTTP_STATUS.FORBIDDEN,
  server_error: HTTP_STATUS.INTERNAL_SERVER_ERROR,
};

export const errorToStatus = (
  error: string,
  customMapping?: Record<string, HttpStatus>
): HttpStatus => {
  const mapping = { ...baseErrorMapping, ...customMapping };
  return mapping[error] ?? HTTP_STATUS.INTERNAL_SERVER_ERROR;
};

//  Type guards

export const isApiSuccess = <T, E extends string>(
  response: ApiResponse<T, E>
): response is ApiSuccess<T> => {
  return response.success === true;
};

export const isApiError = <T, E extends string>(
  response: ApiResponse<T, E>
): response is ApiError<E> => {
  return response.success === false;
};
