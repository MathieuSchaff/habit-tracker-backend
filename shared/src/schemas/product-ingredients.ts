import { z } from 'zod'

export const createProductIngredientSchema = z.object({
  ingredientId: z.uuid(),
  concentrationValue: z.number().min(0).optional(),
  concentrationUnit: z.enum(['%', 'IU', 'mg', 'mcg', 'mg/mL']).optional(),
  concentrationPer: z.string().min(1).max(50).optional(),
  notes: z.string().max(500).optional(),
})

export const productIngredientResponseSchema = z.object({
  id: z.uuid(),
  productId: z.uuid(),
  ingredientId: z.uuid(),
  concentrationValue: z.string().nullable(),
  concentrationUnit: z.string().nullable(),
  concentrationPer: z.string().nullable(),
  notes: z.string().nullable(),
  createdAt: z.date(),
})

export type CreateProductIngredientInput = z.infer<typeof createProductIngredientSchema>
