import type { HabitErrorCode } from '@habit-tracker/shared'

import type { NodePgDatabase } from 'drizzle-orm/node-postgres'

import type * as schema from '../../db/schema'

export type Database = NodePgDatabase<typeof schema>

export class HabitError extends Error {
  constructor(
    public code: HabitErrorCode,
    public details?: unknown
  ) {
    super(code)
    this.name = 'HabitError'
  }
}
