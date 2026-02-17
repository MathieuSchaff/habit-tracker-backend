import { afterAll, beforeAll, beforeEach } from 'bun:test'

import { sql } from 'drizzle-orm'

// import {
//   habitChecks,
//   habitFrequencies,
//   habitPeriods,
//   habitReminders,
//   habits,
//   habitTimings,
//   users,
// } from '../db/schema'
import { closeTestDb, testDb } from './db.test.config'
import { cleanDatabase } from './helpers/db-cleaner'

// Avant tous les tests : vérifier que la connexion fonctionne
beforeAll(async () => {
  console.log('🔧 Initialisation de la DB de test...')
  try {
    await testDb.execute(sql`SELECT 1`)
    console.log('✅ Connexion à la DB de test OK')
  } catch (error) {
    console.error('❌ Impossible de se connecter à la DB de test')
    console.error('Assure-toi que docker compose -f docker-compose.test.yml up -d est lancé')
    throw error
  }
})

// Avant chaque test : vider la DB
beforeEach(async () => {
  // await testDb.delete(habitChecks)
  // await testDb.delete(habitTimings)
  // await testDb.delete(habitReminders)
  // await testDb.delete(habitPeriods)
  // await testDb.delete(habitFrequencies)
  // await testDb.delete(habits)
  // await testDb.delete(users)
  await cleanDatabase()
})

// Après tous les tests : fermer la connexion
afterAll(async () => {
  console.log('🧹 Nettoyage final de la DB...')
  await cleanDatabase()
  await closeTestDb()
  console.log('🔌 Connexion DB de test fermée')
})
