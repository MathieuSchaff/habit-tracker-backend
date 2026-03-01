export const KOREAN_PRODUCT_SLUGS = {
  DRG_RED_BLEMISH_CICA_SOOTHING: 'drg-red-blemish-cica-soothing-cream',
  PURITO_OAT_IN_CALMING_GEL: 'purito-oat-in-calming-gel-cream',
  COSRX_ADVANCED_SNAIL_92: 'cosrx-advanced-snail-92-all-in-one-cream',
  ISNTREE_HYALURONIC_ACID_MOIST: 'isntree-hyaluronic-acid-moist-cream',
  COSRX_ADVANCED_SNAIL_96: 'cosrx-advanced-snail-96-mucin-essence',
  SOME_BY_MI_30_DAYS_MIRACLE_PATCH: 'some-by-mi-30-days-miracle-clear-spot-patch',
}

export const KOREAN_PRODUCT_DATA = [
  {
    name: 'Advanced Snail 96 Mucin Essence',
    brand: 'COSRX',
    slug: KOREAN_PRODUCT_SLUGS.COSRX_ADVANCED_SNAIL_96,
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
  {
    name: '30 Days Miracle Clear Spot Patch',
    brand: 'SOME BY MI',
    slug: KOREAN_PRODUCT_SLUGS.SOME_BY_MI_30_DAYS_MIRACLE_PATCH,
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
  {
    name: 'R.E.D Blemish Cica Soothing Cream',
    brand: 'Dr.G',
    kind: 'skincare',
    unit: 'pump',
    slug: KOREAN_PRODUCT_SLUGS.DRG_RED_BLEMISH_CICA_SOOTHING,
    totalAmount: 70,
    amountUnit: 'ml',
    priceCents: 0,
    description:
      'Crème apaisante Cica pour peaux sensibles, irritées ou à imperfections (rougeurs, boutons).',
    notes:
      'Occlusion 6.5/10. Texture crème légère. 5-Cica Complex (centella multi-formes) + niacinamide + panthenol.',
    inci: 'WATER, GLYCERIN, BUTYLENE GLYCOL, C13-16 ISOPARAFFIN, NIACINAMIDE, C12-14 ISOPARAFFIN, 1,2-HEXANEDIOL, HYDROGENATED POLYDECENE, PENTYLENE GLYCOL, VINYL DIMETHICONE, CAPRYLYL METHICONE, HYDROXYETHYL ACRYLATE/SODIUM ACRYLOYLDIMETHYL TAURATE COPOLYMER, PANTHENOL, ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER, DIMETHICONOL, POLYMETHYLSILSESQUIOXANE, TROMETHAMINE, DIPOTASSIUM GLYCYRRHIZATE, GLYCERYL ACRYLATE/ACRYLIC ACID COPOLYMER, ETHYLHEXYLGLYCERIN, XANTHAN GUM, DISODIUM EDTA, BETA-GLUCAN, CENTELLA ASIATICA EXTRACT, MADECASSOSIDE, PYRUS MALUS (APPLE) FRUIT EXTRACT, EPIGALLOCATECHIN GALLATE, ASIATICOSIDE, ASIATIC ACID, MADECASSIC ACID',
    url: 'https://dr-g.com',
  },
  {
    name: 'Oat-In Calming Gel Cream',
    brand: 'Purito SEOUL',
    kind: 'skincare',
    unit: 'pump',
    slug: KOREAN_PRODUCT_SLUGS.PURITO_OAT_IN_CALMING_GEL,
    totalAmount: 100,
    amountUnit: 'ml',
    priceCents: 1500,
    description:
      "Gel-crème calmant ultra-léger à 77% d'eau d'avoine pour peaux sensibles, irritées ou sèches.",
    notes:
      'Occlusion 4/10. Texture gel non collante, absorption rapide. Apaise instantanément, renforce barrière sans comédogène.',
    inci: 'AVENA SATIVA (OAT) SEED WATER (77%), BUTYLENE GLYCOL, GLYCERIN, 2,3-BUTANEDIOL, 1,2-HEXANEDIOL, AQUA/WATER, AMMONIUM ACRYLOYLDIMETHYLTAURATE/VP COPOLYMER, SQUALANE, HYDROXYACETOPHENONE, CARBOMER, DIPOTASSIUM GLYCYRRHIZATE, PANTHENOL, TROMETHAMINE, ETHYLHEXYLGLYCERIN, INULIN LAURYL CARBAMATE, SODIUM SURFACTIN, BETA-GLUCAN',
    url: 'https://purito.com',
  },
  {
    name: 'Advanced Snail 92 All In One Cream',
    brand: 'COSRX',
    kind: 'skincare',
    unit: 'pump',
    slug: KOREAN_PRODUCT_SLUGS.COSRX_ADVANCED_SNAIL_92,
    totalAmount: 100,
    amountUnit: 'g',
    priceCents: 2000,
    description:
      "Crème jelly tout-en-un à 92% de mucine d'escargot pour hydrater, réparer et apaiser les peaux abîmées ou sèches.",
    notes:
      'Occlusion 6/10. Texture gel-crème rafraîchissante. Répare barrière, anti-âge, prévient imperfections.',
    inci: 'SNAIL SECRETION FILTRATE, BETAINE, CAPRYLIC/CAPRIC TRIGLYCERIDE, BUTYLENE GLYCOL, CETEARYL OLIVATE, SORBITAN OLIVATE, CETEARYL ALCOHOL, CARBOMER, ARGININE, DIMETHICONE, SODIUM POLYACRYLATE, PHENOXYETHANOL, SODIUM HYALURONATE, STEARIC ACID, ALLANTOIN, PANTHENOL, XANTHAN GUM, ETHYL HEXANEDIOL, ADENOSINE, WATER, MYRISTIC ACID',
    url: 'https://www.cosrx.com',
  },
  {
    name: 'Hyaluronic Acid Moist Cream',
    brand: 'Isntree',
    kind: 'skincare',
    unit: 'pump',
    slug: KOREAN_PRODUCT_SLUGS.ISNTREE_HYALURONIC_ACID_MOIST,
    totalAmount: 100,
    amountUnit: 'ml',
    priceCents: 1500,
    description:
      "Crème hydratante intense avec 5 types d'acide hyaluronique + huiles botaniques pour peaux sèches à mixtes.",
    notes:
      'Occlusion 6.5/10. Texture crème légère non grasse. Équilibre huile/eau, renforce élasticité, sans parfum.',
    inci: 'WATER, GLYCERIN, HYDROGENATED POLYDECENE, CAPRYLIC/CAPRIC TRIGLYCERIDE, DIPROPYLENE GLYCOL, CYCLOHEXASILOXANE, BUTYROSPERMUM PARKII (SHEA) BUTTER, POLYGLYCERYL-3 METHYLGLUCOSE DISTEARATE, CETYL ALCOHOL, GLYCERYL STEARATE, BETAINE, BEHENYL ALCOHOL, PENTYLENE GLYCOL, LAMINARIA JAPONICA EXTRACT, ECLIPTA PROSTRATA LEAF EXTRACT, AVENA SATIVA (OAT) KERNEL EXTRACT, CYNARA SCOLYMUS (ARTICHOKE) LEAF EXTRACT, PRUNUS ARMENIACA (APRICOT) KERNEL OIL, ARGANIA SPINOSA KERNEL OIL, CARTHAMUS TINCTORIUS (SAFFLOWER) SEED OIL, SODIUM HYALURONATE, HYDROGENATED LECITHIN, CAMELLIA SINENSIS LEAF WATER, POLYGLYCERYL-10 LAURATE, PENTAERYTHRITYL DISTEARATE, AMMONIUM ACRYLOYLDIMETHYLTAURATE/VP COPOLYMER, GLYCERYL CAPRYLATE, SODIUM STEAROYL GLUTAMATE, METHYLPROPANEDIOL, FRUCTOOLIGOSACCHARIDES, DISODIUM EDTA, BETA-GLUCAN, HYDROLYZED HYALURONIC ACID, POLYQUATERNIUM-51, BUTYLENE GLYCOL, HYDROXYPROPYLTRIMONIUM HYALURONATE, SODIUM ACETYLATED HYALURONATE, 1,2-HEXANEDIOL, HYDROXYACETOPHENONE, ETHYLHEXYLGLYCERIN, GLYCERETH-26, POTASSIUM HYALURONATE, PANTHENOL, FOLIC ACID, PALMITOYL PENTAPEPTIDE-4, SODIUM HYALURONATE DIMETHYLSILANOL, VINYL DIMETHICONE, HYALURONIC ACID, DIMETHYLSILANOL HYALURONATE, RAFFINOSE, HYDROLYZED SODIUM HYALURONATE, PTERIS MULTIFIDA EXTRACT, ASCORBYL PROPYL HYALURONATE, CHOLESTEROL, CERAMIDE NP, TOCOPHEROL, SODIUM HYALURONATE CROSSPOLYMER, TROMETHAMINE',
    url: 'https://isntree.com',
  },
]
