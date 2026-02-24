import { createIngredient } from '../../features/products/ingredients/service'
import { addIngredientToProduct } from '../../features/products/product-ingredients/product-ingredients.service'
import { createProduct } from '../../features/products/service'
import { addTagToProduct, createTag } from '../../features/products/tags/tags.service'
import { db } from '..'
import { createSeedUser } from './create-user'
import { ingredientData } from './ingredients/seed-ingredients'
import { productIngredientAssociations } from './ProductIngredients/seed-product-ingredients'
import { allProductData } from './products'
import { productData } from './products/seed-products'
import { productTagAssociations, tagData } from './tags/seed-tags'

async function Seed() {
  const user = await createSeedUser()
  const id = user.id
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
  const ingredientResults = await Promise.allSettled(
    ingredientData.map((ingredient) => createIngredient(id, ingredient, db))
  )
  const ingredientFailed = ingredientResults.filter((r) => r.status === 'rejected')
  if (ingredientFailed.length)
    console.error(`${ingredientFailed.length} ingrédients échoués`, ingredientFailed)
  else console.log(`${ingredientResults.length} ingrédients créés`)
  // ── Product ↔ Tag associations ──────────────────────
  const fulfilledProducts = productResults
    .filter((r) => r.status === 'fulfilled')
    .map((r) => r.value)

  const fulfilledTags = tagResults.filter((r) => r.status === 'fulfilled').map((r) => r.value)

  // Maps slug → id
  const productSlugToId = new Map(fulfilledProducts.map((p) => [p.slug, p.id]))
  const tagSlugToId = new Map(fulfilledTags.map((t) => [t.slug, t.id]))

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
  const fulfilledIngredients = ingredientResults
    .filter((r) => r.status === 'fulfilled')
    .map((r) => r.value)

  const ingredientSlugToId = new Map(fulfilledIngredients.map((i) => [i.slug, i.id]))

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
}

Seed()
