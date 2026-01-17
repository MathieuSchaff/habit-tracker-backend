// Types spécifiques au module auth

import type { ApiResponse, CommonErrorCode, HttpStatus } from "../../types/api";
// import type { HttpStatus } from "../../types/api";
export type UserPublic = {
  id: string;
  email: string;
};

// Les erreurs spécifiques à l'auth

export type LoginErrorCode =
  | "invalid_credentials"
  | Extract<CommonErrorCode, "invalid_input" | "server_error">;

export type SignupErrorCode =
  | "email_exists"
  | Extract<CommonErrorCode, "invalid_input" | "server_error">;

export type AuthErrorCode =
  | "invalid_session"
  | "session_expired"
  | Extract<CommonErrorCode, "unauthorized">;

// Mapping erreurs auth => status codes

export const authErrorMapping = {
  invalid_credentials: 401,
  invalid_session: 401,
  session_expired: 401,
  email_exists: 409,
} as const satisfies Record<string, HttpStatus>;

//  Types des réponses API, ce que le client reçoit

export type LoginResponse = ApiResponse<{ user: UserPublic }, LoginErrorCode>;

export type SignupResponse = ApiResponse<{ user: UserPublic }, SignupErrorCode>;

export type LogoutResponse = ApiResponse<null, never>;

export type PingResponse = ApiResponse<{ ok: boolean }, never>;

export type ValidationErrorCode = Extract<CommonErrorCode, "invalid_input">;

//  Types internes services (incluent le sid)
export type LogoutServiceResult = ApiResponse<null, never>;

export type LoginServiceResult = ApiResponse<
  { user: UserPublic; sid: string },
  Exclude<LoginErrorCode, "invalid_input">
>;

export type SignupServiceResult = ApiResponse<
  { user: UserPublic; sid: string },
  Exclude<SignupErrorCode, "invalid_input">
>;
