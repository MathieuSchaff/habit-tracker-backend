import { testDb } from "../../db/db.test.config";
import { createHabit, checkHabit } from "../../utils/habits/habitsCrudFuncs";
import type { CreateHabitInput } from "../../utils/habits/validation";
import { getTestDate } from "../../utils/dates";

//  override de n'importe quel champ mais de base, des données par défaut

export async function createTestHabit(
  userId: string,
  overrides?: Partial<CreateHabitInput>
) {
  return await createHabit(
    {
      userId,
      name: "Habitude test",
      category: "health",
      ...overrides,
    },
    testDb
  );
}

// Check aujourd'hui + 4 jours précédents = 5 jours consécutifs
//await checkConsecutiveDays(habit.id, user.id, 5);
export async function checkConsecutiveDays(
  habitId: string,
  userId: string,
  numberOfDays: number
) {
  const checks = [];

  for (let i = 0; i < numberOfDays; i++) {
    const check = await checkHabit(
      {
        userId,
        habitId,
        date: getTestDate(i), // 0 = aujourd'hui, 1 = hier, etc.
      },
      testDb
    );
    checks.push(check);
  }

  return checks;
}
