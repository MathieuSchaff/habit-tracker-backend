import type { CreateProductInput } from '@habit-tracker/shared'

export const PRODUCT_SLUGS = {
  // Avène
  AVENE_XERACALM_HUILE_LAVANTE: 'avene-xeracalm-huile-lavante',
  AVENE_FLUIDE_ANTI_IMPERFECTION_SPF50: 'avene-fluide-anti-imperfection-spf50',
  AVENE_SENSIFINE_AR_SPF50: 'svr-sensifine-ar-creme-spf50', // Note: actually SVR
  // Beauty of Joseon
  BOJ_RELIEF_SUN_AQUA_FRESH: 'beauty-of-joseon-relief-sun-aqua-fresh',
  BOJ_GINSENG_ESSENCE_WATER: 'beauty-of-joseon-ginseng-essence-water',
  // Geek & Gorgeous
  GG_A_GAME_20: 'geek-gorgeous-a-game-20',
  GG_HYDRATION_STATION: 'geek-gorgeous-hydration-station',
  GG_POWER_PEPTIDES: 'geek-gorgeous-power-peptides',
  // SKIN1004
  SKIN1004_TEA_TRICA_RELIEF_MINI: 'skin1004-tea-trica-relief-ampoule-mini',
  SKIN1004_MADAGASCAR_CENTELLA_100: 'skin1004-madagascar-centella-asiatica-100-ampoule',
  SKIN1004_SPOT_COVER_PATCH: 'skin1004-spot-cover-patch',
  // The Ordinary
  TO_MULTI_PEPTIDE_COPPER_1: 'the-ordinary-multi-peptide-copper-peptides-1',
  TO_AZELAIC_ACID_10: 'the-ordinary-azelaic-acid-suspension-10',
  TO_CAFFEINE_5_EGCG: 'the-ordinary-caffeine-solution-5-egcg',
  TO_NIACINAMIDE_10_ZINC_1: 'the-ordinary-niacinamide-10-zinc-1', // archived
  TO_HYALURONIC_ACID_2_B5: 'the-ordinary-hyaluronic-acid-2-b5', // archived
  // COSRX
  COSRX_ADVANCED_SNAIL_96: 'cosrx-advanced-snail-96-mucin-essence',
  // SOME BY MI
  SOME_BY_MI_30_DAYS_MIRACLE_PATCH: 'some-by-mi-30-days-miracle-clear-spot-patch',
  // Aroma Zone
  AZ_SERUM_VITAMINE_C_10_ASTAXANTHINE: 'aroma-zone-serum-vitamine-c-10-astaxanthine',
  AZ_SERUM_BAKUCHIOL: 'aroma-zone-serum-bakuchiol',
  AZ_SERUM_HYALURONIQUE_3_5: 'aroma-zone-serum-acide-hyaluronique-3-5', // archived
  // SVR
  SVR_CICAVIT_PLUS_CREME_HPPI: 'svr-cicavit-plus-creme-hppi',
  SVR_SENSIFINE_AR_SPF50: 'svr-sensifine-ar-creme-spf50',
  // Sephora Collection
  SEPHORA_CREME_APAISANTE_CENTELLA: 'sephora-collection-creme-apaisante-centella-hyaluronique',
  SEPHORA_GLOW_GEL_CREME_VIT_C: 'sephora-collection-glow-gel-creme-vitamine-c-polyglutamique',
  // Autres / Génériques
  ADAPALENE_0_1: 'adapalene-0-1-pourcent',
} as const

export const newProducts: CreateProductInput[] = [
  // 1. Beauty of Joseon Relief Sun Aqua-fresh
  {
    name: 'Relief Sun Aqua-fresh',
    brand: 'Beauty of Joseon',
    slug: PRODUCT_SLUGS.BOJ_RELIEF_SUN_AQUA_FRESH,
    kind: 'skincare',
    unit: 'tube',
    totalAmount: 50,
    amountUnit: 'ml',
    priceCents: 2400,
    description:
      'Crème solaire hydratante SPF50+ PA++++ à la texture fluide et légère. Version plus hydratante du best-seller Relief Sun, avec eau de riz et panthénol (B5) pour apaiser, hydrater et protéger sans trace blanche ni effet collant.',
    notes:
      'Convient à tous les types de peau, idéal peaux mixtes/grasses. Fini frais et non gras, sans parfum ajouté. Absorbe rapidement, bonne base maquillage.',
    inci: 'Water, Oryza Sativa (Rice) Seed Water, Dibutyl Adipate, Butyloctyl Salicylate, Ethylhexyl Triazone, Drometrizole Trisiloxane, Polyglyceryl-3 Distearate, Terephthalylidene Dicamphor Sulfonic Acid, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Polymethylsilsesquioxane, Tromethamine, 1,2-Hexanediol, Panthenol, Pentylene Glycol, Glyceryl Stearate, Silica, Caprylyl Methicone, Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine, Propanediol, Potassium Cetyl Phosphate, Poly C10-30 Alkyl Acrylate, Methylpropanediol, Carbomer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Ethylhexylglycerin, Xanthan Gum, Glycerin, Polyether-1, Avena Sativa (Oat) Kernel Extract, Cynara Scolymus (Artichoke) Leaf Extract, Polyquaternium-51, Camellia Sinensis Leaf Water, Hydrogenated Lecithin, Beta-Glucan, Biosaccharide Gum-1, Inositol, Tocopherol, Ferulic Acid, Oryza Sativa (Rice) Bran Oil, Citric Acid, Ceramide NP, Phytosphingosine, Sodium Hyaluronate, Rice Amino Acids, Rice sh-Oligopeptide-1',
    url: 'https://beautyofjoseon.com',
  },

  // 2. Geek & Gorgeous A-Game 20
  {
    name: 'A-Game 20',
    brand: 'Geek & Gorgeous',
    slug: PRODUCT_SLUGS.GG_A_GAME_20,
    kind: 'skincare',
    unit: 'dropper',
    totalAmount: 30,
    amountUnit: 'ml',
    priceCents: 2280,
    description:
      'Sérum au rétinol très puissant (retinal 0.2%) pour une action anti-âge intense : réduction des rides, texture améliorée, éclat. Formule stabilisée et tolérable.',
    notes:
      'Haute puissance – commencer lentement (2-3x/semaine). Contient ectoine, panthénol et allantoïne pour minimiser irritations. Sans parfum.',
    inci: 'Aqua (Water), Caprylic/Capric Triglyceride, Oleyl Erucate, Glycerin, Triheptanoin, Cetearyl Olivate, Sorbitan Olivate, Panthenol, Ectoin, Cellulose, Allantoin, Retinal, Biosaccharide Gum-1, Tocopherol, Tocopheryl Acetate, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Citric Acid, Disodium EDTA, Phenoxyethanol, Ethylhexylglycerin',
    url: 'https://geekandgorgeous.com',
  },

  // 3. Beauty of Joseon Ginseng Essence Water
  {
    name: 'Ginseng Essence Water',
    brand: 'Beauty of Joseon',
    slug: PRODUCT_SLUGS.BOJ_GINSENG_ESSENCE_WATER,
    kind: 'skincare',
    unit: 'bottle',
    totalAmount: 150,
    amountUnit: 'ml',
    priceCents: 1620,
    description:
      'Essence hydratante et revitalisante à base d’eau de racine de ginseng. Apporte éclat, hydratation profonde et renforce la barrière cutanée.',
    notes:
      'Texture aqueuse légère, multi-couches possible. Riche en ginseng (racine, callus, ferment, extraits), niacinamide et panthénol. Idéal pour tous types de peau.',
    inci: 'PANAX GINSENG ROOT WATER, BUTYLENE GLYCOL, GLYCERIN, PROPANEDIOL, NIACINAMIDE, 1,2-HEXANEDIOL, WATER, HYDROXYACETOPHENONE, GLYCERYL GLUCOSIDE, XANTHAN GUM, PANTHENOL, DIPOTASSIUM GLYCYRRHIZATE, ALLANTOIN, ADENOSINE, PANAX GINSENG CALLUS CULTURE EXTRACT, THEOBROMA CACAO (COCOA) EXTRACT, DEXTRIN, GLUCOSE, PANAX GINSENG ROOT EXTRACT, PANAX GINSENG BERRY EXTRACT, LACTOBACILLUS/PANAX GINSENG ROOT FERMENT FILTRATE, SODIUM HYALURONATE, ETHYLHEXYLGLYCERIN, DISODIUM EDTA',
    url: 'https://beautyofjoseon.com',
  },

  // 4. Avène Fluide Anti-Imperfection SPF50
  {
    name: 'Fluide Anti-Imperfection SPF50',
    brand: 'Avène',
    slug: PRODUCT_SLUGS.AVENE_FLUIDE_ANTI_IMPERFECTION_SPF50,
    kind: 'skincare',
    unit: 'tube',
    totalAmount: 50,
    amountUnit: 'ml',
    priceCents: 2400,
    description:
      'Fluide solaire SPF50+ léger pour peaux sensibles et à imperfections. Protège contre UVB/UVA et lumière bleue (TriAsorB™), régule le sébum, prévient les marques post-acné et corrige les imperfections.',
    notes:
      'Texture fluide non grasse, matifiante. Enrichi en gluconate de zinc anti-imperfections et eau thermale apaisante. Sans parfum.',
    inci: 'AVENE THERMAL SPRING WATER (AVENE AQUA), C12-15 ALKYL BENZOATE, DICAPRYLYL CARBONATE, DIETHYLAMINO HYDROXYBENZOYL HEXYL BENZOATE, WATER (AQUA), DIISOPROPYL ADIPATE, ETHYLHEXYL TRIAZONE, ORYZA SATIVA (RICE) STARCH (ORYZA SATIVA STARCH), PHENYLENE BIS-DIPHENYLTRIAZINE, BIS-ETHYLHEXYLOXYPHENOL METHOXYPHENYL TRIAZINE, POTASSIUM CETYL PHOSPHATE, C9-12 ALKANE, LAURYL GLUCOSIDE, POLYGLYCERYL-2 DIPOLYHYDROXYSTEARATE, GLYCERIN, TAPIOCA STARCH, TRIMETHYLPENTANEDIOL/ADIPIC ACID/GLYCERIN CROSSPOLYMER, BENZOIC ACID, CAPRYLIC/CAPRIC TRIGLYCERIDE, CAPRYLYL GLYCOL, CITRIC ACID, COCO-CAPRYLATE/CAPRATE, GLYCERYL LAURATE, HELIANTHUS ANNUUS (SUNFLOWER) SEED OIL (HELIANTHUS ANNUUS SEED OIL), LENS ESCULENTA (LENTIL) SEED EXTRACT (LENS ESCULENTA SEED EXTRACT), PENTYLENE GLYCOL, PPG-1-PEG-9 LAURYL GLYCOL ETHER, RED 33 (CI 17200), SODIUM BENZOATE, SODIUM PHYTATE, TOCOPHEROL, TOCOPHERYL GLUCOSIDE, XANTHAN GUM, ZINC GLUCONATE',
    url: 'https://www.avene.fr',
  },

  // 5. COSRX Advanced Snail 96 Mucin Essence
  {
    name: 'Advanced Snail 96 Mucin Essence',
    brand: 'COSRX',
    slug: PRODUCT_SLUGS.COSRX_ADVANCED_SNAIL_96,
    kind: 'skincare',
    unit: 'bottle',
    totalAmount: 100,
    amountUnit: 'ml',
    priceCents: 2100,
    description:
      'Essence réparatrice et hydratante iconique à 96% de filtrat de sécrétion d’escargot. Répare, apaise, hydrate et améliore l’éclat et la texture de la peau.',
    notes:
      'Texture visqueuse légère, absorbe vite. Convient à tous types de peau, surtout déshydratées/sensibles. Sans parfum.',
    inci: 'SNAIL SECRETION FILTRATE, BETAINE, BUTYLENE GLYCOL, 1,2-HEXANEDIOL, SODIUM POLYACRYLATE, PHENOXYETHANOL, SODIUM HYALURONATE, ALLANTOIN, ETHYL HEXANEDIOL, CARBOMER, PANTHENOL, ARGININE',
    url: 'https://www.cosrx.com',
  },

  // 6. Geek & Gorgeous Hydration Station
  {
    name: 'Hydration Station',
    brand: 'Geek & Gorgeous',
    slug: PRODUCT_SLUGS.GG_HYDRATION_STATION,
    kind: 'skincare',
    unit: 'tube',
    totalAmount: 50,
    amountUnit: 'ml',
    priceCents: 880,
    description:
      'Gel-crème hydratant léger et apaisant avec ectoine, prébiotiques (xylitol derivatives) et allantoïne. Hydrate sans alourdir, renforce la barrière cutanée.',
    notes: 'Fini gel non gras, idéal peaux mixtes/déshydratées. Sans parfum, vegan.',
    inci: 'Aqua (Water), C15-19 Alkane, Glycerin, Caprylic/Capric Triglyceride, PEG/PPG/Polybutylene Glycol-8/5/3 Glycerin, Isosorbide Dicaprylate, Ectoin, Xylitylglucoside, Bisabolol, Allantoin, Anhydroxylitol, Xylitol, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Ammonium Acryloyldimethyltaurate/VP Copolymer, Glucose, Citric Acid, Tocopherol, Ethylhexylglycerin, Phenoxyethanol',
    url: 'https://geekandgorgeous.com',
  },

  // 7. Geek & Gorgeous Power Peptides
  {
    name: 'Power Peptides Serum',
    brand: 'Geek & Gorgeous',
    slug: PRODUCT_SLUGS.GG_POWER_PEPTIDES,
    kind: 'skincare',
    unit: 'dropper',
    totalAmount: 30,
    amountUnit: 'ml',
    priceCents: 1500,
    description:
      'Sérum anti-âge concentré en peptides (Matrixyl, copper peptides, etc.) pour booster le collagène, réduire rides et améliorer fermeté/élasticité.',
    notes:
      'Formule riche en peptides variés + panthénol/allantoïne. Sans parfum, adapté aux routines anti-âge.',
    inci: 'AQUA (WATER), GLYCERIN, BUTYLENE GLYCOL, PENTYLENE GLYCOL, POLYGLYCERYL-6 STEARATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, PANTHENOL, DICAPRYLYL CARBONATE, DICAPRYLYL ETHER, POTASSIUM CETYL PHOSPHATE, POLYGLYCERYL-6 BEHENATE, TETRAPEPTIDE-21, PALMITOYL TRIPEPTIDE-1, PALMITOYL TETRAPEPTIDE-7, PALMITOYL TRIPEPTIDE-38, COPPER PALMITOYL HEPTAPEPTIDE-14, HEPTAPEPTIDE-15 PALMITATE, SACCHARIDE ISOMERATE, ALLANTOIN, CETEARYL ALCOHOL, GLYCERYL STEARATE SE, TAPIOCA STARCH, ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER, CARBOMER, POLYSORBATE 20, HYDROXYPROPYL CYCLODEXTRIN, LACTIC ACID/GLYCOLIC ACID COPOLYMER, POLYVINYL ALCOHOL, CITRIC ACID, SODIUM CITRATE, SODIUM HYDROXIDE, PHENOXYETHANOL, ETHYLHEXYLGLYCERIN',
    url: 'https://geekandgorgeous.com',
  },

  // 8. SKIN1004 Tea-Trica Relief Ampoule Mini
  {
    name: 'Tea-Trica Relief Ampoule Mini',
    brand: 'SKIN1004',
    slug: PRODUCT_SLUGS.SKIN1004_TEA_TRICA_RELIEF_MINI,
    kind: 'skincare',
    unit: 'dropper',
    totalAmount: 30,
    amountUnit: 'ml',
    priceCents: 500,
    description:
      'Ampoule apaisante et anti-inflammatoire ciblée avec 55% d’extrait de Centella asiatica, eau d’arbre à thé (9.4%) et huile essentielle de tea tree (200 ppm). Calme les rougeurs, irritations et imperfections.',
    notes:
      'Formule légère, hydratante, sans parfum ajouté. Idéale pour peaux sensibles/acnéiques. Version mini (30 ml).',
    inci: 'CENTELLA ASIATICA EXTRACT(55%), CHAMAE-CYPARIS OBTUSA WATER, MELALEUCA ALTERNIFOLIA (TEA TREE) LEAF WATER(9.4%), PINUS PALUSTRIS LEAF EXTRACT, GLYCERINE, BUTYLENE GLYCOL, METHYL GLUCETH-20, DIPROPYLENE GLYCOL, GLYCERETH-26, 1,2-HEXANEDIOL, WATER, HYDROXYACETOPHENONE, AMMONIUM ACRYLOYLDIMETHYLTAURATE/VP COPOLYMER, PROPANEDIOL, POLYGLYCERYL-10 LAURATE, ETHYLHEXYLGLYCERIN, PENTYLENE GLYCOL, CAPRYLYL GLYCOL, DISODIUM EDTA, MELALEUCA ALTERNIFOLIA LEAF OIL (200PPM), OENOTHERA BIENNIS (EVENING PRIMROSE) FLOWER EXTRACT, PUERARIA LOBATA ROOT EXTRACT, ULMUS DAVIDIANA ROOT EXTRACT',
    url: 'https://www.skin1004.com',
  },

  // 9. Sephora Collection Crème Apaisante Centella + HA
  {
    name: 'Crème Apaisante - Acide hyaluronique & Centella asiatica',
    brand: 'Sephora Collection',
    slug: PRODUCT_SLUGS.SEPHORA_CREME_APAISANTE_CENTELLA,
    kind: 'skincare',
    unit: 'jar',
    totalAmount: 50,
    amountUnit: 'ml',
    priceCents: 1700,
    description:
      'Crème hydratante et apaisante avec acide hyaluronique pour l’hydratation et Centella asiatica pour calmer les rougeurs et irritations. Contient un pigment vert correcteur pour un effet immédiat sur les rougeurs.',
    notes: 'Texture crème confortable, adaptée aux peaux sensibles/irritées. Sans parfum fort.',
    inci: 'Aqua (Water), C15-19 Alkane, Dicaprylyl Ether, Boron Nitride, Pentylene Glycol, Glycerin, Polyglyceryl-3 Distearate, Butyrospermum Parkii Butter (Butyrospermum Parkii (Shea Butter)), Sodium Acrylates Copolymer, Glyceryl Stearate, Tribehenin, Olus Oil (Vegetable Oil), Potassium Cetyl Phosphate, Propanediol, Cetearyl Alcohol, Lecithin, Centella Asiatica Extract, CI 77288 (Chromium Oxide Greens), Glyceryl Stearate Citrate, Citric Acid, Sodium Hyaluronate, Sodium Phytate, O-Cymen-5-Ol, Sodium Dehydroacetate, Tocopherol',
    url: 'https://www.sephora.fr',
  },

  // 10. Sephora Collection Glow Gel-Crème Vitamine C
  {
    name: 'GLOW Gel-Crème Éclat Vitamine C & Acide Polyglutamique',
    brand: 'Sephora Collection',
    slug: PRODUCT_SLUGS.SEPHORA_GLOW_GEL_CREME_VIT_C,
    kind: 'skincare',
    unit: 'jar',
    totalAmount: 50,
    amountUnit: 'ml',
    priceCents: 1699,
    description:
      'Gel-crème léger illuminant avec vitamine C (3-O-ethyl ascorbic acid) et acide polyglutamique pour booster l’éclat, hydrater intensément et uniformiser le teint.',
    notes:
      'Texture gel non grasse, fini glowy. Idéal pour tous types de peau cherchant de la luminosité sans lourdeur.',
    inci: 'AQUA (WATER), CAPRYLIC/CAPRIC TRIGLYCERIDE, GLYCERIN, PROPANEDIOL, SODIUM POLYACRYLOYLDIMETHYL TAURATE, 3-O-ETHYL ASCORBIC ACID, C15-19 ALKANE, COCO-CAPRYLATE/CAPRATE, POLYGLYCERYL-6 STEARATE, SODIUM CITRATE, CITRIC ACID, HYDROXYACETOPHENONE, 1,2-HEXANEDIOL, CAPRYLYL GLYCOL, C10-18 TRIGLYCERIDES, SODIUM BENZOATE, POLYGLYCERYL-6 BEHENATE, TETRASODIUM GLUTAMATE DIACETATE, TOCOPHEROL, HELIANTHUS ANNUUS (SUNFLOWER) SEED OIL, POLYGLUTAMIC ACID, CI 15510 (ORANGE 4), CI 19140 (YELLOW 5), SODIUM HYDROXIDE',
    url: 'https://www.sephora.fr',
  },

  // 11. Aroma Zone Sérum Vitamine C 10% + Astaxanthine
  {
    name: 'Sérum Concentré Vitamine C 10% & Astaxanthine',
    brand: 'Aroma Zone',
    slug: PRODUCT_SLUGS.AZ_SERUM_VITAMINE_C_10_ASTAXANTHINE,
    kind: 'skincare',
    unit: 'dropper',
    totalAmount: 30,
    amountUnit: 'ml',
    priceCents: 0, // à confirmer
    description:
      'Sérum antioxydant puissant avec 10% d’ascorbyl glucoside et astaxanthine pour protéger contre le photo-vieillissement, stimuler le collagène, éclaircir et réduire les taches.',
    notes:
      'Formule clean, vegan, avec hyaluronate de sodium et huile de jojoba. Convient aux peaux matures ou exposées.',
    inci: 'AQUA, ASCORBYL GLUCOSIDE (10%), GLYCERIN (GLYCÉRINE VÉGÉTALE), SALIX NIGRA BARK EXTRACT, SODIUM HYDROXIDE, SODIUM LEVULINATE, HAEMATOCOCCUS PLUVIALIS EXTRACT, SODIUM HYALURONATE, SIMMONDSIA CHINENSIS SEED OIL, ASTRAGALUS GUMMIFER GUM, LEVULINIC ACID, SODIUM ANISATE, PHYTIC ACID, POLYPEPSILON-LYSINE, TOCOPHEROL, HELIANTHUS ANNUUS SEED OIL',
    url: 'https://www.aroma-zone.com',
  },

  // 12. SKIN1004 Madagascar Centella Asiatica 100 Ampoule
  {
    name: 'Madagascar Centella Asiatica 100 Ampoule',
    brand: 'SKIN1004',
    slug: PRODUCT_SLUGS.SKIN1004_MADAGASCAR_CENTELLA_100,
    kind: 'skincare',
    unit: 'dropper',
    totalAmount: 100,
    amountUnit: 'ml',
    priceCents: 1326,
    description:
      'Ampoule ultra-minimaliste à 100% Centella asiatica de Madagascar. Calme, répare la barrière et hydrate intensément.',
    notes:
      'Seulement 7 ingrédients, sans parfum, texture aqueuse légère. Idéal peaux sensibles/irritées.',
    inci: 'WATER, GLYCERIN, BUTYLENE GLYCOL, CENTELLA ASIATICA EXTRACT (100%), 1,2-HEXANEDIOL, CELLULOSE GUM, ETHYLHEXYLGLYCERIN',
    url: 'https://www.skin1004.com',
  },

  // 13. SOME BY MI 30 Days Miracle Clear Spot Patch
  {
    name: '30 Days Miracle Clear Spot Patch',
    brand: 'SOME BY MI',
    slug: PRODUCT_SLUGS.SOME_BY_MI_30_DAYS_MIRACLE_PATCH,
    kind: 'skincare',
    unit: 'pack',
    totalAmount: 18,
    amountUnit: 'patchs',
    priceCents: 290,
    description:
      'Patchs hydrocolloïdes anti-boutons invisibles qui absorbent le pus, protègent et accélèrent la guérison.',
    notes: 'Waterproof, fins, transparents. Parfait pour spots isolés.',
    inci: 'Non disponible',
    url: 'https://somebymi.com',
  },

  // 14. SKIN1004 Spot Cover Patch
  {
    name: 'Spot Cover Patch',
    brand: 'SKIN1004',
    slug: PRODUCT_SLUGS.SKIN1004_SPOT_COVER_PATCH,
    kind: 'skincare',
    unit: 'pack',
    totalAmount: 22,
    amountUnit: 'patchs',
    priceCents: 266,
    description:
      'Patchs hydrocolloïdes couvrants pour imperfections : protègent, absorbent et camouflent.',
    notes: 'Invisibles sous maquillage, usage quotidien.',
    inci: 'Non disponible',
    url: 'https://www.skin1004.com',
  },

  // 15. Aroma Zone Sérum Bakuchiol
  {
    name: 'Sérum Bakuchiol',
    brand: 'Aroma Zone',
    slug: PRODUCT_SLUGS.AZ_SERUM_BAKUCHIOL,
    kind: 'skincare',
    unit: 'dropper',
    totalAmount: 30,
    amountUnit: 'ml',
    priceCents: 600,
    description:
      'Sérum anti-âge naturel au bakuchiol (alternative douce au rétinol) dans une base squalane. Stimule collagène, réduit rides sans irritation.',
    notes: 'Minimaliste (3 ingrédients), vegan, stable.',
    inci: 'SQUALANE, ISOSORBIDE DICAPRYLATE, BAKUCHIOL',
    url: 'https://www.aroma-zone.com',
  },

  // 16. The Ordinary Multi-Peptide + Copper Peptides 1%
  {
    name: 'Multi-Peptide + Copper Peptides 1%',
    brand: 'The Ordinary',
    slug: PRODUCT_SLUGS.TO_MULTI_PEPTIDE_COPPER_1,
    kind: 'skincare',
    unit: 'dropper',
    totalAmount: 30,
    amountUnit: 'ml',
    priceCents: 3530,
    description:
      'Sérum multi-peptides avec 1% Copper Tripeptide-1 + 8 autres peptides. Cible rides, élasticité, fermeté et protection antioxydante.',
    notes: 'Haute concentration, texture aqueuse légère, vegan, sans parfum.',
    inci: 'Aqua, Glycerin, Lactococcus Ferment Lysate, Copper Tripeptide-1, Acetyl Hexapeptide-8, Pentapeptide-18, Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7, Palmitoyl Tripeptide-38, Dipeptide Diaminobutyroyl Benzylamide Diacetate, Acetylarginyltryptophyl Diphenylglycine, Sodium Hyaluronate Crosspolymer, Sodium Hyaluronate, Allantoin, Glycine, Alanine, Serine, Valine, Isoleucine, Proline, Threonine, Histidine, Phenylalanine, Arginine, Aspartic Acid, Trehalose, Fructose, Glucose, Maltose, Urea, Sodium Pca, Pca, Sodium Lactate, Citric Acid, Hydroxypropyl Cyclodextrin, Sodium Chloride, Sodium Hydroxide, Butylene Glycol, Pentylene Glycol, Acacia Senegal Gum, Xanthan Gum, Carbomer, Polysorbate 20, Dimethyl Isosorbide, Sodium Benzoate, Caprylyl Glycol, Ethylhexylglycerin, Phenoxyethanol, Chlorphenesin',
    url: 'https://theordinary.com',
  },

  // 17. The Ordinary Azelaic Acid Suspension 10%
  {
    name: 'Azelaic Acid Suspension 10%',
    brand: 'The Ordinary',
    slug: PRODUCT_SLUGS.TO_AZELAIC_ACID_10,
    kind: 'skincare',
    unit: 'tube',
    totalAmount: 30,
    amountUnit: 'ml',
    priceCents: 3310,
    description:
      'Suspension à 10% d’acide azélaïque : exfolie doucement, uniformise teint, réduit taches, rougeurs et imperfections.',
    notes: 'Texture crème légère, peut peler un peu au début. Bon pour acné/rosacée.',
    inci: 'AQUA, ISODECYL NEOPENTANOATE, DIMETHICONE, AZELAIC ACID, DIMETHICONE/BIS-ISOBUTYL PPG-20 CROSSPOLYMER, DIMETHYL ISOSORBIDE, HYDROXYETHYL ACRYLATE/SODIUM ACRYLOYLDIMETHYL TAURATE COPOLYMER, POLYSILICONE-11, ISOHEXADECANE, TOCOPHEROL, TRISODIUM ETHYLENEDIAMINE DISUCCINATE, ISOCETETH-20, POLYSORBATE 60, TRIETHANOLAMINE, ETHOXYDIGLYCOL, PHENOXYETHANOL, CHLORPHENESIN',
    url: 'https://theordinary.com',
  },

  // 18. SVR Cicavit+ Crème HPPI
  {
    name: 'Cicavit+ Crème HPPI',
    brand: 'SVR',
    slug: PRODUCT_SLUGS.SVR_CICAVIT_PLUS_CREME_HPPI,
    kind: 'skincare',
    unit: 'tube',
    totalAmount: 100,
    amountUnit: 'ml',
    priceCents: 1750,
    description:
      'Crème réparatrice accélératrice de cicatrisation pour peaux irritées, lésions, rougeurs, post-actes.',
    notes: 'Avec curcuma, niacinamide, HA hydrolysé. Convient visage/corps, famille entière.',
    inci: 'AQUA/WATER/EAU, ORBIGNYA OLEIFERA SEED OIL, HELIANTHUS ANNUUS (SUNFLOWER) SEED OIL, BUTYROSPERMUM PARKII (SHEA) BUTTER, ZEA MAYS (CORN) OIL, PROPANEDIOL, GLYCERYL STEARATE, GLYCERIN, BEHENYL ALCOHOL, NIACINAMIDE, BUTYLENE GLYCOL, CETEARYL ALCOHOL, CORN STARCH MODIFIED, CURCUMA LONGA (TURMERIC) ROOT EXTRACT, GLYCOLIPIDS, GLYCOSPHINGOLIPIDS, HYDROLYZED YEAST EXTRACT, LECITHIN, SODIUM STEAROYL GLUTAMATE, SODIUM STEAROYL LACTYLATE, ALPHA-GLUCAN OLIGOSACCHARIDE, GLUCOSE, HYDROLYZED HYALURONIC ACID, RHAMNOSE, TOCOPHEROL, 1,2-HEXANEDIOL, CAPRYLYL GLYCOL, CITRIC ACID, GLUCURONIC ACID, PENTYLENE GLYCOL, SODIUM HYDROXIDE, SODIUM POLYACRYLATE, XANTHAN GUM',
    url: 'https://www.svr.com',
  },

  // 19. The Ordinary Caffeine Solution 5% + EGCG
  {
    name: 'Caffeine Solution 5% + EGCG',
    brand: 'The Ordinary',
    slug: PRODUCT_SLUGS.TO_CAFFEINE_5_EGCG,
    kind: 'skincare',
    unit: 'dropper',
    totalAmount: 30,
    amountUnit: 'ml',
    priceCents: 700,
    description:
      'Sérum contour des yeux à 5% caféine + EGCG pour réduire poches, cernes et aspect fatigué.',
    notes: 'Texture aqueuse légère, appliquer matin/soir. Décongestionnant + antioxydant.',
    inci: 'AQUA, CAFFEINE, MALTODEXTRIN, GLYCERIN, PROPANEDIOL, EPIGALLOCATECHIN GALLATYL GLUCOSIDE, GALLYL GLUCOSIDE, HYALURONIC ACID, OXIDIZED GLUTATHIONE, MELANIN, GLYCINE SOJA SEED EXTRACT, PENTYLENE GLYCOL, HYDROXYETHYLCELLULOSE, POLYACRYLATE CROSSPOLYMER-6, XANTHAN GUM, LACTIC ACID, DEHYDROACETIC ACID, TRISODIUM ETHYLENEDIAMINE DISUCCINATE, PROPYL GALLATE, DIMETHYL ISOSORBIDE, BENZYL ALCOHOL, 1,2-HEXANEDIOL, ETHYLHEXYLGLYCERIN, PHENOXYETHANOL, CAPRYLYL GLYCOL',
    url: 'https://theordinary.com',
  },
]
