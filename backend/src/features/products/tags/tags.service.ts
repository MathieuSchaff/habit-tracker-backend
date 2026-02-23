import type { CreateTagInput, UpdateTagInput } from '@habit-tracker/shared'

import slugify from '@sindresorhus/slugify'
import { and, eq, getTableColumns } from 'drizzle-orm'

import type { DB } from '../../../db/index'
import { type Product, products } from '../../../db/schema/products'
import { type ProductTag, productTags, type Tag, tags } from '../../../db/schema/tags'
import { isUniqueViolation } from '../../../lib/helpers'
import { TagError } from './tags-error'

// type ListTagsParams = {
//   category?: string
//   search?: string
//   limit?: number
//   offset?: number
// }

export async function createTag(db: DB, data: CreateTagInput): Promise<Tag> {
  const slug = data.slug ?? slugify(data.name)
  try {
    const [tag] = await db
      .insert(tags)
      .values({ ...data, slug })
      .returning()
    if (!tag) throw new TagError('tag_creation_failed')
    return tag
  } catch (e) {
    if (e instanceof TagError) throw e
    if (isUniqueViolation(e)) throw new TagError('tag_already_exists')
    throw e
  }
}
export async function getTagById(db: DB, id: string): Promise<Tag | undefined> {
  const [tag] = await db.select().from(tags).where(eq(tags.id, id)).limit(1)
  return tag
}

export async function getTagBySlug(db: DB, slug: string): Promise<Tag | undefined> {
  const [tag] = await db.select().from(tags).where(eq(tags.slug, slug)).limit(1)
  return tag
}

// export async function listTags(db: DB, params: ListTagsParams = {}) {
//   const { category, search, limit = 100, offset = 0 } = params

//   const conditions = []

//   if (category) conditions.push(eq(tags.category, category))
//   if (search) conditions.push(ilike(tags.name, `%${search}%`))

//   const where = conditions.length > 0 ? and(...conditions) : undefined

//   const [items, [{ count }]] = await Promise.all([
//     db.select().from(tags).where(where).limit(limit).offset(offset).orderBy(tags.name),
//     db.select({ count: sql<number>`count(*)::int` }).from(tags).where(where),
//   ])

//   return { items, total: count }
// }

export async function updateTag(db: DB, id: string, data: UpdateTagInput): Promise<Tag> {
  try {
    const [tag] = await db.update(tags).set(data).where(eq(tags.id, id)).returning()
    if (!tag) throw new TagError('tag_not_found')
    return tag
  } catch (e) {
    if (e instanceof TagError) throw e
    if (isUniqueViolation(e)) throw new TagError('tag_already_exists')
    throw e
  }
}
export async function deleteTag(db: DB, id: string): Promise<boolean> {
  const result = await db.delete(tags).where(eq(tags.id, id)).returning({ id: tags.id })
  return result.length > 0
}

// ─── Product Tags ────────────────────────────────────────

export async function addTagToProduct(db: DB, productId: string, tagId: string) {
  const [link] = await db.insert(productTags).values({ productId, tagId }).returning()
  return link
}

export async function addManyTagsToProduct(
  db: DB,
  productId: string,
  tagIds: string[]
): Promise<ProductTag[]> {
  if (tagIds.length === 0) return []
  return db
    .insert(productTags)
    .values(tagIds.map((tagId) => ({ productId, tagId })))
    .returning()
}

/**
 * Liste les tags d'un produit avec les infos du tag jointé.
 */
export async function listTagsByProduct(db: DB, productId: string) {
  return db
    .select({
      id: productTags.id,
      productId: productTags.productId,
      tagId: productTags.tagId,
      createdAt: productTags.createdAt,
      // Joined tag fields
      tagName: tags.name,
      tagSlug: tags.slug,
      tagCategory: tags.category,
    })
    .from(productTags)
    .innerJoin(tags, eq(productTags.tagId, tags.id))
    .where(eq(productTags.productId, productId))
    .orderBy(tags.category, tags.name)
}

/**
 * Liste les produits ayant un tag donné.
 */
export async function listProductsByTag(db: DB, tagId: string): Promise<Product[]> {
  return db
    .select(getTableColumns(products))
    .from(productTags)
    .innerJoin(products, eq(productTags.productId, products.id))
    .where(eq(productTags.tagId, tagId))
    .orderBy(products.name)
}

export async function removeTagFromProduct(
  db: DB,
  productId: string,
  tagId: string
): Promise<boolean> {
  const result = await db
    .delete(productTags)
    .where(and(eq(productTags.productId, productId), eq(productTags.tagId, tagId)))
    .returning({ id: productTags.id })
  return result.length > 0
}

/**
 * Remplace tous les tags d'un produit (transaction).
 */
export async function replaceProductTags(
  db: DB,
  productId: string,
  tagIds: string[]
): Promise<ProductTag[]> {
  return db.transaction(async (tx) => {
    await tx.delete(productTags).where(eq(productTags.productId, productId))

    if (tagIds.length === 0) return []

    return tx
      .insert(productTags)
      .values(tagIds.map((tagId) => ({ productId, tagId })))
      .returning()
  })
}
