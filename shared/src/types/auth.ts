// import type { ApiResponse, CommonErrorCode, HttpStatus } from './api'

// export type UserPublic = {
//   id: string
//   email: string
// }

// //  Types pour les JWT
// export interface AccessTokenPayload {
//   sub: string // userId
//   type: 'access'
//   iat: number
//   exp: number
// }

// export interface RefreshTokenPayload {
//   sub: string // userId
//   type: 'refresh'
//   jti: string // unique ID pour identifier le token en DB
//   iat: number
//   exp: number
// }

// export interface CreateRefreshTokenArgs {
//   userId: string
//   jti: string
//   expiresAt: Date
//   ip?: string | null
//   userAgent?: string | null
// }

// interface JwtLoginSuccess {
//   user: { id: string; email: string }
//   accessToken: string
//   refreshToken: string // renvoyé au mobile, ignoré par le web (cookie)
// }

// interface JwtSignupSuccess {
//   user: { id: string; email: string }
//   accessToken: string
//   refreshToken: string
// }

// interface JwtRefreshSuccess {
//   accessToken: string
//   refreshToken: string
// }

// export type JwtLoginResult = ApiResponse<JwtLoginSuccess>
// export type JwtSignupResult = ApiResponse<JwtSignupSuccess>
// export type JwtRefreshResult = ApiResponse<JwtRefreshSuccess>
// export type JwtLogoutResult = ApiResponse<null>

// // Les erreurs spécifiques à l'auth
// export type LoginErrorCode =
//   | 'invalid_credentials'
//   | Extract<CommonErrorCode, 'invalid_input' | 'server_error'>

// export type SignupErrorCode =
//   | 'email_exists'
//   | Extract<CommonErrorCode, 'invalid_input' | 'server_error'>

// export type RefreshErrorCode =
//   | 'invalid_token'
//   | 'missing_refresh_token'
//   | Extract<CommonErrorCode, 'server_error'>

// export type AuthErrorCode =
//   | 'invalid_session'
//   | 'session_expired'
//   | Extract<CommonErrorCode, 'unauthorized'>

// // Mapping erreurs auth => status codes

// export const authErrorMapping = {
//   invalid_credentials: 401,
//   invalid_session: 401,
//   session_expired: 401,
//   email_exists: 409,
//   invalid_token: 401,
//   missing_refresh_token: 400,
// } as const satisfies Record<string, HttpStatus>

// //  Types des réponses API, ce que le client reçoit

// export type LoginResponse = ApiResponse<{ user: UserPublic }, LoginErrorCode>

// export type SignupResponse = ApiResponse<{ user: UserPublic }, SignupErrorCode>

// export type LogoutResponse = ApiResponse<null, never>

// export type PingResponse = ApiResponse<{ ok: boolean }, never>

// export type ValidationErrorCode = Extract<CommonErrorCode, 'invalid_input'>

// export type LogoutServiceResult = ApiResponse<null, never>

// export type LoginServiceResult = ApiResponse<
//   { user: UserPublic },
//   Exclude<LoginErrorCode, 'invalid_input'>
// >

// export type SignupServiceResult = ApiResponse<
//   { user: UserPublic },
//   Exclude<SignupErrorCode, 'invalid_input'>
// >
import type { ApiResponse, CommonErrorCode, HttpStatus } from './api'

// ─── User ─────────────────────────────────────────────────────────

export type UserPublic = {
  id: string
  email: string
}

// ─── JWT Payloads ─────────────────────────────────────────────────

export interface AccessTokenPayload {
  sub: string
  type: 'access'
  jti: string
  iat: number
  exp: number
}

export interface RefreshTokenPayload {
  sub: string
  type: 'refresh'
  jti: string
  iat: number
  exp: number
}

export interface CreateRefreshTokenArgs {
  userId: string
  jti: string
  expiresAt: Date
  ip?: string | null
  userAgent?: string | null
}

//  Service Results

/** Login et Signup renvoient la même shape */
type AuthTokenSuccess = {
  user: UserPublic
  accessToken: string
  refreshToken: string
}

type RefreshSuccess = {
  accessToken: string
  refreshToken: string
}

export type JwtLoginResult = ApiResponse<AuthTokenSuccess>
export type JwtSignupResult = ApiResponse<AuthTokenSuccess>
export type JwtRefreshResult = ApiResponse<RefreshSuccess>
export type JwtLogoutResult = ApiResponse<null>

// codes d'erreurs

export type AuthErrorCode =
  | 'invalid_credentials'
  | 'email_exists'
  | 'invalid_token'
  | 'missing_refresh_token'
  | Extract<CommonErrorCode, 'invalid_input' | 'server_error' | 'unauthorized'>

export const authErrorMapping = {
  invalid_credentials: 401,
  email_exists: 409,
  invalid_token: 401,
  missing_refresh_token: 400,
} as const satisfies Record<string, HttpStatus>
