// ─── Slugs ────────────────────────────────────────────────

export const AZELAIQUE_PRODUCT_SLUGS = {
  NINE_LESS_A_CONTROL_10: 'nine-less-a-control-10-azelaic-acid-serum',
  PURITO_AZELAIC_KOJIC_TEA_TREE: 'purito-azelaic-kojic-tea-tree-serum',
  NOOANCE_AZELAIC_15: 'nooance-serum-acide-azelaique-15-pourcent',
  ALLIES_OF_SKIN_AZELAIC_KOJIC: 'allies-of-skin-azelaic-kojic-advanced-clarifying-serum',
  DR_SAM_FLAWLESS_BRIGHTLY: 'dr-sam-flawless-brightly-10-azelaic-acid-serum',
}

// ─── Data ─────────────────────────────────────────────────

export const AZELAIC_PRODUCT_DATA = [
  {
    name: 'A-Control 10% Azelaic Acid Serum',
    brand: 'Nine Less',
    kind: 'skincare',
    unit: 'pump',
    slug: AZELAIQUE_PRODUCT_SLUGS.NINE_LESS_A_CONTROL_10,
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
    slug: AZELAIQUE_PRODUCT_SLUGS.PURITO_AZELAIC_KOJIC_TEA_TREE,
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
    slug: AZELAIQUE_PRODUCT_SLUGS.NOOANCE_AZELAIC_15,
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
    slug: AZELAIQUE_PRODUCT_SLUGS.ALLIES_OF_SKIN_AZELAIC_KOJIC,
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
    slug: AZELAIQUE_PRODUCT_SLUGS.DR_SAM_FLAWLESS_BRIGHTLY,
    totalAmount: 30,
    amountUnit: 'ml',
    priceCents: 6000,
    description:
      'Sérum 10% azélaïque + niacinamide + vitamine C + bakuchiol. Éclaircissant tout-en-un pour teint terne.',
    notes:
      'Texture émulsion confortable, vegan/cruelty-free. Redondance niacinamide/vit C dans une routine, prix élevé pour formule basique.',
    inci: 'AQUA (WATER), AZELAIC ACID (10%), CAPRYLIC/CAPRIC TRIGLYCERIDE, NIACINAMIDE, DICAPRYLYL CARBONATE, ASCORBYL GLUCOSIDE, CETEARYL ALCOHOL, GLYCERIN, GLYCERYL STEARATE SE, CETEARYL OLIVATE, BAKUCHIOL, SORBITAN OLIVATE, BENZYL ALCOHOL, XANTHAN GUM, PHENOXYETHANOL, SODIUM HYDROXIDE, DISODIUM EDTA, DEHYDROACETIC ACID',
    url: 'https://drsambunting.com',
  },
]
