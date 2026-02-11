import { describe, expect, it } from 'bun:test'

import { verifyRefreshToken } from '../../../features/auth/jwt.utils'
import {
  findValidRefreshToken,
  revokeAllUserRefreshTokens,
} from '../../../features/auth/refresh-token.service'
import { login, logout } from '../../../features/auth/service'
import { REFRESH_SECRET } from '../../helpers/secrets'
import { createTestUser } from '../../helpers/test-factories'
import { createCtx, testDb } from './auth-test.setup'

describe('Multiple sessions (multi-device)', () => {
  it('should allow multiple active refresh tokens for same user', async () => {
    await createTestUser('multi@example.com', 'ValidPass123!')

    const login1 = await login(
      createCtx({ ip: '192.168.1.1', userAgent: 'Device1' }),
      'multi@example.com',
      'ValidPass123!'
    )
    const login2 = await login(
      createCtx({ ip: '192.168.1.2', userAgent: 'Device2' }),
      'multi@example.com',
      'ValidPass123!'
    )
    const login3 = await login(
      createCtx({ ip: '10.0.0.1', userAgent: 'Device3' }),
      'multi@example.com',
      'ValidPass123!'
    )

    expect(login1.success).toBe(true)
    expect(login2.success).toBe(true)
    expect(login3.success).toBe(true)
    if (!login1.success || !login2.success || !login3.success) return

    const p1 = await verifyRefreshToken(login1.data.refreshToken, REFRESH_SECRET)
    const p2 = await verifyRefreshToken(login2.data.refreshToken, REFRESH_SECRET)
    const p3 = await verifyRefreshToken(login3.data.refreshToken, REFRESH_SECRET)
    if (!p1 || !p2 || !p3) return

    const s1 = await findValidRefreshToken(testDb, p1.jti)
    const s2 = await findValidRefreshToken(testDb, p2.jti)
    const s3 = await findValidRefreshToken(testDb, p3.jti)

    expect(s1).not.toBeNull()
    expect(s2).not.toBeNull()
    expect(s3).not.toBeNull()

    // Logout device 1 ne doit pas affecter les autres
    await logout(createCtx(), login1.data.refreshToken)

    const s1After = await findValidRefreshToken(testDb, p1.jti)
    const s2After = await findValidRefreshToken(testDb, p2.jti)
    const s3After = await findValidRefreshToken(testDb, p3.jti)

    expect(s1After).toBeNull()
    expect(s2After).not.toBeNull()
    expect(s3After).not.toBeNull()
  })

  it('should revoke all sessions with revokeAllUserRefreshTokens', async () => {
    await createTestUser('multi@example.com', 'ValidPass123!')

    const login1 = await login(
      createCtx({ ip: '192.168.1.1', userAgent: 'Device1' }),
      'multi@example.com',
      'ValidPass123!'
    )
    const login2 = await login(
      createCtx({ ip: '192.168.1.2', userAgent: 'Device2' }),
      'multi@example.com',
      'ValidPass123!'
    )

    expect(login1.success).toBe(true)
    expect(login2.success).toBe(true)
    if (!login1.success || !login2.success) return

    await revokeAllUserRefreshTokens(testDb, login1.data.user.id)

    const p1 = await verifyRefreshToken(login1.data.refreshToken, REFRESH_SECRET)
    const p2 = await verifyRefreshToken(login2.data.refreshToken, REFRESH_SECRET)
    if (!p1 || !p2) return

    const s1 = await findValidRefreshToken(testDb, p1.jti)
    const s2 = await findValidRefreshToken(testDb, p2.jti)

    expect(s1).toBeNull()
    expect(s2).toBeNull()
  })

  it('should not affect other users when revoking all tokens', async () => {
    await createTestUser('user1@example.com', 'ValidPass123!')
    await createTestUser('user2@example.com', 'ValidPass123!')

    const loginUser1 = await login(createCtx(), 'user1@example.com', 'ValidPass123!')
    const loginUser2 = await login(createCtx(), 'user2@example.com', 'ValidPass123!')

    expect(loginUser1.success).toBe(true)
    expect(loginUser2.success).toBe(true)
    if (!loginUser1.success || !loginUser2.success) return

    await revokeAllUserRefreshTokens(testDb, loginUser1.data.user.id)

    const p2 = await verifyRefreshToken(loginUser2.data.refreshToken, REFRESH_SECRET)
    if (!p2) return

    const s2 = await findValidRefreshToken(testDb, p2.jti)
    expect(s2).not.toBeNull()
  })
})
