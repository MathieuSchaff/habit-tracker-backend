import type {
  Habit,
  HabitFrequency,
  HabitTiming,
  HabitReminder,
  HabitPeriod,
  HabitCheck,
} from "../../db/schema/habits";

// Export des types Zod (inputs de validation)
export type {
  Frequency,
  Timing,
  Reminder,
  Period,
  CreateHabitInput,
  UpdateHabitInput,
  CheckHabitInput,
  ToggleCheckInput,
  GetHabitChecksQuery,
  GetUserChecksQuery,
  GetHabitStatsQuery,
  UpdateFrequencyInput,
  SetTimingsInput,
  SetRemindersInput,
  SetPeriodInput,
} from "./validation";

// Types composés/enrichis
export type HabitWithRelations = Habit & {
  frequency: HabitFrequency | null;
  timings: HabitTiming[];
  reminders: HabitReminder[];
  period: HabitPeriod | null;
};

export type TodayHabit = {
  habit: Habit;
  timings: HabitTiming[];
  checks: HabitCheck[];
  isCompleted: boolean;
};

export type HabitStats = {
  totalChecks: number;
  currentStreak: number;
  completionRate: number;
};
