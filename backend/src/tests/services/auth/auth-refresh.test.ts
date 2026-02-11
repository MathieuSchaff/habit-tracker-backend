import { describe, expect, it } from 'bun:test'

import {
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
} from '../../../features/auth/jwt.utils'
import { findValidRefreshToken } from '../../../features/auth/refresh-token.service'
import { login, refresh } from '../../../features/auth/service'
import { JWT_SECRET, REFRESH_SECRET } from '../../helpers/secrets'
import { createTestUser } from '../../helpers/test-factories'
import { createCtx, testDb } from './auth-test.setup'

async function loginAndGetTokens(email = 'test@example.com', password = 'ValidPass123!') {
  const result = await login(
    createCtx({ ip: '127.0.0.1', userAgent: 'TestBrowser/1.0' }),
    email,
    password
  )
  if (!result.success) throw new Error('Login failed in helper')
  return result.data
}

describe('refresh', () => {
  it('should rotate tokens successfully', async () => {
    await createTestUser('test@example.com', 'ValidPass123!')
    const { refreshToken: oldRefresh } = await loginAndGetTokens()

    const result = await refresh(
      createCtx({ ip: '192.168.1.1', userAgent: 'TestBrowser/1.0' }),
      oldRefresh
    )

    expect(result.success).toBe(true)
    if (!result.success) return

    expect(result.data.accessToken).toBeDefined()
    expect(result.data.refreshToken).toBeDefined()

    const payload = await verifyAccessToken(result.data.accessToken, JWT_SECRET)
    expect(payload).not.toBeNull()

    expect(result.data.refreshToken).not.toBe(oldRefresh)
  })

  it('should generate a valid new access token', async () => {
    await createTestUser('test@example.com', 'ValidPass123!')
    const { refreshToken, user } = await loginAndGetTokens()

    const result = await refresh(createCtx({ ip: '127.0.0.1', userAgent: 'Test' }), refreshToken)

    expect(result.success).toBe(true)
    if (!result.success) return

    const payload = await verifyAccessToken(result.data.accessToken, JWT_SECRET)
    expect(payload).not.toBeNull()
    if (!payload) return

    expect(payload.sub).toBe(user.id)
    expect(payload.type).toBe('access')
  })

  it('should store new refresh token in DB', async () => {
    await createTestUser('test@example.com', 'ValidPass123!')
    const { refreshToken } = await loginAndGetTokens()

    const result = await refresh(
      createCtx({ ip: '192.168.1.1', userAgent: 'NewBrowser/2.0' }),
      refreshToken
    )

    expect(result.success).toBe(true)
    if (!result.success) return

    const newPayload = await verifyRefreshToken(result.data.refreshToken, REFRESH_SECRET)
    expect(newPayload).not.toBeNull()
    if (!newPayload) return

    const stored = await findValidRefreshToken(testDb, newPayload.jti)
    expect(stored).not.toBeNull()
    if (!stored) return

    expect(stored.ip).toBe('192.168.1.1')
    expect(stored.userAgent).toBe('NewBrowser/2.0')
  })

  it('should revoke old refresh token after rotation', async () => {
    await createTestUser('test@example.com', 'ValidPass123!')
    const { refreshToken } = await loginAndGetTokens()

    const oldPayload = await verifyRefreshToken(refreshToken, REFRESH_SECRET)
    if (!oldPayload) return

    await refresh(createCtx({ ip: '127.0.0.1', userAgent: 'Test' }), refreshToken)

    const oldStored = await findValidRefreshToken(testDb, oldPayload.jti)
    expect(oldStored).toBeNull()
  })

  it('should detect replay attack and revoke all user tokens', async () => {
    await createTestUser('test@example.com', 'ValidPass123!')
    const { refreshToken: stolenToken } = await loginAndGetTokens()

    // Utilisation légitime (rotation)
    const refreshResult = await refresh(
      createCtx({ ip: '127.0.0.1', userAgent: 'LegitBrowser' }),
      stolenToken
    )
    expect(refreshResult.success).toBe(true)

    // Attaquant réutilise le token volé → replay détecté
    const replayResult = await refresh(
      createCtx({ ip: '10.0.0.1', userAgent: 'EvilBrowser' }),
      stolenToken
    )
    expect(replayResult.success).toBe(false)
    if (!replayResult.success) {
      expect(replayResult.error).toBe('invalid_token')
    }

    // Le nouveau refresh token légitime doit aussi être révoqué
    if (refreshResult.success) {
      const newPayload = await verifyRefreshToken(refreshResult.data.refreshToken, REFRESH_SECRET)
      if (!newPayload) return

      const newStored = await findValidRefreshToken(testDb, newPayload.jti)
      expect(newStored).toBeNull()
    }
  })

  it('should fail with invalid refresh token', async () => {
    const result = await refresh(
      createCtx({ ip: '127.0.0.1', userAgent: 'Test' }),
      'totally.invalid.token'
    )

    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error).toBe('invalid_token')
    }
  })

  it('should fail with refresh token not stored in DB', async () => {
    const fakeUserId = crypto.randomUUID()
    const { token } = await generateRefreshToken(fakeUserId, REFRESH_SECRET)

    const result = await refresh(createCtx({ ip: '127.0.0.1', userAgent: 'Test' }), token)

    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error).toBe('invalid_token')
    }
  })

  it('should fail with empty token', async () => {
    const result = await refresh(createCtx({ ip: '127.0.0.1', userAgent: 'Test' }), '')

    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error).toBe('invalid_token')
    }
  })
})
