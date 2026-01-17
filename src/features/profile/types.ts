import {
  ApiResponse,
  CommonErrorCode,
  HTTP_STATUS,
  HttpStatus,
} from "../../types/api";
import { AuthErrorCode } from "../auth/auth.types";
import { profiles } from "../../db/schema/users";
import type { InferSelectModel, InferInsertModel } from "drizzle-orm";
export type ProfilePublic = {
  userId: string;
  username?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  bio?: string | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
};

export type MeResponse = ApiResponse<
  ProfilePublic,
  AuthErrorCode | ProfileErrorCode
>;

// Typés depuis Drizzle
export type Profile = InferSelectModel<typeof profiles>;
export type NewProfile = InferInsertModel<typeof profiles>;

export type PublicProfile = Omit<Profile, "userId">;

export type ProfileUpdate = Partial<
  Pick<Profile, "username" | "bio" | "avatarUrl">
>;
export type ProfileErrorCode =
  | CommonErrorCode
  | "profile_not_found"
  | "invalid_profile_data"
  | "profile_update_failed";
export const profileErrorMapping: Partial<
  Record<ProfileErrorCode, HttpStatus>
> = {
  profile_not_found: HTTP_STATUS.NOT_FOUND,
  invalid_profile_data: HTTP_STATUS.BAD_REQUEST,
  profile_update_failed: HTTP_STATUS.CONFLICT,
};
