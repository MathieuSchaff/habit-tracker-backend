import { describe, it, expect, beforeEach } from 'bun:test'
import { testDb } from '../../db.test.config'
import { createTestUser } from '../../helpers/test-factories'
import { createTestHabit } from '../../helpers/habit-helpers'
import { checkHabit, getHabitById } from '../../../features/habits/service'

describe('Habit Checks', () => {
  let testUser: any

  beforeEach(async () => {
    testUser = await createTestUser()
  })

  describe('checkHabit', () => {
    it('should check a habit for a specific date', async () => {
      const habit = await createTestHabit(testUser.id)

      const check = await checkHabit(
        {
          userId: testUser.id,
          habitId: habit.id,
          date: '2025-01-15',
        },
        testDb
      )

      expect(check).toBeDefined()
      expect(check.habitId).toBe(habit.id)
      expect(check.userId).toBe(testUser.id)
      expect(check.date).toBe('2025-01-15')
      expect(check.timingId).toBeNull()
      expect(check.actualTime).toBeNull()
    })

    it('should check habit with timing', async () => {
      const habit = await createTestHabit(testUser.id, {
        name: 'Routine matinale',
        timings: [{ time: '07:00', label: 'Matin' }],
      })

      const habitWithRelations = await getHabitById(habit.id, testDb)
      const timingId = habitWithRelations?.timings[0]?.id

      if (!timingId) {
        throw new Error('Timing ID not found in habit')
      }

      const check = await checkHabit(
        {
          userId: testUser.id,
          habitId: habit.id,
          date: '2025-01-15',
          timingId: timingId,
          actualTime: '07:15',
        },
        testDb
      )

      expect(check.timingId).toBe(timingId)
      expect(check.actualTime).toBe('07:15')
    })

    it('should allow multiple checks for same habit on same day with different timings', async () => {
      const habit = await createTestHabit(testUser.id, {
        name: 'Prendre médicaments',
        timings: [
          { time: '08:00', label: 'Matin' },
          { time: '20:00', label: 'Soir' },
        ],
      })

      const habitWithRelations = await getHabitById(habit.id, testDb)
      const [timing1, timing2] = habitWithRelations!.timings

      if (!timing1 || !timing2) {
        throw new Error('Timings not found in habit')
      }

      const check1 = await checkHabit(
        {
          userId: testUser.id,
          habitId: habit.id,
          date: '2025-01-15',
          timingId: timing1.id,
        },
        testDb
      )

      const check2 = await checkHabit(
        {
          userId: testUser.id,
          habitId: habit.id,
          date: '2025-01-15',
          timingId: timing2.id,
        },
        testDb
      )

      expect(check1.timingId).toBe(timing1.id)
      expect(check2.timingId).toBe(timing2.id)
      expect(check1.id).not.toBe(check2.id)
    })
  })
})
