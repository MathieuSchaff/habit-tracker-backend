import type { CreateTagInput } from '@habit-tracker/shared'

export const TAG_SLUGS = {
  // Concerns
  ANTI_ROUGEURS: 'anti-rougeurs',
  ROSACEE: 'rosacee',
  PEAU_SENSIBLE: 'peau-sensible',
  COUPEROSE: 'couperose',
  FLUSHS: 'flushs',
  BARRIERE_CUTANEE: 'barriere-cutanee',
  ANTI_TACHES: 'anti-taches',
  ANTI_ACNE: 'anti-acne',
  ANTI_AGE: 'anti-age',
  HYPERPIGMENTATION: 'hyperpigmentation',

  // Skin types
  PEAU_SECHE: 'peau-seche',
  PEAU_MIXTE: 'peau-mixte',
  PEAU_REACTIVE: 'peau-reactive',

  // Routine steps
  SOIN_DE_JOUR: 'soin-de-jour',
  SERUM: 'serum',
  CREME_HYDRATANTE: 'creme-hydratante',
  NETTOYANT: 'nettoyant',
  EXFOLIANT: 'exfoliant',
  SOIN_DE_NUIT: 'soin-de-nuit',
  PROTECTION_SOLAIRE: 'protection-solaire',

  // Attributes
  SANS_PARFUM: 'sans-parfum',
  BIO_NATUREL: 'bio-naturel',
  PIGMENTS_VERTS: 'pigments-verts',
  REPARATEUR: 'reparateur',
  ANTISEPTIQUE: 'antiseptique',
  KERATOLYTIQUE: 'keratolytique',
} as const

export const tagData: CreateTagInput[] = [
  // ── Concerns ──────────────────────────────────────
  { name: 'Anti-rougeurs', slug: TAG_SLUGS.ANTI_ROUGEURS, category: 'concern' },
  { name: 'Rosacée', slug: TAG_SLUGS.ROSACEE, category: 'concern' },
  { name: 'Peau sensible', slug: TAG_SLUGS.PEAU_SENSIBLE, category: 'concern' },
  { name: 'Couperose', slug: TAG_SLUGS.COUPEROSE, category: 'concern' },
  { name: 'Flushs', slug: TAG_SLUGS.FLUSHS, category: 'concern' },
  { name: 'Barrière cutanée', slug: TAG_SLUGS.BARRIERE_CUTANEE, category: 'concern' },
  { name: 'Anti-taches', slug: TAG_SLUGS.ANTI_TACHES, category: 'concern' },
  { name: 'Anti-acné', slug: TAG_SLUGS.ANTI_ACNE, category: 'concern' },
  { name: 'Anti-âge', slug: TAG_SLUGS.ANTI_AGE, category: 'concern' },
  { name: 'Hyperpigmentation', slug: TAG_SLUGS.HYPERPIGMENTATION, category: 'concern' },

  // ── Skin types ────────────────────────────────────
  { name: 'Peau sèche', slug: TAG_SLUGS.PEAU_SECHE, category: 'skin_type' },
  { name: 'Peau mixte', slug: TAG_SLUGS.PEAU_MIXTE, category: 'skin_type' },
  { name: 'Peau réactive', slug: TAG_SLUGS.PEAU_REACTIVE, category: 'skin_type' },

  // ── Routine steps ─────────────────────────────────
  { name: 'Soin de jour', slug: TAG_SLUGS.SOIN_DE_JOUR, category: 'routine_step' },
  { name: 'Sérum', slug: TAG_SLUGS.SERUM, category: 'routine_step' },
  { name: 'Crème hydratante', slug: TAG_SLUGS.CREME_HYDRATANTE, category: 'routine_step' },
  { name: 'Nettoyant', slug: TAG_SLUGS.NETTOYANT, category: 'routine_step' },
  { name: 'Exfoliant', slug: TAG_SLUGS.EXFOLIANT, category: 'routine_step' },
  { name: 'Soin de nuit', slug: TAG_SLUGS.SOIN_DE_NUIT, category: 'routine_step' },
  { name: 'Protection solaire', slug: TAG_SLUGS.PROTECTION_SOLAIRE, category: 'routine_step' },

  // ── Attributes ────────────────────────────────────
  { name: 'Sans parfum', slug: TAG_SLUGS.SANS_PARFUM, category: 'attribute' },
  { name: 'Bio / Naturel', slug: TAG_SLUGS.BIO_NATUREL, category: 'attribute' },
  { name: 'Pigments verts', slug: TAG_SLUGS.PIGMENTS_VERTS, category: 'attribute' },
  { name: 'Réparateur', slug: TAG_SLUGS.REPARATEUR, category: 'attribute' },
  { name: 'Antiseptique', slug: TAG_SLUGS.ANTISEPTIQUE, category: 'attribute' },
  { name: 'Kératolytique', slug: TAG_SLUGS.KERATOLYTIQUE, category: 'attribute' },
]
