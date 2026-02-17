import { beforeEach, describe, expect, it } from 'bun:test'

import type { CreateHabitInput } from '@habit-tracker/shared'

import { eq } from 'drizzle-orm'

import { habits } from '../../../db/schema/habits'
import {
  archiveHabit,
  createHabit,
  deleteHabit,
  getHabitById,
  getTodayHabits,
  getUserHabits,
  getUserHabitsWithRelations,
  HabitError,
  restoreHabit,
  updateHabit,
} from '../../../features/habits/service'
import { testDb } from '../../db.test.config'
import { createTestHabit } from '../../helpers/habit-helpers'
import { createTestUser } from '../../helpers/test-factories'

describe('Habit CRUD', () => {
  // biome-ignore lint: testing
  let user: any

  beforeEach(async () => {
    user = await createTestUser()
  })

  // ─── createHabit ──────────────────────────────────────────────

  describe('createHabit', () => {
    it('should save a basic habit correctly', async () => {
      const habit = await createHabit(
        {
          userId: user.id,
          name: 'Pompes',
          category: 'fitness',
        },
        testDb
      )

      expect(habit.id).toBeDefined()
      expect(habit.name).toBe('Pompes')
      expect(habit.userId).toBe(user.id)
      expect(habit.archivedAt).toBeNull()
    })

    it('can handle weekly frequency with specific days', async () => {
      const data: CreateHabitInput = {
        userId: user.id,
        name: 'Musculation',
        category: 'health',
        frequency: {
          type: 'weekly',
          daysOfWeek: ['monday', 'wednesday', 'friday'],
        },
      }

      const created = await createHabit(data, testDb)
      const fullHabit = await getHabitById(created.id, testDb)

      expect(fullHabit?.frequency?.type).toBe('weekly')
      expect(fullHabit?.frequency?.daysOfWeek).toContain('wednesday')
    })

    it('supports multiple timings and labels', async () => {
      const { id } = await createHabit(
        {
          userId: user.id,
          name: 'Vitamines',
          category: 'health',
          timings: [
            { time: '08:00', label: 'Petit-déjeuner' },
            { time: '20:00', label: 'Dîner' },
          ],
        },
        testDb
      )

      const res = await getHabitById(id, testDb)
      expect(res?.timings).toHaveLength(2)
      expect(res?.timings[0]?.label).toBe('Petit-déjeuner')
    })

    it('stores reminder settings correctly', async () => {
      const habit = await createHabit(
        {
          userId: user.id,
          name: 'Méditation',
          category: 'mindfulness',
          reminders: [{ beforeMinutes: 15 }, { beforeMinutes: 5 }],
        },
        testDb
      )

      const res = await getHabitById(habit.id, testDb)
      expect(res?.reminders.map((r) => r.beforeMinutes)).toEqual([15, 5])
    })

    it('handles seasonal periods (active months)', async () => {
      const summerRun: CreateHabitInput = {
        userId: user.id,
        name: "Course d'été",
        category: 'fitness',
        period: {
          startDate: '2025-06-01',
          endDate: '2025-08-31',
          activeMonths: [6, 7, 8],
        },
      }

      const created = await createHabit(summerRun, testDb)
      const res = await getHabitById(created.id, testDb)

      expect(res?.period?.activeMonths).toEqual([6, 7, 8])
      expect(res?.period?.startDate).toBe('2025-06-01')
    })

    it('works when everything is combined (all relations)', async () => {
      const fullInput: CreateHabitInput = {
        userId: user.id,
        name: 'Routine complète',
        category: 'health',
        frequency: { type: 'daily' },
        timings: [{ time: '07:00' }],
        reminders: [{ beforeMinutes: 10 }],
        period: { startDate: '2025-01-01' },
      }

      const created = await createHabit(fullInput, testDb)
      const res = await getHabitById(created.id, testDb)

      expect(res?.frequency).not.toBeNull()
      expect(res?.timings).toHaveLength(1)
      expect(res?.reminders).toHaveLength(1)
      expect(res?.period).not.toBeNull()
    })
  })

  // ─── getHabitById ─────────────────────────────────────────────

  describe('getHabitById', () => {
    it("should throw habit_not_found if the ID doesn't exist", async () => {
      const fakeId = crypto.randomUUID()

      try {
        await getHabitById(fakeId, testDb)
        throw new Error('should have thrown')
      } catch (e) {
        expect(e).toBeInstanceOf(HabitError)
        expect((e as HabitError).code).toBe('habit_not_found')
      }
      expect(getHabitById(fakeId, testDb)).rejects.toThrow(HabitError)
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

  // ─── getUserHabits ────────────────────────────────────────────

  describe('getUserHabits', () => {
    it('returns an empty list when user has no data', async () => {
      const list = await getUserHabits(user.id, testDb)
      expect(list).toEqual([])
    })

    it("doesn't leak habits from other users", async () => {
      const stranger = await createTestUser('toto@test.com')

      await createTestHabit(user.id, { name: 'Ma tâche' })
      await createTestHabit(stranger.id, { name: 'Autre tâche' })
      const allHabitsForUser = await getUserHabits(user.id, testDb)
      console.log(`Habits for user ${user.id}: ${allHabitsForUser.length}`)
      allHabitsForUser.forEach((h) => {
        console.log(`  • ${h.name} (id: ${h.id})`)
      })
      const todayHabits = await getTodayHabits(user.id, testDb)
      console.log(`Today habits count: ${todayHabits.length}`)
      todayHabits.forEach((th) => {
        console.log(`  → ${th.habit.name} (userId: ${th.habit.userId})`)
      })
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

  // ─── getUserHabitsWithRelations ───────────────────────────────

  describe('getUserHabitsWithRelations', () => {
    it('should return habits with all nested relations', async () => {
      await createHabit(
        {
          userId: user.id,
          name: 'Complet',
          category: 'test',
          frequency: { type: 'daily' },
          timings: [{ time: '09:00' }],
          reminders: [{ beforeMinutes: 5 }],
        },
        testDb
      )

      const result = await getUserHabitsWithRelations(user.id, testDb)

      expect(result).toHaveLength(1)
      expect(result[0]?.frequency?.type).toBe('daily')
      expect(result[0]?.timings).toHaveLength(1)
      expect(result[0]?.reminders).toHaveLength(1)
    })

    it('should exclude archived habits', async () => {
      const active = await createTestHabit(user.id, { name: 'Active' })
      const toArchive = await createTestHabit(user.id, { name: 'Archived' })
      await archiveHabit(toArchive.id, testDb)

      const result = await getUserHabitsWithRelations(user.id, testDb)

      expect(result).toHaveLength(1)
      expect(result[0]?.id).toBe(active.id)
    })
  })

  // ─── updateHabit ──────────────────────────────────────────────

  describe('updateHabit', () => {
    it('should update name and category', async () => {
      const habit = await createTestHabit(user.id, { name: 'Old', category: 'old' })

      const updated = await updateHabit(habit.id, { name: 'New', category: 'new' }, testDb)

      expect(updated.name).toBe('New')
      expect(updated.category).toBe('new')
    })

    it('should update only provided fields', async () => {
      const habit = await createTestHabit(user.id, { name: 'Keep', category: 'original' })

      const updated = await updateHabit(habit.id, { name: 'Changed' }, testDb)

      expect(updated.name).toBe('Changed')
      expect(updated.category).toBe('original')
    })

    it('should update the updatedAt timestamp', async () => {
      const habit = await createTestHabit(user.id)

      const updated = await updateHabit(habit.id, { name: 'Renamed' }, testDb)

      expect(new Date(updated.updatedAt).getTime()).toBeGreaterThan(
        new Date(habit.updatedAt).getTime()
      )
    })

    it('should throw habit_not_found for unknown id', async () => {
      const fakeId = crypto.randomUUID()

      try {
        await updateHabit(fakeId, { name: 'Nope' }, testDb)
        throw new Error('should have thrown')
      } catch (error) {
        expect(error).toBeInstanceOf(HabitError)
        expect((error as HabitError).code).toBe('habit_not_found')
      }
    })
  })

  // ─── archiveHabit ─────────────────────────────────────────────

  describe('archiveHabit', () => {
    it('should set archivedAt to a date', async () => {
      const habit = await createTestHabit(user.id)

      const archived = await archiveHabit(habit.id, testDb)

      expect(archived.archivedAt).not.toBeNull()
      expect(archived.archivedAt).toBeInstanceOf(Date)
    })

    it('should throw habit_not_found for unknown id', async () => {
      const fakeId = crypto.randomUUID()

      try {
        await archiveHabit(fakeId, testDb)
        throw new Error('should have thrown')
      } catch (error) {
        expect(error).toBeInstanceOf(HabitError)
        expect((error as HabitError).code).toBe('habit_not_found')
      }
    })
  })

  // ─── restoreHabit ─────────────────────────────────────────────

  describe('restoreHabit', () => {
    it('should clear archivedAt back to null', async () => {
      const habit = await createTestHabit(user.id)
      await archiveHabit(habit.id, testDb)

      const restored = await restoreHabit(habit.id, testDb)

      expect(restored.archivedAt).toBeNull()
    })

    it('should throw habit_not_found for unknown id', async () => {
      const fakeId = crypto.randomUUID()

      try {
        await restoreHabit(fakeId, testDb)
        throw new Error('should have thrown')
      } catch (error) {
        expect(error).toBeInstanceOf(HabitError)
        expect((error as HabitError).code).toBe('habit_not_found')
      }
    })
  })

  // ─── deleteHabit ──────────────────────────────────────────────

  describe('deleteHabit', () => {
    it('should permanently remove the habit', async () => {
      const habit = await createTestHabit(user.id)

      await deleteHabit(habit.id, testDb)

      expect(getHabitById(habit.id, testDb)).rejects.toThrow(HabitError)
    })

    it('should throw habit_not_found for unknown id', async () => {
      const fakeId = crypto.randomUUID()

      try {
        await deleteHabit(fakeId, testDb)
        throw new Error('should have thrown')
      } catch (error) {
        expect(error).toBeInstanceOf(HabitError)
        expect((error as HabitError).code).toBe('habit_not_found')
      }
    })
  })
})
