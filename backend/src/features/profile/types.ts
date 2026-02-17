import type { InferInsertModel, InferSelectModel } from 'drizzle-orm'

import type { profiles } from '../../db/schema/users'

export {
  type MeResponse,
  type ProfileErrorCode,
  type ProfilePublic,
  profileErrorMapping,
} from '@habit-tracker/shared'
// restent dans backend
export type Profile = InferSelectModel<typeof profiles>
export type NewProfile = InferInsertModel<typeof profiles>
export type PublicProfile = Omit<Profile, 'userId'>
export type ProfileUpdate = Partial<Pick<Profile, 'username' | 'bio' | 'avatarUrl'>>
