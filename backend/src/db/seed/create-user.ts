import type { Email, RawPassword } from '@habit-tracker/shared'

import { signup } from '../../features/auth/service'
import { getUser } from '../../features/auth/user.utils'
import { db } from '../index'
import type { AuthContext } from '../../features/auth/service'
import { env } from '../../config/env'

export function createCtx(overrides?: Partial<AuthContext>): AuthContext {
  return {
    db: db,
    jwtSecret: env.JWT_SECRET,
    refreshSecret: env.REFRESH_SECRET,
    ...overrides,
  }
}
const UserSeeder = {
  email: 'seed@seed.com',
  password: 'Azerty123!seed',
}
export async function createSeedUser(
  email: string = UserSeeder.email,
  password: string = UserSeeder.password
) {
  const ctx = createCtx()

  const result = await signup(ctx, email as Email, password as RawPassword)

  if (result.success === false) {
    if (result.error === 'email_exists') {
      const user = await getUser(ctx.db, email as Email)
      if (!user) {
        throw new Error(`User claimed to exist but not found: ${email}`)
      }
      return user
    }
    throw new Error(`Failed to create test user: ${result.error}`)
  }

  return result.data.user
}
