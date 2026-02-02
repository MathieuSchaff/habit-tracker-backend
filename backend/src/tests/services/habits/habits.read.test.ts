import { describe, it, expect, beforeEach } from 'bun:test'
import { testDb } from '../../db.test.config'
import { createTestUser } from '../../helpers/test-factories'
import { createTestHabit } from '../../helpers/habit-helpers'
import { createHabit, getHabitById, getUserHabits } from '../../../features/habits/service'
import type { CreateHabitInput } from '../../../features/habits/validation'
import { eq } from 'drizzle-orm'
import { habits } from '../../../db/schema/habits'

describe('Habits Reading', () => {
  let user: any

  beforeEach(async () => {
    user = await createTestUser()
  })

  describe('getHabitById', () => {
    it("returns null if the ID doesn't exist", async () => {
      const fakeId = crypto.randomUUID()
      const res = await getHabitById(fakeId, testDb)
      expect(res).toBeNull()
    })

    it('fetches a habit with all its nested relations', async () => {
      const payload: CreateHabitInput = {
        userId: user.id,
        name: 'Course matinale',
        category: 'health',
        frequency: { type: 'daily' },
        timings: [{ time: '08:00' }],
        reminders: [{ beforeMinutes: 10 }],
      }

      const created = await createHabit(payload, testDb)
      const habit = await getHabitById(created.id, testDb)

      expect(habit).toBeDefined()
      expect(habit?.id).toBe(created.id)
      expect(habit?.timings).toHaveLength(1)
      expect(habit?.reminders).toHaveLength(1)
    })

    it('handles simple habits without extra relations', async () => {
      const basic = await createTestHabit(user.id, { name: 'Truc à faire' })
      const res = await getHabitById(basic.id, testDb)

      expect(res?.frequency).toBeNull()
      expect(res?.timings).toHaveLength(0)
      expect(res?.period).toBeNull()
    })
  })

  describe('getUserHabits', () => {
    it('returns an empty list when user has no data', async () => {
      const list = await getUserHabits(user.id, testDb)
      expect(list).toEqual([])
    })

    it("doesn't leak habits from other users", async () => {
      const stranger = await createTestUser({ email: 'toto@test.com' })

      await createTestHabit(user.id, { name: 'Ma tâche' })
      await createTestHabit(stranger.id, { name: 'Autre tâche' })

      const results = await getUserHabits(user.id, testDb)

      expect(results).toHaveLength(1)
      expect(results[0]?.name).toBe('Ma tâche')
    })

    it('filters out archived habits by default', async () => {
      const habit = await createTestHabit(user.id, {
        name: 'Vieille habitude',
      })

      await testDb.update(habits).set({ archivedAt: new Date() }).where(eq(habits.id, habit.id))

      const activeOnes = await getUserHabits(user.id, testDb)
      expect(activeOnes).toHaveLength(0)
    })
  })
})
