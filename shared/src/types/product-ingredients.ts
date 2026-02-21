export type { CreateProductIngredientInput } from '../schemas/product-ingredients'

export type ProductIngredient = {
  id: string
  productId: string
  ingredientId: string
  concentrationValue: string | null // numeric revient en string depuis PG
  concentrationUnit: string | null
  concentrationPer: string | null
  notes: string | null
  createdAt: string | Date
}

export type ProductIngredientErrorCode =
  | 'product_ingredient_not_found'
  | 'product_ingredient_already_exists'
  | 'ingredient_not_found'
  | 'database_error'
