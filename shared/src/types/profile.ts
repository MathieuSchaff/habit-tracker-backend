import { HTTP_STATUS } from '../helpers'
import type { ApiResponse, CommonErrorCode, HttpStatus } from '../types/api'
import type { AuthErrorCode } from './auth'

export type ProfilePublic = {
  userId: string
  username?: string | null
  firstName?: string | null
  lastName?: string | null
  bio?: string | null
  avatarUrl?: string | null
  createdAt?: string | null
  updatedAt?: string | null
}

export type ProfileErrorCode =
  | CommonErrorCode
  | 'profile_not_found'
  | 'invalid_profile_data'
  | 'profile_update_failed'

export const profileErrorMapping = {
  profile_not_found: HTTP_STATUS.NOT_FOUND,
  invalid_profile_data: HTTP_STATUS.BAD_REQUEST,
  profile_update_failed: HTTP_STATUS.CONFLICT,
} as const satisfies Partial<Record<ProfileErrorCode, HttpStatus>>

export type MeResponse = ApiResponse<ProfilePublic, AuthErrorCode | ProfileErrorCode>
