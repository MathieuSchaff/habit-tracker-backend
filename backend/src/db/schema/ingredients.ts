import { index, jsonb, pgTable, text, timestamp, uniqueIndex, uuid } from 'drizzle-orm/pg-core'

import { users } from './users'
import { IngredientChanges } from '@habit-tracker/shared'

// Tout le monde peut lire et éditer (sauf users bannis via userBans)

export const ingredients = pgTable(
  'ingredients',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    createdBy: uuid('created_by')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    name: text('name').notNull(),
    slug: text('slug').notNull(), // URL-friendly: "retinol", "azelaic-acid"
    description: text('description').notNull().default(''), // description courte
    content: text('content').notNull().default(''), // contenu wiki (markdown)
    category: text('category'), // "actif", "excipient", "vitamine", "minéral"

    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true })
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (t) => [
    uniqueIndex('ingredients_slug_unique').on(t.slug),
    index('ingredients_name_idx').on(t.name),
    index('ingredients_category_idx').on(t.category),
  ]
)

export const ingredientEdits = pgTable(
  'ingredient_edits',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    ingredientId: uuid('ingredient_id')
      .notNull()
      .references(() => ingredients.id, { onDelete: 'cascade' }),
    editedBy: uuid('edited_by')
      .notNull()
      .references(() => users.id),
    changes: jsonb('changes').notNull().$type<IngredientChanges>(),
    summary: text('summary'),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    index('ingredient_edits_ingredient_idx').on(t.ingredientId),
    index('ingredient_edits_user_idx').on(t.editedBy),
  ]
)

export type Ingredient = typeof ingredients.$inferSelect
export type IngredientEdit = typeof ingredientEdits.$inferSelect
