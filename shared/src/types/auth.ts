import type { ApiResponse, CommonErrorCode, HttpStatus } from './api'
import { HTTP_STATUS } from './api'

export type UserPublic = {
  id: string
  email: string
}
export type AuthTokens = {
  accessToken: string
  refreshToken: string
}

export type AuthenticatedResult = AuthTokens & {
  user: UserPublic
}
export type BrowserAuthResult = {
  user: UserPublic
  accessToken: string
}

export type MobileAuthResult = AuthenticatedResult
export type AuthErrorCode =
  | CommonErrorCode
  | 'invalid_credentials'
  | 'email_exists'
  | 'invalid_token'
  | 'missing_refresh_token'
  | 'session_expired'
  | 'invalid_session'

export const authErrorMapping = {
  invalid_credentials: HTTP_STATUS.UNAUTHORIZED,
  email_exists: HTTP_STATUS.CONFLICT,
  invalid_token: HTTP_STATUS.UNAUTHORIZED,
  missing_refresh_token: HTTP_STATUS.BAD_REQUEST,
  session_expired: HTTP_STATUS.UNAUTHORIZED,
  invalid_session: HTTP_STATUS.UNAUTHORIZED,
} as const satisfies Partial<Record<AuthErrorCode, HttpStatus>>

// Chaque opération déclare ses erreurs possible

// Signup
export type SignupResult = ApiResponse<AuthenticatedResult, 'email_exists' | 'server_error'>

// Login
export type LoginResult = ApiResponse<AuthenticatedResult, 'invalid_credentials' | 'server_error'>

// Refresh
export type RefreshResult = ApiResponse<
  AuthenticatedResult,
  'invalid_token' | 'session_expired' | 'missing_refresh_token' | 'server_error'
>

// Logout — toujours succès côté client
export type LogoutResult = ApiResponse<null>

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
