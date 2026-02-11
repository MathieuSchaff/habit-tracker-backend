import { describe, expect, it } from 'bun:test'

import { verifyRefreshToken } from '../../../features/auth/jwt.utils'
import { findValidRefreshToken } from '../../../features/auth/refresh-token.service'
import { login, logout } from '../../../features/auth/service'
import { REFRESH_SECRET } from '../../helpers/secrets'
import { createTestUser } from '../../helpers/test-factories'
import { createCtx, testDb } from './auth-test.setup'

describe('logout', () => {
  it('should revoke refresh token on logout', async () => {
    await createTestUser('test@example.com', 'ValidPass123!')

    const loginResult = await login(createCtx(), 'test@example.com', 'ValidPass123!')
    expect(loginResult.success).toBe(true)
    if (!loginResult.success) return

    const result = await logout(createCtx(), loginResult.data.refreshToken)
    expect(result.success).toBe(true)

    const refreshPayload = await verifyRefreshToken(loginResult.data.refreshToken, REFRESH_SECRET)
    if (!refreshPayload) return

    const stored = await findValidRefreshToken(testDb, refreshPayload.jti)
    expect(stored).toBeNull()
  })

  it('should handle double logout gracefully', async () => {
    await createTestUser('test@example.com', 'ValidPass123!')

    const loginResult = await login(createCtx(), 'test@example.com', 'ValidPass123!')
    expect(loginResult.success).toBe(true)
    if (!loginResult.success) return

    const result1 = await logout(createCtx(), loginResult.data.refreshToken)
    expect(result1.success).toBe(true)

    const result2 = await logout(createCtx(), loginResult.data.refreshToken)
    expect(result2.success).toBe(true)
  })

  it('should handle logout with invalid token', async () => {
    const result = await logout(createCtx(), 'invalid.token.here')
    expect(result.success).toBe(true)
  })

  it('should handle logout with empty token', async () => {
    const result = await logout(createCtx(), '')
    expect(result.success).toBe(true)
  })

  it('should not affect other sessions on single logout', async () => {
    await createTestUser('test@example.com', 'ValidPass123!')

    const login1 = await login(
      createCtx({ ip: '192.168.1.1', userAgent: 'Device1' }),
      'test@example.com',
      'ValidPass123!'
    )
    const login2 = await login(
      createCtx({ ip: '192.168.1.2', userAgent: 'Device2' }),
      'test@example.com',
      'ValidPass123!'
    )

    expect(login1.success).toBe(true)
    expect(login2.success).toBe(true)
    if (!login1.success || !login2.success) return

    await logout(createCtx(), login1.data.refreshToken)

    const p2 = await verifyRefreshToken(login2.data.refreshToken, REFRESH_SECRET)
    if (!p2) return

    const s2 = await findValidRefreshToken(testDb, p2.jti)
    expect(s2).not.toBeNull()
  })
})
