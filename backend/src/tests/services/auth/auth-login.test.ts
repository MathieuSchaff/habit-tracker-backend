import { describe, expect, it } from 'bun:test'

import { verifyAccessToken, verifyRefreshToken } from '../../../features/auth/jwt.utils'
import { findValidRefreshToken } from '../../../features/auth/refresh-token.service'
import { login } from '../../../features/auth/service'
import { JWT_SECRET, REFRESH_SECRET } from '../../helpers/secrets'
import { createTestUser } from '../../helpers/test-factories'
import { createCtx, testDb } from './auth-test.setup'

describe('login', () => {
  it('should login successfully with valid credentials', async () => {
    await createTestUser('test@example.com', 'ValidPass123!')

    const result = await login(createCtx(), 'test@example.com', 'ValidPass123!')

    expect(result.success).toBe(true)
    if (!result.success) return

    expect(result.data.user.email).toBe('test@example.com')
    expect(result.data.accessToken).toBeDefined()
    expect(result.data.refreshToken).toBeDefined()

    const payload = await verifyAccessToken(result.data.accessToken, JWT_SECRET)
    expect(payload).not.toBeNull()
    if (!payload) return
    expect(payload.sub).toBe(result.data.user.id)
    expect(payload.type).toBe('access')
  })

  it('should store refresh token in DB on login', async () => {
    await createTestUser('test@example.com', 'ValidPass123!')

    const result = await login(createCtx(), 'test@example.com', 'ValidPass123!')

    expect(result.success).toBe(true)
    if (!result.success) return

    const refreshPayload = await verifyRefreshToken(result.data.refreshToken, REFRESH_SECRET)
    expect(refreshPayload).not.toBeNull()
    if (!refreshPayload) return
    const stored = await findValidRefreshToken(testDb, refreshPayload.jti)
    expect(stored).not.toBeNull()
    if (!stored) return
    expect(stored.userId).toBe(result.data.user.id)
  })

  it('should fail with invalid email', async () => {
    const result = await login(createCtx(), 'nonexistent@example.com', 'password')

    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error).toBe('invalid_credentials')
    }
  })

  it('should fail with invalid password', async () => {
    await createTestUser('test@example.com', 'CorrectPass123!')

    const result = await login(createCtx(), 'test@example.com', 'WrongPass123!')

    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error).toBe('invalid_credentials')
    }
  })

  it('should normalize email (case + trim)', async () => {
    await createTestUser('test@example.com', 'ValidPass123!')

    const result = await login(createCtx(), '  TEST@EXAMPLE.COM  ', 'ValidPass123!')

    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.user.email).toBe('test@example.com')
    }
  })

  it('should fail with empty email', async () => {
    const result = await login(createCtx(), '', 'SomePass123!')

    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error).toBe('invalid_credentials')
    }
  })

  it('should fail with empty password', async () => {
    await createTestUser('test@example.com', 'ValidPass123!')

    const result = await login(createCtx(), 'test@example.com', '')

    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error).toBe('invalid_credentials')
    }
  })

  it('should record IP and UserAgent with refresh token', async () => {
    await createTestUser('test@example.com', 'ValidPass123!')

    const result = await login(
      createCtx({ ip: '192.168.1.1', userAgent: 'TestBrowser/1.0' }),
      'test@example.com',
      'ValidPass123!'
    )

    expect(result.success).toBe(true)
    if (!result.success) return

    const refreshPayload = await verifyRefreshToken(result.data.refreshToken, REFRESH_SECRET)
    if (!refreshPayload) return
    const stored = await findValidRefreshToken(testDb, refreshPayload.jti)
    if (!stored) return
    expect(stored.ip).toBe('192.168.1.1')
    expect(stored.userAgent).toBe('TestBrowser/1.0')
  })

  it('should store null IP and UserAgent when not provided', async () => {
    await createTestUser('test@example.com', 'ValidPass123!')

    const result = await login(createCtx(), 'test@example.com', 'ValidPass123!')

    expect(result.success).toBe(true)
    if (!result.success) return

    const refreshPayload = await verifyRefreshToken(result.data.refreshToken, REFRESH_SECRET)
    if (!refreshPayload) return
    const stored = await findValidRefreshToken(testDb, refreshPayload.jti)
    if (!stored) return
    expect(stored.ip).toBeNull()
    expect(stored.userAgent).toBeNull()
  })
})
