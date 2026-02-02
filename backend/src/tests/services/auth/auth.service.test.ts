import { describe, it, expect } from 'bun:test'
import { testDb } from '../../db.test.config'
import { createTestUser } from '../../helpers/test-factories'
import { loginUser, signupUser, logoutUser } from '../../../features/auth/service'
import { hash } from 'argon2'
import { findValidSessionBySidHash, createSession } from '../../../features/auth/session.service'
import { hashSid, generateSid } from '../../../features/auth/utils'

describe('Auth Service', () => {
  describe('loginUser', () => {
    it('should login successfully with valid credentials', async () => {
      const passwordHash = await hash('ValidPass123!')
      await createTestUser({
        email: 'test@example.com',
        password: passwordHash,
      })

      const result = await loginUser(testDb, 'test@example.com', 'ValidPass123!')

      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data.user.email).toBe('test@example.com')
        expect(result.data.sid).toBeDefined()

        // Vérifier que la session existe en DB
        const sidHash = hashSid(result.data.sid)
        const session = await findValidSessionBySidHash(testDb, sidHash)
        expect(session).toBeDefined()
      }
    })

    it('should fail with invalid email', async () => {
      const result = await loginUser(testDb, 'toto@example.com', 'password')

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

      const result = await loginUser(testDb, 'test@example.com', 'WrongPass123!')

      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error).toBe('invalid_credentials')
      }
    })

    it('should login with email in different case (normalization)', async () => {
      const passwordHash = await hash('ValidPass123!')
      await createTestUser({
        email: 'test@example.com', // minuscules
        password: passwordHash,
      })

      // Login avec majuscules pour voir
      const result = await loginUser(testDb, 'TEST@EXAMPLE.COM', 'ValidPass123!')

      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data.user.email).toBe('test@example.com')
      }
    })

    it('should login with email containing spaces', async () => {
      const passwordHash = await hash('ValidPass123!')
      await createTestUser({
        email: 'test@example.com',
        password: passwordHash,
      })
      // des espaces devant et derrière
      const result = await loginUser(testDb, '  test@example.com  ', 'ValidPass123!')

      expect(result.success).toBe(true)
    })

    it('should fail with empty password', async () => {
      const passwordHash = await hash('ValidPass123!')
      await createTestUser({
        email: 'test@example.com',
        password: passwordHash,
      })

      const result = await loginUser(testDb, 'test@example.com', '')

      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error).toBe('invalid_credentials')
      }
    })

    it('should fail with empty email', async () => {
      const result = await loginUser(testDb, '', 'SomePassword123!')

      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error).toBe('invalid_credentials')
      }
    })
  })

  describe('signupUser', () => {
    it('should create new user successfully', async () => {
      const result = await signupUser(testDb, 'newuser@example.com', 'SecurePass123!')

      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data.user.email).toBe('newuser@example.com')
        expect(result.data.sid).toBeDefined()
        //vérifeir profil existe
        const profile = await testDb.query.profiles.findFirst({
          where: (profiles, { eq }) => eq(profiles.userId, result.data.user.id),
        })
        expect(profile).toBeDefined()
      }
    })

    it('should fail if email already exists', async () => {
      await createTestUser({ email: 'existing@example.com' })

      const result = await signupUser(testDb, 'existing@example.com', 'AnyPass123!')

      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error).toBe('email_exists')
      }
    })

    it('should fail if email exists with different case', async () => {
      await createTestUser({ email: 'existing@example.com' })

      // Essayer de créer avec majuscules
      const result = await signupUser(testDb, 'EXISTING@EXAMPLE.COM', 'AnyPass123!')

      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error).toBe('email_exists')
      }
    })

    it('should normalize email to lowercase on signup', async () => {
      const result = await signupUser(testDb, 'NewUser@Example.COM', 'SecurePass123!')

      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data.user.email).toBe('newuser@example.com')
      }
    })

    it('should trim email space on signup', async () => {
      const result = await signupUser(testDb, '  spaced@example.com  ', 'SecurePass123!')

      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data.user.email).toBe('spaced@example.com')
      }
    })

    it('should create a valid session on signup', async () => {
      const result = await signupUser(testDb, 'sessiontest@example.com', 'SecurePass123!')

      expect(result.success).toBe(true)
      if (result.success) {
        const sidHash = hashSid(result.data.sid)
        const session = await findValidSessionBySidHash(testDb, sidHash)

        expect(session).toBeDefined()
        expect(session?.userId).toBe(result.data.user.id)
        expect(session?.expiresAt.getTime()).toBeGreaterThan(Date.now())
      }
    })
  })

  describe('logoutUser', () => {
    it('should revoke session successfully', async () => {
      const signupResult = await signupUser(testDb, 'logout@example.com', 'Pass123!')

      if (signupResult.success) {
        const result = await logoutUser(testDb, signupResult.data.sid)
        expect(result.success).toBe(true)

        // Vérifier que la session est révoquée
        const sidHash = hashSid(signupResult.data.sid)
        const session = await findValidSessionBySidHash(testDb, sidHash)
        expect(session).toBeNull()
      }
    })

    it('should handle double logout ', async () => {
      const signupResult = await signupUser(testDb, 'doublelogout@example.com', 'Pass123!')

      if (signupResult.success) {
        // Premier logout
        const result1 = await logoutUser(testDb, signupResult.data.sid)
        expect(result1.success).toBe(true)

        // Deuxième logout (même sid)
        const result2 = await logoutUser(testDb, signupResult.data.sid)
        expect(result2.success).toBe(true)
      }
    })

    it('should handle logout with invalid sid', async () => {
      const fakeSid = generateSid() // SID qui n'existe pas en DB

      const result = await logoutUser(testDb, fakeSid)
      expect(result.success).toBe(true) // success côté client
    })

    it('should handle logout with empty sid', async () => {
      const result = await logoutUser(testDb, '')
      expect(result.success).toBe(true)
    })
  })

  describe('Session expiration', () => {
    it('should not find expired session', async () => {
      const passwordHash = await hash('ValidPass123!')
      const user = await createTestUser({
        email: 'expired@example.com',
        password: passwordHash,
      })

      // Créer une session expirée manuellement
      const sid = generateSid()
      const sidHash = hashSid(sid)

      await createSession(testDb, {
        userId: user.id,
        sidHash: sidHash,
        expiresAt: new Date(Date.now() - 1000), // Expirée depuis 1 seconde
      })

      // La session ne doit pas être trouvée
      const session = await findValidSessionBySidHash(testDb, sidHash)
      expect(session).toBeNull()
    })

    it('should not find revoked session', async () => {
      const signupResult = await signupUser(testDb, 'revoked@example.com', 'Pass123!')

      if (signupResult.success) {
        const sidHash = hashSid(signupResult.data.sid)

        // Révoquer la session
        await logoutUser(testDb, signupResult.data.sid)

        // La session ne doit pas être trouvée
        const session = await findValidSessionBySidHash(testDb, sidHash)
        expect(session).toBeNull()
      }
    })

    it('should find valid non-expired session', async () => {
      const passwordHash = await hash('ValidPass123!')
      const user = await createTestUser({
        email: 'valid@example.com',
        password: passwordHash,
      })

      // Créer une session valide
      const sid = generateSid()
      const sidHash = hashSid(sid)

      await createSession(testDb, {
        userId: user.id,
        sidHash: sidHash,
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 jours
      })

      const session = await findValidSessionBySidHash(testDb, sidHash)
      expect(session).toBeDefined()
      expect(session?.userId).toBe(user.id)
    })
  })

  describe('Multiple sessions', () => {
    it('should allow multiple active sessions for same user', async () => {
      const passwordHash = await hash('ValidPass123!')
      await createTestUser({
        email: 'multisession@example.com',
        password: passwordHash,
      })

      // Login 3 fois (simule 3 appareils)
      const login1 = await loginUser(testDb, 'multisession@example.com', 'ValidPass123!')
      const login2 = await loginUser(testDb, 'multisession@example.com', 'ValidPass123!')
      const login3 = await loginUser(testDb, 'multisession@example.com', 'ValidPass123!')

      expect(login1.success).toBe(true)
      expect(login2.success).toBe(true)
      expect(login3.success).toBe(true)

      if (login1.success && login2.success && login3.success) {
        // Les 3 sessions doivent être valides
        const session1 = await findValidSessionBySidHash(testDb, hashSid(login1.data.sid))
        const session2 = await findValidSessionBySidHash(testDb, hashSid(login2.data.sid))
        const session3 = await findValidSessionBySidHash(testDb, hashSid(login3.data.sid))

        expect(session1).toBeDefined()
        expect(session2).toBeDefined()
        expect(session3).toBeDefined()

        // Logout d'une session ne doit pas affecter les autres
        await logoutUser(testDb, login1.data.sid)

        const session1After = await findValidSessionBySidHash(testDb, hashSid(login1.data.sid))
        const session2After = await findValidSessionBySidHash(testDb, hashSid(login2.data.sid))

        expect(session1After).toBeNull() // Révoquée
        expect(session2After).toBeDefined() // Toujours valide
      }
    })
  })
})
