import { profiles } from "../../db/schema/users";
import type { InferSelectModel, InferInsertModel } from "drizzle-orm";

// Ré-export depuis shared pour usage local
export {
  type ProfilePublic,
  type ProfileErrorCode,
  type MeResponse,
  profileErrorMapping,
} from "@habit-tracker/shared";

// Types Drizzle (restent dans backend)
export type Profile = InferSelectModel<typeof profiles>;
export type NewProfile = InferInsertModel<typeof profiles>;
export type PublicProfile = Omit<Profile, "userId">;
export type ProfileUpdate = Partial<Pick<Profile, "username" | "bio" | "avatarUrl">>;
