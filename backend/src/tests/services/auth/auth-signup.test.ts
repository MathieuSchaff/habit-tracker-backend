import { describe, expect, it } from 'bun:test'

import { verifyAccessToken, verifyRefreshToken } from '../../../features/auth/jwt.utils'
import { findValidRefreshToken } from '../../../features/auth/refresh-token.service'
import { signup } from '../../../features/auth/service'
import { JWT_SECRET, REFRESH_SECRET } from '../../helpers/secrets'
import { createTestUser } from '../../helpers/test-factories'
import { createCtx, testDb } from './auth-test.setup'

describe('signup', () => {
  it('should signup successfully with valid data', async () => {
    const result = await signup(createCtx(), 'newuser@example.com', 'StrongPass123!')

    expect(result.success).toBe(true)
    if (!result.success) return

    expect(result.data.user.email).toBe('newuser@example.com')
    expect(result.data.accessToken).toBeDefined()
    expect(result.data.refreshToken).toBeDefined()
  })

  it('should return valid access token on signup', async () => {
    const result = await signup(createCtx(), 'newuser@example.com', 'StrongPass123!')

    expect(result.success).toBe(true)
    if (!result.success) return

    const payload = await verifyAccessToken(result.data.accessToken, JWT_SECRET)
    expect(payload).not.toBeNull()
    if (!payload) return

    expect(payload.sub).toBe(result.data.user.id)
    expect(payload.type).toBe('access')
  })

  it('should store refresh token in DB on signup', async () => {
    const result = await signup(createCtx(), 'newuser@example.com', 'StrongPass123!')

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

  it('should fail when email already exists', async () => {
    await createTestUser('existing@example.com', 'ValidPass123!')

    const result = await signup(createCtx(), 'existing@example.com', 'AnotherPass123!')

    expect(result.success).toBe(false)
    if (result.success) return

    expect(result.error).toBe('email_exists')
  })

  it('should normalize email on signup', async () => {
    const result = await signup(createCtx(), '  NewUser@EXAMPLE.COM  ', 'StrongPass123!')

    expect(result.success).toBe(true)
    if (!result.success) return

    expect(result.data.user.email).toBe('newuser@example.com')
  })

  it('should record IP and UserAgent on signup', async () => {
    const result = await signup(
      createCtx({ ip: '10.0.0.1', userAgent: 'SignupBrowser/1.0' }),
      'newuser@example.com',
      'StrongPass123!'
    )

    expect(result.success).toBe(true)
    if (!result.success) return

    const refreshPayload = await verifyRefreshToken(result.data.refreshToken, REFRESH_SECRET)
    if (!refreshPayload) return

    const stored = await findValidRefreshToken(testDb, refreshPayload.jti)
    if (!stored) return

    expect(stored.ip).toBe('10.0.0.1')
    expect(stored.userAgent).toBe('SignupBrowser/1.0')
  })

  it('should reject duplicate email with different casing', async () => {
    const first = await signup(createCtx(), 'test@example.com', 'StrongPass123!')
    expect(first.success).toBe(true)

    const second = await signup(createCtx(), 'TEST@example.com', 'AnotherPass123!')

    expect(second.success).toBe(false)
    if (second.success) return

    expect(second.error).toBe('email_exists')
  })
})
