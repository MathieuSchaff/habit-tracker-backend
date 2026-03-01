import { INGREDIENT_SLUGS } from '../../ingredients/seed-ingredients'
import { AR_PRODUCT_SLUGS } from './anti-rougeurs'

export const AR_PRODUCT_INGREDIENTS = [
  // ACM Rosakalm
  // ═══════════════════════════════════════════════════
  { productSlug: AR_PRODUCT_SLUGS.ACM_ROSAKALM, ingredientSlug: INGREDIENT_SLUGS.GLYCERIN },
  {
    productSlug: AR_PRODUCT_SLUGS.ACM_ROSAKALM,
    ingredientSlug: INGREDIENT_SLUGS.RUSCUS_ACULEATUS,
    notes: 'Veinotonique — petit-houx',
  },
  {
    productSlug: AR_PRODUCT_SLUGS.ACM_ROSAKALM,
    ingredientSlug: INGREDIENT_SLUGS.SODIUM_HYALURONATE,
    notes: 'Hydratant en profondeur',
  },
  {
    productSlug: AR_PRODUCT_SLUGS.ACM_ROSAKALM,
    ingredientSlug: INGREDIENT_SLUGS.GREEN_TEA,
    notes: 'Thé vert — antioxydant',
  },
  {
    productSlug: AR_PRODUCT_SLUGS.ACM_ROSAKALM,
    ingredientSlug: INGREDIENT_SLUGS.HIPPOPHAE_RHAMNOIDES,
    notes: 'Argousier — régénérant riche en vitamine C',
  },
  { productSlug: AR_PRODUCT_SLUGS.ACM_ROSAKALM, ingredientSlug: INGREDIENT_SLUGS.TOCOPHEROL },

  // ═══════════════════════════════════════════════════
  // Eucerin Anti-Rougeurs Soin Apaisant
  // ═══════════════════════════════════════════════════
  { productSlug: AR_PRODUCT_SLUGS.EUCERIN_AR, ingredientSlug: INGREDIENT_SLUGS.GLYCERIN },
  { productSlug: AR_PRODUCT_SLUGS.EUCERIN_AR, ingredientSlug: INGREDIENT_SLUGS.PANTHENOL },
  { productSlug: AR_PRODUCT_SLUGS.EUCERIN_AR, ingredientSlug: INGREDIENT_SLUGS.SHEA_BUTTER },
  { productSlug: AR_PRODUCT_SLUGS.EUCERIN_AR, ingredientSlug: INGREDIENT_SLUGS.PENTYLENE_GLYCOL },
  {
    productSlug: AR_PRODUCT_SLUGS.EUCERIN_AR,
    ingredientSlug: INGREDIENT_SLUGS.GLYCYRRHIZA_INFLATA,
    notes: 'Licochalcone A — actif signature Eucerin, anti-inflammatoire',
  },

  // ═══════════════════════════════════════════════════
  // Noreva Sensidiane AR+
  // ═══════════════════════════════════════════════════
  { productSlug: AR_PRODUCT_SLUGS.NOREVA_SENSIDIANE, ingredientSlug: INGREDIENT_SLUGS.GLYCERIN },
  {
    productSlug: AR_PRODUCT_SLUGS.NOREVA_SENSIDIANE,
    ingredientSlug: INGREDIENT_SLUGS.PENTYLENE_GLYCOL,
  },
  { productSlug: AR_PRODUCT_SLUGS.NOREVA_SENSIDIANE, ingredientSlug: INGREDIENT_SLUGS.NIACINAMIDE },
  {
    productSlug: AR_PRODUCT_SLUGS.NOREVA_SENSIDIANE,
    ingredientSlug: INGREDIENT_SLUGS.ASIATICOSIDE,
    notes: 'Forme purifiée de Centella — stimule le collagène',
  },
  {
    productSlug: AR_PRODUCT_SLUGS.NOREVA_SENSIDIANE,
    ingredientSlug: INGREDIENT_SLUGS.CERAMIDE_NP,
    notes: 'Complexe céramides complet (NP + NS + EOP + AP)',
  },
  { productSlug: AR_PRODUCT_SLUGS.NOREVA_SENSIDIANE, ingredientSlug: INGREDIENT_SLUGS.CERAMIDE_NS },
  {
    productSlug: AR_PRODUCT_SLUGS.NOREVA_SENSIDIANE,
    ingredientSlug: INGREDIENT_SLUGS.CERAMIDE_EOP,
  },
  { productSlug: AR_PRODUCT_SLUGS.NOREVA_SENSIDIANE, ingredientSlug: INGREDIENT_SLUGS.CERAMIDE_AP },
  { productSlug: AR_PRODUCT_SLUGS.NOREVA_SENSIDIANE, ingredientSlug: INGREDIENT_SLUGS.CHOLESTEROL },
  { productSlug: AR_PRODUCT_SLUGS.NOREVA_SENSIDIANE, ingredientSlug: INGREDIENT_SLUGS.TOCOPHEROL },
]
