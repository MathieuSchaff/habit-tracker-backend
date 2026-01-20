import { describe, it, expect, beforeEach } from "bun:test";
import {
  createTestHabit,
  checkConsecutiveDays,
} from "../../helpers/habit-helpers";
import { getToday, getYesterday, getTestDate } from "../../../utils/dates";
import { checkHabit, getHabitStreak } from "../../../features/habits/service";
import { testDb } from "../../db.test.config";
import { createTestUser } from "../../helpers/test-factories";

describe("Habit Streaks Logic", () => {
  let user: any;

  beforeEach(async () => {
    user = await createTestUser();
  });

  describe("getHabitStreak()", () => {
    it("returns 0 if the habit is brand new", async () => {
      const { id } = await createTestHabit(user.id, { name: "Sport" });
      const streak = await getHabitStreak(id, testDb);

      expect(streak).toBe(0);
    });

    it("counts 1 when checked only today", async () => {
      const habit = await createTestHabit(user.id, { name: "Lecture" });

      await checkHabit(
        {
          userId: user.id,
          habitId: habit.id,
          date: getToday(),
        },
        testDb,
      );

      expect(await getHabitStreak(habit.id, testDb)).toBe(1);
    });

    it("calculates long streaks correctly (5 days)", async () => {
      const habit = await createTestHabit(user.id, { name: "Méditation" });

      await checkConsecutiveDays(habit.id, user.id, 5);

      const res = await getHabitStreak(habit.id, testDb);
      expect(res).toBe(5);
    });

    it("resets streak calculation when there's a gap in history", async () => {
      const habit = await createTestHabit(user.id, { name: "Code" });

      await checkConsecutiveDays(habit.id, user.id, 2);

      for (const day of [4, 5]) {
        await checkHabit(
          {
            userId: user.id,
            habitId: habit.id,
            date: getTestDate(day),
          },
          testDb,
        );
      }

      const streak = await getHabitStreak(habit.id, testDb);
      expect(streak).toBe(2);
    });

    it("still counts 1 if today is missed but yesterday was done", async () => {
      const habit = await createTestHabit(user.id, { name: "Arroser plantes" });

      await checkHabit(
        {
          userId: user.id,
          habitId: habit.id,
          date: getYesterday(),
        },
        testDb,
      );

      expect(await getHabitStreak(habit.id, testDb)).toBe(1);
    });
  });
});
