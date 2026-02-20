import { z } from 'zod'

// ─── Primitives ──────────────────────────────────────────────────────────────

const uuid = z.uuid()

// ─── Input Schemas ───────────────────────────────────────────────────────────

export const createProductSchema = z.object({
  name: z.string().min(1).max(200),
  brand: z.string().min(1).max(200).optional(),
  kind: z.string().min(1).max(100),
  unit: z.string().min(1).max(50),

  // Contenance
  totalAmount: z.number().int().min(1).optional(),
  amountUnit: z.string().min(1).max(50).optional(),

  url: z.url().max(2000).optional(),
  notes: z.string().max(5000).optional(),
  priceCents: z.number().int().min(0).optional(),
  expiresAt: z.string().max(50).optional(), // format libre, nullable en DB
})

export const updateProductSchema = z
  .object({
    name: z.string().min(1).max(200).optional(),
    brand: z.string().min(1).max(200).nullable().optional(),
    kind: z.string().min(1).max(100).optional(),
    unit: z.string().min(1).max(50).optional(),
    totalAmount: z.number().int().min(1).nullable().optional(),
    amountUnit: z.string().min(1).max(50).nullable().optional(),
    url: z.url().max(2000).nullable().optional(),
    notes: z.string().max(5000).nullable().optional(),
    priceCents: z.number().int().min(0).nullable().optional(),
    expiresAt: z.string().max(50).nullable().optional(),
  })
  .strict()

export const updateStockSchema = z.object({
  qty: z.number().int().min(0),
})

/** Payload pour POST /products/:id/collaborators */
export const addCollaboratorSchema = z.object({
  userId: uuid,
  role: z.enum(['editor']).default('editor'),
})

// ─── Entity Response Schemas ─────────────────────────────────────────────────

export const productResponseSchema = z.object({
  id: uuid,
  createdBy: uuid,
  name: z.string(),
  brand: z.string().nullable(),
  kind: z.string(),
  unit: z.string(),
  totalAmount: z.number().int().nullable(),
  amountUnit: z.string().nullable(),
  url: z.string().nullable(),
  notes: z.string().nullable(),
  priceCents: z.number().int().nullable(),
  expiresAt: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const productCollaboratorResponseSchema = z.object({
  id: uuid,
  productId: uuid,
  userId: uuid,
  role: z.string(),
  createdAt: z.date(),
})

export const productStockResponseSchema = z.object({
  id: uuid,
  userId: uuid,
  productId: uuid,
  qty: z.number().int(),
  updatedAt: z.date(),
})

export const productWithStockResponseSchema = productResponseSchema.extend({
  stock: productStockResponseSchema.nullable(),
  collaborators: z.array(productCollaboratorResponseSchema).optional(),
})

// ─── Inferred Types ──────────────────────────────────────────────────────────

export type CreateProductInput = z.infer<typeof createProductSchema>
export type UpdateProductInput = z.infer<typeof updateProductSchema>
export type UpdateStockInput = z.infer<typeof updateStockSchema>
export type AddCollaboratorInput = z.infer<typeof addCollaboratorSchema>
