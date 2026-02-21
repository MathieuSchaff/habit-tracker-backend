// import { and, eq, ilike, sql } from 'drizzle-orm'

// import { db } from '../../../db'
// import { ingredients } from '../../../db/schema/ingredients'
// import type {  Database } from '../../../db/index'

// type ListIngredientsParams = {
//   category?: string
//   search?: string
//   limit?: number
//   offset?: number
// }
// export async function listIngredients(params: ListIngredientsParams = {}, database: Database = db) {
//   const { category, search, limit = 50, offset = 0 } = params

//   const conditions = []

//   if (category) conditions.push(eq(ingredients.category, category))
//   if (search) conditions.push(ilike(ingredients.name, `%${search}%`))

//   const where = conditions.length > 0 ? and(...conditions) : undefined

//   const [items, [{ count }]] = await Promise.all([
//     database
//       .select()
//       .from(ingredients)
//       .where(where)
//       .limit(limit)
//       .offset(offset)
//       .orderBy(ingredients.name),
//     database.select({ count: sql<number>`count(*)::int` }).from(ingredients).where(where),
//   ])

//   return { items, total: count }
// }
