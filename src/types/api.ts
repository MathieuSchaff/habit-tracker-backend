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
// ça équivaut à type HttpStatus = 200 | 400 etc....
// donc par exemple: le type HTTP_STATUS on cherche la clé ça fait type de HTTP_STATUS["OK"]
// => ça nous renvoie les valeur en type
export type HttpStatus = (typeof HTTP_STATUS)[keyof typeof HTTP_STATUS];

const baseErrorMapping = {
  invalid_input: HTTP_STATUS.BAD_REQUEST,
  not_found: HTTP_STATUS.NOT_FOUND,
  unauthorized: HTTP_STATUS.UNAUTHORIZED,
  forbidden: HTTP_STATUS.FORBIDDEN,
  server_error: HTTP_STATUS.INTERNAL_SERVER_ERROR,
  // satifies ajoute un typage supplémentaire.
  // as const comme ça on dit pas que c'est juste des strings
  // mais bien des clé de cet objet ( qu'on utuilise après)
} as const satisfies Record<string, HttpStatus>;

export type CommonErrorCode = keyof typeof baseErrorMapping;

// convertir un code d'erruer en code HTTP
//
// Exclude<E, CommonErrorCode> retire de E les erreurs déjà gérées.
//   Exemple avec login où E = "server_error" | "invalid_credentials" :
//   "server_error" est dans CommonErrorCode → retiré
//   "invalid_credentials" n'y est pas → gardé
//   Donc customMapping doit contenir { invalid_credentials: 401 }
export const errorToStatus = <E extends string>(
  error: E,
  // customMapping?: Record<string, HttpStatus>
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
