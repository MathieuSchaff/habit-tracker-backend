import { beforeEach, describe, expect, it } from 'bun:test'

import { HTTP_STATUS } from '@habit-tracker/shared'

import { Hono } from 'hono'

import type { AppEnv } from '../../app-env'
import { jwtAuthRoutes } from '../../features/auth/routes'
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

  return app
}

// ── Helpers ──────────────────────────────────────────────────────────

function jsonPost(app: Hono<AppEnv>, path: string, body: object, headers?: Record<string, string>) {
  return app.request(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...headers },
    body: JSON.stringify(body),
  })
}

function extractCookie(res: Response): string {
  return res.headers.get('Set-Cookie') ?? ''
}

async function signupAndGetCookies(app: Hono<AppEnv>, email: string, password: string) {
  const res = await jsonPost(app, '/auth/signup', { email, password })
  const data = await res.json()
  const cookie = extractCookie(res)
  return { res, data, cookie, accessToken: data.data?.accessToken as string }
}

async function loginAndGetCookies(app: Hono<AppEnv>, email: string, password: string) {
  const res = await jsonPost(app, '/auth/login', { email, password })
  const data = await res.json()
  const cookie = extractCookie(res)
  return { res, data, cookie, accessToken: data.data?.accessToken as string }
}

// ── Tests ────────────────────────────────────────────────────────────

describe('Auth Routes (browser)', () => {
  let app: Hono<AppEnv>

  beforeEach(() => {
    app = createTestApp()
  })

  // ━━━ SIGNUP ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  describe('POST /auth/signup', () => {
    it('should create a new user and set refresh token cookie', async () => {
      const res = await jsonPost(app, '/auth/signup', {
        email: 'newuser@test.com',
        password: 'TestPass123!',
      })

      expect(res.status).toBe(HTTP_STATUS.CREATED)

      const data = await res.json()
      expect(data.success).toBe(true)
      expect(data.data.user.email).toBe('newuser@test.com')
      expect(data.data.accessToken).toBeDefined()

      // Le refresh token ne doit PAS être dans le body (httpOnly cookie)
      expect(data.data.refreshToken).toBeUndefined()

      const cookie = extractCookie(res)
      expect(cookie).toContain('refresh_token=')
      expect(cookie).toContain('HttpOnly')
    })

    it('should reject invalid email', async () => {
      const res = await jsonPost(app, '/auth/signup', {
        email: 'invalid-email',
        password: 'TestPass123!',
      })

      expect(res.status).toBe(HTTP_STATUS.BAD_REQUEST)
      const data = await res.json()
      expect(data.success).toBe(false)
    })

    it('should reject weak password', async () => {
      const res = await jsonPost(app, '/auth/signup', {
        email: 'test@test.com',
        password: 'weak',
      })

      expect(res.status).toBe(HTTP_STATUS.BAD_REQUEST)
      const data = await res.json()
      expect(data.success).toBe(false)
    })

    it('should reject duplicate email', async () => {
      await createTestUser('existing@test.com', 'TestPass123!')

      const res = await jsonPost(app, '/auth/signup', {
        email: 'existing@test.com',
        password: 'TestPass123!',
      })

      expect(res.status).toBe(HTTP_STATUS.CONFLICT)
      const data = await res.json()
      expect(data.success).toBe(false)
      expect(data.error).toBe('email_exists')
    })

    it('should normalize email on signup', async () => {
      const res = await jsonPost(app, '/auth/signup', {
        email: '  NewUser@TEST.COM  ',
        password: 'TestPass123!',
      })

      expect(res.status).toBe(HTTP_STATUS.CREATED)
      const data = await res.json()
      expect(data.data.user.email).toBe('newuser@test.com')
    })
  })

  // ━━━ LOGIN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  describe('POST /auth/login', () => {
    it('should login existing user and set refresh token cookie', async () => {
      await createTestUser('login@test.com', 'TestPass123!')

      const res = await jsonPost(app, '/auth/login', {
        email: 'login@test.com',
        password: 'TestPass123!',
      })

      expect(res.status).toBe(HTTP_STATUS.OK)

      const data = await res.json()
      expect(data.success).toBe(true)
      expect(data.data.user.email).toBe('login@test.com')
      expect(data.data.accessToken).toBeDefined()
      expect(data.data.refreshToken).toBeUndefined()

      const cookie = extractCookie(res)
      expect(cookie).toContain('refresh_token=')
      expect(cookie).toContain('HttpOnly')
    })

    it('should reject wrong password', async () => {
      await createTestUser('login@test.com', 'TestPass123!')

      const res = await jsonPost(app, '/auth/login', {
        email: 'login@test.com',
        password: 'WrongPass123!',
      })

      expect(res.status).toBe(HTTP_STATUS.UNAUTHORIZED)
      const data = await res.json()
      expect(data.success).toBe(false)
      expect(data.error).toBe('invalid_credentials')
    })

    it('should reject non-existent user', async () => {
      const res = await jsonPost(app, '/auth/login', {
        email: 'notfound@test.com',
        password: 'TestPass123!',
      })

      expect(res.status).toBe(HTTP_STATUS.UNAUTHORIZED)
      const data = await res.json()
      expect(data.success).toBe(false)
      expect(data.error).toBe('invalid_credentials')
    })

    it('should reject invalid email format', async () => {
      const res = await jsonPost(app, '/auth/login', {
        email: 'not-an-email',
        password: 'TestPass123!',
      })

      expect(res.status).toBe(HTTP_STATUS.BAD_REQUEST)
    })

    it('should reject empty body', async () => {
      const res = await app.request('/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      })

      expect(res.status).toBe(HTTP_STATUS.BAD_REQUEST)
    })
  })

  // ━━━ REFRESH ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  describe('POST /auth/refresh', () => {
    it('should rotate tokens with valid refresh cookie', async () => {
      await createTestUser('refresh@test.com', 'TestPass123!')
      const { cookie: loginCookie } = await loginAndGetCookies(
        app,
        'refresh@test.com',
        'TestPass123!'
      )

      const res = await app.request('/auth/refresh', {
        method: 'POST',
        headers: { Cookie: loginCookie },
      })

      expect(res.status).toBe(HTTP_STATUS.OK)

      const data = await res.json()
      expect(data.success).toBe(true)
      expect(data.data.accessToken).toBeDefined()

      // Nouveau cookie de refresh
      const newCookie = extractCookie(res)
      expect(newCookie).toContain('refresh_token=')
    })

    it('should fail without refresh token', async () => {
      const res = await app.request('/auth/refresh', {
        method: 'POST',
      })

      expect(res.status).toBe(HTTP_STATUS.BAD_REQUEST)
      const data = await res.json()
      expect(data.success).toBe(false)
      expect(data.error).toBe('missing_refresh_token')
    })

    it('should fail with invalid refresh cookie', async () => {
      const res = await app.request('/auth/refresh', {
        method: 'POST',
        headers: { Cookie: 'refresh_token=invalid.token.here' },
      })

      expect(res.status).toBe(HTTP_STATUS.UNAUTHORIZED)
      const data = await res.json()
      expect(data.success).toBe(false)
      expect(data.error).toBe('invalid_token')
    })

    it('should invalidate old refresh token after rotation', async () => {
      await createTestUser('refresh@test.com', 'TestPass123!')
      const { cookie: loginCookie } = await loginAndGetCookies(
        app,
        'refresh@test.com',
        'TestPass123!'
      )

      // Premier refresh → OK
      const res1 = await app.request('/auth/refresh', {
        method: 'POST',
        headers: { Cookie: loginCookie },
      })
      expect(res1.status).toBe(HTTP_STATUS.OK)

      // Replay avec l'ancien cookie → doit échouer
      const res2 = await app.request('/auth/refresh', {
        method: 'POST',
        headers: { Cookie: loginCookie },
      })
      expect(res2.status).toBe(HTTP_STATUS.UNAUTHORIZED)
    })
  })

  // ━━━ LOGOUT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  describe('POST /auth/logout', () => {
    it('should logout and clear refresh cookie', async () => {
      await createTestUser('logout@test.com', 'TestPass123!')
      const { cookie, accessToken } = await loginAndGetCookies(
        app,
        'logout@test.com',
        'TestPass123!'
      )

      const res = await app.request('/auth/logout', {
        method: 'POST',
        headers: {
          Cookie: cookie,
          Authorization: `Bearer ${accessToken}`,
        },
      })

      expect(res.status).toBe(HTTP_STATUS.OK)
      const data = await res.json()
      expect(data.success).toBe(true)

      // Le cookie doit être supprimé
      const setCookie = extractCookie(res)
      expect(setCookie).toContain('refresh_token=;')
    })

    it('should reject logout without access token', async () => {
      const res = await app.request('/auth/logout', {
        method: 'POST',
      })

      expect(res.status).toBe(HTTP_STATUS.UNAUTHORIZED)
    })

    it('should invalidate refresh token after logout', async () => {
      await createTestUser('logout@test.com', 'TestPass123!')
      const { cookie, accessToken } = await loginAndGetCookies(
        app,
        'logout@test.com',
        'TestPass123!'
      )

      // Logout
      await app.request('/auth/logout', {
        method: 'POST',
        headers: {
          Cookie: cookie,
          Authorization: `Bearer ${accessToken}`,
        },
      })

      // Refresh avec l'ancien cookie → doit échouer
      const refreshRes = await app.request('/auth/refresh', {
        method: 'POST',
        headers: { Cookie: cookie },
      })
      expect(refreshRes.status).toBe(HTTP_STATUS.UNAUTHORIZED)
    })
  })

  // ━━━ SESSION ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  describe('GET /auth/session', () => {
    it('should return authenticated user info', async () => {
      await createTestUser('session@test.com', 'TestPass123!')
      const { accessToken } = await loginAndGetCookies(app, 'session@test.com', 'TestPass123!')

      const res = await app.request('/auth/session', {
        headers: { Authorization: `Bearer ${accessToken}` },
      })

      expect(res.status).toBe(HTTP_STATUS.OK)
      const data = await res.json()
      expect(data.success).toBe(true)
      expect(data.data.authenticated).toBe(true)
      expect(data.data.userId).toBeDefined()
    })

    it('should reject unauthenticated request', async () => {
      const res = await app.request('/auth/session')

      expect(res.status).toBe(HTTP_STATUS.UNAUTHORIZED)
    })
  })
})
