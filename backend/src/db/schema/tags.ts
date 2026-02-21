import { index, pgTable, text, timestamp, uniqueIndex, uuid } from 'drizzle-orm/pg-core'

import { products } from './products'

export const tags = pgTable(
  'tags',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    name: text('name').notNull(),
    slug: text('slug').notNull(),
    category: text('category'), // "concern", "skin_type", "routine_step"
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [uniqueIndex('tags_slug_unique').on(t.slug), index('tags_category_idx').on(t.category)]
)

export const productTags = pgTable(
  'product_tags',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    productId: uuid('product_id')
      .notNull()
      .references(() => products.id, { onDelete: 'cascade' }),
    tagId: uuid('tag_id')
      .notNull()
      .references(() => tags.id, { onDelete: 'cascade' }),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex('product_tags_unique').on(t.productId, t.tagId),
    index('product_tags_product_idx').on(t.productId),
    index('product_tags_tag_idx').on(t.tagId),
  ]
)

export type Tag = typeof tags.$inferSelect
export type ProductTag = typeof productTags.$inferSelect
