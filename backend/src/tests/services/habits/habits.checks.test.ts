import { beforeEach, describe, expect, it } from 'bun:test'

import {
  checkHabit,
  getHabitById,
  getHabitChecks,
  getUserChecksForDate,
  HabitError,
  isHabitChecked,
  toggleHabitCheck,
  uncheckHabit,
  uncheckHabitByDate,
} from '../../../features/habits/service'
import { testDb } from '../../db.test.config'
import { createTestHabit } from '../../helpers/habit-helpers'
import { createTestUser } from '../../helpers/test-factories'

describe('Habit Checks', () => {
  // biome-ignore lint: testing
  let user: any

  beforeEach(async () => {
    user = await createTestUser()
  })

  // ─── checkHabit ───────────────────────────────────────────────

  describe('checkHabit', () => {
    it('should check a habit for a specific date', async () => {
      const habit = await createTestHabit(user.id)

      const check = await checkHabit(
        {
          userId: user.id,
          habitId: habit.id,
          date: '2025-01-15',
        },
        testDb
      )

      expect(check).toBeDefined()
      expect(check.habitId).toBe(habit.id)
      expect(check.userId).toBe(user.id)
      expect(check.date).toBe('2025-01-15')
      expect(check.timingId).toBeNull()
      expect(check.actualTime).toBeNull()
    })

    it('should check habit with timing', async () => {
      const habit = await createTestHabit(user.id, {
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
          userId: user.id,
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
      const habit = await createTestHabit(user.id, {
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
          userId: user.id,
          habitId: habit.id,
          date: '2025-01-15',
          timingId: timing1.id,
        },
        testDb
      )

      const check2 = await checkHabit(
        {
          userId: user.id,
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

  // ─── uncheckHabit ─────────────────────────────────────────────

  describe('uncheckHabit', () => {
    it('should delete a check by its id', async () => {
      const habit = await createTestHabit(user.id)

      const check = await checkHabit(
        { userId: user.id, habitId: habit.id, date: '2025-06-15' },
        testDb
      )

      await uncheckHabit(check.id, testDb)

      const isChecked = await isHabitChecked(habit.id, '2025-06-15', testDb)
      expect(isChecked).toBe(false)
    })

    it('should throw check_not_found for unknown id', async () => {
      const fakeId = crypto.randomUUID()

      try {
        await uncheckHabit(fakeId, testDb)
        throw new Error('should have thrown')
      } catch (error) {
        expect(error).toBeInstanceOf(HabitError)
        expect((error as HabitError).code).toBe('check_not_found')
      }
    })
  })

  // ─── uncheckHabitByDate ───────────────────────────────────────

  describe('uncheckHabitByDate', () => {
    it('should delete a check by habitId + date', async () => {
      const habit = await createTestHabit(user.id)

      await checkHabit({ userId: user.id, habitId: habit.id, date: '2025-06-15' }, testDb)

      await uncheckHabitByDate(habit.id, '2025-06-15', testDb)

      expect(await isHabitChecked(habit.id, '2025-06-15', testDb)).toBe(false)
    })

    it('should throw check_not_found if no check for that date', async () => {
      const habit = await createTestHabit(user.id)

      try {
        await uncheckHabitByDate(habit.id, '2099-01-01', testDb)
        throw new Error('should have thrown')
      } catch (error) {
        expect(error).toBeInstanceOf(HabitError)
        expect((error as HabitError).code).toBe('check_not_found')
      }
    })
  })

  // ─── isHabitChecked ───────────────────────────────────────────

  describe('isHabitChecked', () => {
    it('should return true when habit is checked for that date', async () => {
      const habit = await createTestHabit(user.id)

      await checkHabit({ userId: user.id, habitId: habit.id, date: '2025-06-15' }, testDb)

      expect(await isHabitChecked(habit.id, '2025-06-15', testDb)).toBe(true)
    })

    it('should return false when habit is not checked for that date', async () => {
      const habit = await createTestHabit(user.id)

      expect(await isHabitChecked(habit.id, '2025-06-15', testDb)).toBe(false)
    })
  })

  // ─── getUserChecksForDate ─────────────────────────────────────

  describe('getUserChecksForDate', () => {
    it('should return all checks for a user on a given date', async () => {
      const h1 = await createTestHabit(user.id, { name: 'H1' })
      const h2 = await createTestHabit(user.id, { name: 'H2' })

      await checkHabit({ userId: user.id, habitId: h1.id, date: '2025-06-15' }, testDb)
      await checkHabit({ userId: user.id, habitId: h2.id, date: '2025-06-15' }, testDb)
      // Autre date — ne doit pas apparaître
      await checkHabit({ userId: user.id, habitId: h1.id, date: '2025-06-16' }, testDb)

      const checks = await getUserChecksForDate(user.id, '2025-06-15', testDb)

      expect(checks).toHaveLength(2)
    })

    it('should return empty array when no checks for that date', async () => {
      const checks = await getUserChecksForDate(user.id, '2099-01-01', testDb)

      expect(checks).toEqual([])
    })

    it('should not return checks from other users', async () => {
      const stranger = await createTestUser('stranger@test.com')
      const habit = await createTestHabit(user.id)
      const strangerHabit = await createTestHabit(stranger.id)

      await checkHabit({ userId: user.id, habitId: habit.id, date: '2025-06-15' }, testDb)
      await checkHabit(
        { userId: stranger.id, habitId: strangerHabit.id, date: '2025-06-15' },
        testDb
      )

      const checks = await getUserChecksForDate(user.id, '2025-06-15', testDb)

      expect(checks).toHaveLength(1)
      expect(checks[0]?.userId).toBe(user.id)
    })
  })

  // ─── getHabitChecks ───────────────────────────────────────────

  describe('getHabitChecks', () => {
    it('should return checks within a date range ordered ASC', async () => {
      const habit = await createTestHabit(user.id)

      await checkHabit({ userId: user.id, habitId: habit.id, date: '2025-06-20' }, testDb)
      await checkHabit({ userId: user.id, habitId: habit.id, date: '2025-06-10' }, testDb)
      await checkHabit({ userId: user.id, habitId: habit.id, date: '2025-06-15' }, testDb)
      // Hors range
      await checkHabit({ userId: user.id, habitId: habit.id, date: '2025-07-01' }, testDb)

      const checks = await getHabitChecks(habit.id, '2025-06-01', '2025-06-30', testDb)

      expect(checks).toHaveLength(3)
      expect(checks[0]?.date).toBe('2025-06-10')
      expect(checks[1]?.date).toBe('2025-06-15')
      expect(checks[2]?.date).toBe('2025-06-20')
    })

    it('should return empty array when no checks in range', async () => {
      const habit = await createTestHabit(user.id)

      const checks = await getHabitChecks(habit.id, '2099-01-01', '2099-12-31', testDb)

      expect(checks).toEqual([])
    })
  })

  // ─── toggleHabitCheck ─────────────────────────────────────────

  describe('toggleHabitCheck', () => {
    it('should check when not already checked', async () => {
      const habit = await createTestHabit(user.id)

      const result = await toggleHabitCheck(
        { userId: user.id, habitId: habit.id, date: '2025-06-15' },
        testDb
      )

      expect(result.checked).toBe(true)
      expect(result.check).toBeDefined()
      expect(result.check?.habitId).toBe(habit.id)
    })

    it('should uncheck when already checked', async () => {
      const habit = await createTestHabit(user.id)

      await toggleHabitCheck({ userId: user.id, habitId: habit.id, date: '2025-06-15' }, testDb)

      const result = await toggleHabitCheck(
        { userId: user.id, habitId: habit.id, date: '2025-06-15' },
        testDb
      )

      expect(result.checked).toBe(false)
      expect(result.check).toBeUndefined()
    })

    it('should handle timing-specific toggles independently', async () => {
      const habit = await createTestHabit(user.id, {
        name: 'Multi-timing',
        timings: [
          { time: '08:00', label: 'Matin' },
          { time: '20:00', label: 'Soir' },
        ],
      })

      const full = await getHabitById(habit.id, testDb)
      const [timing1, timing2] = full.timings

      if (!timing1 || !timing2) throw new Error('Timings not found')

      // Check matin
      await toggleHabitCheck(
        { userId: user.id, habitId: habit.id, date: '2025-06-15', timingId: timing1.id },
        testDb
      )

      // Check soir
      await toggleHabitCheck(
        { userId: user.id, habitId: habit.id, date: '2025-06-15', timingId: timing2.id },
        testDb
      )

      // Uncheck matin seulement
      const result = await toggleHabitCheck(
        { userId: user.id, habitId: habit.id, date: '2025-06-15', timingId: timing1.id },
        testDb
      )

      expect(result.checked).toBe(false)

      // Le soir est toujours là
      const remaining = await getUserChecksForDate(user.id, '2025-06-15', testDb)
      expect(remaining).toHaveLength(1)
      expect(remaining[0]?.timingId).toBe(timing2.id)
    })

    it('should toggle independently for different dates', async () => {
      const habit = await createTestHabit(user.id)

      await toggleHabitCheck({ userId: user.id, habitId: habit.id, date: '2025-06-15' }, testDb)
      await toggleHabitCheck({ userId: user.id, habitId: habit.id, date: '2025-06-16' }, testDb)

      // Uncheck le 15 seulement
      await toggleHabitCheck({ userId: user.id, habitId: habit.id, date: '2025-06-15' }, testDb)

      expect(await isHabitChecked(habit.id, '2025-06-15', testDb)).toBe(false)
      expect(await isHabitChecked(habit.id, '2025-06-16', testDb)).toBe(true)
    })
  })
})
