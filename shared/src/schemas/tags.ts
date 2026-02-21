import { z } from 'zod'

export const createTagSchema = z.object({
  name: z.string().min(1).max(100),
  category: z.string().min(1).max(50).optional(),
  slug: z.string().max(100).optional(),
})

export const tagResponseSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  slug: z.string(),
  category: z.string().nullable(),
  createdAt: z.date(),
})

export type CreateTagInput = z.infer<typeof createTagSchema>
export type UpdateTagInput = z.infer<typeof createTagSchema>
