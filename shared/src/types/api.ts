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
  RATE_LIMIT_EXCEEDED: 429,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export type HttpStatus = (typeof HTTP_STATUS)[keyof typeof HTTP_STATUS];

const baseErrorMapping = {
  invalid_input: HTTP_STATUS.BAD_REQUEST,
  not_found: HTTP_STATUS.NOT_FOUND,
  unauthorized: HTTP_STATUS.UNAUTHORIZED,
  forbidden: HTTP_STATUS.FORBIDDEN,
  server_error: HTTP_STATUS.INTERNAL_SERVER_ERROR,
  rate_limit_exceeded: 429,
} as const satisfies Record<string, HttpStatus>;

export type CommonErrorCode = keyof typeof baseErrorMapping;

export const errorToStatus = <E extends string>(
  error: E,
  customMapping: Record<Exclude<E, CommonErrorCode>, HttpStatus>
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
