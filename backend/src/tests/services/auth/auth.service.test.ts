import { beforeEach, describe, expect, it } from 'bun:test'

import { hash } from 'argon2'

import {
  generateAccessToken,
  generateRefreshToken,
  hashJti,
  verifyAccessToken,
  verifyRefreshToken,
} from '../../../features/auth/jwt.utils'
import {
  findValidRefreshToken,
  revokeAllUserRefreshTokens,
  revokeRefreshToken,
  storeRefreshToken,
} from '../../../features/auth/refresh-token.service'
import { jwtLoginUser, jwtLogoutUser, jwtRefreshTokens } from '../../../features/auth/service'
import { testDb } from '../../db.test.config'
import { createTestUser } from '../../helpers/test-factories'

// ─── Secrets de test ────────────────────────────────────────────
const JWT_SECRET = 'test-jwt-secret-at-least-32-chars!!'
const REFRESH_SECRET = 'test-refresh-secret-at-least-32-chars!!'

describe('JWT Auth Service', () => {
  // ─── LOGIN ──────────────────────────────────────────────────────
  describe('jwtLoginUser', () => {
    it('should login successfully with valid credentials', async () => {
      const passwordHash = await hash('ValidPass123!')
      await createTestUser({
        email: 'test@example.com',
        password: passwordHash,
      })

      const result = await jwtLoginUser(
        testDb,
        'test@example.com',
        'ValidPass123!',
        JWT_SECRET,
        REFRESH_SECRET
      )

      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data.user.email).toBe('test@example.com')
        expect(result.data.accessToken).toBeDefined()
        expect(result.data.refreshToken).toBeDefined()

        // Vérifier que l'access token est valide
        const payload = await verifyAccessToken(result.data.accessToken, JWT_SECRET)
        expect(payload).not.toBeNull()
        expect(payload!.sub).toBe(result.data.user.id)
        expect(payload!.type).toBe('access')
      }
    })

    it('should store refresh token in DB on login', async () => {
      const passwordHash = await hash('ValidPass123!')
      await createTestUser({
        email: 'test@example.com',
        password: passwordHash,
      })

      const result = await jwtLoginUser(
        testDb,
        'test@example.com',
        'ValidPass123!',
        JWT_SECRET,
        REFRESH_SECRET
      )

      expect(result.success).toBe(true)
      if (result.success) {
        // Décoder le refresh token pour récupérer le jti
        const refreshPayload = await verifyRefreshToken(result.data.refreshToken, REFRESH_SECRET)
        expect(refreshPayload).not.toBeNull()

        // Vérifier qu'il existe en DB
        const stored = await findValidRefreshToken(testDb, refreshPayload!.jti)
        expect(stored).not.toBeNull()
        expect(stored!.userId).toBe(result.data.user.id)
      }
    })

    it('should fail with invalid email', async () => {
      const result = await jwtLoginUser(
        testDb,
        'nonexistent@example.com',
        'password',
        JWT_SECRET,
        REFRESH_SECRET
      )

      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error).toBe('invalid_credentials')
      }
    })

    it('should fail with invalid password', async () => {
      const passwordHash = await hash('CorrectPass123!')
      await createTestUser({
        email: 'test@example.com',
        password: passwordHash,
      })

      const result = await jwtLoginUser(
        testDb,
        'test@example.com',
        'WrongPass123!',
        JWT_SECRET,
        REFRESH_SECRET
      )

      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error).toBe('invalid_credentials')
      }
    })

    it('should normalize email (case + trim)', async () => {
      const passwordHash = await hash('ValidPass123!')
      await createTestUser({
        email: 'test@example.com',
        password: passwordHash,
      })

      const result = await jwtLoginUser(
        testDb,
        '  TEST@EXAMPLE.COM  ',
        'ValidPass123!',
        JWT_SECRET,
        REFRESH_SECRET
      )

      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data.user.email).toBe('test@example.com')
      }
    })

    it('should fail with empty email', async () => {
      const result = await jwtLoginUser(testDb, '', 'SomePass123!', JWT_SECRET, REFRESH_SECRET)

      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error).toBe('invalid_credentials')
      }
    })

    it('should fail with empty password', async () => {
      const passwordHash = await hash('ValidPass123!')
      await createTestUser({
        email: 'test@example.com',
        password: passwordHash,
      })

      const result = await jwtLoginUser(testDb, 'test@example.com', '', JWT_SECRET, REFRESH_SECRET)

      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error).toBe('invalid_credentials')
      }
    })

    it('should record IP and UserAgent with refresh token', async () => {
      const passwordHash = await hash('ValidPass123!')
      await createTestUser({
        email: 'test@example.com',
        password: passwordHash,
      })

      const result = await jwtLoginUser(
        testDb,
        'test@example.com',
        'ValidPass123!',
        JWT_SECRET,
        REFRESH_SECRET,
        '192.168.1.1',
        'TestBrowser/1.0'
      )

      expect(result.success).toBe(true)
      if (result.success) {
        const refreshPayload = await verifyRefreshToken(result.data.refreshToken, REFRESH_SECRET)
        const stored = await findValidRefreshToken(testDb, refreshPayload!.jti)
        expect(stored!.ip).toBe('192.168.1.1')
        expect(stored!.userAgent).toBe('TestBrowser/1.0')
      }
    })
  })

  // ─── REFRESH ────────────────────────────────────────────────────
  describe('jwtRefreshTokens', () => {
    it('should rotate tokens successfully', async () => {
      const passwordHash = await hash('ValidPass123!')
      await createTestUser({
        email: 'test@example.com',
        password: passwordHash,
      })

      // Login d'abord
      const loginResult = await jwtLoginUser(
        testDb,
        'test@example.com',
        'ValidPass123!',
        JWT_SECRET,
        REFRESH_SECRET
      )
      expect(loginResult.success).toBe(true)
      if (!loginResult.success) return

      // Refresh
      const refreshResult = await jwtRefreshTokens(
        testDb,
        loginResult.data.refreshToken,
        JWT_SECRET,
        REFRESH_SECRET,
        '192.168.1.1',
        'TestBrowser/1.0'
      )

      expect(refreshResult.success).toBe(true)
      if (refreshResult.success) {
        expect(refreshResult.data.accessToken).toBeDefined()
        expect(refreshResult.data.refreshToken).toBeDefined()

        // Le nouveau access token doit être valide
        const payload = await verifyAccessToken(refreshResult.data.accessToken, JWT_SECRET)
        expect(payload).not.toBeNull()

        // Les tokens doivent être différents de ceux du login
        expect(refreshResult.data.accessToken).not.toBe(loginResult.data.accessToken)
        expect(refreshResult.data.refreshToken).not.toBe(loginResult.data.refreshToken)
      }
    })

    it('should revoke old refresh token after rotation', async () => {
      const passwordHash = await hash('ValidPass123!')
      await createTestUser({
        email: 'test@example.com',
        password: passwordHash,
      })

      const loginResult = await jwtLoginUser(
        testDb,
        'test@example.com',
        'ValidPass123!',
        JWT_SECRET,
        REFRESH_SECRET
      )
      expect(loginResult.success).toBe(true)
      if (!loginResult.success) return

      const oldRefreshPayload = await verifyRefreshToken(
        loginResult.data.refreshToken,
        REFRESH_SECRET
      )

      // Refresh → l'ancien token doit être révoqué
      await jwtRefreshTokens(
        testDb,
        loginResult.data.refreshToken,
        JWT_SECRET,
        REFRESH_SECRET,
        '127.0.0.1',
        'Test'
      )

      // L'ancien refresh token ne doit plus être valide en DB
      const oldStored = await findValidRefreshToken(testDb, oldRefreshPayload!.jti)
      expect(oldStored).toBeNull()
    })

    it('should detect replay attack and revoke all user tokens', async () => {
      const passwordHash = await hash('ValidPass123!')
      const user = await createTestUser({
        email: 'test@example.com',
        password: passwordHash,
      })

      const loginResult = await jwtLoginUser(
        testDb,
        'test@example.com',
        'ValidPass123!',
        JWT_SECRET,
        REFRESH_SECRET
      )
      expect(loginResult.success).toBe(true)
      if (!loginResult.success) return

      const stolenRefreshToken = loginResult.data.refreshToken

      // Utilisation légitime (rotation)
      const refreshResult = await jwtRefreshTokens(
        testDb,
        stolenRefreshToken,
        JWT_SECRET,
        REFRESH_SECRET,
        '127.0.0.1',
        'Test'
      )
      expect(refreshResult.success).toBe(true)

      // Attaquant essaie de réutiliser le token volé → replay détecté
      const replayResult = await jwtRefreshTokens(
        testDb,
        stolenRefreshToken,
        JWT_SECRET,
        REFRESH_SECRET,
        '10.0.0.1',
        'EvilBrowser'
      )
      expect(replayResult.success).toBe(false)
      if (!replayResult.success) {
        expect(replayResult.error).toBe('invalid_token')
      }

      // Le nouveau refresh token légitime doit aussi être révoqué (sécurité)
      if (refreshResult.success) {
        const newRefreshPayload = await verifyRefreshToken(
          refreshResult.data.refreshToken,
          REFRESH_SECRET
        )
        const newStored = await findValidRefreshToken(testDb, newRefreshPayload!.jti)
        expect(newStored).toBeNull() // Tout révoqué !
      }
    })

    it('should fail with invalid refresh token', async () => {
      const result = await jwtRefreshTokens(
        testDb,
        'totally.invalid.token',
        JWT_SECRET,
        REFRESH_SECRET,
        '127.0.0.1',
        'Test'
      )

      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error).toBe('invalid_token')
      }
    })

    it('should fail with expired refresh token', async () => {
      // Générer un refresh token avec un secret valide mais qui pointe vers rien en DB
      const fakeUserId = crypto.randomUUID()
      const { token } = await generateRefreshToken(fakeUserId, REFRESH_SECRET)

      const result = await jwtRefreshTokens(
        testDb,
        token,
        JWT_SECRET,
        REFRESH_SECRET,
        '127.0.0.1',
        'Test'
      )

      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error).toBe('invalid_token')
      }
    })
  })

  // ─── LOGOUT ─────────────────────────────────────────────────────
  describe('jwtLogoutUser', () => {
    it('should revoke refresh token on logout', async () => {
      const passwordHash = await hash('ValidPass123!')
      await createTestUser({
        email: 'test@example.com',
        password: passwordHash,
      })

      const loginResult = await jwtLoginUser(
        testDb,
        'test@example.com',
        'ValidPass123!',
        JWT_SECRET,
        REFRESH_SECRET
      )
      expect(loginResult.success).toBe(true)
      if (!loginResult.success) return

      const result = await jwtLogoutUser(testDb, loginResult.data.refreshToken, REFRESH_SECRET)
      expect(result.success).toBe(true)

      // Le refresh token ne doit plus être valide
      const refreshPayload = await verifyRefreshToken(loginResult.data.refreshToken, REFRESH_SECRET)
      const stored = await findValidRefreshToken(testDb, refreshPayload!.jti)
      expect(stored).toBeNull()
    })

    it('should handle double logout gracefully', async () => {
      const passwordHash = await hash('ValidPass123!')
      await createTestUser({
        email: 'test@example.com',
        password: passwordHash,
      })

      const loginResult = await jwtLoginUser(
        testDb,
        'test@example.com',
        'ValidPass123!',
        JWT_SECRET,
        REFRESH_SECRET
      )
      expect(loginResult.success).toBe(true)
      if (!loginResult.success) return

      const result1 = await jwtLogoutUser(testDb, loginResult.data.refreshToken, REFRESH_SECRET)
      expect(result1.success).toBe(true)

      const result2 = await jwtLogoutUser(testDb, loginResult.data.refreshToken, REFRESH_SECRET)
      expect(result2.success).toBe(true)
    })

    it('should handle logout with invalid token', async () => {
      const result = await jwtLogoutUser(testDb, 'invalid.token.here', REFRESH_SECRET)
      expect(result.success).toBe(true) // Toujours succès côté client
    })

    it('should handle logout with empty token', async () => {
      const result = await jwtLogoutUser(testDb, '', REFRESH_SECRET)
      expect(result.success).toBe(true)
    })
  })

  // ─── MULTIPLE SESSIONS ─────────────────────────────────────────
  describe('Multiple sessions (multi-device)', () => {
    it('should allow multiple active refresh tokens for same user', async () => {
      const passwordHash = await hash('ValidPass123!')
      await createTestUser({
        email: 'multi@example.com',
        password: passwordHash,
      })

      // 3 logins (simule 3 appareils)
      const login1 = await jwtLoginUser(
        testDb,
        'multi@example.com',
        'ValidPass123!',
        JWT_SECRET,
        REFRESH_SECRET,
        '192.168.1.1',
        'Device1'
      )
      const login2 = await jwtLoginUser(
        testDb,
        'multi@example.com',
        'ValidPass123!',
        JWT_SECRET,
        REFRESH_SECRET,
        '192.168.1.2',
        'Device2'
      )
      const login3 = await jwtLoginUser(
        testDb,
        'multi@example.com',
        'ValidPass123!',
        JWT_SECRET,
        REFRESH_SECRET,
        '10.0.0.1',
        'Device3'
      )

      expect(login1.success).toBe(true)
      expect(login2.success).toBe(true)
      expect(login3.success).toBe(true)

      if (login1.success && login2.success && login3.success) {
        // Les 3 refresh tokens doivent être valides en DB
        const p1 = await verifyRefreshToken(login1.data.refreshToken, REFRESH_SECRET)
        const p2 = await verifyRefreshToken(login2.data.refreshToken, REFRESH_SECRET)
        const p3 = await verifyRefreshToken(login3.data.refreshToken, REFRESH_SECRET)

        const s1 = await findValidRefreshToken(testDb, p1!.jti)
        const s2 = await findValidRefreshToken(testDb, p2!.jti)
        const s3 = await findValidRefreshToken(testDb, p3!.jti)

        expect(s1).not.toBeNull()
        expect(s2).not.toBeNull()
        expect(s3).not.toBeNull()

        // Logout device 1 ne doit pas affecter les autres
        await jwtLogoutUser(testDb, login1.data.refreshToken, REFRESH_SECRET)

        const s1After = await findValidRefreshToken(testDb, p1!.jti)
        const s2After = await findValidRefreshToken(testDb, p2!.jti)

        expect(s1After).toBeNull() // Révoqué
        expect(s2After).not.toBeNull() // Toujours actif
      }
    })
  })

  // ─── JWT UTILS ──────────────────────────────────────────────────
  describe('JWT Utils', () => {
    it('should generate and verify access token', async () => {
      const userId = crypto.randomUUID()
      const token = await generateAccessToken(userId, JWT_SECRET)
      const payload = await verifyAccessToken(token, JWT_SECRET)

      expect(payload).not.toBeNull()
      expect(payload!.sub).toBe(userId)
      expect(payload!.type).toBe('access')
      expect(payload!.exp).toBeGreaterThan(payload!.iat)
    })

    it('should generate and verify refresh token', async () => {
      const userId = crypto.randomUUID()
      const { token, jti, expiresAt } = await generateRefreshToken(userId, REFRESH_SECRET)
      const payload = await verifyRefreshToken(token, REFRESH_SECRET)

      expect(payload).not.toBeNull()
      expect(payload!.sub).toBe(userId)
      expect(payload!.type).toBe('refresh')
      expect(payload!.jti).toBe(jti)
      expect(expiresAt.getTime()).toBeGreaterThan(Date.now())
    })

    it('should reject access token verified with wrong secret', async () => {
      const token = await generateAccessToken('user-id', JWT_SECRET)
      const payload = await verifyAccessToken(token, 'wrong-secret')
      expect(payload).toBeNull()
    })

    it('should reject refresh token verified with wrong secret', async () => {
      const { token } = await generateRefreshToken('user-id', REFRESH_SECRET)
      const payload = await verifyRefreshToken(token, 'wrong-secret')
      expect(payload).toBeNull()
    })

    it('should reject access token when type is refresh', async () => {
      const { token } = await generateRefreshToken('user-id', JWT_SECRET)
      // Essayer de vérifier un refresh token comme access
      const payload = await verifyAccessToken(token, JWT_SECRET)
      expect(payload).toBeNull()
    })

    it('should reject refresh token when type is access', async () => {
      const token = await generateAccessToken('user-id', REFRESH_SECRET)
      const payload = await verifyRefreshToken(token, REFRESH_SECRET)
      expect(payload).toBeNull()
    })

    it('should produce consistent hash for same jti', () => {
      const jti = crypto.randomUUID()
      const hash1 = hashJti(jti)
      const hash2 = hashJti(jti)
      expect(hash1).toBe(hash2)
    })

    it('should produce different hashes for different jtis', () => {
      const hash1 = hashJti(crypto.randomUUID())
      const hash2 = hashJti(crypto.randomUUID())
      expect(hash1).not.toBe(hash2)
    })
  })
})
