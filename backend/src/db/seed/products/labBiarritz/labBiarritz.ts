import type { CreateProductInput } from '@habit-tracker/shared'

export const LAB_BIARRITZ_PRODUCT_SLUGS = {
  // Visage – Anti-taches & anti-âge
  LABORATOIRES_BIARRITZ_SERUM_ANTI_TACHES: 'lab-biarritz-serum-anti-taches',
  LABORATOIRES_BIARRITZ_SERUM_REPULPANT: 'lab-biarritz-serum-repulpant',
  LABORATOIRES_BIARRITZ_CREME_NUIT_ANTI_TACHES: 'lab-biarritz-creme-nuit-anti-taches',

  // Visage – Hydratation & soin quotidien
  LABORATOIRES_BIARRITZ_CREME_VISAGE: 'lab-biarritz-creme-visage',
  LABORATOIRES_BIARRITZ_CREME_NUIT_REGENERANTE: 'lab-biarritz-creme-nuit-regenerante',

  // Réparation
  LABORATOIRES_BIARRITZ_CICA_REPA_CREME_REPARATRICE: 'lab-biarritz-cica-repa-creme-reparatrice',

  // Solaire – Visage
  LABORATOIRES_BIARRITZ_CREME_SOLAIRE_VISAGE_SPF50: 'lab-biarritz-creme-solaire-visage-spf50',
  LABORATOIRES_BIARRITZ_CREME_SOLAIRE_TEINTEE_SPF50: 'lab-biarritz-creme-solaire-teinte-spf50',
  LABORATOIRES_BIARRITZ_CREME_SOLAIRE_TEINTEE_SPF50_DOREE:
    'lab-biarritz-creme-solaire-teinte-spf50-doree',

  // Solaire – Corps
  LABORATOIRES_BIARRITZ_LAIT_SOLAIRE_SPF50: 'lab-biarritz-lait-solaire-spf50',

  // Ajouts fréquents / best-sellers (recommandés pour compléter)
  LABORATOIRES_BIARRITZ_CREME_CORPS: 'lab-biarritz-creme-corps',
  LABORATOIRES_BIARRITZ_EAU_NETTOYANTE_BEBE: 'lab-biarritz-eau-nettoyante-bebe',
  LABORATOIRES_BIARRITZ_GEL_LAVANT_SURGRAS_BEBE: 'lab-biarritz-gel-lavant-surgras-bebe',
  LABORATOIRES_BIARRITZ_CREME_HYDRATANTE_VISAGE: 'lab-biarritz-creme-hydratante-visage', // parfois appelée ainsi
  LABORATOIRES_BIARRITZ_CICA_REPA_CREME_MAINS: 'lab-biarritz-cica-repa-creme-mains',
  LABORATOIRES_BIARRITZ_SPRAY_SOLAIRE_SPF50: 'lab-biarritz-spray-solaire-spf50',
  LABORATOIRES_BIARRITZ_HUILE_SECHE_SOLAIRE_SPF30: 'lab-biarritz-huile-seche-solaire-spf30',
}
export const LAB_BIARRITZ_PRODUCT_DATA: CreateProductInput[] = [
  {
    name: 'Crème solaire visage SPF50',
    brand: 'Laboratoires de Biarritz',
    kind: 'sunscreen',
    unit: 'tube',
    slug: LAB_BIARRITZ_PRODUCT_SLUGS.LABORATOIRES_BIARRITZ_CREME_SOLAIRE_VISAGE_SPF50,
    totalAmount: 50,
    amountUnit: 'ml',
    priceCents: 2000,
    description:
      'Crème solaire bio pour le visage avec protection SPF50 contre UVA/UVB. Hydrate et prévient les taches pigmentaires et intolérances au soleil.',
    notes:
      '99,6% naturel. 20,8% bio. Texture légère facile à étaler sans parfum. Pour tous types de peau, surtout claires et sensibles. Utilisable par femmes enceintes et allaitantes.',
    inci: 'CAPRYLIC/CAPRIC TRIGLYCERIDE, COCONUT ALKANES, ZINC OXIDE, TITANIUM DIOXIDE, AQUA/WATER, ORYZA SATIVA POWDER, POLYGLYCERYL-2 DIPOLYHYDROXYSTEARATE, PRUNUS DOMESTICA SEED OIL, SORBITAN OLIVATE, POLYGLYCERYL-3 DIISOSTEARATE, GLYCERIN, HELIANTHUS ANNUUS SEED OIL, COCO-CAPRYLATE/CAPRATE, ALUMINA, STEARIC ACID, GLYCERYL CAPRYLATE, MAGNESIUM SULFATE, GELIDIUM SESQUIPEDALE EXTRACT, ALOE BARBADENSIS LEAF JUICE POWDER, PROPANEDIOL, TOCOPHEROL, SODIUM BENZOATE, POLYGLYCERYL-4 CAPRATE, POTASSIUM SORBATE',
    url: 'https://www.laboratoires-biarritz.com',
  },
  {
    name: 'Crème solaire teintée SPF50 dorée',
    brand: 'Laboratoires de Biarritz',
    kind: 'sunscreen',
    unit: 'tube',
    slug: LAB_BIARRITZ_PRODUCT_SLUGS.LABORATOIRES_BIARRITZ_CREME_SOLAIRE_TEINTEE_SPF50_DOREE,
    totalAmount: 50,
    amountUnit: 'ml',
    priceCents: 2000,
    description:
      'Crème solaire teintée bio SPF50 pour le visage protégeant contre UVA/UVB et lumière bleue. Prévient les taches pigmentaires et unifie le teint avec couvrance modulable.',
    notes:
      '100% naturel. 20,9% bio. Texture légère fini mat sans parfum. Pour tous types de peau, surtout claires et sensibles. Utilisable par femmes enceintes et allaitantes. Non comédogène.',
    inci: 'CAPRYLIC/CAPRIC TRIGLYCERIDE, ZINC OXIDE, COCONUT ALKANES, TITANIUM DIOXIDE, AQUA/WATER, ORYZA SATIVA POWDER, POLYGLYCERYL-2 DIPOLYHYDROXYSTEARATE, PRUNUS DOMESTICA SEED OIL, POLYGLYCERYL-3 DIISOSTEARATE, GLYCERIN, SORBITAN OLIVATE, CI 77492, OCTYLDODECANOL, ALUMINA, COCO-CAPRYLATE/CAPRATE, STEARIC ACID, MAGNESIUM SULFATE, GELIDIUM SESQUIPEDALE EXTRACT, ALOE BARBADENSIS LEAF JUICE POWDER, GLYCERYL CAPRATE, PROPANEDIOL, CI 77491, TOCOPHEROL, CI 77499, POLYGLYCERYL-4 CAPRATE, JOJOBA ESTERS, TRIHYDROXYSTEARIN',
    url: 'https://www.laboratoires-biarritz.com',
  },
  {
    name: 'Crème solaire visage SPF50',
    brand: 'Laboratoires de Biarritz',
    kind: 'sunscreen',
    unit: 'tube',
    slug: LAB_BIARRITZ_PRODUCT_SLUGS.LABORATOIRES_BIARRITZ_CREME_SOLAIRE_VISAGE_SPF50,
    totalAmount: 50,
    amountUnit: 'ml',
    priceCents: 2000,
    description:
      'Crème solaire bio pour le visage avec protection SPF50 contre UVA/UVB. Hydrate et prévient les taches pigmentaires et intolérances au soleil.',
    notes:
      '99,6% naturel. 20,8% bio. Texture légère facile à étaler sans parfum. Pour tous types de peau, surtout claires et sensibles. Utilisable par femmes enceintes et allaitantes.',
    inci: 'CAPRYLIC/CAPRIC TRIGLYCERIDE, COCONUT ALKANES, ZINC OXIDE, TITANIUM DIOXIDE, AQUA/WATER, ORYZA SATIVA POWDER, POLYGLYCERYL-2 DIPOLYHYDROXYSTEARATE, PRUNUS DOMESTICA SEED OIL, SORBITAN OLIVATE, POLYGLYCERYL-3 DIISOSTEARATE, GLYCERIN, HELIANTHUS ANNUUS SEED OIL, COCO-CAPRYLATE/CAPRATE, ALUMINA, STEARIC ACID, GLYCERYL CAPRYLATE, MAGNESIUM SULFATE, GELIDIUM SESQUIPEDALE EXTRACT, ALOE BARBADENSIS LEAF JUICE POWDER, PROPANEDIOL, TOCOPHEROL, SODIUM BENZOATE, POLYGLYCERYL-4 CAPRATE, POTASSIUM SORBATE',
    url: 'https://www.laboratoires-biarritz.com',
  },
  {
    name: 'Lait solaire SPF50',
    brand: 'Laboratoires de Biarritz',
    kind: 'sunscreen',
    unit: 'pump',
    slug: LAB_BIARRITZ_PRODUCT_SLUGS.LABORATOIRES_BIARRITZ_LAIT_SOLAIRE_SPF50,
    totalAmount: 100,
    amountUnit: 'ml',
    priceCents: 2400,
    description:
      'Lait solaire SPF50 pour visage et corps protégeant contre UVA/UVB. Nourrit et apporte confort à la peau.',
    notes:
      '100% naturel. 20% bio. Texture onctueuse minimum traces blanches sans parfum. Pour toute la famille dès 1 an, peaux sensibles. Utilisable par femmes enceintes et allaitantes.',
    inci: 'CAPRYLIC/CAPRIC TRIGLYCERIDE, ZINC OXIDE, COCOS NUCIFERA OIL, COCONUT ALKANES, TITANIUM DIOXIDE, POLYGLYCERYL-2 DIPOLYHYDROXYSTEARATE, BUTYROSPERMUM PARKII BUTTER, POLYGLYCERYL-3 DIISOSTEARATE, HYDROGENATED VEGETABLE OIL, LAUROYL LYSINE, ALUMINA, COCO-CAPRYLATE/CAPRATE, STEARIC ACID, GLYCERYL CAPRYLATE, GELIDIUM SESQUIPEDALE EXTRACT, PROPANEDIOL, TOCOPHEROL, AQUA/WATER, POLYGLYCERYL-4 CAPRATE',
    url: 'https://www.laboratoires-biarritz.com',
  },
  {
    name: 'Crème solaire teintée SPF50',
    brand: 'Laboratoires de Biarritz',
    kind: 'sunscreen',
    unit: 'tube',
    slug: LAB_BIARRITZ_PRODUCT_SLUGS.LABORATOIRES_BIARRITZ_CREME_SOLAIRE_TEINTEE_SPF50,
    totalAmount: 50,
    amountUnit: 'ml',
    priceCents: 2400,
    description:
      'Crème solaire teintée bio SPF50 pour le visage protégeant contre UVA/UVB et lumière bleue. Prévient les taches pigmentaires et unifie le teint avec couvrance modulable.',
    notes:
      '100% naturel. 20,9% bio. Texture légère fini mat sans parfum. Pour tous types de peau, sensibles. Utilisable par femmes enceintes et allaitantes. Non comédogène. Disponible en 3 teintes.',
    inci: 'CAPRYLIC/CAPRIC TRIGLYCERIDE, ZINC OXIDE, COCONUT ALKANES, TITANIUM DIOXIDE, AQUA/WATER, ORYZA SATIVA POWDER, POLYGLYCERYL-2 DIPOLYHYDROXYSTEARATE, PRUNUS DOMESTICA SEED OIL, POLYGLYCERYL-3 DIISOSTEARATE, GLYCERIN, SORBITAN OLIVATE, CI 77492, OCTYLDODECANOL, ALUMINA, COCO-CAPRYLATE/CAPRATE, STEARIC ACID, MAGNESIUM SULFATE, GELIDIUM SESQUIPEDALE EXTRACT, ALOE BARBADENSIS LEAF JUICE POWDER, GLYCERYL CAPRATE, PROPANEDIOL, CI 77491, TOCOPHEROL, CI 77499, POLYGLYCERYL-4 CAPRATE, JOJOBA ESTERS, TRIHYDROXYSTEARIN',
    url: 'https://www.laboratoires-biarritz.com',
  },
  {
    name: 'CICA REPA Crème réparatrice',
    brand: 'Laboratoires de Biarritz',
    kind: 'skincare',
    unit: 'tube',
    slug: LAB_BIARRITZ_PRODUCT_SLUGS.LABORATOIRES_BIARRITZ_CICA_REPA_CREME_REPARATRICE,
    totalAmount: 100,
    amountUnit: 'ml',
    priceCents: 1900,
    description:
      'Crème réparatrice et apaisante pour épidermes irrités et abîmés de toute la famille. Favorise la réparation des couches superficielles de la peau.',
    notes:
      '100% naturel. 57,8% bio. Effet seconde peau non gras sans parfum hypoallergénique. Pour irritations, rougeurs, égratignures, post-épilation, post-rasage, brûlures, post-actes dermatologiques.',
    inci: 'AQUA/WATER, GLYCERIN, BORAGO OFFICINALIS SEED OIL, SIMMONDSIA CHINENSIS SEED OIL, SQUALANE, PROPANEDIOL, PRUNUS DOMESTICA SEED OIL, C12-16 ALCOHOLS, PENTYLENE GLYCOL, GELIDIUM SESQUIPEDALE EXTRACT, ALOE BARBADENSIS LEAF JUICE POWDER, CERAMIDE NP, SODIUM HYALURONATE, PALMITIC ACID, HYDROGENATED LECITHIN, TRIOLEIN, SODIUM LEVULINATE, XANTHAN GUM, TOCOPHEROL, SODIUM ANISATE, CITRIC ACID, GLYCERYL DIOLEATE, SODIUM PHYTATE',
    url: 'https://www.laboratoires-biarritz.com',
  },
  {
    name: 'Crème de nuit régénérante',
    brand: 'Laboratoires de Biarritz',
    kind: 'skincare',
    unit: 'jar',
    slug: LAB_BIARRITZ_PRODUCT_SLUGS.LABORATOIRES_BIARRITZ_CREME_NUIT_REGENERANTE,

    totalAmount: 50,
    amountUnit: 'ml',
    priceCents: 2400,
    description:
      'Crème de nuit hydratante intense 24h protégeant contre le vieillissement cutané. Régénère la peau pour un effet peau neuve.',
    notes:
      '100% naturel. 25% bio. Texture douce enveloppante parfum naturel léger. Pour tous types de peau. Vegan.',
    inci: 'AQUA/WATER, GLYCERIN, BUTYROSPERMUM PARKII BUTTER, OLUS OIL, SQUALANE, CETEARYL ALCOHOL, HYDROGENATED CASTOR OIL, MYRISTYL ALCOHOL, XYLITYLGLUCOSIDE, CETEARYL GLUCOSIDE, GELIDIUM SESQUIPEDALE EXTRACT, ALOE BARBADENSIS LEAF JUICE POWDER, ANHYDROXYLITOL, XYLITOL, SODIUM HYALURONATE, BISABOLOL, PARFUM, LINOLEIC ACID, SODIUM LEVULINATE, MYRISTYL GLUCOSIDE, PROPANEDIOL, XANTHAN GUM, GLYCERYL CAPRYLATE, SODIUM ANISATE, TOCOPHEROL, POLYGLYCERYL-4 CAPRATE, OLEIC ACID, CITRIC ACID, PALMITIC ACID, STEARIC ACID, PHENETHYL ALCOHOL, SACCHARIDE ISOMERATE, LINOLENIC ACID',
    url: 'https://www.laboratoires-biarritz.com',
  },
  {
    name: 'La crème de Biarritz visage',
    brand: 'Laboratoires de Biarritz',
    kind: 'skincare',
    unit: 'jar',
    slug: LAB_BIARRITZ_PRODUCT_SLUGS.LABORATOIRES_BIARRITZ_CREME_VISAGE,
    totalAmount: 50,
    amountUnit: 'ml',
    priceCents: 1900,
    description:
      'Crème hydratante 24h pour le visage, cou et décolleté prévenant les premières rides. Repulpe et illumine la peau.',
    notes:
      '100% naturel. 26,8% bio. Texture riche fondante parfum frais naturel. Pour tous types de peau. Vegan.',
    inci: 'AQUA/WATER, GLYCERIN, BUTYROSPERMUM PARKII BUTTER, OLUS OIL, SIMMONDSIA CHINENSIS SEED OIL, SQUALANE, CETEARYL OLIVATE, COCONUT ALKANES, SORBITAN OLIVATE, LAUROYL LYSINE, MYRISTYL MYRISTATE, HYDROGENATED CASTOR OIL, XYLITYLGLUCOSIDE, GELIDIUM SESQUIPEDALE EXTRACT, ALOE BARBADENSIS LEAF JUICE POWDER, SODIUM HYALURONATE, ANHYDROXYLITOL, XYLITOL, PARFUM, LINOLEIC ACID, OLEIC ACID, PALMITIC ACID, STEARIC ACID, LINOLENIC ACID, SODIUM LEVULINATE, PROPANEDIOL, TOCOPHEROL, COCO-CAPRYLATE/CAPRATE, XANTHAN GUM, SODIUM ANISATE, POLYGLYCERYL-4 CAPRATE, CITRIC ACID, ETHYL LAUROYL ARGINATE HCL, SODIUM PHYTATE, VANILLIN, BETA-CARYOPHYLLENE',
    url: 'https://www.laboratoires-biarritz.com',
  },
  {
    name: 'Crème de nuit anti-taches',
    brand: 'Laboratoires de Biarritz',
    kind: 'skincare',
    unit: 'jar',
    slug: LAB_BIARRITZ_PRODUCT_SLUGS.LABORATOIRES_BIARRITZ_CREME_NUIT_ANTI_TACHES,
    totalAmount: 50,
    amountUnit: 'ml',
    priceCents: 2900,
    description:
      'Crème de nuit corrigeant les taches pigmentaires et stimulant le renouvellement cellulaire. Estompe les taches et uniformise le teint avec action anti-récidive.',
    notes:
      '100% naturel. 21,9% bio. Texture onctueuse parfum doux naturel. Pour zones sujettes aux taches: visage, cou, décolleté, mains. Vegan.',
    inci: 'AQUA/WATER, CAPRYLIC/CAPRIC TRIGLYCERIDE, GLUCONOLACTONE, GLYCERIN, BUTYROSPERMUM PARKII BUTTER, COCO-CAPRYLATE/CAPRATE, BEHENYL ALCOHOL, HELIANTHUS ANNUUS SEED OIL, MICROCRYSTALLINE CELLULOSE, C12-16 ALCOHOLS, ALOE BARBADENSIS LEAF JUICE POWDER, CYSTOSEIRA ABIES-MARINA EXTRACT, CYSTOSEIRA TAMARISCIFOLIA EXTRACT, PALMARIA PALMATA EXTRACT, PALMITIC ACID, HYDROGENATED LECITHIN, PARFUM, CITRIC ACID, XANTHAN GUM, SODIUM HYDROXIDE, SODIUM LEVULINATE, SODIUM CITRATE, MALTODEXTRIN, TOCOPHEROL, SODIUM ANISATE, PENTYLENE GLYCOL',
    url: 'https://www.laboratoires-biarritz.com',
  },
  {
    name: 'Sérum repulpant',
    brand: 'Laboratoires de Biarritz',
    kind: 'skincare',
    unit: 'dropper',
    slug: LAB_BIARRITZ_PRODUCT_SLUGS.LABORATOIRES_BIARRITZ_SERUM_REPULPANT,
    totalAmount: 50,
    amountUnit: 'ml',
    priceCents: 2700,
    description:
      "Sérum hydratant intense 24h protégeant contre les agressions quotidiennes. Repulpe la peau et booste l'hydratation.",
    notes: '100% naturel. 43,8% bio. Pour visage et cou. Vegan.',
    inci: 'AQUA/WATER, GLYCERIN, SQUALANE, OLUS OIL, XYLITYLGLUCOSIDE, GLYCERYL STEARATE CITRATE, ECTOIN, HYDROLYZED GLYCOSAMINOGLYCANS, GELIDIUM SESQUIPEDALE EXTRACT, ALOE BARBADENSIS LEAF JUICE POWDER, ANHYDROXYLITOL, XYLITOL, SODIUM HYALURONATE, ALTEROMONAS FERMENT EXTRACT, SODIUM LEVULINATE, POLYGLYCERYL-3 STEARATE, GLYCERYL CAPRYLATE, PROPANEDIOL, PARFUM, LINOLEIC ACID, HYDROGENATED LECITHIN, BIOSACCHARIDE GUM-1, SODIUM ANISATE, TOCOPHEROL, POLYGLYCERYL-4 CAPRATE, LYSOLECITHIN, SCLEROTIUM GUM, CITRIC ACID, SODIUM PHYTATE, OLEIC ACID, PULLULAN, XANTHAN GUM, PALMITIC ACID, PHENETHYL ALCOHOL, STEARIC ACID, SILICA, LINOLENIC ACID',
    url: 'https://www.laboratoires-biarritz.com',
  },
  {
    name: 'Sérum anti-taches',
    brand: 'Laboratoires de Biarritz',
    kind: 'skincare',
    unit: 'dropper',
    slug: LAB_BIARRITZ_PRODUCT_SLUGS.LABORATOIRES_BIARRITZ_SERUM_ANTI_TACHES,
    totalAmount: 30,
    amountUnit: 'ml',
    priceCents: 3800,
    description:
      "Sérum corrigeant les taches pigmentaires et illuminant le teint. Réduit la taille et l'intensité des taches avec action anti-récidive.",
    notes:
      '100% naturel. 28% bio. Pour zones sujettes aux taches: visage, cou, décolleté, mains. Vegan.',
    inci: 'AQUA/WATER, GLYCERIN, HELIANTHUS ANNUUS SEED OIL, OLUS OIL, TRIETHYL CITRATE, PENTYLENE GLYCOL, ASCORBYL GLUCOSIDE, ARGININE, ALOE BARBADENSIS LEAF JUICE POWDER, CYSTOSEIRA ABIES-MARINA EXTRACT, CYSTOSEIRA TAMARISCIFOLIA EXTRACT, PALMARIA PALMATA EXTRACT, PARFUM, SODIUM LEVULINATE, MICROCRYSTALLINE CELLULOSE, XANTHAN GUM, MALTODEXTRIN, LYSOLECITHIN, SODIUM ANISATE, SCLEROTIUM GUM, SODIUM PHYTATE, TOCOPHEROL, CITRIC ACID, SODIUM CITRATE',
    url: 'https://www.laboratoires-biarritz.com',
  },
]
