import { INGREDIENT_SLUGS } from './seed-ingredients'
import { PRODUCT_SLUGS } from './seed-products'

// ─── Product ↔ Ingredient associations ──────────────────
// Basées sur l'analyse des listes INCI réelles de chaque produit.
// Seuls les ingrédients actifs/notables sont référencés (pas les excipients de base type eau, émulsifiants...).
// Résolu au runtime via les slugs → IDs après insertion.

type ProductIngredientSeed = {
  productSlug: string
  ingredientSlug: string
  concentrationValue?: string // numeric en DB
  concentrationUnit?: string
  concentrationPer?: string
  notes?: string
}

export const productIngredientAssociations: ProductIngredientSeed[] = [
  // ═══════════════════════════════════════════════════
  // Bioderma Sensibio AR+
  // ═══════════════════════════════════════════════════
  { productSlug: PRODUCT_SLUGS.BIODERMA_SENSIBIO_AR, ingredientSlug: INGREDIENT_SLUGS.GLYCERIN },
  {
    productSlug: PRODUCT_SLUGS.BIODERMA_SENSIBIO_AR,
    ingredientSlug: INGREDIENT_SLUGS.PENTYLENE_GLYCOL,
  },
  { productSlug: PRODUCT_SLUGS.BIODERMA_SENSIBIO_AR, ingredientSlug: INGREDIENT_SLUGS.SQUALANE },
  {
    productSlug: PRODUCT_SLUGS.BIODERMA_SENSIBIO_AR,
    ingredientSlug: INGREDIENT_SLUGS.GLYCYRRHETINIC_ACID,
    notes: 'Actif phare anti-inflammatoire (technologie Rosactiv™)',
  },
  {
    productSlug: PRODUCT_SLUGS.BIODERMA_SENSIBIO_AR,
    ingredientSlug: INGREDIENT_SLUGS.PHYTOSPHINGOSINE,
    notes: 'Précurseur de céramides, renforce la barrière',
  },
  {
    productSlug: PRODUCT_SLUGS.BIODERMA_SENSIBIO_AR,
    ingredientSlug: INGREDIENT_SLUGS.RHAMNOSE,
    notes: 'Anti-âge et anti-inflammatoire',
  },
  { productSlug: PRODUCT_SLUGS.BIODERMA_SENSIBIO_AR, ingredientSlug: INGREDIENT_SLUGS.TOCOPHEROL },

  // ═══════════════════════════════════════════════════
  // SVR Sensifine AR Crème
  // ═══════════════════════════════════════════════════
  { productSlug: PRODUCT_SLUGS.SVR_SENSIFINE_AR, ingredientSlug: INGREDIENT_SLUGS.GLYCERIN },
  { productSlug: PRODUCT_SLUGS.SVR_SENSIFINE_AR, ingredientSlug: INGREDIENT_SLUGS.SHEA_BUTTER },
  { productSlug: PRODUCT_SLUGS.SVR_SENSIFINE_AR, ingredientSlug: INGREDIENT_SLUGS.SQUALANE },
  {
    productSlug: PRODUCT_SLUGS.SVR_SENSIFINE_AR,
    ingredientSlug: INGREDIENT_SLUGS.PENTYLENE_GLYCOL,
  },
  {
    productSlug: PRODUCT_SLUGS.SVR_SENSIFINE_AR,
    ingredientSlug: INGREDIENT_SLUGS.OPHIOPOGON_JAPONICUS,
    notes: 'Actif thermorégulateur anti-flush',
  },
  {
    productSlug: PRODUCT_SLUGS.SVR_SENSIFINE_AR,
    ingredientSlug: INGREDIENT_SLUGS.SPHINGOMONAS_FERMENT,
    notes: 'Postbiotique rééquilibrant le microbiome',
  },
  {
    productSlug: PRODUCT_SLUGS.SVR_SENSIFINE_AR,
    ingredientSlug: INGREDIENT_SLUGS.GLYCOSPHINGOLIPIDS,
  },
  {
    productSlug: PRODUCT_SLUGS.SVR_SENSIFINE_AR,
    ingredientSlug: INGREDIENT_SLUGS.RHAMNOSE,
    notes: 'Anti-inflammatoire et stimulant du collagène',
  },
  { productSlug: PRODUCT_SLUGS.SVR_SENSIFINE_AR, ingredientSlug: INGREDIENT_SLUGS.TOCOPHEROL },

  // ═══════════════════════════════════════════════════
  // Avène Antirougeurs Rosamed
  // ═══════════════════════════════════════════════════
  { productSlug: PRODUCT_SLUGS.AVENE_ROSAMED, ingredientSlug: INGREDIENT_SLUGS.GLYCERIN },
  { productSlug: PRODUCT_SLUGS.AVENE_ROSAMED, ingredientSlug: INGREDIENT_SLUGS.PENTYLENE_GLYCOL },
  {
    productSlug: PRODUCT_SLUGS.AVENE_ROSAMED,
    ingredientSlug: INGREDIENT_SLUGS.SILYBUM_MARIANUM,
    notes: `Actif phare — composant clé de l'Angiopausine™`,
  },
  { productSlug: PRODUCT_SLUGS.AVENE_ROSAMED, ingredientSlug: INGREDIENT_SLUGS.TOCOPHEROL },

  // ═══════════════════════════════════════════════════
  // A-Derma Biology AR
  // ═══════════════════════════════════════════════════
  { productSlug: PRODUCT_SLUGS.ADERMA_BIOLOGY_AR, ingredientSlug: INGREDIENT_SLUGS.GLYCERIN },
  {
    productSlug: PRODUCT_SLUGS.ADERMA_BIOLOGY_AR,
    ingredientSlug: INGREDIENT_SLUGS.PENTYLENE_GLYCOL,
  },
  {
    productSlug: PRODUCT_SLUGS.ADERMA_BIOLOGY_AR,
    ingredientSlug: INGREDIENT_SLUGS.AVENA_SATIVA,
    notes: 'Avoine Rhealba® — actif breveté A-Derma, apaisant',
  },
  { productSlug: PRODUCT_SLUGS.ADERMA_BIOLOGY_AR, ingredientSlug: INGREDIENT_SLUGS.TOCOPHEROL },

  // ═══════════════════════════════════════════════════
  // La Roche-Posay Toleriane Rosaliac AR
  // ═══════════════════════════════════════════════════
  { productSlug: PRODUCT_SLUGS.LRP_ROSALIAC_AR, ingredientSlug: INGREDIENT_SLUGS.GLYCERIN },
  { productSlug: PRODUCT_SLUGS.LRP_ROSALIAC_AR, ingredientSlug: INGREDIENT_SLUGS.SHEA_BUTTER },
  { productSlug: PRODUCT_SLUGS.LRP_ROSALIAC_AR, ingredientSlug: INGREDIENT_SLUGS.PENTYLENE_GLYCOL },
  {
    productSlug: PRODUCT_SLUGS.LRP_ROSALIAC_AR,
    ingredientSlug: INGREDIENT_SLUGS.SCHISANDRA,
    notes: 'Antioxydant — actif clé de la formule Rosaliac',
  },
  {
    productSlug: PRODUCT_SLUGS.LRP_ROSALIAC_AR,
    ingredientSlug: INGREDIENT_SLUGS.SPHINGOMONAS_FERMENT,
    notes: 'Postbiotique microbiome',
  },

  // ═══════════════════════════════════════════════════
  // Garancia Que mes Rougeurs Disparaissent
  // ═══════════════════════════════════════════════════
  { productSlug: PRODUCT_SLUGS.GARANCIA_ROUGEURS, ingredientSlug: INGREDIENT_SLUGS.GLYCERIN },
  {
    productSlug: PRODUCT_SLUGS.GARANCIA_ROUGEURS,
    ingredientSlug: INGREDIENT_SLUGS.GLYCYRRHETINIC_ACID,
    notes: 'Anti-inflammatoire — réglisse',
  },
  {
    productSlug: PRODUCT_SLUGS.GARANCIA_ROUGEURS,
    ingredientSlug: INGREDIENT_SLUGS.VACCINIUM_MYRTILLUS,
    notes: 'Antioxydant, renforce les capillaires',
  },
  {
    productSlug: PRODUCT_SLUGS.GARANCIA_ROUGEURS,
    ingredientSlug: INGREDIENT_SLUGS.PLANKTON_EXTRACT,
    notes: 'Extrait marin apaisant',
  },
  { productSlug: PRODUCT_SLUGS.GARANCIA_ROUGEURS, ingredientSlug: INGREDIENT_SLUGS.PANTHENOL },
  {
    productSlug: PRODUCT_SLUGS.GARANCIA_ROUGEURS,
    ingredientSlug: INGREDIENT_SLUGS.ESCIN,
    notes: `Veinotonique — marronnier d'Inde`,
  },
  {
    productSlug: PRODUCT_SLUGS.GARANCIA_ROUGEURS,
    ingredientSlug: INGREDIENT_SLUGS.RUSCUS_ACULEATUS,
    notes: 'Veinotonique — petit-houx',
  },
  {
    productSlug: PRODUCT_SLUGS.GARANCIA_ROUGEURS,
    ingredientSlug: INGREDIENT_SLUGS.AMMONIUM_GLYCYRRHIZATE,
    notes: 'Deuxième dérivé de réglisse anti-inflammatoire',
  },
  {
    productSlug: PRODUCT_SLUGS.GARANCIA_ROUGEURS,
    ingredientSlug: INGREDIENT_SLUGS.CENTELLA_ASIATICA,
    notes: 'Cicatrisant et apaisant',
  },
  { productSlug: PRODUCT_SLUGS.GARANCIA_ROUGEURS, ingredientSlug: INGREDIENT_SLUGS.CALENDULA },
  { productSlug: PRODUCT_SLUGS.GARANCIA_ROUGEURS, ingredientSlug: INGREDIENT_SLUGS.TOCOPHEROL },

  // ═══════════════════════════════════════════════════
  // Isispharma Ruboril Expert S
  // ═══════════════════════════════════════════════════
  { productSlug: PRODUCT_SLUGS.ISISPHARMA_RUBORIL, ingredientSlug: INGREDIENT_SLUGS.GLYCERIN },
  {
    productSlug: PRODUCT_SLUGS.ISISPHARMA_RUBORIL,
    ingredientSlug: INGREDIENT_SLUGS.PENTYLENE_GLYCOL,
  },
  { productSlug: PRODUCT_SLUGS.ISISPHARMA_RUBORIL, ingredientSlug: INGREDIENT_SLUGS.SHEA_BUTTER },
  {
    productSlug: PRODUCT_SLUGS.ISISPHARMA_RUBORIL,
    ingredientSlug: INGREDIENT_SLUGS.GLYCYRRHETINIC_ACID,
    notes: 'Anti-inflammatoire — réglisse',
  },
  { productSlug: PRODUCT_SLUGS.ISISPHARMA_RUBORIL, ingredientSlug: INGREDIENT_SLUGS.NIACINAMIDE },
  { productSlug: PRODUCT_SLUGS.ISISPHARMA_RUBORIL, ingredientSlug: INGREDIENT_SLUGS.PANTHENOL },
  {
    productSlug: PRODUCT_SLUGS.ISISPHARMA_RUBORIL,
    ingredientSlug: INGREDIENT_SLUGS.ESCIN,
    notes: `Veinotonique — marronnier d'Inde`,
  },
  {
    productSlug: PRODUCT_SLUGS.ISISPHARMA_RUBORIL,
    ingredientSlug: INGREDIENT_SLUGS.RUSCUS_ACULEATUS,
    notes: 'Veinotonique — petit-houx',
  },
  {
    productSlug: PRODUCT_SLUGS.ISISPHARMA_RUBORIL,
    ingredientSlug: INGREDIENT_SLUGS.AMMONIUM_GLYCYRRHIZATE,
    notes: 'Deuxième dérivé de réglisse',
  },
  {
    productSlug: PRODUCT_SLUGS.ISISPHARMA_RUBORIL,
    ingredientSlug: INGREDIENT_SLUGS.CENTELLA_ASIATICA,
    notes: 'CENTELLA ASIATICA LEAF EXTRACT',
  },
  { productSlug: PRODUCT_SLUGS.ISISPHARMA_RUBORIL, ingredientSlug: INGREDIENT_SLUGS.CALENDULA },
  { productSlug: PRODUCT_SLUGS.ISISPHARMA_RUBORIL, ingredientSlug: INGREDIENT_SLUGS.TOCOPHEROL },

  // ═══════════════════════════════════════════════════
  // Noreva Sensidiane AR+
  // ═══════════════════════════════════════════════════
  { productSlug: PRODUCT_SLUGS.NOREVA_SENSIDIANE, ingredientSlug: INGREDIENT_SLUGS.GLYCERIN },
  {
    productSlug: PRODUCT_SLUGS.NOREVA_SENSIDIANE,
    ingredientSlug: INGREDIENT_SLUGS.PENTYLENE_GLYCOL,
  },
  { productSlug: PRODUCT_SLUGS.NOREVA_SENSIDIANE, ingredientSlug: INGREDIENT_SLUGS.NIACINAMIDE },
  {
    productSlug: PRODUCT_SLUGS.NOREVA_SENSIDIANE,
    ingredientSlug: INGREDIENT_SLUGS.ASIATICOSIDE,
    notes: 'Forme purifiée de Centella — stimule le collagène',
  },
  {
    productSlug: PRODUCT_SLUGS.NOREVA_SENSIDIANE,
    ingredientSlug: INGREDIENT_SLUGS.CERAMIDE_NP,
    notes: 'Complexe céramides complet (NP + NS + EOP + AP)',
  },
  { productSlug: PRODUCT_SLUGS.NOREVA_SENSIDIANE, ingredientSlug: INGREDIENT_SLUGS.CERAMIDE_NS },
  { productSlug: PRODUCT_SLUGS.NOREVA_SENSIDIANE, ingredientSlug: INGREDIENT_SLUGS.CERAMIDE_EOP },
  { productSlug: PRODUCT_SLUGS.NOREVA_SENSIDIANE, ingredientSlug: INGREDIENT_SLUGS.CERAMIDE_AP },
  { productSlug: PRODUCT_SLUGS.NOREVA_SENSIDIANE, ingredientSlug: INGREDIENT_SLUGS.CHOLESTEROL },
  { productSlug: PRODUCT_SLUGS.NOREVA_SENSIDIANE, ingredientSlug: INGREDIENT_SLUGS.TOCOPHEROL },

  // ═══════════════════════════════════════════════════
  // Uriage Roséliane
  // ═══════════════════════════════════════════════════
  { productSlug: PRODUCT_SLUGS.URIAGE_ROSELIANE, ingredientSlug: INGREDIENT_SLUGS.SQUALANE },
  { productSlug: PRODUCT_SLUGS.URIAGE_ROSELIANE, ingredientSlug: INGREDIENT_SLUGS.GLYCERIN },
  { productSlug: PRODUCT_SLUGS.URIAGE_ROSELIANE, ingredientSlug: INGREDIENT_SLUGS.SHEA_BUTTER },
  {
    productSlug: PRODUCT_SLUGS.URIAGE_ROSELIANE,
    ingredientSlug: INGREDIENT_SLUGS.ASIATICOSIDE,
    notes: 'Forme purifiée de Centella',
  },
  {
    productSlug: PRODUCT_SLUGS.URIAGE_ROSELIANE,
    ingredientSlug: INGREDIENT_SLUGS.CERAMIDE_NP,
    notes: 'Complexe céramides complet (NP + NS + EOP + AP)',
  },
  { productSlug: PRODUCT_SLUGS.URIAGE_ROSELIANE, ingredientSlug: INGREDIENT_SLUGS.CERAMIDE_NS },
  { productSlug: PRODUCT_SLUGS.URIAGE_ROSELIANE, ingredientSlug: INGREDIENT_SLUGS.CERAMIDE_EOP },
  { productSlug: PRODUCT_SLUGS.URIAGE_ROSELIANE, ingredientSlug: INGREDIENT_SLUGS.CERAMIDE_AP },
  { productSlug: PRODUCT_SLUGS.URIAGE_ROSELIANE, ingredientSlug: INGREDIENT_SLUGS.CHOLESTEROL },
  { productSlug: PRODUCT_SLUGS.URIAGE_ROSELIANE, ingredientSlug: INGREDIENT_SLUGS.TOCOPHEROL },

  // ═══════════════════════════════════════════════════
  // ACM Rosakalm
  // ═══════════════════════════════════════════════════
  { productSlug: PRODUCT_SLUGS.ACM_ROSAKALM, ingredientSlug: INGREDIENT_SLUGS.GLYCERIN },
  {
    productSlug: PRODUCT_SLUGS.ACM_ROSAKALM,
    ingredientSlug: INGREDIENT_SLUGS.RUSCUS_ACULEATUS,
    notes: 'Veinotonique — petit-houx',
  },
  {
    productSlug: PRODUCT_SLUGS.ACM_ROSAKALM,
    ingredientSlug: INGREDIENT_SLUGS.SODIUM_HYALURONATE,
    notes: 'Hydratant en profondeur',
  },
  {
    productSlug: PRODUCT_SLUGS.ACM_ROSAKALM,
    ingredientSlug: INGREDIENT_SLUGS.CAMELLIA_SINENSIS,
    notes: 'Thé vert — antioxydant',
  },
  {
    productSlug: PRODUCT_SLUGS.ACM_ROSAKALM,
    ingredientSlug: INGREDIENT_SLUGS.HIPPOPHAE_RHAMNOIDES,
    notes: 'Argousier — régénérant riche en vitamine C',
  },
  { productSlug: PRODUCT_SLUGS.ACM_ROSAKALM, ingredientSlug: INGREDIENT_SLUGS.TOCOPHEROL },

  // ═══════════════════════════════════════════════════
  // Eucerin Anti-Rougeurs Soin Apaisant
  // ═══════════════════════════════════════════════════
  { productSlug: PRODUCT_SLUGS.EUCERIN_AR, ingredientSlug: INGREDIENT_SLUGS.GLYCERIN },
  { productSlug: PRODUCT_SLUGS.EUCERIN_AR, ingredientSlug: INGREDIENT_SLUGS.PANTHENOL },
  { productSlug: PRODUCT_SLUGS.EUCERIN_AR, ingredientSlug: INGREDIENT_SLUGS.SHEA_BUTTER },
  { productSlug: PRODUCT_SLUGS.EUCERIN_AR, ingredientSlug: INGREDIENT_SLUGS.PENTYLENE_GLYCOL },
  {
    productSlug: PRODUCT_SLUGS.EUCERIN_AR,
    ingredientSlug: INGREDIENT_SLUGS.GLYCYRRHIZA_INFLATA,
    notes: 'Licochalcone A — actif signature Eucerin, anti-inflammatoire',
  },
]
