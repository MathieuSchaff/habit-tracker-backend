import { createIngredient } from '../../features/products/ingredients/service'
import { addIngredientToProduct } from '../../features/products/product-ingredients/product-ingredients.service'
import { createProduct } from '../../features/products/service'
import {
  addTagToIngredient,
  addTagToProduct,
  createTag,
} from '../../features/products/tags/tags.service'
import { db } from '..'
import { ingredients, products, tags } from '../schema'
import { getOrCreateSeedUser } from './create-user'
import { ingredientTagAssociations } from './IngredientsTags/seed-ingredients-tags'
import { ingredientData } from './ingredients/seed-ingredients'

// import { allIngredientProductTags } from './ProductIngredients/seed-product-ingredients'

import { allProductData } from './products'
import { allIngredientProductTags } from './products/ingredients-products-tags'
// import { allProductTags } from './tags/seed-products-tags'
import { allProductTags } from './products/product-tags'
import { tagData } from './tags/seed-tags'

// async function Seed() {
//   const user = await getOrCreateSeedUser()
//   const id = user.id

//   // ── Products ──────────────────────────────────────
//   const productsDataTotal = [...allProductData]
//   const productResults = await Promise.allSettled(
//     productsDataTotal.map((product) => createProduct(id, product, db))
//   )
//   const productFailed = productResults.filter((r) => r.status === 'rejected')
//   if (productFailed.length) console.error(`${productFailed.length} produits échoués`, productFailed)
//   else console.log(`${productResults.length} produits créés`)

//   // ── Tags ──────────────────────────────────────────
//   const tagResults = await Promise.allSettled(tagData.map((tag) => createTag(db, tag)))
//   const tagFailed = tagResults.filter((r) => r.status === 'rejected')
//   if (tagFailed.length) console.error(`${tagFailed.length} tags échoués`, tagFailed)
//   else console.log(`${tagResults.length} tags créés`)

//   // ── Ingredients ───────────────────────────────────
//   const ingredientResults = await Promise.allSettled(
//     ingredientData.map((ingredient) => createIngredient(id, ingredient, db))
//   )
//   const ingredientFailed = ingredientResults.filter((r) => r.status === 'rejected')
//   if (ingredientFailed.length)
//     console.error(`${ingredientFailed.length} ingrédients échoués`, ingredientFailed)
//   else console.log(`${ingredientResults.length} ingrédients créés`)

//   // ── Récupération de l'état réel en DB ─────────────
//   // On requête après les inserts pour avoir les vrais IDs,
//   // que les entités viennent d'être créées ou qu'elles existaient déjà.
//   const [allProducts, allTags, allIngredients] = await Promise.all([
//     db.select({ id: products.id, slug: products.slug }).from(products),
//     db.select({ id: tags.id, slug: tags.slug }).from(tags),
//     db.select({ id: ingredients.id, slug: ingredients.slug }).from(ingredients),
//   ])

//   const productSlugToId = new Map(allProducts.map((p) => [p.slug, p.id]))
//   const tagSlugToId = new Map(allTags.map((t) => [t.slug, t.id]))
//   const ingredientSlugToId = new Map(allIngredients.map((i) => [i.slug, i.id]))

//   // ── Product ↔ Tag associations ────────────────────
//   const productTagResults = await Promise.allSettled(
//     allProductTags.map(({ productSlug, tagSlug }) => {
//       const productId = productSlugToId.get(productSlug)
//       const tagId = tagSlugToId.get(tagSlug)
//       if (!productId || !tagId) {
//         return Promise.reject(new Error(`Slug introuvable: product=${productSlug}, tag=${tagSlug}`))
//       }
//       return addTagToProduct(db, productId, tagId)
//     })
//   )
//   const ptFailed = productTagResults.filter((r) => r.status === 'rejected')
//   if (ptFailed.length) console.error(`${ptFailed.length} productTags échoués`, ptFailed)
//   else console.log(`${productTagResults.length} productTags créés`)

//   // ── Product ↔ Ingredient associations ────────────
//   const productIngredientResults = await Promise.allSettled(
//     (allIngredientProductTags as any[]).map((item) => {
//       // Cast simple ici
//       const { productSlug, ingredientSlug, notes, ...rest } = item

//       const productId = productSlugToId.get(productSlug)
//       const ingredientId = ingredientSlugToId.get(ingredientSlug)

//       if (!productId || !ingredientId) {
//         return Promise.reject(
//           new Error(`Slug introuvable: product=${productSlug}, ingredient=${ingredientSlug}`)
//         )
//       }

//       return addIngredientToProduct(db, {
//         productId,
//         ingredientId,
//         notes: notes ?? null,
//         // On convertit en String car ton type attend string | null
//         concentrationValue:
//           rest.concentrationValue != null ? String(rest.concentrationValue) : null,
//         concentrationUnit: rest.concentrationUnit ?? null,
//         concentrationPer: rest.concentrationPer ?? null,
//       })
//     })
//   )
//   const piFailed = productIngredientResults.filter((r) => r.status === 'rejected')
//   if (piFailed.length) console.error(`${piFailed.length} productIngredients échoués`, piFailed)
//   else console.log(`${productIngredientResults.length} productIngredients créés`)

//   // ── Ingredient ↔ Tag associations ─────────────────
//   const ingredientTagResults = await Promise.allSettled(
//     ingredientTagAssociations.map(({ ingredientSlug, tagSlug }) => {
//       const ingredientId = ingredientSlugToId.get(ingredientSlug)
//       const tagId = tagSlugToId.get(tagSlug)
//       if (!ingredientId || !tagId) {
//         return Promise.reject(
//           new Error(`Slug introuvable: ingredient=${ingredientSlug}, tag=${tagSlug}`)
//         )
//       }
//       return addTagToIngredient(db, ingredientId, tagId)
//     })
//   )
//   const itFailed = ingredientTagResults.filter((r) => r.status === 'rejected')
//   if (itFailed.length) console.error(`${itFailed.length} ingredientTags échoués`, itFailed)
//   else console.log(`${ingredientTagResults.length} ingredientTags créés`)
// }

// Seed()
async function Seed() {
  const user = await getOrCreateSeedUser()
  const id = user.id

  // ── Helper pour exécuter en batch avec logs clairs ──
  async function seedBatch<T>(
    label: string,
    items: T[],
    fn: (item: T) => Promise<unknown>,
    identify: (item: T) => string
  ) {
    const results = await Promise.allSettled(
      items.map(async (item) => {
        try {
          return await fn(item)
        } catch (err) {
          // On enrichit l'erreur avec le contexte
          const context = identify(item)
          const message = err instanceof Error ? err.message : String(err)
          throw new Error(`[${label}] ${context} → ${message}`)
        }
      })
    )

    const failed = results.filter((r) => r.status === 'rejected') as PromiseRejectedResult[]
    if (failed.length) {
      console.error(`\n❌ ${failed.length}/${items.length} ${label} échoués:`)
      failed.forEach((r, i) => console.error(`  ${i + 1}. ${r.reason.message}`))
    } else {
      console.log(`✅ ${results.length} ${label} créés`)
    }
    return results
  }

  // ── Products ──────────────────────────────────────
  await seedBatch(
    'produits',
    [...allProductData],
    (p) => createProduct(id, p, db),
    (p) => `product: ${JSON.stringify(p).slice(0, 120)}`
  )

  // ── Tags ──────────────────────────────────────────
  await seedBatch(
    'tags',
    tagData,
    (t) => createTag(db, t),
    (t) => `tag: ${JSON.stringify(t).slice(0, 120)}`
  )

  // ── Ingredients ───────────────────────────────────
  await seedBatch(
    'ingrédients',
    ingredientData,
    (ing) => createIngredient(id, ing, db),
    (ing) => `ingredient: ${JSON.stringify(ing).slice(0, 120)}`
  )

  // ── Récupération de l'état réel en DB ─────────────
  const [allProducts, allTags, allIngredients] = await Promise.all([
    db.select({ id: products.id, slug: products.slug }).from(products),
    db.select({ id: tags.id, slug: tags.slug }).from(tags),
    db.select({ id: ingredients.id, slug: ingredients.slug }).from(ingredients),
  ])

  const productSlugToId = new Map(allProducts.map((p) => [p.slug, p.id]))
  const tagSlugToId = new Map(allTags.map((t) => [t.slug, t.id]))
  const ingredientSlugToId = new Map(allIngredients.map((i) => [i.slug, i.id]))

  // ── Product ↔ Tag ─────────────────────────────────
  await seedBatch(
    'productTags',
    allProductTags,
    ({ productSlug, tagSlug }) => {
      const productId = productSlugToId.get(productSlug)
      const tagId = tagSlugToId.get(tagSlug)
      if (!productId || !tagId)
        throw new Error(`Slug introuvable: product=${productSlug}, tag=${tagSlug}`)
      return addTagToProduct(db, productId, tagId)
    },
    ({ productSlug, tagSlug }) => `${productSlug} ↔ ${tagSlug}`
  )

  // ── Product ↔ Ingredient ─────────────────────────
  await seedBatch(
    'productIngredients',
    allIngredientProductTags as any[],
    (item) => {
      const { productSlug, ingredientSlug, notes, ...rest } = item
      const productId = productSlugToId.get(productSlug)
      const ingredientId = ingredientSlugToId.get(ingredientSlug)
      if (!productId || !ingredientId)
        throw new Error(`Slug introuvable: product=${productSlug}, ingredient=${ingredientSlug}`)
      return addIngredientToProduct(db, {
        productId,
        ingredientId,
        notes: notes ?? null,
        concentrationValue:
          rest.concentrationValue != null ? String(rest.concentrationValue) : null,
        concentrationUnit: rest.concentrationUnit ?? null,
        concentrationPer: rest.concentrationPer ?? null,
      })
    },
    (item) => `${item.productSlug} ↔ ${item.ingredientSlug}`
  )

  // ── Ingredient ↔ Tag ──────────────────────────────
  await seedBatch(
    'ingredientTags',
    ingredientTagAssociations,
    ({ ingredientSlug, tagSlug }) => {
      const ingredientId = ingredientSlugToId.get(ingredientSlug)
      const tagId = tagSlugToId.get(tagSlug)
      if (!ingredientId || !tagId)
        throw new Error(`Slug introuvable: ingredient=${ingredientSlug}, tag=${tagSlug}`)
      return addTagToIngredient(db, ingredientId, tagId)
    },
    ({ ingredientSlug, tagSlug }) => `${ingredientSlug} ↔ ${tagSlug}`
  )
}
Seed()
// ```

// Le output ressemblera à ça :
// ```
// ✅ 42 produits créés
// ✅ 15 tags créés
// ❌ 2/30 ingrédients échoués:
//   1. [ingrédients] ingredient: {"name":"Niacinamide","slug":"niacinamide"...} → duplicate key value violates unique constraint "ingredients_slug_unique"
//   2. [ingrédients] ingredient: {"name":"Zinc PCA","slug":"zinc-pca"...} → column "cas_number" violates not-null constraint
// ✅ 12 productTags créés
// ❌ 1/8 productIngredients échoués:
//   1. [productIngredients] some-serum ↔ retinal → Slug introuvable: product=some-serum, ingredient=retinal
