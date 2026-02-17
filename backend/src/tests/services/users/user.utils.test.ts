import { randomUUID } from 'node:crypto'
import { describe, expect, it } from 'bun:test'

import type { Email, HashedPassword } from '@habit-tracker/shared'
import { emailSchema } from '@habit-tracker/shared'

import { hash } from 'argon2' // ou ton helper de hash

import { createUser, getUser } from '../../../features/auth/user.utils'
import { getProfile } from '../../../features/profile'
import { testDb } from '../../db.test.config'
// import { getProfile } from '../../../features/profile/profile.utils'
import { createTestUser } from '../../helpers/test-factories'

describe('User Utils', () => {
  describe('getUser', () => {
    it('should find user by email', async () => {
      const email = 'find@example.com' as Email
      const passwordHash = (await hash('Azerty123!')) as HashedPassword

      // On insère manuellement pour tester la récupération
      await createUser(testDb, { email, passwordHash })

      const user = await getUser(testDb, email)

      expect(user).toBeDefined()
      expect(user?.email).toBe('find@example.com')
    })

    it('should return null for non-existent email', async () => {
      const user = await getUser(testDb, 'notfound@example.com' as Email)
      expect(user).toBeNull()
    })
  })

  describe('createUser', () => {
    it('should create a new user', async () => {
      const email = 'newuser@example.com' as Email
      const passwordHash = (await hash('TestPass123!')) as HashedPassword

      const user = await createUser(testDb, {
        email,
        passwordHash,
      })

      expect(user).toBeDefined()
      expect(user?.email).toBe('newuser@example.com')
      expect(user?.passwordHash).toBe(passwordHash)
    })

    it('should normalize email via schema', async () => {
      const passwordHash = (await hash('TestPass123!')) as HashedPassword

      // On teste que le schéma fait bien son boulot de normalisation
      const emailParsed = emailSchema.parse('  TOTO@toto.com  ')

      const user = await createUser(testDb, {
        email: emailParsed,
        passwordHash,
      })

      expect(user?.email).toBe('toto@toto.com')
    })
  })

  describe('getProfile', () => {
    it('should find profile by userId', async () => {
      // Ici on utilise le helper car createTestUser crée l'user ET le profil
      const user = await createTestUser('profile-test@example.com', 'Azerty123!')

      const profile = await getProfile(testDb, user.id)

      expect(profile).toBeDefined()
      expect(profile?.userId).toBe(user.id)
    })

    it("should return null if profile doesn't exist", async () => {
      // On génère un UUID qui n'existe pas en base
      const fakeId = randomUUID()

      const profile = await getProfile(testDb, fakeId)
      expect(profile).toBeNull()
    })
  })
})
