import type { CreateTagInput } from '@habit-tracker/shared'

import { PRODUCT_SLUGS } from './seed-products'

export const TAG_SLUGS = {
  // Concerns
  ANTI_ROUGEURS: 'anti-rougeurs',
  ROSACEE: 'rosacee',
  PEAU_SENSIBLE: 'peau-sensible',
  COUPEROSE: 'couperose',
  FLUSHS: 'flushs',
  BARRIERE_CUTANEE: 'barriere-cutanee',

  // Skin types
  PEAU_SECHE: 'peau-seche',
  PEAU_MIXTE: 'peau-mixte',
  PEAU_REACTIVE: 'peau-reactive',

  // Routine steps
  SOIN_DE_JOUR: 'soin-de-jour',
  SERUM: 'serum',
  CREME_HYDRATANTE: 'creme-hydratante',

  // Attributes
  SANS_PARFUM: 'sans-parfum',
  BIO_NATUREL: 'bio-naturel',
  PIGMENTS_VERTS: 'pigments-verts',
} as const

export const tagData: CreateTagInput[] = [
  // ── Concerns ──────────────────────────────────────
  { name: 'Anti-rougeurs', slug: TAG_SLUGS.ANTI_ROUGEURS, category: 'concern' },
  { name: 'Rosacée', slug: TAG_SLUGS.ROSACEE, category: 'concern' },
  { name: 'Peau sensible', slug: TAG_SLUGS.PEAU_SENSIBLE, category: 'concern' },
  { name: 'Couperose', slug: TAG_SLUGS.COUPEROSE, category: 'concern' },
  { name: 'Flushs', slug: TAG_SLUGS.FLUSHS, category: 'concern' },
  { name: 'Barrière cutanée', slug: TAG_SLUGS.BARRIERE_CUTANEE, category: 'concern' },

  // ── Skin types ────────────────────────────────────
  { name: 'Peau sèche', slug: TAG_SLUGS.PEAU_SECHE, category: 'skin_type' },
  { name: 'Peau mixte', slug: TAG_SLUGS.PEAU_MIXTE, category: 'skin_type' },
  { name: 'Peau réactive', slug: TAG_SLUGS.PEAU_REACTIVE, category: 'skin_type' },

  // ── Routine steps ─────────────────────────────────
  { name: 'Soin de jour', slug: TAG_SLUGS.SOIN_DE_JOUR, category: 'routine_step' },
  { name: 'Sérum', slug: TAG_SLUGS.SERUM, category: 'routine_step' },
  { name: 'Crème hydratante', slug: TAG_SLUGS.CREME_HYDRATANTE, category: 'routine_step' },

  // ── Attributes ────────────────────────────────────
  { name: 'Sans parfum', slug: TAG_SLUGS.SANS_PARFUM, category: 'attribute' },
  { name: 'Bio / Naturel', slug: TAG_SLUGS.BIO_NATUREL, category: 'attribute' },
  { name: 'Pigments verts', slug: TAG_SLUGS.PIGMENTS_VERTS, category: 'attribute' },
]

// ─── Product ↔ Tag associations ─────────────────────────
// Résolu au runtime via les slugs → IDs après insertion

export const productTagAssociations: { productSlug: string; tagSlug: string }[] = [
  // Bioderma Sensibio AR+
  { productSlug: PRODUCT_SLUGS.BIODERMA_SENSIBIO_AR, tagSlug: TAG_SLUGS.ANTI_ROUGEURS },
  { productSlug: PRODUCT_SLUGS.BIODERMA_SENSIBIO_AR, tagSlug: TAG_SLUGS.ROSACEE },
  { productSlug: PRODUCT_SLUGS.BIODERMA_SENSIBIO_AR, tagSlug: TAG_SLUGS.PEAU_SENSIBLE },
  { productSlug: PRODUCT_SLUGS.BIODERMA_SENSIBIO_AR, tagSlug: TAG_SLUGS.CREME_HYDRATANTE },
  { productSlug: PRODUCT_SLUGS.BIODERMA_SENSIBIO_AR, tagSlug: TAG_SLUGS.SANS_PARFUM },

  // SVR Sensifine AR
  { productSlug: PRODUCT_SLUGS.SVR_SENSIFINE_AR, tagSlug: TAG_SLUGS.ANTI_ROUGEURS },
  { productSlug: PRODUCT_SLUGS.SVR_SENSIFINE_AR, tagSlug: TAG_SLUGS.FLUSHS },
  { productSlug: PRODUCT_SLUGS.SVR_SENSIFINE_AR, tagSlug: TAG_SLUGS.CREME_HYDRATANTE },
  { productSlug: PRODUCT_SLUGS.SVR_SENSIFINE_AR, tagSlug: TAG_SLUGS.PIGMENTS_VERTS },

  // Avène Rosamed
  { productSlug: PRODUCT_SLUGS.AVENE_ROSAMED, tagSlug: TAG_SLUGS.ANTI_ROUGEURS },
  { productSlug: PRODUCT_SLUGS.AVENE_ROSAMED, tagSlug: TAG_SLUGS.ROSACEE },
  { productSlug: PRODUCT_SLUGS.AVENE_ROSAMED, tagSlug: TAG_SLUGS.COUPEROSE },
  { productSlug: PRODUCT_SLUGS.AVENE_ROSAMED, tagSlug: TAG_SLUGS.SERUM },
  { productSlug: PRODUCT_SLUGS.AVENE_ROSAMED, tagSlug: TAG_SLUGS.SANS_PARFUM },
  { productSlug: PRODUCT_SLUGS.AVENE_ROSAMED, tagSlug: TAG_SLUGS.BIO_NATUREL },

  // A-Derma Biology AR
  { productSlug: PRODUCT_SLUGS.ADERMA_BIOLOGY_AR, tagSlug: TAG_SLUGS.ANTI_ROUGEURS },
  { productSlug: PRODUCT_SLUGS.ADERMA_BIOLOGY_AR, tagSlug: TAG_SLUGS.PEAU_SENSIBLE },
  { productSlug: PRODUCT_SLUGS.ADERMA_BIOLOGY_AR, tagSlug: TAG_SLUGS.CREME_HYDRATANTE },
  { productSlug: PRODUCT_SLUGS.ADERMA_BIOLOGY_AR, tagSlug: TAG_SLUGS.BIO_NATUREL },

  // La Roche-Posay Toleriane Rosaliac AR
  { productSlug: PRODUCT_SLUGS.LRP_ROSALIAC_AR, tagSlug: TAG_SLUGS.ANTI_ROUGEURS },
  { productSlug: PRODUCT_SLUGS.LRP_ROSALIAC_AR, tagSlug: TAG_SLUGS.ROSACEE },
  { productSlug: PRODUCT_SLUGS.LRP_ROSALIAC_AR, tagSlug: TAG_SLUGS.BARRIERE_CUTANEE },
  { productSlug: PRODUCT_SLUGS.LRP_ROSALIAC_AR, tagSlug: TAG_SLUGS.CREME_HYDRATANTE },
  { productSlug: PRODUCT_SLUGS.LRP_ROSALIAC_AR, tagSlug: TAG_SLUGS.SANS_PARFUM },
  { productSlug: PRODUCT_SLUGS.LRP_ROSALIAC_AR, tagSlug: TAG_SLUGS.PIGMENTS_VERTS },

  // Garancia Rougeurs
  { productSlug: PRODUCT_SLUGS.GARANCIA_ROUGEURS, tagSlug: TAG_SLUGS.ANTI_ROUGEURS },
  { productSlug: PRODUCT_SLUGS.GARANCIA_ROUGEURS, tagSlug: TAG_SLUGS.FLUSHS },
  { productSlug: PRODUCT_SLUGS.GARANCIA_ROUGEURS, tagSlug: TAG_SLUGS.SERUM },

  // Isispharma Ruboril Expert S
  { productSlug: PRODUCT_SLUGS.ISISPHARMA_RUBORIL, tagSlug: TAG_SLUGS.ANTI_ROUGEURS },
  { productSlug: PRODUCT_SLUGS.ISISPHARMA_RUBORIL, tagSlug: TAG_SLUGS.PEAU_SECHE },
  { productSlug: PRODUCT_SLUGS.ISISPHARMA_RUBORIL, tagSlug: TAG_SLUGS.COUPEROSE },
  { productSlug: PRODUCT_SLUGS.ISISPHARMA_RUBORIL, tagSlug: TAG_SLUGS.CREME_HYDRATANTE },

  // Noreva Sensidiane AR+
  { productSlug: PRODUCT_SLUGS.NOREVA_SENSIDIANE, tagSlug: TAG_SLUGS.ANTI_ROUGEURS },
  { productSlug: PRODUCT_SLUGS.NOREVA_SENSIDIANE, tagSlug: TAG_SLUGS.PEAU_REACTIVE },
  { productSlug: PRODUCT_SLUGS.NOREVA_SENSIDIANE, tagSlug: TAG_SLUGS.BARRIERE_CUTANEE },
  { productSlug: PRODUCT_SLUGS.NOREVA_SENSIDIANE, tagSlug: TAG_SLUGS.CREME_HYDRATANTE },
  { productSlug: PRODUCT_SLUGS.NOREVA_SENSIDIANE, tagSlug: TAG_SLUGS.PIGMENTS_VERTS },

  // Uriage Roséliane
  { productSlug: PRODUCT_SLUGS.URIAGE_ROSELIANE, tagSlug: TAG_SLUGS.ANTI_ROUGEURS },
  { productSlug: PRODUCT_SLUGS.URIAGE_ROSELIANE, tagSlug: TAG_SLUGS.BARRIERE_CUTANEE },
  { productSlug: PRODUCT_SLUGS.URIAGE_ROSELIANE, tagSlug: TAG_SLUGS.CREME_HYDRATANTE },

  // ACM Rosakalm
  { productSlug: PRODUCT_SLUGS.ACM_ROSAKALM, tagSlug: TAG_SLUGS.ANTI_ROUGEURS },
  { productSlug: PRODUCT_SLUGS.ACM_ROSAKALM, tagSlug: TAG_SLUGS.COUPEROSE },
  { productSlug: PRODUCT_SLUGS.ACM_ROSAKALM, tagSlug: TAG_SLUGS.CREME_HYDRATANTE },
  { productSlug: PRODUCT_SLUGS.ACM_ROSAKALM, tagSlug: TAG_SLUGS.PIGMENTS_VERTS },

  // Eucerin Anti-Rougeurs
  { productSlug: PRODUCT_SLUGS.EUCERIN_AR, tagSlug: TAG_SLUGS.ANTI_ROUGEURS },
  { productSlug: PRODUCT_SLUGS.EUCERIN_AR, tagSlug: TAG_SLUGS.PEAU_SENSIBLE },
  { productSlug: PRODUCT_SLUGS.EUCERIN_AR, tagSlug: TAG_SLUGS.PEAU_REACTIVE },
  { productSlug: PRODUCT_SLUGS.EUCERIN_AR, tagSlug: TAG_SLUGS.CREME_HYDRATANTE },
  { productSlug: PRODUCT_SLUGS.EUCERIN_AR, tagSlug: TAG_SLUGS.SANS_PARFUM },
]
