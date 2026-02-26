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
import { ingredientsSeed } from './ingredients/seed-ingredients2'
import { productIngredientAssociations } from './ProductIngredients/seed-product-ingredients'
import { allProductData } from './products'
import { productData } from './products/seed-products'
import { productTagAssociations, tagData } from './tags/seed-tags'

async function Seed() {
  const user = await getOrCreateSeedUser()
  const id = user.id

  // ── Products ──────────────────────────────────────
  const productsDataTotal = [...allProductData, ...productData]
  const productResults = await Promise.allSettled(
    productsDataTotal.map((product) => createProduct(id, product, db))
  )
  const productFailed = productResults.filter((r) => r.status === 'rejected')
  if (productFailed.length) console.error(`${productFailed.length} produits échoués`, productFailed)
  else console.log(`${productResults.length} produits créés`)

  // ── Tags ──────────────────────────────────────────
  const tagResults = await Promise.allSettled(tagData.map((tag) => createTag(db, tag)))
  const tagFailed = tagResults.filter((r) => r.status === 'rejected')
  if (tagFailed.length) console.error(`${tagFailed.length} tags échoués`, tagFailed)
  else console.log(`${tagResults.length} tags créés`)

  // ── Ingredients ───────────────────────────────────
  const allDataIngredients = [...ingredientData, ...ingredientsSeed]
  const ingredientResults = await Promise.allSettled(
    allDataIngredients.map((ingredient) => createIngredient(id, ingredient, db))
  )
  const ingredientFailed = ingredientResults.filter((r) => r.status === 'rejected')
  if (ingredientFailed.length)
    console.error(`${ingredientFailed.length} ingrédients échoués`, ingredientFailed)
  else console.log(`${ingredientResults.length} ingrédients créés`)

  // ── Récupération de l'état réel en DB ─────────────
  // On requête après les inserts pour avoir les vrais IDs,
  // que les entités viennent d'être créées ou qu'elles existaient déjà.
  const [allProducts, allTags, allIngredients] = await Promise.all([
    db.select({ id: products.id, slug: products.slug }).from(products),
    db.select({ id: tags.id, slug: tags.slug }).from(tags),
    db.select({ id: ingredients.id, slug: ingredients.slug }).from(ingredients),
  ])

  const productSlugToId = new Map(allProducts.map((p) => [p.slug, p.id]))
  const tagSlugToId = new Map(allTags.map((t) => [t.slug, t.id]))
  const ingredientSlugToId = new Map(allIngredients.map((i) => [i.slug, i.id]))

  // ── Product ↔ Tag associations ────────────────────
  const productTagResults = await Promise.allSettled(
    productTagAssociations.map(({ productSlug, tagSlug }) => {
      const productId = productSlugToId.get(productSlug)
      const tagId = tagSlugToId.get(tagSlug)
      if (!productId || !tagId) {
        return Promise.reject(new Error(`Slug introuvable: product=${productSlug}, tag=${tagSlug}`))
      }
      return addTagToProduct(db, productId, tagId)
    })
  )
  const ptFailed = productTagResults.filter((r) => r.status === 'rejected')
  if (ptFailed.length) console.error(`${ptFailed.length} productTags échoués`, ptFailed)
  else console.log(`${productTagResults.length} productTags créés`)

  // ── Product ↔ Ingredient associations ────────────
  const productIngredientResults = await Promise.allSettled(
    productIngredientAssociations.map(({ productSlug, ingredientSlug, ...rest }) => {
      const productId = productSlugToId.get(productSlug)
      const ingredientId = ingredientSlugToId.get(ingredientSlug)
      if (!productId || !ingredientId) {
        return Promise.reject(
          new Error(`Slug introuvable: product=${productSlug}, ingredient=${ingredientSlug}`)
        )
      }
      return addIngredientToProduct(db, {
        productId,
        ingredientId,
        concentrationValue: rest.concentrationValue ?? null,
        concentrationUnit: rest.concentrationUnit ?? null,
        concentrationPer: rest.concentrationPer ?? null,
        notes: rest.notes ?? null,
      })
    })
  )
  const piFailed = productIngredientResults.filter((r) => r.status === 'rejected')
  if (piFailed.length) console.error(`${piFailed.length} productIngredients échoués`, piFailed)
  else console.log(`${productIngredientResults.length} productIngredients créés`)

  // ── Ingredient ↔ Tag associations ─────────────────
  const ingredientTagResults = await Promise.allSettled(
    ingredientTagAssociations.map(({ ingredientSlug, tagSlug }) => {
      const ingredientId = ingredientSlugToId.get(ingredientSlug)
      const tagId = tagSlugToId.get(tagSlug)
      if (!ingredientId || !tagId) {
        return Promise.reject(
          new Error(`Slug introuvable: ingredient=${ingredientSlug}, tag=${tagSlug}`)
        )
      }
      return addTagToIngredient(db, ingredientId, tagId)
    })
  )
  const itFailed = ingredientTagResults.filter((r) => r.status === 'rejected')
  if (itFailed.length) console.error(`${itFailed.length} ingredientTags échoués`, itFailed)
  else console.log(`${ingredientTagResults.length} ingredientTags créés`)
}

Seed()
