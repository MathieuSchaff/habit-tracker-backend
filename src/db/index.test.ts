import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

// URL de connexion spécifique aux tests
const TEST_DATABASE_URL =
  "postgres://app:testpassword@localhost:5433/appdb_test";

// Pool de connexion pour les tests
const pool = new Pool({
  connectionString: TEST_DATABASE_URL,
});

// Instance Drizzle pour les tests
export const testDb = drizzle(pool, { schema });

// Fonction pour fermer proprement la connexion
export async function closeTestDb() {
  await pool.end();
}
