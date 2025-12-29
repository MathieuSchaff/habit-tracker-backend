import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

// DB de test sur le port 5433
const TEST_DATABASE_URL =
  process.env.DATABASE_URL_TEST ||
  "postgres://app:testpassword@localhost:5433/appdb_test";

const pool = new pg.Pool({
  connectionString: TEST_DATABASE_URL,
});

export const testDb = drizzle(pool);

// pour fermer proprement la connexion après les tests
export async function closeTestDb() {
  await pool.end();
}
