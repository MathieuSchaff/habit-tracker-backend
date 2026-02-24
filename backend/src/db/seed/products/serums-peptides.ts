import type { CreateProductInput } from '@habit-tracker/shared'

// ─── Slugs ────────────────────────────────────────────────

export const SERUMS_PEPTIDES_SLUGS = {
  NIOD_COPPER_AMINO_ISOLATE_LIPID_1: 'niod-copper-amino-isolate-lipid-1-percent-cail',
  NOOANCE_PEPTIDES_CUIVRE_2: 'nooance-serum-peptides-cuivre-2-pourcent',
  THE_ORDINARY_MULTI_PEPTIDE_COPPER_1: 'the-ordinary-multi-peptide-plus-copper-peptides-1-percent',
  GEEK_GORGEOUS_POWER_PEPTIDES: 'geek-gorgeous-power-peptides',
  THE_ORDINARY_MATRIXYL_10_HA: 'the-ordinary-matrixyl-10-percent-plus-ha',
  THE_ORDINARY_MULTI_PEPTIDES_HA_EX_BUFFET: 'the-ordinary-multi-peptides-plus-ha-serum-ex-buffet',
  THE_ORDINARY_MULTI_PEPTIDES_YEUX: 'the-ordinary-multi-peptides-serum-yeux',
  THE_ORDINARY_ECLAT_MULTI_ANTIOXYDANT: 'the-ordinary-serum-eclat-multi-antioxydant',
  THE_ORDINARY_SOLUTION_GF_15: 'the-ordinary-solution-gf-15-pourcent-facteurs-croissance',
  MAD_ABOUT_SKIN_COPPER_PEPTIDE: 'mad-about-skin-serum-copper-peptide',
} as const

// ─── Data ─────────────────────────────────────────────────

export const serumsPeptidesProductData: CreateProductInput[] = [
  {
    name: 'Copper Amino Isolate Lipid 1% (CAIL)',
    brand: 'NIOD',
    kind: 'skincare',
    unit: 'pump',
    slug: SERUMS_PEPTIDES_SLUGS.NIOD_COPPER_AMINO_ISOLATE_LIPID_1,
    totalAmount: 30,
    amountUnit: 'ml',
    priceCents: 6699,
    description:
      'Gel-baume de nuit régénérant à peptides de cuivre lipophiles 1%. Repulpe, raffermit et hydrate intensément les peaux matures.',
    notes:
      'Pal-GHK-Cu lipophile + extraits végétaux antioxydants (vetiver, algue bleue). Texture riche gel-baume, usage nuit uniquement. Anti-âge profond.',
    inci: 'SQUALANE, CAPRYLIC/CAPRIC TRIGLYCERIDE, GLYCERIN, AQUA (WATER), HYDROGENATED STARCH HYDROLYSATE, SUCROSE LAURATE, PROPANEDIOL, SUCROSE STEARATE, COPPER TRIPEPTIDE-1 PALMITAMIDE, GLYCOLIPIDS, HYDROXYMETHOXYPHENYL PROPYLMETHYLMETHOXYBENZOFURAN, VETIVERIA ZIZANOIDES ROOT EXTRACT, APHANIZOMENON FLOS-AQUAE EXTRACT, HYDROXYMETHOXYPHENYL DECANONE, BISABOLOL, BIOSACCHARIDE GUM-1, MALTODEXTRIN, POTASSIUM SORBATE, SODIUM BENZOATE, CHLORPHENESIN, PHENOXYETHANOL',
    url: 'https://niod.deciem.com',
  },
  {
    name: 'Sérum Peptides de Cuivre 2%',
    brand: 'Nooance',
    kind: 'skincare',
    unit: 'pump',
    slug: SERUMS_PEPTIDES_SLUGS.NOOANCE_PEPTIDES_CUIVRE_2,
    totalAmount: 20,
    amountUnit: 'ml',
    priceCents: 7800,
    description:
      'Sérum concentré 11% peptides dont 2% GHK-Cu. Lisse rides/ridules, raffermit, stimule collagène et renforce barrière.',
    notes:
      'GHK-Cu 2% + Matrixyl 3000 3% + Trifluoroacetyl Tripeptide-2 2% + Tripeptide-1 2% + prébiotiques/hydratants. Texture aqueuse légère, jour/nuit.',
    inci: 'WATER, PENTYLENE GLYCOL, METHYLPROPANEDIOL, GLYCERIN, COPPER TRIPEPTIDE-1, BUTYLENE GLYCOL, 1,2-HEXANEDIOL, PANTHENOL, ALPHA-GLUCAN OLIGOSACCHARIDE, SODIUM HYALURONATE, CARBOMER, HYDROLYZED BETA-GLUCAN, SODIUM LACTATE, SODIUM CARBOXYMETHYL BETA-GLUCAN, POLYSORBATE 20, CITRIC ACID, SODIUM BENZOATE, POTASSIUM SORBATE, DEXTRAN, TRIFLUOROACETYL TRIPEPTIDE-2, PALMITOYL TRIPEPTIDE-1, TRIPEPTIDE-1, PALMITOYL TETRAPEPTIDE-7, SODIUM HYDROXIDE',
    url: 'https://nooance-paris.com',
  },
  {
    name: 'Multi-Peptide + Copper Peptides 1%',
    brand: 'The Ordinary',
    kind: 'skincare',
    unit: 'pump',
    slug: SERUMS_PEPTIDES_SLUGS.THE_ORDINARY_MULTI_PEPTIDE_COPPER_1,
    totalAmount: 30,
    amountUnit: 'ml',
    priceCents: 3530,
    description:
      'Sérum multi-peptides + 1% Copper Tripeptide-1. Cible rides, élasticité, fermeté et protection antioxydante globale.',
    notes:
      "1% GHK-Cu + 7 peptides (Argireline, Matrixyl 3000/synthe'6, SYN-AKE...). Texture aqueuse, jour/nuit, tous types de peau.",
    inci: 'AQUA (WATER), GLYCERIN, LACTOCOCCUS FERMENT LYSATE, COPPER TRIPEPTIDE-1, ACETYL HEXAPEPTIDE-8, PENTAPEPTIDE-18, PALMITOYL TRIPEPTIDE-1, PALMITOYL TETRAPEPTIDE-7, PALMITOYL TRIPEPTIDE-38, DIPEPTIDE DIAMINOBUTYROYL BENZYLAMIDE DIACETATE, ACETYLARGINYLTRYPTOPHYL DIPHENYLGLYCINE, SODIUM HYALURONATE CROSSPOLYMER, SODIUM HYALURONATE, ALLANTOIN, GLYCINE, ALANINE, SERINE, VALINE, ISOLEUCINE, PROLINE, THREONINE, HISTIDINE, PHENYLALANINE, ARGININE, ASPARTIC ACID, TREHALOSE, FRUCTOSE, GLUCOSE, MALTOSE, UREA, SODIUM PCA, PCA, SODIUM LACTATE, CITRIC ACID, HYDROXYPROPYL CYCLODEXTRIN, SODIUM CHLORIDE, SODIUM HYDROXIDE, BUTYLENE GLYCOL, PENTYLENE GLYCOL, ACACIA SENEGAL GUM, XANTHAN GUM, CARBOMER, POLYSORBATE 20, DIMETHYL ISOSORBIDE, SODIUM BENZOATE, CAPRYLYL GLYCOL, ETHYLHEXYLGLYCERIN, PHENOXYETHANOL, CHLORPHENESIN',
    url: 'https://theordinary.com',
  },
  {
    name: 'Power Peptides',
    brand: 'Geek & Gorgeous',
    kind: 'skincare',
    unit: 'pump',
    slug: SERUMS_PEPTIDES_SLUGS.GEEK_GORGEOUS_POWER_PEPTIDES,
    totalAmount: 30,
    amountUnit: 'ml',
    priceCents: 1580,
    description:
      'Sérum peptidique 9% pour raffermir, réduire rides/ridules et améliorer élasticité avec effet liftant visible.',
    notes:
      "Matrixyl 3000 3% + synthe'6 2% + Tetrapeptide-21 4% + X50 Antiaging encapsulé 0.001%. Texture lactée légère, jour/nuit.",
    inci: 'AQUA (WATER), GLYCERIN, BUTYLENE GLYCOL, PENTYLENE GLYCOL, POLYGLYCERYL-6 STEARATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, PANTHENOL, DICAPRYLYL CARBONATE, DICAPRYLYL ETHER, POTASSIUM CETYL PHOSPHATE, POLYGLYCERYL-6 BEHENATE, TETRAPEPTIDE-21, PALMITOYL TRIPEPTIDE-1, PALMITOYL TETRAPEPTIDE-7, PALMITOYL TRIPEPTIDE-38, COPPER PALMITOYL HEPTAPEPTIDE-14, HEPTAPEPTIDE-15 PALMITATE, SACCHARIDE ISOMERATE, ALLANTOIN, CETEARYL ALCOHOL, GLYCERYL STEARATE SE, TAPIOCA STARCH, ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER, CARBOMER, POLYSORBATE 20, HYDROXYPROPYL CYCLODEXTRIN, LACTIC ACID/GLYCOLIC ACID COPOLYMER, POLYVINYL ALCOHOL, CITRIC ACID, SODIUM CITRATE, SODIUM HYDROXIDE, PHENOXYETHANOL, ETHYLHEXYLGLYCERIN',
    url: 'https://geekandgorgeous.com',
  },
  {
    name: 'Matrixyl 10% + HA',
    brand: 'The Ordinary',
    kind: 'skincare',
    unit: 'pump',
    slug: SERUMS_PEPTIDES_SLUGS.THE_ORDINARY_MATRIXYL_10_HA,
    totalAmount: 30,
    amountUnit: 'ml',
    priceCents: 1250,
    description:
      'Sérum concentré 10% Matrixyl + HA pour cibler rides/ridules, fermeté et synthèse collagène.',
    notes:
      "Matrixyl 3000 + synthe'6. Texture aqueuse hydratante, jour/nuit, excellent rapport qualité/prix.",
    inci: 'AQUA (WATER), GLYCERIN, BUTYLENE GLYCOL, PALMITOYL TRIPEPTIDE-1, PALMITOYL TETRAPEPTIDE-7, PALMITOYL TRIPEPTIDE-38, SODIUM HYALURONATE, HYDROXYPROPYL CYCLODEXTRIN, PPG-26-BUTETH-26, PEG-40 HYDROGENATED CASTOR OIL, POLYACRYLATE CROSSPOLYMER-6, TRISODIUM ETHYLENEDIAMINE DISUCCINATE, CARBOMER, POLYSORBATE 20, ETHOXYDIGLYCOL, PHENOXYETHANOL, CHLORPHENESIN',
    url: 'https://theordinary.com',
  },
  {
    name: 'Multi-Peptides + HA Serum (ex-Buffet)',
    brand: 'The Ordinary',
    kind: 'skincare',
    unit: 'pump',
    slug: SERUMS_PEPTIDES_SLUGS.THE_ORDINARY_MULTI_PEPTIDES_HA_EX_BUFFET,
    totalAmount: 30,
    amountUnit: 'ml',
    priceCents: 2100,
    description:
      "Sérum multi-peptides + HA complet pour premiers signes de l'âge, ridules, élasticité et fermeté.",
    notes:
      '4 technologies peptidiques + probiotiques + HA multi-moléculaire + NMF. Texture aqueuse, jour/nuit.',
    inci: 'AQUA (WATER), GLYCERIN, LACTOCOCCUS FERMENT LYSATE, ACETYL HEXAPEPTIDE-8, PENTAPEPTIDE-18, PALMITOYL TRIPEPTIDE-1, PALMITOYL TETRAPEPTIDE-7, PALMITOYL TRIPEPTIDE-38, DIPEPTIDE DIAMINOBUTYROYL BENZYLAMIDE DIACETATE, ACETYLARGINYLTRYPTOPHYL DIPHENYLGLYCINE, SODIUM HYALURONATE CROSSPOLYMER, SODIUM HYALURONATE, ALLANTOIN, GLYCINE, ALANINE, SERINE, VALINE, ISOLEUCINE, PROLINE, THREONINE, HISTIDINE, PHENYLALANINE, ARGININE, ASPARTIC ACID, TREHALOSE, FRUCTOSE, GLUCOSE, MALTOSE, UREA, SODIUM PCA, PCA, SODIUM LACTATE, CITRIC ACID, HYDROXYPROPYL CYCLODEXTRIN, SODIUM CHLORIDE, SODIUM HYDROXIDE, BUTYLENE GLYCOL, PENTYLENE GLYCOL, ACACIA SENEGAL GUM, XANTHAN GUM, CARBOMER, POLYSORBATE 20, PPG-26-BUTETH-26, PEG-40 HYDROGENATED CASTOR OIL, TRISODIUM ETHYLENEDIAMINE DISUCCINATE, ETHOXYDIGLYCOL, SODIUM BENZOATE, CAPRYLYL GLYCOL, ETHYLHEXYLGLYCERIN, PHENOXYETHANOL, CHLORPHENESIN',
    url: 'https://theordinary.com',
  },
  {
    name: 'Multi-Peptides Serum Yeux',
    brand: 'The Ordinary',
    kind: 'skincare',
    unit: 'pump',
    slug: SERUMS_PEPTIDES_SLUGS.THE_ORDINARY_MULTI_PEPTIDES_YEUX,
    totalAmount: 15,
    amountUnit: 'ml',
    priceCents: 2680,
    description:
      'Sérum contour yeux multi-peptides. Réduit ridules, cernes, poches et lisse le regard.',
    notes:
      "Matrixyl synthe'6 + Acetyl Tetrapeptide-5 + Myristoyl Nonapeptide-3 + caffeine + EGCG. Texture aqueuse légère, matin/soir.",
    inci: 'AQUA (WATER), GLYCERIN, BUTYLENE GLYCOL, PROPANEDIOL, DIPROPYLENE GLYCOL, ACETYL GLUCOSAMINE, NIACINAMIDE, PALMITOYL TRIPEPTIDE-38, ACETYL TETRAPEPTIDE-5, MYRISTOYL NONAPEPTIDE-3, DIPEPTIDE DIAMINOBUTYROYL BENZYLAMIDE DIACETATE, CAFFEINE, EPIGALLOCATECHIN GALLATYL GLUCOSIDE, GALLYL GLUCOSIDE, FRAXINUS EXCELSIOR BARK EXTRACT, SILANETRIOL, ARGININE, PENTYLENE GLYCOL, HYDROXYMETHOXYPHENYL DECANONE, PROPYL GALLATE, MALTODEXTRIN, HYDROXYPROPYL CYCLODEXTRIN, HYDROXYETHYLCELLULOSE, XANTHAN GUM, CITRIC ACID, GLYCOLIC ACID, SODIUM CITRATE, POLYSORBATE 20, TRISODIUM ETHYLENEDIAMINE DISUCCINATE, DEHYDROACETIC ACID, ETHYLHEXYLGLYCERIN, BENZYL ALCOHOL, PHENOXYETHANOL, CHLORPHENESIN',
    url: 'https://theordinary.com',
  },
  {
    name: 'Sérum Éclat Multi-Antioxydant',
    brand: 'The Ordinary',
    kind: 'skincare',
    unit: 'pump',
    slug: SERUMS_PEPTIDES_SLUGS.THE_ORDINARY_ECLAT_MULTI_ANTIOXYDANT,
    totalAmount: 30,
    amountUnit: 'ml',
    priceCents: 1680,
    description:
      'Sérum antioxydant quotidien pour protection environnementale, éclat, atténuation taches et texture lisse.',
    notes:
      'Ascorbyl Glucoside + Ergothioneine + EGCG + Tocotrienols + peptides. Texture aqueuse, usage jour.',
    inci: 'AQUA/WATER/EAU, PROPANEDIOL, ASCORBYL GLUCOSIDE, ERGOTHIONEINE, EPIGALLOCATECHIN GALLATYL GLUCOSIDE, ACETYL TETRAPEPTIDE-2, HEPTAPEPTIDE-6, TOCOTRIENOLS, TREMELLA FUCIFORMIS SPOROCARP EXTRACT, SPHINGOMONAS FERMENT EXTRACT, PANAX GINSENG ROOT EXTRACT, BIXA ORELLANA SEED EXTRACT, GLYCERIN, ISOCETETH-20, CITRIC ACID, SODIUM CITRATE, SODIUM HYDROXIDE, CAPRYLYL GLYCOL, ETHYLHEXYLGLYCERIN, PHENOXYETHANOL, CHLORPHENESIN',
    url: 'https://theordinary.com',
  },
  {
    name: 'Solution GF 15% (Facteurs de Croissance)',
    brand: 'The Ordinary',
    kind: 'skincare',
    unit: 'pump',
    slug: SERUMS_PEPTIDES_SLUGS.THE_ORDINARY_SOLUTION_GF_15,
    totalAmount: 30,
    amountUnit: 'ml',
    priceCents: 1640,
    description:
      'Sérum 15% facteurs de croissance biotechnologiques pour vieillissement avancé, rides profondes, fermeté et réparation.',
    notes:
      'EGF/IGF/TGF mimics (Nicotiana Benthamiana). Texture aqueuse légère, jour/nuit, peaux matures.',
    inci: 'AQUA/WATER/EAU, BUTYLENE GLYCOL, NICOTIANA BENTHAMIANA HEXAPEPTIDE-40 SH-OLIGOPEPTIDE-1, NICOTIANA BENTHAMIANA HEXAPEPTIDE-40 SH-POLYPEPTIDE-76, NICOTIANA BENTHAMIANA OCTAPEPTIDE-30 SH-OLIGOPEPTIDE-2, SCLEROTIUM GUM, GLYCERIN, TRISODIUM ETHYLENEDIAMINE DISUCCINATE, CITRIC ACID, SODIUM CITRATE, PHENOXYETHANOL, CHLORPHENESIN',
    url: 'https://theordinary.com',
  },
  {
    name: 'Sérum Copper Peptide',
    brand: 'MAD about skin',
    kind: 'skincare',
    unit: 'pump',
    slug: SERUMS_PEPTIDES_SLUGS.MAD_ABOUT_SKIN_COPPER_PEPTIDE,
    totalAmount: 30,
    amountUnit: 'ml',
    priceCents: 2400,
    description:
      'Sérum 3% peptides cuivre (2 formes) + 4 peptides. Anti-âge global, raffermissant, réparateur.',
    notes: 'GHK-Cu + Copper Gluconate + Matrixyl-like. Texture aqueuse, jour/nuit, tous types.',
    inci: 'AQUA, GLYCERIN, BUTYLENE GLYCOL, PENTYLENE GLYCOL, COPPER TRIPEPTIDE-1, COPPER GLUCONATE, PALMITOYL TRIPEPTIDE-1, PALMITOYL TETRAPEPTIDE-7, PALMITOYL TRIPEPTIDE-38, TRIPEPTIDE-1, SODIUM HYALURONATE, PANTHENOL, ALLANTOIN, CARBOMER, SODIUM HYDROXIDE, PHENOXYETHANOL, ETHYLHEXYLGLYCERIN',
    url: 'https://madaboutskin.fr',
  },
]
