export type {
  AddCollaboratorInput,
  CreateProductInput,
  UpdateProductInput,
  UpdateStockInput,
} from '../schemas/products'

// ─── Entity Types ─────────────────────────────────────────────────────────────

export const COLLABORATOR_ROLES = ['editor'] as const
export type CollaboratorRole = (typeof COLLABORATOR_ROLES)[number]

// ─── Product Type ─────────────────────────────────────────

export type Product = {
  id: string
  createdBy: string
  name: string
  brand: string | null
  kind: string
  unit: string

  // Détails produit
  inci: string | null
  keyIngredients: string[] | null
  description: string | null

  // Contenance
  totalAmount: number | null
  amountUnit: string | null

  // Infos secondaires
  url: string | null
  notes: string | null
  priceCents: number | null
  expiresAt: string | null

  // Timestamps (en ISO String pour le transit API, ou Date)
  createdAt: string | Date
  updatedAt: string | Date
}

// ─── Collaborator Type ────────────────────────────────────

export type ProductCollaborator = {
  id: string
  productId: string
  userId: string
  role: CollaboratorRole
  createdAt: string | Date
}
export type ProductStock = {
  id: string
  userId: string
  productId: string
  qty: number
  updatedAt: string | Date
}
// ─── Type Composé (pour le Frontend) ──────────────────────

export type ProductWithStock = Product & {
  stock: ProductStock | null
  collaborators?: ProductCollaborator[]
}

// ─── Error Codes ──────────────────────────────────────────────────────────────

export type ProductErrorCode =
  | 'product_not_found'
  | 'product_creation_failed'
  | 'product_update_failed'
  | 'product_delete_failed'
  | 'product_already_exists'
  | 'collaborator_add_failed'
  | 'collaborator_remove_failed'
  | 'collaborator_not_found'
  | 'stock_update_failed'
  | 'unauthorized_access'
  | 'database_error'
