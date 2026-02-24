import type { CreateProductInput } from '@habit-tracker/shared'

// ─── Slugs ────────────────────────────────────────────────

export const AZELAIQUE_SLUGS = {
  ANUA_AZELAIC_10_HYDRATING_REDNESS: 'anua-azelaic-acid-10-hyaluron-redness-soothing-serum',
  NINE_LESS_A_CONTROL_10: 'nine-less-a-control-10-azelaic-acid-serum',
  PURITO_AZELAIC_KOJIC_TEA_TREE: 'purito-azelaic-kojic-tea-tree-serum',
  NOOANCE_AZELAIC_15: 'nooance-serum-acide-azelaique-15-pourcent',
  ALLIES_OF_SKIN_AZELAIC_KOJIC: 'allies-of-skin-azelaic-kojic-advanced-clarifying-serum',
  SONYA_DRIVER_FLAWLESS_BRIGHTLY: 'sonya-driver-flawless-brightly-10-azelaic-acid-serum',
  SVR_SEBIACLEAR_FLASH_15: 'svr-sebiaclear-ampoule-flash-15-azelaic-acid',
  THE_ORDINARY_SUSPENSION_AZELAIC_10: 'the-ordinary-azelaic-acid-suspension-10',
  AROMA_ZONE_CONCENTRE_AZELAIC_10: 'aroma-zone-serum-concentre-acide-azelaique-10',
  ANUA_AZELAIC_3_CICA_TONER: 'anua-azelaic-acid-3-cica-skin-clarifying-toner',
  COLIBRI_BRIGHTENING_BOOSTER: 'colibri-brightening-booster-azelaic-10',
} as const

// ─── Data ─────────────────────────────────────────────────

export const azelaicProductData: CreateProductInput[] = [
  {
    name: 'Azelaic Acid 10% Hyaluron Redness Soothing Serum',
    brand: 'Anua',
    kind: 'skincare',
    unit: 'pump',
    slug: AZELAIQUE_SLUGS.ANUA_AZELAIC_10_HYDRATING_REDNESS,
    totalAmount: 30,
    amountUnit: 'ml',
    priceCents: 1697,
    description:
      'Sérum apaisant 10% acide azélaïque + céramides + 7x centella. Réduit rougeurs, imperfections, hyperpigmentation post-IPL, hydrate et répare barrière.',
    notes:
      'TOP 1 recommandé : céramide NP crucial post-IPL, 7 dérivés centella anti-inflammatoires, betaine salicylate doux compatible rétinal, texture légère non comédogène, 4.8/5 (4828 avis).',
    inci: 'WATER, AZELAIC ACID (10%), PROPYLENE GLYCOL, SODIUM HYDROXIDE, DIPROPYLENE GLYCOL, 1,2-HEXANEDIOL, PANTHENOL, HYDROXYETHYLCELLULOSE, BETAINE SALICYLATE, GLYCERIN, BIOSACCHARIDE GUM-1, ETHYLHEXYLGLYCERIN, ALLANTOIN, DIPOTASSIUM GLYCYRRHIZATE, MELIA AZADIRACHTA LEAF EXTRACT, CAMELLIA SINENSIS LEAF WATER, SODIUM HYALURONATE, MELIA AZADIRACHTA FLOWER EXTRACT, NIACINAMIDE, ALOE BARBADENSIS LEAF JUICE, BETA-GLUCAN, CENTELLA ASIATICA EXTRACT, CENTELLA ASIATICA LEAF EXTRACT, CENTELLA ASIATICA ROOT EXTRACT, MADECASSOSIDE, ASIATICOSIDE, ASIATIC ACID, MADECASSIC ACID, SQUALANE, ZINC PCA, BUTYLENE GLYCOL, PENTYLENE GLYCOL, CAPRYLYL/CAPRYL GLUCOSIDE, HYDROGENATED LECITHIN, CERAMIDE NP',
    url: 'https://anua.com',
  },
  {
    name: 'A-Control 10% Azelaic Acid Serum',
    brand: 'Nine Less',
    kind: 'skincare',
    unit: 'pump',
    slug: AZELAIQUE_SLUGS.NINE_LESS_A_CONTROL_10,
    totalAmount: 30,
    amountUnit: 'ml',
    priceCents: 1158,
    description:
      "Sérum budget 10% acide azélaïque + mucine d'escargot + peptide + 3x centella. Réduit imperfections, hydrate, régénère.",
    notes:
      'Meilleur budget : prix imbattable, mucine escargot boost collagène, peptide anti-âge. Attention acide lactique + saule (légers exfoliants, introduire progressivement avec rétinal).',
    inci: 'AQUA (WATER), AZELAIC ACID (10%), GLYCERETH-26, GLYCERIN, DIPROPYLENE GLYCOL, NIACINAMIDE, BUTYLENE GLYCOL, 1,2-HEXANEDIOL, PANTHENOL, CENTELLA ASIATICA LEAF EXTRACT, CENTELLA ASIATICA EXTRACT, CENTELLA ASIATICA ROOT EXTRACT, LACTIC ACID, PROPANEDIOL, POLYGLYCERYL-10 LAURATE, CELLULOSE GUM, SODIUM POLYACRYLATE, DISODIUM EDTA, SNAIL SECRETION FILTRATE, DECYL GLUCOSIDE, SALIX ALBA (WILLOW) BARK EXTRACT, CLADOSIPHON OKAMURANUS EXTRACT, CAMELLIA SINENSIS LEAF EXTRACT, ASIATIC ACID, ASIATICOSIDE, ACETYL HEXAPEPTIDE-8, MADECASSIC ACID, MADECASSOSIDE, COFFEA ARABICA (COFFEE) SEED EXTRACT, CITRUS AURANTIUM BERGAMIA (BERGAMOT) LEAF EXTRACT, PINUS DENSIFLORA LEAF EXTRACT',
    url: 'https://www.yesstyle.com',
  },
  {
    name: 'Azelaic Kojic Tea Tree Serum',
    brand: 'Purito Seoul',
    kind: 'skincare',
    unit: 'pump',
    slug: AZELAIQUE_SLUGS.PURITO_AZELAIC_KOJIC_TEA_TREE,
    totalAmount: 30,
    amountUnit: 'ml',
    priceCents: 1449,
    description:
      'Sérum 10% azélaïque + kojique + tea tree. Éclaircissant, anti-imperfections, séborégulateur.',
    notes:
      'Triple éclaircissant (azélaïque + kojique + glutathione), CoQ10 + adénosine anti-âge. Attention : tea tree irritant post-IPL, délai livraison 21j.',
    inci: 'WATER, AZELAIC ACID (10%), MELALEUCA ALTERNIFOLIA (TEA TREE) LEAF WATER, BUTYLENE GLYCOL, CAPRYLIC/CAPRIC TRIGLYCERIDE, HYDROXYPROPYL CYCLODEXTRIN, DISODIUM PHOSPHATE, 1,2-HEXANEDIOL, GLYCERIN, NIACINAMIDE, MALTODEXTRIN, HYDROXYETHYLCELLULOSE, COPTIS JAPONICA ROOT EXTRACT, AGAR, GELLAN GUM, KOJIC ACID, ETHYLHEXYLGLYCERIN, HYDROXYDECYL UBIQUINONE (COQ10), ADENOSINE, TRISODIUM ETHYLENEDIAMINE DISUCCINATE, MALACHITE EXTRACT, MELALEUCA ALTERNIFOLIA (TEA TREE) LEAF OIL, ARGININE, XANTHAN GUM, TOCOPHEROL, GLUTATHIONE, BISABOLOL, HELIANTHUS ANNUUS (SUNFLOWER) SEED OIL, XANTHOPHYLLS',
    url: 'https://purito.com',
  },
  {
    name: 'Sérum Acide Azélaïque 15%',
    brand: 'Nooance',
    kind: 'skincare',
    unit: 'pump',
    slug: AZELAIQUE_SLUGS.NOOANCE_AZELAIC_15,
    totalAmount: 30,
    amountUnit: 'ml',
    priceCents: 6500,
    description:
      'Sérum premium 15% acide azélaïque + carnosine + céramides. Concentration max, anti-glycation, réparation barrière.',
    notes:
      '15% azélaïque (max cosmétique) + carnosine unique anti-glycation + céramides + EGCG. Texture laiteuse agréable, adapté peaux sensibles/post-IPL.',
    inci: 'AQUA, AZELAIC ACID (15%), CARNOSINE, CERAMIDE NP, CERAMIDE AP, CERAMIDE EOP, EGCG, AVENA SATIVA (OAT) KERNEL EXTRACT, PERSEA GRATISSIMA (AVOCADO) OIL ESTERS, GLYCERIN, BUTYLENE GLYCOL, PENTYLENE GLYCOL, SODIUM HYDROXIDE, XANTHAN GUM, ETHYLHEXYLGLYCERIN, PHENOXYETHANOL',
    url: 'https://nooance-paris.com',
  },
  {
    name: 'Azelaic & Kojic Advanced Clarifying Serum',
    brand: 'Allies of Skin',
    kind: 'skincare',
    unit: 'pump',
    slug: AZELAIQUE_SLUGS.ALLIES_OF_SKIN_AZELAIC_KOJIC,
    totalAmount: 30,
    amountUnit: 'ml',
    priceCents: 11000,
    description:
      'Sérum luxe 10% azélaïque + kojique + hexylrésorcinol 3%. Éclaircissement puissant, anti-imperfections, anti-âge.',
    notes:
      'Triple éclaircissant + bakuchiol + ribose. Études cliniques (45% amélioration teint). Ultra-clean, prix très élevé.',
    inci: 'AQUA (WATER), AZELAIC ACID (10%), BUTYLENE GLYCOL, ALOE BARBADENSIS LEAF JUICE, PROPANEDIOL, CAPRYLIC/CAPRIC TRIGLYCERIDE, KOJIC ACID (1%), POLYSORBATE 20, GLYCERIN, CAPRYLYL GLYCOL, HEXYLRESORCINOL (3%), ETHYL LINOLEATE, LEUCONOSTOC/RADISH ROOT FERMENT FILTRATE, DODECANE, HYDROXYETHYLCELLULOSE, XANTHAN GUM, HELIANTHUS ANNUUS (SUNFLOWER) SEED OIL, SQUALANE, BISABOLOL, GLYCERYL LAURATE, GLYCERYL UNDECYLENATE, ALLANTOIN, RIBOSE, SODIUM ACETATE, BAKUCHIOL, GLYCYRRHIZA GLABRA (LICORICE) ROOT EXTRACT, CELLULOSE, PHENOXYETHANOL',
    url: 'https://allies.shop',
  },
  {
    name: 'Flawless Brightly 10% Azelaic Acid Serum',
    brand: 'Sonya Driver',
    kind: 'skincare',
    unit: 'pump',
    slug: AZELAIQUE_SLUGS.SONYA_DRIVER_FLAWLESS_BRIGHTLY,
    totalAmount: 30,
    amountUnit: 'ml',
    priceCents: 6000,
    description:
      'Sérum 10% azélaïque + niacinamide + vitamine C + bakuchiol. Éclaircissant tout-en-un pour teint terne.',
    notes:
      'Texture émulsion confortable, vegan/cruelty-free. Redondance niacinamide/vit C dans une routine, prix élevé pour formule basique.',
    inci: 'AQUA (WATER), AZELAIC ACID (10%), CAPRYLIC/CAPRIC TRIGLYCERIDE, NIACINAMIDE, DICAPRYLYL CARBONATE, ASCORBYL GLUCOSIDE, CETEARYL ALCOHOL, GLYCERIN, GLYCERYL STEARATE SE, CETEARYL OLIVATE, BAKUCHIOL, SORBITAN OLIVATE, BENZYL ALCOHOL, XANTHAN GUM, PHENOXYETHANOL, SODIUM HYDROXIDE, DISODIUM EDTA, DEHYDROACETIC ACID',
    url: 'https://sonyadriver.com',
  },
  {
    name: 'Sebiaclear Ampoule Flash 15%',
    brand: 'SVR',
    kind: 'skincare',
    unit: 'pump',
    slug: AZELAIQUE_SLUGS.SVR_SEBIACLEAR_FLASH_15,
    totalAmount: 30,
    amountUnit: 'ml',
    priceCents: 2680,
    description:
      'Ampoule flash 15% azélaïque + zinc + salicylique. Réduction imperfections rapide.',
    notes:
      'Concentration max mais dealbreakers : alcool isopropylique asséchant + salicylique incompatible rétinal + parfum. Pas adapté post-IPL.',
    inci: 'AQUA/WATER/EAU, AZELAIC ACID (15%), GLYCERIN, ISOPROPYL ALCOHOL, ISOPENTYLDIOL, NIACINAMIDE (2%), ZINC GLUCONATE (2%), DICAPRYLYL ETHER, SALICYLIC ACID, PARFUM (FRAGRANCE), PENTYLENE GLYCOL, SODIUM HYDROXIDE, MICROCRYSTALLINE CELLULOSE, 1,2-HEXANEDIOL, CAPRYLYL GLYCOL, SPHINGOMONAS FERMENT EXTRACT, CELLULOSE GUM, TOCOPHEROL',
    url: 'https://www.labo-svr.com',
  },
  {
    name: 'Azelaic Acid Suspension 10%',
    brand: 'The Ordinary',
    kind: 'skincare',
    unit: 'pump',
    slug: AZELAIQUE_SLUGS.THE_ORDINARY_SUSPENSION_AZELAIC_10,
    totalAmount: 30,
    amountUnit: 'ml',
    priceCents: 800,
    description: 'Suspension 10% acide azélaïque minimaliste. Anti-imperfections, éclaircissant.',
    notes:
      'Prix ultra-bas mais texture épaisse collante qui pills, qualité variable selon lots. Pas optimal vs Anua.',
    inci: 'AQUA (WATER), AZELAIC ACID (10%), DIMETHICONE, ISONONYL ISONONANOATE, GLYCERIN, CETEARYL ALCOHOL, CETEARETH-20, POLYMETHYL METHACRYLATE, SODIUM HYDROXIDE, XANTHAN GUM, PHENOXYETHANOL, CHLORPHENESIN',
    url: 'https://theordinary.com',
  },
  {
    name: 'Sérum Concentré Acide Azélaïque 10%',
    brand: 'Aroma-Zone',
    kind: 'skincare',
    unit: 'pump',
    slug: AZELAIQUE_SLUGS.AROMA_ZONE_CONCENTRE_AZELAIC_10,
    totalAmount: 30,
    amountUnit: 'ml',
    priceCents: 1500,
    description: 'Sérum naturel 10% acide azélaïque + HA + silice. Séborégulateur, matifiant.',
    notes:
      '100% origine naturelle, marque française. Très asséchant selon avis, extrait saule (BHA naturel), picotements possibles. Pas idéal post-IPL.',
    inci: 'AQUA, AZELAIC ACID (10%), PENTYLENE GLYCOL, PHYTIC ACID, SALIX NIGRA BARK EXTRACT, SILICA, SODIUM HYDROXIDE, XANTHAN GUM, SODIUM HYALURONATE',
    url: 'https://www.aroma-zone.com',
  },
  {
    name: 'Azelaic Acid 3% Cica Skin Clarifying Toner',
    brand: 'Anua',
    kind: 'skincare',
    unit: 'pump',
    slug: AZELAIQUE_SLUGS.ANUA_AZELAIC_3_CICA_TONER,
    totalAmount: 250,
    amountUnit: 'ml',
    priceCents: 1531,
    description: 'Tonique clarifiant 3% azélaïque + cica + multi-acides. Apaisant mais exfoliant.',
    notes:
      'Concentration trop faible (3%), sur-exfoliation (salicylique + glycolique), HE irritantes (rosemary + tea tree). Incompatible rétinal/post-IPL.',
    inci: 'WATER, AZELAIC ACID (3%), 1,2-HEXANEDIOL, SODIUM HYDROXIDE, PROPYLENE GLYCOL, SALICYLIC ACID, DIPOTASSIUM GLYCYRRHIZATE, PROPANEDIOL, PPG-13-DECYLTETRADECETH-24, BUTYLENE GLYCOL, DISODIUM EDTA, MELIA AZADIRACHTA LEAF EXTRACT, GLYCERIN, ROSMARINUS OFFICINALIS (ROSEMARY) LEAF OIL, MELIA AZADIRACHTA FLOWER EXTRACT, CYNANCHUM ATRATUM EXTRACT, MELALEUCA ALTERNIFOLIA (TEA TREE) LEAF OIL, EPILOBIUM ANGUSTIFOLIUM FLOWER/LEAF/STEM EXTRACT, ETHYLHEXYLGLYCERIN, ALTHAEA ROSEA FLOWER EXTRACT, DOCOSAHEXAENOIC ACID, CITRIC ACID, TOCOPHEROL, MADECASSOSIDE, CENTELLA ASIATICA EXTRACT, PANTHENOL, GLYCINE SOJA (SOYBEAN) PROTEIN, CENTELLA ASIATICA LEAF EXTRACT, ASIATICOSIDE, ALLANTOIN, ECTOIN, GLYCYRRHIZIC ACID, HYDROXYETHYLCELLULOSE, SUCCINIC ACID, ZINC PCA, O-CYMEN-5-OL, SODIUM HYALURONATE, GLYCOLIC ACID, POTASSIUM AZELOYL DIGLYCINATE, COCO-CAPRYLATE/CAPRATE, SODIUM HYALURONATE CROSSPOLYMER, CENTELLA ASIATICA ROOT EXTRACT, HYDROGENATED LECITHIN, POLYGLUTAMIC ACID, XYLOSE, ASIATIC ACID, MADECASSIC ACID, TOTAROL, SQUALANE, CHLORELLA VULGARIS EXTRACT, CERAMIDE NP',
    url: 'https://anua.com',
  },
  {
    name: 'Brightening Booster',
    brand: 'Colibri Skincare',
    kind: 'skincare',
    unit: 'pump',
    slug: AZELAIQUE_SLUGS.COLIBRI_BRIGHTENING_BOOSTER,
    totalAmount: 50,
    amountUnit: 'ml',
    priceCents: 2471,
    description:
      'Booster éclaircissant 10% acide azélaïque + mandélique doux + réglisse + thé vert. Uniformise teint, apaise, compatible rétinal.',
    notes:
      'Recommandé post-IPL : 10% efficace, mandélique peu irritant, céramides-like (jojoba/squalane), texture crèmeuse agréable, excellent rapport qualité/prix.',
    inci: 'AQUA, AZELAIC ACID (10%), GLYCERIN, COCO-CAPRYLATE, PENTYLENE GLYCOL, POTASSIUM HYDROXIDE, METHYL GLUCOSE SESQUISTEARATE, SIMMONDSIA CHINENSIS (JOJOBA) SEED OIL, SQUALANE, ETHYL MACADAMIATE, CETEARYL ALCOHOL, PRUNUS DOMESTICA SEED OIL, GLYCYRRHIZA GLABRA (LICORICE) ROOT EXTRACT, 3-O-ETHYL ASCORBIC ACID, CAMELLIA SINENSIS LEAF EXTRACT, TOCOPHEROL, MANDELIC ACID, MALIC ACID, BEHENYL ALCOHOL, XANTHAN GUM',
    url: 'https://colibriskincare.com',
  },
]
