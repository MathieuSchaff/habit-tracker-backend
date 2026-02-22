import { z } from 'zod'

import { fieldChangeSchema } from './common'

const uuid = z.uuid()

export const createIngredientSchema = z.object({
  name: z.string().min(1).max(200),
  description: z.string().max(2000).optional(),
  slug: z.string().max(100).optional(),
  content: z.string().max(50000).optional(),
  category: z.string().min(1).max(100).optional(),
})

export const updateIngredientSchema = z
  .object({
    name: z.string().min(1).max(200).optional(),
    slug: z.string().max(100).optional(),
    description: z.string().max(2000).optional(),
    content: z.string().max(50000).optional(),
    category: z.string().min(1).max(100).nullable().optional(),
  })
  .strict()

export const ingredientResponseSchema = z.object({
  id: uuid,
  createdBy: uuid,
  name: z.string(),
  slug: z.string(),
  description: z.string(),
  content: z.string(),
  category: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const ingredientEditResponseSchema = z.object({
  id: uuid,
  ingredientId: uuid,
  editedBy: uuid,
  changes: z.record(
    z.string(),
    z.object({
      old: z.string().nullable(),
      new: z.string().nullable(),
    })
  ),
  summary: z.string().nullable(),
  createdAt: z.date(),
})

const editableIngredientFields = {
  name: fieldChangeSchema(z.string()),
  description: fieldChangeSchema(z.string()),
  content: fieldChangeSchema(z.string()),
  category: fieldChangeSchema(z.string()),
}

export const ingredientChangesSchema = z
  .object(editableIngredientFields)
  .partial()
  .refine((data) => Object.keys(data).length > 0, {
    message: 'At least one field change is required',
  })

export type IngredientChanges = z.infer<typeof ingredientChangesSchema>
export type CreateIngredientInput = z.infer<typeof createIngredientSchema>
export type UpdateIngredientInput = z.infer<typeof updateIngredientSchema>
