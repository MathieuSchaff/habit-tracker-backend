import type { CreateProductInput } from '@habit-tracker/shared'

// ─── Slugs ────────────────────────────────────────────────

export const TONERS_SLUGS = {
  ANUA_RICE_70_GLOW_MILKY: 'anua-rice-70-glow-milky-toner',
  HARUHARU_BLACK_RICE_HYALURONIC_FF: 'haruharu-wonder-black-rice-hyaluronic-toner-fragrance-free',
  BEAUTY_OF_JOSEON_GLOW_RICE_MILK: 'beauty-of-joseon-glow-replenishing-rice-milk',
  IM_FROM_RICE_TONER: 'im-from-rice-toner',
  ANUA_HEARTLEAF_77_SOOTHING: 'anua-heartleaf-77-soothing-toner',
  SKIN1004_CENTELLA_PROBIO_CICA_ESSENCE: 'skin1004-madagascar-centella-probio-cica-essence-toner',
  EQQUALBERRY_SWIMMING_POOL: 'eqqualberry-swimming-pool-daily-facial-toner',
  MIXSOON_CENTELLA_ASIATICA: 'mixsoon-centella-asiatica-toner',
  NUMBUZIN_NO9_NAD_PDRN_GLOW: 'numbuzin-no9-nad-pdrn-glow-boosting-toner',
  NUMBUZIN_NO1_PURE_FULL_CALMING: 'numbuzin-no1-pure-full-calming-herb-toner',
  NUMBUZIN_NO5_GLUTATHIONE_VITAMIN: 'numbuzin-no5-glutathione-vitamin-boosting-essential-toner',
  ROUND_LAB_1025_DOKDO: 'round-lab-1025-dokdo-toner',
  SKIN1004_MADAGASCAR_CENTELLA_TONING: 'skin1004-madagascar-centella-toning-toner',
} as const

// ─── Data ─────────────────────────────────────────────────

export const tonersProductData: CreateProductInput[] = [
  {
    name: 'Rice 70 Glow Milky Toner',
    brand: 'Anua',
    kind: 'skincare',
    unit: 'pump',
    slug: TONERS_SLUGS.ANUA_RICE_70_GLOW_MILKY,
    totalAmount: 250,
    amountUnit: 'ml',
    priceCents: 1428,
    description:
      'Tonique laiteux éclaircissant au riz 70% + niacinamide. Illumine teint terne, équilibre sébum, hydrate et renforce barrière.',
    notes:
      'Texture laiteuse légère non collante. Céramides NP/AP/EOP + HA multi-moléculaire + bêtaïne apaisante. Sans parfum, tous types de peau.',
    inci: 'ORYZA SATIVA (RICE) BRAN WATER, BUTYLENE GLYCOL, GLYCERIN, DIPROPYLENE GLYCOL, NIACINAMIDE, PROPANEDIOL, WATER, 1,2-HEXANEDIOL, METHYL GLUCETH-20, PANTHENOL, BETAINE, ORYZA SATIVA (RICE) EXTRACT, HYDROXYACETOPHENONE, DIPHENYL DIMETHICONE, TRIETHYLHEXANOIN, HYDROGENATED LECITHIN, ADENOSINE, ETHYLHEXYLGLYCERIN, CARBOMER, TROMETHAMINE, XANTHAN GUM, GLYCERYL ACRYLATE/ACRYLIC ACID COPOLYMER, THEOBROMA CACAO (COCOA) SEED EXTRACT, SODIUM HYALURONATE, HYDROLYZED HYALURONIC ACID, HYALURONIC ACID, DEXTRIN, HYDROLYZED RICE PROTEIN, ORYZA SATIVA (RICE) SEED PROTEIN, CERAMIDE NP, SODIUM LAUROYL LACTYLATE, ARBUTIN, ASCORBIC ACID, ALLANTOIN, CERAMIDE AP, PHYTOSPHINGOSINE, CHOLESTEROL, CERAMIDE EOP',
    url: 'https://anua.com',
  },
  {
    name: 'Black Rice Hyaluronic Toner Fragrance Free',
    brand: 'haruharu wonder',
    kind: 'skincare',
    unit: 'pump',
    slug: TONERS_SLUGS.HARUHARU_BLACK_RICE_HYALURONIC_FF,
    totalAmount: 150,
    amountUnit: 'ml',
    priceCents: 892,
    description:
      'Tonique hydratant au riz noir coréen + HA + bêta-glucane. Hydratation intense, régénération cellulaire, sans alcool/parfum.',
    notes:
      '95% naturel, 2000 ppm riz noir. Apaise, repulpe, illumine. Texture légère, tous types (idéal sensible).',
    inci: 'WATER, BETAINE, GLYCERIN, PROPANEDIOL, SCUTELLARIA BAICALENSIS ROOT EXTRACT, ORYZA SATIVA (RICE) EXTRACT, PHYLLOSACHYS PUBESCENS SHOOT BARK EXTRACT, XANTHAN GUM, CELLULOSE GUM, 1,2-HEXANEDIOL, BUTYLENE GLYCOL, PULSATILLA KOREANA EXTRACT, ZANTHOXYLUM PIPERITUM FRUIT EXTRACT, USNEA BARBATA (LICHEN) EXTRACT, ASPERGILLUS FERMENT, SODIUM GLUCONATE, HYALURONIC ACID, BETA-GLUCAN, TAMARINDUS INDICA SEED GUM, PANAX GINSENG ROOT EXTRACT, GLUCOSE, CYCLODEXTRIN',
    url: 'https://haruharuusa.com',
  },
  {
    name: 'Glow Replenishing Rice Milk',
    brand: 'Beauty of Joseon',
    kind: 'skincare',
    unit: 'pump',
    slug: TONERS_SLUGS.BEAUTY_OF_JOSEON_GLOW_RICE_MILK,
    totalAmount: 150,
    amountUnit: 'ml',
    priceCents: 1620,
    description:
      'Lotion lait de riz hydratante + acides aminés riz. Combat sécheresse, repulpe, absorbe sébum, purifie pores.',
    notes:
      'Texture bi-couche (hydratante + poudre sébum). Légère rafraîchissante, tous types (idéal sensible/rougeurs).',
    inci: 'WATER, METHYLPROPANEDIOL, PROPANEDIOL, 1,2-HEXANEDIOL, GLYCERIN, GLYCERETH-26, POLYMETHYL METHACRYLATE, ORYZA SATIVA (RICE) EXTRACT, COPTIS JAPONICA ROOT EXTRACT, ULMUS DAVIDIANA ROOT EXTRACT, AMARANTHUS CAUDATUS SEED EXTRACT, FICUS CARICA (FIG) FRUIT EXTRACT, CENTELLA ASIATICA EXTRACT, THEOBROMA CACAO (COCOA) SEED EXTRACT, HYDROGENATED LECITHIN, SODIUM HYALURONATE, PANTHENOL, HYDROXYETHYL UREA, ALUMINUM CHLOROHYDRATE, BUTYLENE GLYCOL, MICROCRYSTALLINE CELLULOSE, SODIUM CITRATE, KAOLIN, ETHYLHEXYLGLYCERIN, DIPOTASSIUM GLYCYRRHIZATE, CITRIC ACID, DEXTRIN, CERAMIDE NP, TOCOPHEROL, RICE AMINO ACIDS',
    url: 'https://beautyofjoseon.com',
  },
  {
    name: 'Rice Toner',
    brand: "I'm from",
    kind: 'skincare',
    unit: 'pump',
    slug: TONERS_SLUGS.IM_FROM_RICE_TONER,
    totalAmount: 150,
    amountUnit: 'ml',
    priceCents: 2170,
    description:
      'Tonique au riz goami 77.78% + niacinamide. Anti-rides, illumine, nourrit peaux sèches/fatiguées.',
    notes:
      'Extrait de riz + son de riz + amaranthus + portulaca. Hydratant/apaisant, tous types (idéal sensible).',
    inci: 'ORYZA SATIVA (RICE) EXTRACT, METHYLPROPANEDIOL, TRIETHYLHEXANOIN, HYDROGENATED POLY(C6-14 OLEFIN), NIACINAMIDE, PENTYLENE GLYCOL, PORTULACA OLERACEA EXTRACT, ORYZA SATIVA (RICE) BRAN EXTRACT, ULMUS DAVIDIANA ROOT EXTRACT, AMARANTHUS CAUDATUS SEED EXTRACT, HYDROGENATED LECITHIN, WATER, POLYGLYCERYL-10 MYRISTATE, BUTYLENE GLYCOL, ADENOSINE, CELLULOSE GUM, ETHYLHEXYLGLYCERIN, 1,2-HEXANEDIOL',
    url: 'https://imfrom.co.kr',
  },
  {
    name: 'Heartleaf 77% Soothing Toner',
    brand: 'Anua',
    kind: 'skincare',
    unit: 'pump',
    slug: TONERS_SLUGS.ANUA_HEARTLEAF_77_SOOTHING,
    totalAmount: 250,
    amountUnit: 'ml',
    priceCents: 1467,
    description:
      'Tonique apaisant 77% houttuynia cordata. Calme rougeurs/irritations, équilibre hydro-lipidique, pH doux.',
    notes:
      'Panthénol + centella + extraits végétaux EWG green. Non-irritant, tous types (idéal sensible/acnéique).',
    inci: 'HOUTTUYNIA CORDATA EXTRACT, PURIFIED WATER, 1,2-HEXANEDIOL, GLYCERIN, BETAINE, PANTHENOL, SACCHARUM OFFICINARUM (SUGARCANE) EXTRACT, PORTULACA OLERACEA EXTRACT, BUTYLENE GLYCOL, VITEX AGNUS-CASTUS EXTRACT, CHAMOMILLA RECUTITA (MATRICARIA) FLOWER EXTRACT, ARCTIUM LAPPA ROOT EXTRACT, PHELLINUS LINTEUS EXTRACT, VITIS VINIFERA (GRAPE) FRUIT EXTRACT, PYRUS MALUS (APPLE) FRUIT EXTRACT, CENTELLA ASIATICA EXTRACT, ISOPENTYLDIOL, METHYLPROPANEDIOL, ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER, TROMETHAMINE, DISODIUM EDTA',
    url: 'https://anua.com',
  },
  {
    name: 'Madagascar Centella Probio-Cica Essence Toner',
    brand: 'SKIN1004',
    kind: 'skincare',
    unit: 'pump',
    slug: TONERS_SLUGS.SKIN1004_CENTELLA_PROBIO_CICA_ESSENCE,
    totalAmount: 210,
    amountUnit: 'ml',
    priceCents: 1116,
    description:
      'Essence-tonique probiotique centella fermentée. Apaise rougeurs, renforce barrière, hydrate intensément.',
    notes:
      'ProBio-Cica + tréhalose + panthénol + céramide NP + HA. Sans parfum/colorants, tous types (idéal sensible).',
    inci: 'CENTELLA ASIATICA EXTRACT, WATER, BUTYLENE GLYCOL, GLYCERIN, POLYPROPANEDIOL, LACTOBACILLUS/CENTELLA ASIATICA EXTRACT FERMENT FILTRATE, POLYGLYCERYL-10 LAURATE, POTASSIUM ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER, TREHALOSE, PANTHENOL, ETHYLHEXYLGLYCERIN, SODIUM CITRATE, XANTHAN GUM, TROMETHAMINE, DIPOTASSIUM GLYCYRRHIZATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, SODIUM PHYTATE, CITRIC ACID, HYDROGENATED LECITHIN, POLYGLYCERYL-10 MYRISTATE, CERAMIDE NP, SODIUM HYALURONATE CROSSPOLYMER, SUCROSE DISTEARATE, MADECASSIC ACID, ASIATICOSIDE, HYDROLYZED GLYCOSAMINOGLYCANS, LAURIC ACID, ASIATIC ACID, PHYTOSTEROLS, SODIUM HYALURONATE, BETAINE, HYDROXYSTEARIC ACID, BENZYL GLYCOL, HYDROLYZED HYALURONIC ACID, MACADAMIA TERNIFOLIA SEED OIL, HYALURONIC ACID, RASPBERRY KETONE, PHYTOSPHINGOSINE',
    url: 'https://www.skin1004.com',
  },
  {
    name: 'Swimming Pool Daily Facial Toner',
    brand: 'EQQUALBERRY',
    kind: 'skincare',
    unit: 'pump',
    slug: TONERS_SLUGS.EQQUALBERRY_SWIMMING_POOL,
    totalAmount: 300,
    amountUnit: 'ml',
    priceCents: 1517,
    description:
      'Tonique quotidien hypoallergénique exfolie doucement (protéase), hydrate (8 HA), apaise avec 5 baies antioxydantes.',
    notes:
      'EWG green, sans alcool/parabènes/benzène. Texture légère, tous types (idéal sensible/texturée).',
    inci: 'WATER, BUTYLENE GLYCOL, GLYCERIN, PROPANEDIOL, 1,2-HEXANEDIOL, PROTEASE, BETAINE, PANTHENOL, XANTHAN GUM, ALLANTOIN, EUTERPE OLERACEA FRUIT EXTRACT, SODIUM HYALURONATE, BETA-GLUCAN, RUBUS FRUTICOSUS (BLACKBERRY) FRUIT, VACCINIUM MACROCARPON (CRANBERRY) FRUIT, VACCINIUM ANGUSTIFOLIUM (BLUEBERRY) FRUIT, RUBUS IDAEUS (RASPBERRY) FRUIT EXTRACT, SAMBUCUS NIGRA FRUIT EXTRACT, PENTYLENE GLYCOL, CAPRYLYL GLYCOL, FRUCTAN, STYRENE/VP COPOLYMER',
    url: 'https://eqqualberryglobal.com',
  },
  {
    name: 'Centella Asiatica Toner',
    brand: 'mixsoon',
    kind: 'skincare',
    unit: 'pump',
    slug: TONERS_SLUGS.MIXSOON_CENTELLA_ASIATICA,
    totalAmount: 300,
    amountUnit: 'ml',
    priceCents: 1250,
    description:
      'Tonique minimaliste 100% extrait centella asiatica. Apaise irritations, hydrate profondément.',
    notes: 'Ultra-simple, sans parfum/colorants. Idéal sensible/irritée, tous types.',
    inci: 'WATER, BUTYLENE GLYCOL, 1,2-HEXANEDIOL, CENTELLA ASIATICA EXTRACT',
    url: 'https://mixsoon.us',
  },
  {
    name: 'No.9 NAD+ PDRN Glow Boosting Toner',
    brand: 'numbuzin',
    kind: 'skincare',
    unit: 'pump',
    slug: TONERS_SLUGS.NUMBUZIN_NO9_NAD_PDRN_GLOW,
    totalAmount: 150,
    amountUnit: 'ml',
    priceCents: 1200,
    description:
      'Tonique booster éclat NAD+ + PDRN saumon + 50 peptides. Repulpe, raffermit, illumine.',
    notes: 'Texture chatoyante violette (B12 + céramides). Non comédogène, sensible/mature.',
    inci: 'WATER, METHYLPROPANEDIOL, NIACINAMIDE, PEG/PPG-17/6 COPOLYMER, PROPANEDIOL, 1,2-HEXANEDIOL, TRIPROPYLENE GLYCOL, GLYCERYL GLUCOSIDE, XYLITYLGLUCOSIDE, PEG-40 HYDROGENATED CASTOR OIL, ANHYDROXYLITOL, GLYCERIN, POLYGLYCERYL-10 LAURATE, CANDIDA BOMBICOLA/GLUCOSE/METHYL RAPESEEDATE FERMENT, C20-40 PARETH-10, TOCOPHERYL ACETATE, XYLITOL, CETEARYL ALCOHOL, SODIUM DNA, HYDROGENATED LECITHIN, GLUCOSE, POLYACRYLATE CROSSPOLYMER-6, ETHYLHEXYLGLYCERIN, ADENOSINE, CERAMIDE NP, SODIUM PHYTATE, HELIANTHUS ANNUUS (SUNFLOWER) SEED OIL, MELIA AZADIRACHTA LEAF EXTRACT, MELIA AZADIRACHTA FLOWER EXTRACT, CITRIC ACID, HYDROXYETHYLCELLULOSE, SODIUM CITRATE, PHYTOSTEROLS, COCCINIA INDICA FRUIT EXTRACT, ALOE BARBADENSIS FLOWER EXTRACT, SOLANUM MELONGENA (EGGPLANT) FRUIT EXTRACT, t-BUTYL ALCOHOL, OCIMUM SANCTUM LEAF EXTRACT, CURCUMA LONGA (TURMERIC) ROOT EXTRACT, CORALLINA OFFICINALIS EXTRACT, CYANOCOBALAMIN, CAPRYLIC/CAPRIC TRIGLYCERIDE, HYDROLYZED COLLAGEN, BUTYLENE GLYCOL, ADENOSINE TRIPHOSPHATE, NICOTINAMIDE ADENINE DINUCLEOTIDE, RESVERATROL, PULLULAN, SODIUM PALMITOYL SARCOSINATE, PALMITIC ACID, C12-14 ALKETH-12, PISUM SATIVUM (PEA) PEPTIDE, STEARIC ACID, POLYGLYCERYL-6 LAURATE, CAPRYLYL GLYCOL, DIPEPTIDE DIAMINOBUTYROYL BENZYLAMIDE DIACETATE, DEXTRAN, HYDROLYZED ELASTIN, SOLUBLE COLLAGEN, ACETYL TETRAPEPTIDE-3, TRIFOLIUM PRATENSE (CLOVER) FLOWER EXTRACT, DISODIUM EDTA, MYRISTIC ACID, ACETYL HEXAPEPTIDE-8, MANNOSE, sh-OCTAPEPTIDE-4, sh-DECAPEPTIDE-7, PALMITOYL PENTAPEPTIDE-4, PALMITOYL TRIPEPTIDE-1, COPPER TRIPEPTIDE-1, HEXAPEPTIDE-9, NONAPEPTIDE-1, TRIPEPTIDE-1, ARACHIDIC ACID, COLLAGEN, ELASTIN, GLUTATHIONE, PALMITOYL TETRAPEPTIDE-7, ARGININE/LYSINE POLYPEPTIDE, OLIGOPEPTIDE-29, OLIGOPEPTIDE-32, ACETYL TETRAPEPTIDE-5, ACETYL TETRAPEPTIDE-9, ACETYL TETRAPEPTIDE-2, ACETYL OCTAPEPTIDE-3, ACETYL HEXAPEPTIDE-1, ALANINE/HISTIDINE/LYSINE POLYPEPTIDE COPPER HCL, ACETYL DIPEPTIDE-1 CETYL ESTER, ACETYL sh-PENTAPEPTIDE-1, BIOTINOYL TRIPEPTIDE-1, DIPEPTIDE-4, HEXAPEPTIDE-11, HEXAPEPTIDE-12, LAURIC ACID, MYRISTOYL PENTAPEPTIDE-17, MYRISTOYL HEXAPEPTIDE-16, MYRISTOYL PENTAPEPTIDE-4, NICOTINOYL TRIPEPTIDE-1, NONAPEPTIDE-7, NICOTINOYL TRIPEPTIDE-35, NICOTINOYL DIPEPTIDE-26, NICOTINOYL DIPEPTIDE-23, OCTAPEPTIDE-2, PALMITOYL TRIPEPTIDE-5, PALMITOYL HEXAPEPTIDE-12, PENTAPEPTIDE-13, PALMITOYL TETRAPEPTIDE-10, PALMITOYL TRIPEPTIDE-38, PALMITOYL TRIPEPTIDE-29, PALMITOYL TRIPEPTIDE-8, sr-(OLIGOPEPTIDE-91 CLOSTRIDIUM BOTULINUM POLYPEPTIDE-1), TETRAPEPTIDE-44, TETRAPEPTIDE-30, TRIPEPTIDE-10 CITRULLINE, TRIPEPTIDE-32, TRIPEPTIDE-29, sh-POLYPEPTIDE-22, sh-OLIGOPEPTIDE-1, sh-POLYPEPTIDE-1, sh-POLYPEPTIDE-9, sh-OLIGOPEPTIDE-2, sh-POLYPEPTIDE-11, sh-POLYPEPTIDE-3, sh-POLYPEPTIDE-16, sh-POLYPEPTIDE-62',
    url: 'https://us.numbuzin.com',
  },
  {
    name: 'No.1 Pure-Full Calming Herb Toner',
    brand: 'numbuzin',
    kind: 'skincare',
    unit: 'pump',
    slug: TONERS_SLUGS.NUMBUZIN_NO1_PURE_FULL_CALMING,
    totalAmount: 300,
    amountUnit: 'ml',
    priceCents: 1891,
    description:
      'Tonique apaisant herbacé pour peaux acnéiques/sensibles. Calme rougeurs/irritations, équilibre hydrolipidique, purifie pores.',
    notes:
      '93% extraits végétaux (centella 39%, houttuynia 28%, réglisse 25%). pH doux 5.5, non-comédogène, sans parfum. Idéal acné/rougeurs.',
    inci: 'WATER, 1,2-HEXANEDIOL, DIPROPYLENE GLYCOL, PROPANEDIOL, BUTYLENE GLYCOL, GLYCERIN, GLYCYRRHIZA URALENSIS (LICORICE) ROOT EXTRACT, HOUTTUYNIA CORDATA EXTRACT, CARBOMER, CENTELLA ASIATICA EXTRACT, HYDROXYETHYLCELLULOSE, ARGININE, ALLANTOIN, DISODIUM EDTA, POLYGONUM MULTIFLORUM EXTRACT, BETAINE, HYACINTHUS ORIENTALIS (HYACINTH) EXTRACT, PANTHENOL, NYMPHAEA ALBA FLOWER EXTRACT',
    url: 'https://us.numbuzin.com',
  },
  {
    name: 'No.5+ Glutathione Vitamin Boosting Essential Toner',
    brand: 'numbuzin',
    kind: 'skincare',
    unit: 'pump',
    slug: TONERS_SLUGS.NUMBUZIN_NO5_GLUTATHIONE_VITAMIN,
    totalAmount: 200,
    amountUnit: 'ml',
    priceCents: 1600,
    description:
      'Tonique booster éclat/vitamine pour teint terne/pigmenté. Atténue taches, ravive luminosité avec glutathione + vitamine C + niacinamide.',
    notes:
      '50 000 ppm niacinamide + arbutine + bisabolol + peptides. Texture chatoyante, non-comédogène. Idéal pigmentation/hyperpigmentation.',
    inci: 'WATER, DIPROPYLENE GLYCOL, GLYCERIN, NIACINAMIDE, 1,2-HEXANEDIOL, BUTYLENE GLYCOL, POLYGLYCERIN-3, HIPPOPHAE RHAMNOIDES WATER, ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER, TROMETHAMINE, ERYTHRITOL, PENTYLENE GLYCOL, 3-O-ETHYL ASCORBIC ACID, ETHYLHEXYLGLYCERIN, POLYGLYCERYL-4 CAPRATE, ADENOSINE, GLUTATHIONE, HYDROGENATED LECITHIN, DISODIUM EDTA, MADECASSOSIDE, COPTIS JAPONICA ROOT EXTRACT, DECYL GLUCOSIDE, CAPRYLYL GLYCOL, CERAMIDE NP, ASCORBIC ACID, BISABOLOL, PANTHENOL, TOCOPHEROL, ARBUTIN, ACETYL HEXAPEPTIDE-8, HEXAPEPTIDE-9, NONAPEPTIDE-1, PALMITOYL PENTAPEPTIDE-4, PALMITOYL TRIPEPTIDE-1, PALMITOYL TETRAPEPTIDE-7',
    url: 'https://us.numbuzin.com',
  },
  {
    name: '1025 Dokdo Toner',
    brand: 'Round Lab',
    kind: 'skincare',
    unit: 'pump',
    slug: TONERS_SLUGS.ROUND_LAB_1025_DOKDO,
    totalAmount: 200,
    amountUnit: 'ml',
    priceCents: 1300,
    description:
      "Tonique doux exfoliatif/hydratant à l'eau de mer profonde Dokdo. Affine texture, apaise, équilibre hydrolipidique.",
    notes:
      'Eau de mer + panthénol + allantoïne + bêtaïne + protease douce. Texture aqueuse rafraîchissante, sans sensation collante. Tous types (idéal texture irrégulière).',
    inci: 'WATER, BUTYLENE GLYCOL, GLYCERIN, PENTYLENE GLYCOL, PROPANEDIOL, CHONDRUS CRISPUS EXTRACT, SACCHARUM OFFICINARUM (SUGARCANE) EXTRACT, SEA WATER, 1,2-HEXANEDIOL, PROTEASE, BETAINE, PANTHENOL, ETHYLHEXYLGLYCERIN, ALLANTOIN, XANTHAN GUM, DISODIUM EDTA',
    url: 'https://roundlab.com',
  },
  {
    name: 'Madagascar Centella Toning Toner',
    brand: 'SKIN1004',
    kind: 'skincare',
    unit: 'pump',
    slug: TONERS_SLUGS.SKIN1004_MADAGASCAR_CENTELLA_TONING,
    totalAmount: 210,
    amountUnit: 'ml',
    priceCents: 1116,
    description:
      'Tonique PHA doux à 84% centella asiatica. Exfolie légèrement, apaise, hydrate, illumine sans irritation.',
    notes:
      'Gluconolactone PHA + niacinamide + HA + bêtaïne. Texture aqueuse, tous types (idéal sensible/barrière faible).',
    inci: 'CENTELLA ASIATICA EXTRACT, PURIFIED WATER, DIPROPYLENE GLYCOL, 1,2-HEXANEDIOL, NIACINAMIDE, GLUCONOLACTONE, TROMETHAMINE, CARBOMER, SODIUM CITRATE, ADENOSINE, DISODIUM EDTA, DIPOTASSIUM GLYCYRRHIZATE, BETAINE, HYALURONIC ACID, ETHYLHEXYLGLYCERIN',
    url: 'https://www.skin1004.com',
  },
]
