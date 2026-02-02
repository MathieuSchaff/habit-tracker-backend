import { pgTable, uuid, date, text, timestamp, primaryKey, index } from 'drizzle-orm/pg-core'
import { users } from './users'

export const dailyLogs = pgTable(
  'daily_logs',
  {
    userId: uuid('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    day: date('day').notNull(),
    note: text('note').notNull().default(''),

    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true })
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (t) => [
    primaryKey({ columns: [t.userId, t.day] }),
    index('daily_logs_user_day_idx').on(t.userId, t.day),
  ]
)
