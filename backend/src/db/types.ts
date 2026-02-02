import type { NodePgDatabase } from 'drizzle-orm/node-postgres'
import type * as schema from './schema'

// Type générique pour n'importe quelle instance de DB
export type DB = NodePgDatabase<typeof schema>
