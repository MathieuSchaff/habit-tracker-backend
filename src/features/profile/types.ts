import { ApiResponse, CommonErrorCode } from "../../types/api";
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
  AuthErrorCode | Extract<CommonErrorCode, "not_found" | "server_error">
>;

// Types générés automatiquement depuis le schéma Drizzle
export type Profile = InferSelectModel<typeof profiles>;
export type NewProfile = InferInsertModel<typeof profiles>;

// Types métier spécifiques (optionnels)
export type PublicProfile = Omit<Profile, "userId">;

export type ProfileUpdate = Partial<
  Pick<Profile, "username" | "bio" | "avatarUrl">
>;
