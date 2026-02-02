import type { ApiResponse, CommonErrorCode, HttpStatus } from './api'
import type { AuthErrorCode } from './auth'
import { HTTP_STATUS } from './api'

export type ProfilePublic = {
  userId: string
  username?: string | null
  firstName?: string | null
  lastName?: string | null
  bio?: string | null
  avatarUrl?: string | null
  createdAt?: Date | null
  updatedAt?: Date | null
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
