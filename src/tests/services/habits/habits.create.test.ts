import { describe, it, expect, beforeEach } from "bun:test";
import { testDb } from "../../../db/db.test.config";
import { createTestUser } from "../../helpers/test-factories";
import {
  createHabit,
  getHabitById,
} from "../../../utils/habits/habitsCrudFuncs";
import type { CreateHabitInput } from "../../../utils/habits/validation";

describe("Habit Creation Logic", () => {
  let user: any;

  beforeEach(async () => {
    user = await createTestUser();
  });

  it("should save a basic habit correctly", async () => {
    const habit = await createHabit(
      {
        userId: user.id,
        name: "Pompes",
        category: "fitness",
      },
      testDb
    );

    expect(habit.id).toBeDefined();
    expect(habit.name).toBe("Pompes");
    expect(habit.userId).toBe(user.id);
    expect(habit.archivedAt).toBeNull();
  });

  describe("Complex habits (with relations)", () => {
    it("can handle weekly frequency with specific days", async () => {
      const data: CreateHabitInput = {
        userId: user.id,
        name: "Musculation",
        category: "health",
        frequency: {
          type: "weekly",
          daysOfWeek: ["monday", "wednesday", "friday"],
        },
      };

      const created = await createHabit(data, testDb);
      const fullHabit = await getHabitById(created.id, testDb);

      expect(fullHabit?.frequency?.type).toBe("weekly");
      expect(fullHabit?.frequency?.daysOfWeek).toContain("wednesday");
    });

    it("supports multiple timings and labels", async () => {
      const { id } = await createHabit(
        {
          userId: user.id,
          name: "Vitamines",
          category: "health",
          timings: [
            { time: "08:00", label: "Petit-déjeuner" },
            { time: "20:00", label: "Dîner" },
          ],
        },
        testDb
      );

      const res = await getHabitById(id, testDb);
      expect(res?.timings).toHaveLength(2);
      expect(res?.timings[0]?.label).toBe("Petit-déjeuner");
    });

    it("stores reminder settings correctly", async () => {
      const habit = await createHabit(
        {
          userId: user.id,
          name: "Méditation",
          category: "mindfulness",
          reminders: [{ beforeMinutes: 15 }, { beforeMinutes: 5 }],
        },
        testDb
      );

      const res = await getHabitById(habit.id, testDb);
      expect(res?.reminders.map((r) => r.beforeMinutes)).toEqual([15, 5]);
    });

    it("handles seasonal periods (active months)", async () => {
      const summerRun: CreateHabitInput = {
        userId: user.id,
        name: "Course d'été",
        category: "fitness",
        period: {
          startDate: "2025-06-01",
          endDate: "2025-08-31",
          activeMonths: [6, 7, 8],
        },
      };

      const created = await createHabit(summerRun, testDb);
      const res = await getHabitById(created.id, testDb);

      expect(res?.period?.activeMonths).toEqual([6, 7, 8]);
      expect(res?.period?.startDate).toBe("2025-06-01");
    });

    it("works when everything is combined (all relations)", async () => {
      const fullInput: CreateHabitInput = {
        userId: user.id,
        name: "Routine complète",
        category: "health",
        frequency: { type: "daily" },
        timings: [{ time: "07:00" }],
        reminders: [{ beforeMinutes: 10 }],
        period: { startDate: "2025-01-01" },
      };

      const created = await createHabit(fullInput, testDb);
      const res = await getHabitById(created.id, testDb);

      // On vérifie juste que tout est là
      expect(res?.frequency).not.toBeNull();
      expect(res?.timings).toHaveLength(1);
      expect(res?.reminders).toHaveLength(1);
      expect(res?.period).not.toBeNull();
    });
  });
});
