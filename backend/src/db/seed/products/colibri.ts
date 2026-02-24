import type { CreateProductInput } from '@habit-tracker/shared'

// ─── Slugs ────────────────────────────────────────────────

export const COLIBRI_SLUGS = {
  PORE_CONTROL_BOOSTER: 'colibri-pore-control-booster',
  CALMING_MOISTURIZER: 'colibri-calming-moisturizer',
  VITAMIN_C_20_BOOSTER: 'colibri-vitamin-c-20-booster',
  VITAMIN_C15_BOOSTER: 'colibri-vitamin-c15-booster',
  BARRIER_BOOSTER: 'colibri-barrier-booster',
  ANTIOXIDANT_SERUM: 'colibri-antioxidant-serum',
} as const

// ─── Data ─────────────────────────────────────────────────

export const colibriProductData: CreateProductInput[] = [
  {
    name: 'Pore Control Booster',
    brand: 'Colibri Skincare',
    kind: 'skincare',
    unit: 'pump',
    slug: COLIBRI_SLUGS.PORE_CONTROL_BOOSTER,
    totalAmount: 50,
    amountUnit: 'ml',
    priceCents: 2795,
    description:
      'Booster ciblé pores dilatés, sébum et imperfections. Régule production de sébum, affine pores, réduit inflammations.',
    notes:
      'Niacinamide 8% + NMN 4% + extrait Bixa Orellana + Acetyl-Hexapeptide-1. Texture légère aqueuse, idéal peaux mixtes/grasses/à imperfections. Jour/nuit.',
    inci: 'AQUA, NIACINAMIDE, BUTYLENE GLYCOL, GLYCERIN, NICOTINAMIDE MONONUCLEOTIDE, PENTYLENE GLYCOL, PROPYLHEPTYL CAPRYLATE, LAUROYL LYSINE, SODIUM GLUCONATE, ACETYL HEXAPEPTIDE-1, BIXA ORELLANA (ANNATTO) SEED EXTRACT, POLYGLUTAMIC ACID, SODIUM STEAROYL GLUTAMATE, CAPRYLYL GLYCOL, SODIUM HYALURONATE, 1,2-HEPTANEDIOL, CETEARYL ALCOHOL, SPHINGOMONAS FERMENT EXTRACT, ARGININE, MALTODEXTRIN, MICROCRYSTALLINE CELLULOSE, TOCOPHEROL, CELLULOSE GUM, CITRIC ACID',
    url: 'https://colibriskincare.com',
  },
  {
    name: 'Calming Moisturizer',
    brand: 'Colibri Skincare',
    kind: 'skincare',
    unit: 'pump',
    slug: COLIBRI_SLUGS.CALMING_MOISTURIZER,
    totalAmount: 80,
    amountUnit: 'ml',
    priceCents: 2695,
    description:
      'Crème apaisante et hydratante pour peaux sensibles/irritées. Renforce barrière, calme rougeurs et soutient régénération.',
    notes:
      'Centella Asiatica + Panthénol + Squalane + HA + Céramide NP + Vitamine E. Texture crème nourrissante mais légère, usage quotidien jour/nuit.',
    inci: 'AQUA, SQUALANE, DECYL COCOATE, GLYCERIN, BUTYROSPERMUM PARKII BUTTER, GLYCERYL STEARATE CITRATE, CETEARYL ALCOHOL, PANTHENOL, PRUNUS AMYGDALUS DULCIS OIL, CERAMIDE NP, TOCOPHEROL, CENTELLA ASIATICA LEAF EXTRACT, GLYCERYL STEARATE, HYDROXYACETOPHENONE, 1,2-HEXANEDIOL, CAPRYLYL GLYCOL, SODIUM STEAROYL GLUTAMATE, SODIUM HYALURONATE, BUTYLENE GLYCOL, CAPRYLIC/CAPRIC TRIGLYCERIDE, HYDROGENATED PHOSPHATIDYLCHOLINE, HELIANTHUS ANNUUS SEED OIL, CITRIC ACID, ASIATICOSIDE, PENTYLENE GLYCOL, MADECASSIC ACID, ASIATIC ACID, XANTHAN GUM',
    url: 'https://colibriskincare.com',
  },
  {
    name: 'Vitamin C 20 Booster',
    brand: 'Colibri Skincare',
    kind: 'skincare',
    unit: 'pump',
    slug: COLIBRI_SLUGS.VITAMIN_C_20_BOOSTER,
    totalAmount: 30,
    amountUnit: 'ml',
    priceCents: 3295,
    description:
      'Booster vitamine C stable 20% multi-formes. Stimule collagène, atténue hyperpigmentation, protection antioxydante.',
    notes:
      '3-O-Ethyl Ascorbic Acid + THD Ascorbate + 3-Glyceryl Ascorbate + Acetyl Zingerone + Hexylresorcinol. Texture huileuse légère, soir (ou jour avec SPF).',
    inci: 'AQUA, 3-O-ETHYL ASCORBIC ACID, TETRAHEXYLDECYL ASCORBATE, 3-GLYCERYL ASCORBATE, GLYCERIN, PENTYLENE GLYCOL, PROPYLHEPTYL CAPRYLATE, GLYCERYL STEARATE CITRATE, COCO-CAPRYLATE/CAPRATE, ACETYL ZINGERONE, HYDROGENATED LECITHIN, HEXYLRESORCINOL, POLYGLYCERYL-3 STEARATE, HYDROGENATED PHOSPHATIDYLCHOLINE, ALLANTOIN, MICROCRYSTALLINE CELLULOSE, SODIUM STEAROYL GLUTAMATE, SODIUM CARBOXYMETHYLCELLULOSE, TOCOPHEROL, CITRIC ACID, SODIUM PHYTATE, XANTHAN GUM',
    url: 'https://colibriskincare.com',
  },
  {
    name: 'Vitamin C15 Booster',
    brand: 'Colibri Skincare',
    kind: 'skincare',
    unit: 'pump',
    slug: COLIBRI_SLUGS.VITAMIN_C15_BOOSTER,
    totalAmount: 30,
    amountUnit: 'ml',
    priceCents: 2195,
    description:
      'Booster vitamine C stable 15%. Uniformise teint, protège radicaux libres, stimule collagène.',
    notes:
      '3-O-Ethyl Ascorbic Acid 15% + complexe plancton/arginine ferulate. Texture aqueuse légère, jour/nuit (avec SPF le jour).',
    inci: 'AQUA, 3-O-ETHYL ASCORBIC ACID, BUTYLENE GLYCOL, PENTYLENE GLYCOL, SODIUM HYALURONATE, ARGININE FERULATE, CELLULOSE GUM, XANTHAN GUM, PLANKTON EXTRACT, CELLULOSE, FRUCTOSE, GLUCOSE',
    url: 'https://colibriskincare.com',
  },
  {
    name: 'Barrier Booster',
    brand: 'Colibri Skincare',
    kind: 'skincare',
    unit: 'pump',
    slug: COLIBRI_SLUGS.BARRIER_BOOSTER,
    totalAmount: 50,
    amountUnit: 'ml',
    priceCents: 2471,
    description:
      "Booster barrière cutanée avec 5 céramides + ectoine. Réduit perte d'eau transépidermique, apaise, renforce protection.",
    notes:
      'Céramides NP/AP/AS/NS/EOP + Ectoin + Panthénol + Allantoïne + Vitamine F + HA. Texture crème riche mais absorbante, jour/nuit.',
    inci: 'AQUA, PENTYLENE GLYCOL, PANTHENOL, TRICAPRYLIN, GLYCERYL STEARATE, CANDELILLA/JOJOBA/RICE BRAN POLYGLYCERYL-3 ESTERS, ASCORBYL GLUCOSIDE, CAPRYLYL CAPRYLATE/CAPRATE, ECTOIN, NIACINAMIDE, SQUALANE, CERAMIDE NP, CERAMIDE AP, CERAMIDE AS, CERAMIDE NS, CERAMIDE EOP, LINOLEIC ACID, LINOLENIC ACID, CHOLESTEROL, ASIATICOSIDE, MADECASSIC ACID, ASIATIC ACID, TOCOPHEROL, ALLANTOIN, BETA-GLUCAN, GLYCERIN, SODIUM HYALURONATE, HYDROGENATED LECITHIN, PRUNUS AMYGDALUS DULCIS (SWEET ALMOND) OIL, CETEARYL ALCOHOL, SODIUM STEAROYL LACTYLATE, CITRIC ACID, DIPROPYLENE GLYCOL, SUCROSE DISTEARATE, HELIANTHUS ANNUUS (SUNFLOWER) SEED OIL, PROPYLHEPTYL CAPRYLATE, XANTHAN GUM',
    url: 'https://colibriskincare.com',
  },
  {
    name: 'Antioxidant Serum',
    brand: 'Colibri Skincare',
    kind: 'skincare',
    unit: 'pump',
    slug: COLIBRI_SLUGS.ANTIOXIDANT_SERUM,
    totalAmount: 30,
    amountUnit: 'ml',
    priceCents: 2595,
    description:
      'Sérum antioxydant multi-sources pour protéger du vieillissement prématuré, radicaux libres et stress oxydatif.',
    notes:
      'Resvératrol + Superoxyde Dismutase + Caroténoïdes + extraits thé blanc/vert/rooibos. Texture aqueuse légère, usage jour (avec SPF).',
    inci: 'AQUA, DIMETHYL ISOSORBIDE, PENTYLENE GLYCOL, ASCORBYL GLUCOSIDE, NIACINAMIDE, TOCOPHERYL ACETATE, TRICAPRYLIN, PROPYLHEPTYL CAPRYLATE, GLYCERYL STEARATE, CANDELILLA/JOJOBA/RICE BRAN POLYGLYCERYL-3 ESTERS, RESVERATROL, GLYCERIN, ACETYL ZINGERONE, SUPEROXIDE DISMUTASE, SODIUM STEAROYL GLUTAMATE, CETEARYL ALCOHOL, CAMELLIA SINENSIS (TEA) LEAF EXTRACT, CAROTENOIDS, SODIUM STEAROYL LACTYLATE, MALTODEXTRIN, ALLANTOIN, ASPALATHUS LINEARIS (ROOIBOS) LEAF EXTRACT, TOCOPHEROL, HELIANTHUS ANNUUS (SUNFLOWER) SEED OIL, SODIUM PHYTATE, SODIUM HYALURONATE, SODIUM CHLORIDE, XANTHAN GUM, CITRIC ACID',
    url: 'https://colibriskincare.com',
  },
]
