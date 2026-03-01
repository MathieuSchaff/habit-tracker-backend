import { INGREDIENT_SLUGS } from '../../ingredients/seed-ingredients'
import { AVENE_PRODUCT_SLUGS } from './avene'

export const AVENE_PRODUCT_INGREDIENTS = [
  // Cleanance Comedomed Sérum Intensif
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_CLEANANCE_COMEDOMED_SERUM_INTENSIF,
    ingredientSlug: INGREDIENT_SLUGS.SYLIBUM_MARIANUM_FRUIT_EXTRACT, //
    concentrationValue: 25,
    concentrationUnit: '%',
    concentrationPer: null,
    notes: 'Comedoclastin™ : actif breveté issu du Chardon-marie',
  },
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_CLEANANCE_COMEDOMED_SERUM_INTENSIF,
    ingredientSlug: INGREDIENT_SLUGS.GLYCOLIC_ACID,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Exfoliant AHA pour lisser le grain de peau',
  },
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_CLEANANCE_COMEDOMED_SERUM_INTENSIF,
    ingredientSlug: INGREDIENT_SLUGS.BAKUCHIOL,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Alternative végétale au rétinol',
  },

  // Hyaluron Activ Procedure Crème Lifting
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_HYALURON_ACTIV_PROCEDURE_CREME_LIFTING,
    ingredientSlug: INGREDIENT_SLUGS.RETINAL,
    concentrationValue: 0.1,
    concentrationUnit: '%',
    concentrationPer: null,
    notes: "Précurseur direct de l'acide rétinoïque",
  },
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_HYALURON_ACTIV_PROCEDURE_CREME_LIFTING,
    ingredientSlug: INGREDIENT_SLUGS.NIACINAMIDE,
    concentrationValue: 2,
    concentrationUnit: '%',
    concentrationPer: null,
    notes: 'Stimule la régénération cellulaire',
  },
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_HYALURON_ACTIV_PROCEDURE_CREME_LIFTING,
    ingredientSlug: INGREDIENT_SLUGS.HYALURONIC_ACID,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Action lissante et hydratante',
  },

  // XeraCalm A.D Crème Relipidante
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_XERACALM_AD_CREME_RELIPIDANTE,
    ingredientSlug: INGREDIENT_SLUGS.AQUAPHILUS_DOLOMIAE_EXTRACT, // ⚠️ SLUG MANQUANT : I-MODULIA
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'I-modulia® : actif biotechnologique anti-démangeaisons',
  },
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_XERACALM_AD_CREME_RELIPIDANTE,
    ingredientSlug: INGREDIENT_SLUGS.CERAMIDES, // Déduit des "Esters d'huile d'Onagre" mentionnés pour les lipides
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'CER-OMEGA : lipides semblables à ceux de la peau',
  },
  // Cleanance Gel Nettoyant
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_CLEANANCE_GEL_NETTOYANT,
    ingredientSlug: INGREDIENT_SLUGS.ZINC_GLUCONATE,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Action matifiante et anti-irritante',
  },
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_CLEANANCE_GEL_NETTOYANT,
    ingredientSlug: INGREDIENT_SLUGS.SYLIBUM_MARIANUM_FRUIT_EXTRACT,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Comedoclastin™ : aide à réduire les imperfections',
  },

  // Hydrance Riche Crème Hydratante
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_HYDRANCE_RICHE_CREME_HYDRATANTE,
    ingredientSlug: INGREDIENT_SLUGS.SHEA_BUTTER,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Nourrit intensément',
  },
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_HYDRANCE_RICHE_CREME_HYDRATANTE,
    ingredientSlug: INGREDIENT_SLUGS.GLYCERIN,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Hydratation des couches supérieures de la peau',
  },

  // Hydrance Light Crème Hydratante
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_HYDRANCE_LIGHT_CREME_HYDRATANTE,
    ingredientSlug: INGREDIENT_SLUGS.SQUALANE,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Restaure la souplesse de la peau',
  },
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_HYDRANCE_LIGHT_CREME_HYDRATANTE,
    ingredientSlug: INGREDIENT_SLUGS.GLYCERIN,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Hydratation durable',
  },

  // Cicalfate + Crème Réparatrice Protectrice
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_CICALFATE_CREME_REPARATRICE,
    ingredientSlug: INGREDIENT_SLUGS.AQUAPHILUS_DOLOMIAE_FERMENT_FILTRATE,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: '[C+ Restore]™ : actif postbiotique breveté',
  },
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_CICALFATE_CREME_REPARATRICE,
    ingredientSlug: INGREDIENT_SLUGS.ZINC_SULFATE,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Complexe purifiant Cuivre-Zinc',
  },
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_CICALFATE_CREME_REPARATRICE,
    ingredientSlug: INGREDIENT_SLUGS.COPPER_SULFATE,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Complexe purifiant Cuivre-Zinc',
  },

  // Hyaluron Activ B3 Crème Régénération Cellulaire
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_HYALURON_ACTIV_B3_CREME_REGENERATION,
    ingredientSlug: INGREDIENT_SLUGS.NIACINAMIDE,
    concentrationValue: 6,
    concentrationUnit: '%',
    concentrationPer: null,
    notes: 'Stimule la régénération cellulaire',
  },
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_HYALURON_ACTIV_B3_CREME_REGENERATION,
    ingredientSlug: INGREDIENT_SLUGS.SODIUM_HYALURONATE,
    concentrationValue: 0.2,
    concentrationUnit: '%',
    concentrationPer: null,
    notes: 'Acide hyaluronique pur et naturel',
  },
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_HYALURON_ACTIV_B3_CREME_REGENERATION,
    ingredientSlug: INGREDIENT_SLUGS.ADENOSINE,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Actif anti-rides',
  },

  // Xeracalm Ad Huile Lavante Relipidante
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_XERACALM_AD_HUILE_LAVANTE_RELIPIDANTE,
    ingredientSlug: INGREDIENT_SLUGS.AQUAPHILUS_DOLOMIAE_EXTRACT,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'I-modulia® : réduit les sensations de démangeaisons',
  },
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_XERACALM_AD_HUILE_LAVANTE_RELIPIDANTE,
    ingredientSlug: INGREDIENT_SLUGS.HUILE_ONAGRE,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'CER-OMEGA : relipide la peau',
  },

  // Vitamin Activ C Sérum Concentré Éclat
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_VITAMIN_ACTIV_C_SERUM_ECLAT,
    ingredientSlug: INGREDIENT_SLUGS.ASCORBYL_GLUCOSIDE,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Vitamine Cg : forme stable de vitamine C',
  },
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_VITAMIN_ACTIV_C_SERUM_ECLAT,
    ingredientSlug: INGREDIENT_SLUGS.NIACINAMIDE,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Réduit les taches et lisse les rides',
  },
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_VITAMIN_ACTIV_C_SERUM_ECLAT,
    ingredientSlug: INGREDIENT_SLUGS.BAKUCHIOL,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Alternative végétale au rétinol',
  },

  // Solaire Cleanance Solaire SPF50+
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_CLEANANCE_SPF50,
    ingredientSlug: INGREDIENT_SLUGS.ZINC_GLUCONATE,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Action sébo-régulatrice',
  },
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_CLEANANCE_SPF50,
    ingredientSlug: INGREDIENT_SLUGS.TOCOPHERYL_GLUCOSIDE,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Pré-tocophéryl : antioxydant',
  },
  // Fluide Anti-Imperfection SPF50
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_FLUIDE_ANTI_IMPERFECTION_SPF50,
    ingredientSlug: INGREDIENT_SLUGS.TRIASORB,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Filtre solaire breveté contre les UV et la lumière bleue haute énergie',
  },
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_FLUIDE_ANTI_IMPERFECTION_SPF50,
    ingredientSlug: INGREDIENT_SLUGS.ZINC_GLUCONATE,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Régule le sébum et limite les imperfections',
  },

  // SunsiMed KA SPF50+
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_SUNSIMED_KA_SPF50,
    ingredientSlug: INGREDIENT_SLUGS.TOCOPHERYL_GLUCOSIDE,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Pré-tocophéryl : puissant antioxydant',
  },
  // Crème Teintée Anti-Lumière Bleue SPF50+
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_TEINTEE_ANTI_LUMIERE_BLEUE_SPF50,
    ingredientSlug: INGREDIENT_SLUGS.TRIASORB,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Protection ultra-large spectre contre la lumière bleue',
  },
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_TEINTEE_ANTI_LUMIERE_BLEUE_SPF50,
    ingredientSlug: INGREDIENT_SLUGS.GLYCERIN,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Hydratation 24h',
  },

  // Ultra Fluid Oil Control SPF50
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_ULTRA_FLUID_OIL_CONTROL_SPF50,
    ingredientSlug: INGREDIENT_SLUGS.TRIASORB,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Protection lumière bleue et UV',
  },
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_ULTRA_FLUID_OIL_CONTROL_SPF50,
    ingredientSlug: INGREDIENT_SLUGS.LENS_ESCULENTA_SEED_EXTRACT,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Extrait de lentille pour réduire les pores et matifier',
  },

  // Ultra Fluid Éclat Radiance SPF50+
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_ULTRA_FLUID_ECLAT_RADIANCE_SPF50,
    ingredientSlug: INGREDIENT_SLUGS.TRIASORB,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Protection solaire invisible et large spectre',
  },
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_ULTRA_FLUID_ECLAT_RADIANCE_SPF50,
    ingredientSlug: INGREDIENT_SLUGS.TOCOPHEROL,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: "Antioxydant pour l'éclat du teint",
  },

  // Ultra Fluid Perfecteur SPF50+
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_ULTRA_FLUID_PERFECTEUR_SPF50,
    ingredientSlug: INGREDIENT_SLUGS.TRIASORB,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Protection contre le photovieillissement',
  },
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_ULTRA_FLUID_PERFECTEUR_SPF50,
    ingredientSlug: INGREDIENT_SLUGS.IRON_OXIDES,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Pigments pour unifier le teint',
  },

  // Tolérance Control Crème
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_TOLERANCE_CONTROL_CREME,
    ingredientSlug: INGREDIENT_SLUGS.AQUAPHILUS_DOLOMIAE_EXTRACT,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'D-Sensinose™ : actif postbiotique ultra-calmant breveté',
  },
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_TOLERANCE_CONTROL_CREME,
    ingredientSlug: INGREDIENT_SLUGS.SQUALANE,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Restaure la barrière cutanée',
  },

  // Xeracalm A.D Baume Relipidant
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_XERACALM_AD_BAUME,
    ingredientSlug: INGREDIENT_SLUGS.AQUAPHILUS_DOLOMIAE_EXTRACT,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'I-modulia® : réduit les sensations de démangeaisons',
  },
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_XERACALM_AD_BAUME,
    ingredientSlug: INGREDIENT_SLUGS.HUILE_ONAGRE,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: 'Cer-Omega : nourrit et renforce le film protecteur',
  },

  // Antirougeurs Rosamed
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_ROSAMED,
    ingredientSlug: INGREDIENT_SLUGS.SYLIBUM_MARIANUM_FRUIT_EXTRACT,
    concentrationValue: null,
    concentrationUnit: null,
    concentrationPer: null,
    notes: "Angiopausine™ : réduit l'hypervascularisation cutanée",
  },

  // ═══════════════════════════════════════════════════
  // Avène Antirougeurs Rosamed
  // ═══════════════════════════════════════════════════
  { productSlug: AVENE_PRODUCT_SLUGS.AVENE_ROSAMED, ingredientSlug: INGREDIENT_SLUGS.GLYCERIN },
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_ROSAMED,
    ingredientSlug: INGREDIENT_SLUGS.PENTYLENE_GLYCOL,
  },
  {
    productSlug: AVENE_PRODUCT_SLUGS.AVENE_ROSAMED,
    ingredientSlug: INGREDIENT_SLUGS.SILYBUM_MARIANUM,
    notes: `Actif phare — composant clé de l'Angiopausine™`,
  },
  { productSlug: AVENE_PRODUCT_SLUGS.AVENE_ROSAMED, ingredientSlug: INGREDIENT_SLUGS.TOCOPHEROL },
]
