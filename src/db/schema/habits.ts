import {
  pgTable,
  uuid,
  text,
  timestamp,
  date,
  integer,
  index,
} from "drizzle-orm/pg-core";

import { users } from "./users";

export const habits = pgTable("habits", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
  name: text("name").notNull(),
  category: text("category").notNull(),

  archivedAt: timestamp("archived_at", { withTimezone: true }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
export const habitFrequencies = pgTable("habit_frequencies", {
  habitId: uuid("habit_id")
    .primaryKey()
    .references(() => habits.id, { onDelete: "cascade" }),

  type: text("type").notNull(), // "daily" | "weekly" | "monthly" | "interval"

  // Pour interval
  intervalDays: integer("interval_days"),

  // Pour weekly
  daysOfWeek: text("days_of_week").array(), // ["monday", "wednesday"]

  // Pour monthly
  daysOfMonth: integer("days_of_month").array(), // [1, 15, 30]

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const habitTimings = pgTable(
  "habit_timings",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    habitId: uuid("habit_id")
      .notNull()
      .references(() => habits.id, { onDelete: "cascade" }),

    time: text("time").notNull(), // "08:00", "12:30", "20:00"
    label: text("label"), // "morning", "noon", "evening" (optionnel, pour l'UI)

    createdAt: timestamp("created_at").notNull().defaultNow(),
  },
  (t) => [index("habit_timings_habit_idx").on(t.habitId)]
);
export const habitReminders = pgTable(
  "habit_reminders",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    habitId: uuid("habit_id")
      .notNull()
      .references(() => habits.id, { onDelete: "cascade" }),

    beforeMinutes: integer("before_minutes").notNull(), // 60, 120, 1440

    createdAt: timestamp("created_at").notNull().defaultNow(),
  },
  (t) => [index("habit_reminders_habit_idx").on(t.habitId)]
);
export const habitPeriods = pgTable("habit_periods", {
  habitId: uuid("habit_id")
    .primaryKey()
    .references(() => habits.id, { onDelete: "cascade" }),

  startDate: date("start_date"),
  endDate: date("end_date"),
  activeMonths: integer("active_months").array(), // [6, 7, 8] pour juin-août

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
export const habitChecks = pgTable(
  "habit_checks",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    habitId: uuid("habit_id")
      .notNull()
      .references(() => habits.id, { onDelete: "cascade" }),

    date: date("date").notNull(),

    // Quel timing était prévu ?
    timingId: uuid("timing_id").references(() => habitTimings.id, {
      onDelete: "set null",
    }),
    // Si timingId = null → habitude "anytime"

    // Heure réelle du check
    actualTime: text("actual_time"), // "08:15"

    checkedAt: timestamp("checked_at").notNull().defaultNow(),
  },
  (t) => [
    index("habit_checks_user_date_idx").on(t.userId, t.date),
    index("habit_checks_habit_idx").on(t.habitId),
  ]
);
export type Habit = typeof habits.$inferSelect;
export type HabitFrequency = typeof habitFrequencies.$inferSelect;
export type HabitTiming = typeof habitTimings.$inferSelect;
export type HabitReminder = typeof habitReminders.$inferSelect;
export type HabitPeriod = typeof habitPeriods.$inferSelect;
export type HabitCheck = typeof habitChecks.$inferSelect;
