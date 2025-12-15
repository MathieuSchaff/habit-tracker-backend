import {
  pgTable,
  uuid,
  text,
  timestamp,
  date,
  integer,
  primaryKey,
  index,
} from "drizzle-orm/pg-core";
import { users } from "./users";

export const habits = pgTable(
  "habits",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),

    name: text("name").notNull(),
    category: text("category").notNull(),
    frequency: text("frequency").notNull(),
    time: text("time"),

    sortOrder: integer("sort_order"),
    archivedAt: timestamp("archived_at", { withTimezone: true }),

    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (t) => [
    index("habits_user_idx").on(t.userId),
    index("habits_user_category_idx").on(t.userId, t.category),
    index("habits_user_archived_idx").on(t.userId, t.archivedAt),
  ]
);

export const habitChecks = pgTable(
  "habit_checks",
  {
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    habitId: uuid("habit_id")
      .notNull()
      .references(() => habits.id, { onDelete: "cascade" }),

    day: date("day").notNull(),
    checkedAt: timestamp("checked_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (t) => [
    primaryKey({ columns: [t.userId, t.habitId, t.day] }),
    index("habit_checks_user_day_idx").on(t.userId, t.day),
    index("habit_checks_user_habit_idx").on(t.userId, t.habitId),
  ]
);
