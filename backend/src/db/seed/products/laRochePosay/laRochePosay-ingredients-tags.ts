import { INGREDIENT_SLUGS } from '../../ingredients/seed-ingredients'
import { LRP_PRODUCT_SLUGS } from './laRochePosay'

export const LRP_PRODUCT_INGREDIENTS = [
  // La Roche-Posay Hyalu B5 Crème
  {
    productSlug: LRP_PRODUCT_SLUGS.HYALU_B5_CREME,
    ingredientSlug: INGREDIENT_SLUGS.SODIUM_HYALURONATE,
    notes: 'Acide hyaluronique haut & bas PM',
  },
  {
    productSlug: LRP_PRODUCT_SLUGS.HYALU_B5_CREME,
    ingredientSlug: INGREDIENT_SLUGS.PANTHENOL,
    notes: 'Vitamine B5 réparatrice',
  },
  // Anthelios XL
  // { productSlug: LRP_PRODUCT_SLUGS.ANTHELIOS_XL_BRUME_SPF50, ingredientSlug: INGREDIENT_SLUGS.DROMETRIZOLE_TRISILOXANE, concentrationValue: null, concentrationUnit: null, concentrationPer: null, notes: 'Mexoryl XL filtre UVA' },
  // { productSlug: LRP_PRODUCT_SLUGS.ANTHELIOS_XL_BRUME_SPF50, ingredientSlug: INGREDIENT_SLUGS.BUTYL_METHOXYDIBENZOYLMETHANE, concentrationValue: null, concentrationUnit: null, concentrationPer: null, notes: 'Filtre UVA' },
  // { productSlug: LRP_PRODUCT_SLUGS.ANTHELIOS_XL_BRUME_SPF50, ingredientSlug: INGREDIENT_SLUGS.OCTOCRYLENE, concentrationValue: null, concentrationUnit: null, concentrationPer: null, notes: 'Filtre UVB' },

  // Cicaplast B5 SPF50
  {
    productSlug: LRP_PRODUCT_SLUGS.CICAPLAST_B5_SPF50,
    ingredientSlug: INGREDIENT_SLUGS.PANTHENOL,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Apaisant réparateur',
  },
  {
    productSlug: LRP_PRODUCT_SLUGS.CICAPLAST_B5_SPF50,
    ingredientSlug: INGREDIENT_SLUGS.CENTELLA_ASIATICA,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Réparation épidermique',
  },
  // { productSlug: LRP_PRODUCT_SLUGS.CICAPLAST_B5_SPF50, ingredientSlug: INGREDIENT_SLUGS.TITANIUM_DIOXIDE, concentrationValue: null, concentrationUnit: null, concentrationPer: null, notes: 'Filtre minéral UV' },

  // Hyalu B5 Sérum
  {
    productSlug: LRP_PRODUCT_SLUGS.HYALU_B5_SERUM,
    ingredientSlug: INGREDIENT_SLUGS.SODIUM_HYALURONATE,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Acide hyaluronique multi-poids',
  },
  {
    productSlug: LRP_PRODUCT_SLUGS.HYALU_B5_SERUM,
    ingredientSlug: INGREDIENT_SLUGS.PANTHENOL,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Vitamine B5 réparatrice',
  },
  {
    productSlug: LRP_PRODUCT_SLUGS.HYALU_B5_SERUM,
    ingredientSlug: INGREDIENT_SLUGS.CENTELLA_ASIATICA,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Apaisant',
  },
  {
    productSlug: LRP_PRODUCT_SLUGS.EFFACLAR_DUO_M,
    ingredientSlug: INGREDIENT_SLUGS.NIACINAMIDE,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Anti-inflammatoire, régule sébum',
  },
  {
    productSlug: LRP_PRODUCT_SLUGS.EFFACLAR_DUO_M,
    ingredientSlug: INGREDIENT_SLUGS.ZINC_PCA,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Régule sébum, antibactérien',
  },
  {
    productSlug: LRP_PRODUCT_SLUGS.EFFACLAR_DUO_M,
    ingredientSlug: INGREDIENT_SLUGS.SALICYLIC_ACID,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Exfoliant kératolytique',
  },
  {
    productSlug: LRP_PRODUCT_SLUGS.EFFACLAR_DUO_M,
    ingredientSlug: INGREDIENT_SLUGS.SALICYLIC_ACID,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'LHA micro-exfoliant',
  },

  // ═══════════════════════════════════════════════════
  // La Roche-Posay Toleriane Rosaliac AR
  // ═══════════════════════════════════════════════════
  { productSlug: LRP_PRODUCT_SLUGS.ROSALIAC_AR, ingredientSlug: INGREDIENT_SLUGS.GLYCERIN },
  { productSlug: LRP_PRODUCT_SLUGS.ROSALIAC_AR, ingredientSlug: INGREDIENT_SLUGS.SHEA_BUTTER },
  { productSlug: LRP_PRODUCT_SLUGS.ROSALIAC_AR, ingredientSlug: INGREDIENT_SLUGS.PENTYLENE_GLYCOL },
  {
    productSlug: LRP_PRODUCT_SLUGS.ROSALIAC_AR,
    ingredientSlug: INGREDIENT_SLUGS.SCHISANDRA,
    notes: 'Antioxydant — actif clé de la formule Rosaliac',
  },
  {
    productSlug: LRP_PRODUCT_SLUGS.ROSALIAC_AR,
    ingredientSlug: INGREDIENT_SLUGS.SPHINGOMONAS_FERMENT,
    notes: 'Postbiotique microbiome',
  },
]
