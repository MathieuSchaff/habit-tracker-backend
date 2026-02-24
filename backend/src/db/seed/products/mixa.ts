import type { CreateProductInput } from '@habit-tracker/shared'

// ─── Slugs ────────────────────────────────────────────────

export const MIXA_SLUGS = {
  NIACINAMIDE_CORRECTION_ECLAT: 'mixa-creme-niacinamide-correction-eclat',
  ACIDE_HYALURONIQUE_FRAICHE: 'mixa-creme-fraiche-fondante-acide-hyaluronique',
  PEAUX_SECHES_SENSIBLES: 'mixa-creme-peaux-seches-sensibles',
  PANTHENOL_CONFORT: 'mixa-creme-panthenol-confort',
  CERAMIDE_PROTECTION: 'mixa-creme-ceramide-protection',
  CICA_REPARATION: 'mixa-creme-cica-reparation',
  PEAUX_TRES_SECHES_TERNES: 'mixa-creme-peaux-tres-seches-ternes',
} as const

// ─── Data ─────────────────────────────────────────────────

export const mixaProductData: CreateProductInput[] = [
  {
    name: 'Crème Niacinamide Correction Éclat',
    brand: 'Mixa',
    kind: 'skincare',
    unit: 'pump',
    slug: MIXA_SLUGS.NIACINAMIDE_CORRECTION_ECLAT,
    totalAmount: 400,
    amountUnit: 'ml',
    priceCents: 790,
    description:
      'Crème anti-taches et éclat pour peaux sèches à ternes. Unifie le teint, atténue hyperpigmentation post-acné, hydrate 48h.',
    notes:
      'Niacinamide + Vitamine Cg + beurre de karité + acide salicylique doux. Recommandé pour taches légères, teint terne. Multi-usages visage/corps/mains.',
    inci: 'AQUA/WATER, GLYCERIN, BUTYROSPERMUM PARKII BUTTER/SHEA BUTTER, ISOPROPYL PALMITATE, NIACINAMIDE, PROPANEDIOL, CETYL ALCOHOL, MYRISTYL MYRISTATE, ZEA MAYS STARCH/CORN STARCH, ASCORBYL GLUCOSIDE, CAPRYLYL GLYCOL, CARBOMER, CITRIC ACID, HYDROXYACETOPHENONE, POLYGLYCERYL-3 METHYLGLUCOSE DISTEARATE, SALICYLIC ACID, SODIUM HYDROXIDE, TOCOPHEROL, PARFUM/FRAGRANCE',
    url: 'https://www.mixa.fr',
  },
  {
    name: "Crème Fraîche et Fondante à l'Acide Hyaluronique",
    brand: 'Mixa',
    kind: 'skincare',
    unit: 'pump',
    slug: MIXA_SLUGS.ACIDE_HYALURONIQUE_FRAICHE,
    totalAmount: 400,
    amountUnit: 'ml',
    priceCents: 442,
    description:
      'Crème hydratante fraîche 24h pour peaux déshydratées. Texture fondante non grasse, #1 crèmes mains/ongles.',
    notes:
      "Sodium Hyaluronate + beurre de karité + huiles d'amande douce et soja. Idéal hydratation quotidienne, sensation fraîche.",
    inci: 'AQUA/WATER, CETYL ALCOHOL, GLYCERIN, ISOPROPYL PALMITATE, BUTYROSPERMUM PARKII BUTTER/SHEA BUTTER, GLYCERYL STEARATE, DIMETHICONE, ALCOHOL DENAT., PEG-40 STEARATE, PRUNUS AMYGDALUS DULCIS OIL/SWEET ALMOND OIL, GLYCINE SOJA OIL/SOYBEAN OIL, SORBITAN TRISTEARATE, CARBOMER, SODIUM HYALURONATE, SODIUM HYDROXIDE, CAPRYLYL GLYCOL, CITRIC ACID, TOCOPHEROL, CHLORHEXIDINE DIGLUCONATE, PARFUM/FRAGRANCE',
    url: 'https://www.mixa.fr',
  },
  {
    name: 'Crème pour Peaux Sèches et Sensibles',
    brand: 'Mixa',
    kind: 'skincare',
    unit: 'pump',
    slug: MIXA_SLUGS.PEAUX_SECHES_SENSIBLES,
    totalAmount: 400,
    amountUnit: 'ml',
    priceCents: 443,
    description:
      'Crème minimaliste nourrissante pour peaux sèches/sensibles. Convient bébés/enfants/adultes, meilleur rapport qualité/prix.',
    notes:
      "Beurre de karité + huiles d'amande douce/soja + triglycérides. Formule simple, apaisante, usage quotidien.",
    inci: 'AQUA/WATER, CETYL ALCOHOL, GLYCERIN, CAPRYLIC/CAPRIC TRIGLYCERIDE, BUTYROSPERMUM PARKII BUTTER/SHEA BUTTER, GLYCERYL STEARATE, DIMETHICONE, PEG-40 STEARATE, PRUNUS AMYGDALUS DULCIS OIL/SWEET ALMOND OIL, GLYCINE SOJA OIL/SOYBEAN OIL, SORBITAN TRISTEARATE, CARBOMER, SODIUM HYDROXIDE, CAPRYLYL GLYCOL, CITRIC ACID, TOCOPHEROL, CHLORHEXIDINE DIGLUCONATE, PARFUM/FRAGRANCE',
    url: 'https://www.mixa.fr',
  },
  {
    name: 'Crème Panthénol Confort',
    brand: 'Mixa',
    kind: 'skincare',
    unit: 'pump',
    slug: MIXA_SLUGS.PANTHENOL_CONFORT,
    totalAmount: 400,
    amountUnit: 'ml',
    priceCents: 682,
    description:
      'Crème apaisante anti-démangeaisons sans parfum pour peaux réactives/irritées. Soulage eczéma/psoriasis léger.',
    notes:
      'Panthénol + niacinamide + beurre de karité + vitamine E. Idéal peaux qui grattent, allergies parfums.',
    inci: 'AQUA/WATER, GLYCERIN, BUTYROSPERMUM PARKII BUTTER/SHEA BUTTER, ISOPROPYL PALMITATE, PROPANEDIOL, CETYL ALCOHOL, MYRISTYL MYRISTATE, PANTHENOL, ZEA MAYS STARCH/CORN STARCH, NIACINAMIDE, CAPRYLYL GLYCOL, CARBOMER, CITRIC ACID, HYDROXYACETOPHENONE, POLYGLYCERYL-3 METHYLGLUCOSE DISTEARATE, SODIUM HYDROXIDE, TOCOPHEROL',
    url: 'https://www.mixa.fr',
  },
  {
    name: 'Crème Céramide Protection',
    brand: 'Mixa',
    kind: 'skincare',
    unit: 'pump',
    slug: MIXA_SLUGS.CERAMIDE_PROTECTION,
    totalAmount: 400,
    amountUnit: 'ml',
    priceCents: 631,
    description:
      'Crème renforçante barrière sans parfum pour peaux atopiques/sensibles. Protection environnementale (pollution).',
    notes:
      'Céramides synthétiques + squalane + beurre de karité. Idéal barrière endommagée, peaux atopiques.',
    inci: 'AQUA/WATER, GLYCERIN, BUTYROSPERMUM PARKII BUTTER/SHEA BUTTER, ISOPROPYL PALMITATE, PROPANEDIOL, CETYL ALCOHOL, MYRISTYL MYRISTATE, ZEA MAYS STARCH/CORN STARCH, SQUALANE, CARBOMER, SODIUM HYDROXIDE, 2-OLEAMIDO-1,3-OCTADECANEDIOL, HYDROXYACETOPHENONE, HYDROXYPALMITOYL SPHINGANINE, CAPRYLYL GLYCOL, CITRIC ACID, POLYGLYCERYL-3 METHYLGLUCOSE DISTEARATE, TOCOPHEROL',
    url: 'https://www.mixa.fr',
  },
  {
    name: 'Crème Cica Réparation',
    brand: 'Mixa',
    kind: 'skincare',
    unit: 'pump',
    slug: MIXA_SLUGS.CICA_REPARATION,
    totalAmount: 400,
    amountUnit: 'ml',
    priceCents: 642,
    description:
      'Crème réparatrice exfoliante douce avec urée pour peaux rugueuses/squameuses. Best-seller Amazon.',
    notes:
      'Urée haute concentration + niacinamide + panthénol + glycine. Optimal kératose pilaire, psoriasis léger, coudes/genoux/talons.',
    inci: 'AQUA/WATER, UREA, GLYCERIN, DIMETHICONE, PARAFFINUM LIQUIDUM/MINERAL OIL, PROPYLENE GLYCOL, BUTYROSPERMUM PARKII BUTTER/SHEA BUTTER, CETEARYL ALCOHOL, ALCOHOL DENAT., ZEA MAYS STARCH/CORN STARCH, HELIANTHUS ANNUUS SEED OIL/SUNFLOWER SEED OIL, GLYCERYL STEARATE, PEG-100 STEARATE, GLYCINE, HYDROXYETHYLPIPERAZINE ETHANE SULFONIC ACID, SODIUM HYDROXIDE, SODIUM LACTATE, TETRASODIUM GLUTAMATE DIACETATE, NIACINAMIDE, PANTHENOL, TOCOPHEROL, TOCOPHERYL ACETATE, CAPRYLYL GLYCOL, CARBOMER, CITRIC ACID, XANTHAN GUM, PHENOXYETHANOL, PARFUM/FRAGRANCE',
    url: 'https://www.mixa.fr',
  },
  {
    name: 'Crème des Peaux Très Sèches et Ternes',
    brand: 'Mixa',
    kind: 'skincare',
    unit: 'pump',
    slug: MIXA_SLUGS.PEAUX_TRES_SECHES_TERNES,
    totalAmount: 400,
    amountUnit: 'ml',
    priceCents: 452,
    description:
      'Crème nourrissante éclat pour peaux très sèches/ternes (mates à foncées). Ravive luminosité, nourrit 48h.',
    notes:
      'Beurre de cacao pur + beurre de karité + glycérine. Idéal "peau de crocodile", teint grisâtre, nutrition intense.',
    inci: 'AQUA/WATER, GLYCERIN, ISOPROPYL PALMITATE, CETEARYL ALCOHOL, PROPANEDIOL, GLYCERYL STEARATE, DIMETHICONE, CETYL ESTERS, THEOBROMA CACAO SEED BUTTER/COCOA SEED BUTTER, BUTYROSPERMUM PARKII BUTTER/SHEA BUTTER, PEG-100 STEARATE, AMMONIUM POLYACRYLOYLDIMETHYL TAURATE, HYDROXYACETOPHENONE, CAPRYLYL GLYCOL, CITRIC ACID, XANTHAN GUM, PARFUM/FRAGRANCE',
    url: 'https://www.mixa.fr',
  },
]
