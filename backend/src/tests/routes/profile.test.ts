import { beforeEach, describe, expect, it } from 'bun:test'

import { HTTP_STATUS } from '@habit-tracker/shared'

import { Hono } from 'hono'

import type { AppEnv } from '../../app-env'
import { jwtAuthRoutes } from '../../features/auth/routes'
import { profileRoute } from '../../features/profile'
import { testDb } from '../db.test.config'
import { JWT_SECRET, REFRESH_SECRET } from '../helpers/secrets'
import { createTestUser } from '../helpers/test-factories'

function createTestApp() {
  const app = new Hono<AppEnv>()

  app.use('*', async (c, next) => {
    c.set('db', testDb)
    c.set('env', 'development')
    c.set('jwtSecret', JWT_SECRET)
    c.set('refreshSecret', REFRESH_SECRET)
    await next()
  })

  app.route('/auth', jwtAuthRoutes)
  app.route('/profile', profileRoute)

  return app
}

// ── Helpers ──────────────────────────────────────────────────────────

async function loginAndGetToken(app: Hono<AppEnv>, email: string, password: string) {
  const res = await app.request('/auth/mobile/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
  const data = await res.json()
  if (!data.success) throw new Error('Login failed in helper')
  return data.data.accessToken as string
}

function authGet(app: Hono<AppEnv>, path: string, token: string) {
  return app.request(path, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

function authPatch(app: Hono<AppEnv>, path: string, token: string, body: object) {
  return app.request(path, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })
}

// ── Tests ────────────────────────────────────────────────────────────

describe('Profile Routes', () => {
  let app: Hono<AppEnv>

  beforeEach(() => {
    app = createTestApp()
  })

  // ━━━ GET /profile ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  describe('GET /profile', () => {
    it('should return profile for authenticated user', async () => {
      await createTestUser('profile@test.com', 'TestPass123!')
      const token = await loginAndGetToken(app, 'profile@test.com', 'TestPass123!')

      const res = await authGet(app, '/profile', token)

      expect(res.status).toBe(HTTP_STATUS.OK)

      const data = await res.json()
      expect(data.success).toBe(true)
      expect(data.data.userId).toBeDefined()
    })

    it('should reject unauthenticated request', async () => {
      const res = await app.request('/profile')

      expect(res.status).toBe(HTTP_STATUS.UNAUTHORIZED)
      const data = await res.json()
      expect(data.success).toBe(false)
    })

    it('should reject request with invalid token', async () => {
      const res = await authGet(app, '/profile', 'invalid.token.here')

      expect(res.status).toBe(HTTP_STATUS.UNAUTHORIZED)
    })
  })

  // ━━━ PATCH /profile ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  describe('PATCH /profile', () => {
    it('should update username', async () => {
      await createTestUser('patch@test.com', 'TestPass123!')
      const token = await loginAndGetToken(app, 'patch@test.com', 'TestPass123!')

      const res = await authPatch(app, '/profile', token, { username: 'newname' })

      expect(res.status).toBe(HTTP_STATUS.OK)

      const data = await res.json()
      expect(data.success).toBe(true)
      expect(data.data.username).toBe('newname')
    })

    it('should update bio', async () => {
      await createTestUser('patch@test.com', 'TestPass123!')
      const token = await loginAndGetToken(app, 'patch@test.com', 'TestPass123!')

      const res = await authPatch(app, '/profile', token, { bio: 'Hello world' })

      expect(res.status).toBe(HTTP_STATUS.OK)

      const data = await res.json()
      expect(data.success).toBe(true)
      expect(data.data.bio).toBe('Hello world')
    })

    it('should update avatarUrl', async () => {
      await createTestUser('patch@test.com', 'TestPass123!')
      const token = await loginAndGetToken(app, 'patch@test.com', 'TestPass123!')

      const res = await authPatch(app, '/profile', token, {
        avatarUrl: 'https://example.com/avatar.png',
      })

      expect(res.status).toBe(HTTP_STATUS.OK)

      const data = await res.json()
      expect(data.success).toBe(true)
      expect(data.data.avatarUrl).toBe('https://example.com/avatar.png')
    })

    it('should update multiple fields at once', async () => {
      await createTestUser('patch@test.com', 'TestPass123!')
      const token = await loginAndGetToken(app, 'patch@test.com', 'TestPass123!')

      const res = await authPatch(app, '/profile', token, {
        username: 'multi',
        bio: 'Updated bio',
      })

      expect(res.status).toBe(HTTP_STATUS.OK)

      const data = await res.json()
      expect(data.success).toBe(true)
      expect(data.data.username).toBe('multi')
      expect(data.data.bio).toBe('Updated bio')
    })

    it('should persist updates across requests', async () => {
      await createTestUser('patch@test.com', 'TestPass123!')
      const token = await loginAndGetToken(app, 'patch@test.com', 'TestPass123!')

      await authPatch(app, '/profile', token, { username: 'persisted' })

      const res = await authGet(app, '/profile', token)
      const data = await res.json()
      expect(data.data.username).toBe('persisted')
    })

    it('should reject empty username', async () => {
      await createTestUser('patch@test.com', 'TestPass123!')
      const token = await loginAndGetToken(app, 'patch@test.com', 'TestPass123!')

      const res = await authPatch(app, '/profile', token, { username: '' })

      expect(res.status).toBe(HTTP_STATUS.BAD_REQUEST)
    })

    it('should reject username over 50 chars', async () => {
      await createTestUser('patch@test.com', 'TestPass123!')
      const token = await loginAndGetToken(app, 'patch@test.com', 'TestPass123!')

      const res = await authPatch(app, '/profile', token, { username: 'a'.repeat(51) })

      expect(res.status).toBe(HTTP_STATUS.BAD_REQUEST)
    })

    it('should reject bio over 500 chars', async () => {
      await createTestUser('patch@test.com', 'TestPass123!')
      const token = await loginAndGetToken(app, 'patch@test.com', 'TestPass123!')

      const res = await authPatch(app, '/profile', token, { bio: 'a'.repeat(501) })

      expect(res.status).toBe(HTTP_STATUS.BAD_REQUEST)
    })

    it('should reject invalid avatarUrl', async () => {
      await createTestUser('patch@test.com', 'TestPass123!')
      const token = await loginAndGetToken(app, 'patch@test.com', 'TestPass123!')

      const res = await authPatch(app, '/profile', token, { avatarUrl: 'not-a-url' })

      expect(res.status).toBe(HTTP_STATUS.BAD_REQUEST)
    })

    it('should reject unknown fields (strict mode)', async () => {
      await createTestUser('patch@test.com', 'TestPass123!')
      const token = await loginAndGetToken(app, 'patch@test.com', 'TestPass123!')

      const res = await authPatch(app, '/profile', token, { hackerField: 'oops' })

      expect(res.status).toBe(HTTP_STATUS.BAD_REQUEST)
    })

    it('should reject unauthenticated request', async () => {
      const res = await app.request('/profile', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: 'nope' }),
      })

      expect(res.status).toBe(HTTP_STATUS.UNAUTHORIZED)
    })
  })
})
