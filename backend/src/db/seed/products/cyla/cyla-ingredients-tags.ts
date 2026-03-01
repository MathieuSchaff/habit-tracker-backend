import { INGREDIENT_SLUGS } from '../../ingredients/seed-ingredients'
import { CYLA_PRODUCT_SLUGS } from './cyla'

export const CYLA_INGREDIENTS_PRODUCT = [
  {
    productSlug: CYLA_PRODUCT_SLUGS.ESSENCE_INITIALE,
    ingredientSlug: INGREDIENT_SLUGS.SERINE,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Acide aminé principal du complexe NMF biomimétique (15%)',
  },
  {
    productSlug: CYLA_PRODUCT_SLUGS.ESSENCE_INITIALE,
    ingredientSlug: INGREDIENT_SLUGS.UREA,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: "Facteur naturel d'hydratation",
  },
  {
    productSlug: CYLA_PRODUCT_SLUGS.ESSENCE_INITIALE,
    ingredientSlug: INGREDIENT_SLUGS.LACTIC_ACID,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Humectant et régulateur de pH',
  },

  // Gel Plume — Centella + Avoine
  {
    productSlug: CYLA_PRODUCT_SLUGS.GEL_PLUME,
    ingredientSlug: INGREDIENT_SLUGS.GLYCERIN,
    concentrationValue: 50,
    concentrationUnit: '%',
    concentrationPer: null,
    notes: 'Base glycérinée >50%',
  },
  {
    productSlug: CYLA_PRODUCT_SLUGS.GEL_PLUME,
    ingredientSlug: INGREDIENT_SLUGS.ASIATICOSIDE,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Complexe apaisant Centella (3 molécules)',
  },
  {
    productSlug: CYLA_PRODUCT_SLUGS.GEL_PLUME,
    ingredientSlug: INGREDIENT_SLUGS.AVENA_SATIVA,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: "Extrait d'avoine titré en avenanthramides",
  },

  // Crème Filante — Centella + Avoine
  {
    productSlug: CYLA_PRODUCT_SLUGS.CREME_FILANTE,
    ingredientSlug: INGREDIENT_SLUGS.ASIATICOSIDE,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Complexe apaisant Centella (3 molécules)',
  },
  {
    productSlug: CYLA_PRODUCT_SLUGS.CREME_FILANTE,
    ingredientSlug: INGREDIENT_SLUGS.AVENA_SATIVA,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: "Extrait d'avoine titré en avenanthramides",
  },

  // Crème Légère Initiale — NMF 5% + lipides 2% (céramides >1%)
  {
    productSlug: CYLA_PRODUCT_SLUGS.CREME_LEGERE_INITIALE,
    ingredientSlug: INGREDIENT_SLUGS.CERAMIDE_NP,
    concentrationValue: 1,
    concentrationUnit: '%',
    concentrationPer: null,
    notes: 'Complexe lipidique biomimétique 2% (>1% céramides)',
  },
  {
    productSlug: CYLA_PRODUCT_SLUGS.CREME_LEGERE_INITIALE,
    ingredientSlug: INGREDIENT_SLUGS.CHOLESTEROL,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Complexe lipidique : 25% cholestérol',
  },
  {
    productSlug: CYLA_PRODUCT_SLUGS.CREME_LEGERE_INITIALE,
    ingredientSlug: INGREDIENT_SLUGS.SERINE,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Complexe hydratant NMF biomimétique 5%',
  },

  // Crème Intense Initiale — NMF 5% + lipides 2% (céramides >1%)
  {
    productSlug: CYLA_PRODUCT_SLUGS.CREME_INTENSE_INITIALE,
    ingredientSlug: INGREDIENT_SLUGS.CERAMIDE_NP,
    concentrationValue: 1,
    concentrationUnit: '%',
    concentrationPer: null,
    notes: 'Complexe lipidique biomimétique 2% (>1% céramides)',
  },
  {
    productSlug: CYLA_PRODUCT_SLUGS.CREME_INTENSE_INITIALE,
    ingredientSlug: INGREDIENT_SLUGS.CHOLESTEROL,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Complexe lipidique : 25% cholestérol',
  },
  {
    productSlug: CYLA_PRODUCT_SLUGS.CREME_INTENSE_INITIALE,
    ingredientSlug: INGREDIENT_SLUGS.SERINE,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Complexe hydratant NMF biomimétique 5%',
  },
]
