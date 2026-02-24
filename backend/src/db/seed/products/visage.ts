import type { CreateProductInput } from '@habit-tracker/shared'

// ─── Slugs ────────────────────────────────────────────────

export const VISAGE_SLUGS = {
  // Françaises
  SVR_C20_BIOTIC: 'svr-c20-biotic-regenerating-radiance-cream',
  ISISPHARMA_RUBORIL_EXPERT_M: 'isispharma-ruboril-expert-m',
  LRP_EFFACLAR_H_ISO_BIOME: 'la-roche-posay-effaclar-h-iso-biome',
  LRP_CICAPLAST_BAUME_B5_PLUS: 'la-roche-posay-cicaplast-baume-b5-plus',
  AVENE_TOLERANCE_CONTROL_CREME: 'avene-tolerance-control-creme',
  AVENE_XERACALM_AD_BAUME: 'avene-xeracalm-ad-baume-relipidant',
  BIODERMA_CREALINE_DEFENSIVE_RICHE: 'bioderma-crealine-defensive-riche',
  BIODERMA_CREALINE_DEFENSIVE_LEGERE: 'bioderma-crealine-defensive-legere',
  BIODERMA_CICABIO_CREME_PLUS: 'bioderma-cicabio-creme-plus',
  URIAGE_XEMOSE_C8_PLUS_VISAGE: 'uriage-xemose-c8-plus-soin-visage-nourrissant-apaisant',
  SVR_CICAVIT_PLUS_CREME_HPPI: 'svr-cicavit-plus-creme-hppi',
  // Coréennes
  SKIN1004_MADAGASCAR_CENTELLA_PROBIO_CICA: 'skin1004-madagascar-centella-probio-cica-enrich-cream',
  SKIN1004_MADAGASCAR_CENTELLA_SOOTHING_CREAM: 'skin1004-madagascar-centella-soothing-cream',
  BEAUTY_OF_JOSEON_DYNASTY_CREAM: 'beauty-of-joseon-dynasty-cream',
  DRG_RED_BLEMISH_CICA_SOOTHING: 'drg-red-blemish-cica-soothing-cream',
  PURITO_OAT_IN_CALMING_GEL: 'purito-oat-in-calming-gel-cream',
  COSRX_ADVANCED_SNAIL_92: 'cosrx-advanced-snail-92-all-in-one-cream',
  ISNTREE_HYALURONIC_ACID_MOIST: 'isntree-hyaluronic-acid-moist-cream',
} as const

// ─── Data ─────────────────────────────────────────────────

export const visageProductData: CreateProductInput[] = [
  // ── Françaises ──────────────────────────────────────────
  {
    name: '[C20] Biotic Regenerating Radiance Cream',
    brand: 'SVR',
    kind: 'skincare',
    unit: 'pump',
    slug: VISAGE_SLUGS.SVR_C20_BIOTIC,
    totalAmount: 50,
    amountUnit: 'ml',
    priceCents: 0,
    description:
      'Crème régénérante éclat avec 20% vitamine C optimisée, probiotiques et acide hyaluronique pour peaux ternes, fatiguées et sensibles.',
    notes:
      "Crème riche et occlusive (6.5/10) grâce aux dérivés d'olive, karité et ascorbyl tetraisopalmitate liposoluble. Texture nourrissante.",
    inci: 'AQUA/WATER/EAU, ASCORBYL TETRAISOPALMITATE, HYDROGENATED ETHYLHEXYL OLIVATE, MYRISTYL ALCOHOL, GLYCERYL STEARATE, LAUROYL LYSINE, PEG-100 STEARATE, BUTYROSPERMUM PARKII (SHEA) BUTTER, SODIUM CITRATE, SILICA, MYRISTYL GLUCOSIDE, MICROCRYSTALLINE CELLULOSE, HYDROXYETHYL ACRYLATE/SODIUM ACRYLOYLDIMETHYL TAURATE COPOLYMER, TOCOPHERYL ACETATE, PENTYLENE GLYCOL, MANNITOL, 1,2-HEXANEDIOL, ALLANTOIN, CAPRYLYL GLYCOL, PARFUM (FRAGRANCE), CITRIC ACID, HYDROGENATED OLIVE OIL UNSAPONIFIABLES, CELLULOSE GUM, POLYSORBATE 60, SORBITAN ISOSTEARATE, SODIUM ACETYLATED HYALURONATE, MALTODEXTRIN, HYDROXYPROPYL METHYLCELLULOSE, CI 77492 (IRON OXIDES), LACTOBACILLUS FERMENT, ALGIN, ASCORBIC ACID',
    url: 'https://fr.svr.com',
  },
  {
    name: 'Ruboril Expert M',
    brand: 'Isispharma',
    kind: 'skincare',
    unit: 'pump',
    slug: VISAGE_SLUGS.ISISPHARMA_RUBORIL_EXPERT_M,
    totalAmount: 40,
    amountUnit: 'ml',
    priceCents: 0,
    description:
      'Gel-crème anti-rougeurs pour peaux sensibles sujettes aux rougeurs diffuses et vaisseaux visibles.',
    notes:
      'Occlusion 5.5/10. Texture gel-crème légère. Complexe B-Calm breveté pour cibler les causes des rougeurs.',
    inci: 'AQUA (WATER), CAPRYLIC/CAPRIC TRIGLYCERIDE, BETAINE, BUTYLENE GLYCOL, PENTYLENE GLYCOL, ACACIA DECURRENS/JOJOBA/SUNFLOWER SEED WAX POLYGLYCERYL-3 ESTERS, HYDROXYETHYL ACRYLATE/SODIUM ACRYLOYLDIMETHYL TAURATE COPOLYMER, GLYCYRRHETINIC ACID, CETYL ALCOHOL, NIACINAMIDE, PANTHENOL, CHLORPHENESIN, C12-16 ALCOHOLS, CITRIC ACID, CAMELINA SATIVA SEED OIL, CARBOMER, O-CYMEN-5-OL, ESCIN, SODIUM HYDROXIDE, POLYSORBATE 60, SORBITAN ISOSTEARATE, GLYCERIN, PALMITIC ACID, HYDROGENATED LECITHIN, RUSCUS ACULEATUS ROOT EXTRACT, AMMONIUM GLYCYRRHIZATE, CENTELLA ASIATICA LEAF EXTRACT, HYDROLYZED YEAST PROTEIN, CALENDULA OFFICINALIS FLOWER EXTRACT, SODIUM CITRATE, TOCOPHEROL, ASCORBIC ACID',
    url: 'https://www.isispharma.com',
  },
  {
    name: 'Effaclar H Iso-Biome',
    brand: 'La Roche-Posay',
    kind: 'skincare',
    unit: 'pump',
    slug: VISAGE_SLUGS.LRP_EFFACLAR_H_ISO_BIOME,
    totalAmount: 40,
    amountUnit: 'ml',
    priceCents: 0,
    description:
      'Crème hydratante compensatrice pour peaux grasses fragilisées par les traitements asséchants anti-acné.',
    notes: 'Occlusion 6/10. Texture crème légère. Répare et réduit imperfections/marqués.',
    inci: 'AQUA/WATER/EAU, GLYCERIN, SQUALANE, DIMETHICONE, PANTHENOL, ZEA MAYS STARCH/CORN STARCH, NIACINAMIDE, AMMONIUM POLYACRYLOYLDIMETHYL TAURATE, MYRISTYL MYRISTATE, BIXA ORELLANA SEED EXTRACT, STEARIC ACID, POTASSIUM CETYL PHOSPHATE, GLYCERYL STEARATE SE, SODIUM HYDROXIDE, MYRISTIC ACID, 2-OLEAMIDO-1,3-OCTADECANEDIOL, PALMITIC ACID, HYDROXYACETOPHENONE, CAPRYLOYL GLYCINE, CAPRYLYL GLYCOL, VITREOSCILLA FERMENT, CITRIC ACID, MALTODEXTRIN, XANTHAN GUM, PARFUM/FRAGRANCE',
    url: 'https://www.laroche-posay.fr',
  },
  {
    name: 'Cicaplast Baume B5+',
    brand: 'La Roche-Posay',
    kind: 'skincare',
    unit: 'pump',
    slug: VISAGE_SLUGS.LRP_CICAPLAST_BAUME_B5_PLUS,
    totalAmount: 40,
    amountUnit: 'ml',
    priceCents: 0,
    description: 'Baume réparateur multi-usage apaisant pour peaux irritées, lésions, post-actes.',
    notes: 'Occlusion 8/10. Texture baume riche. Effet pansement, anti-marques.',
    inci: 'AQUA/WATER/EAU, HYDROGENATED POLYISOBUTENE, DIMETHICONE, GLYCERIN, BUTYROSPERMUM PARKII BUTTER/SHEA BUTTER, PANTHENOL, ZEA MAYS STARCH/CORN STARCH, PROPANEDIOL, BUTYLENE GLYCOL, CETYL PEG/PPG-10/1 DIMETHICONE, TRIHYDROXYSTEARIN, CENTELLA ASIATICA LEAF EXTRACT, POLYMNIA SONCHIFOLIA ROOT JUICE, ZINC GLUCONATE, MADECASSOSIDE, MANGANESE GLUCONATE, ALPHA-GLUCAN OLIGOSACCHARIDE, SILICA, ALUMINUM HYDROXIDE, MAGNESIUM SULFATE, MANNOSE, CAPRYLOYL GLYCINE, CAPRYLYL GLYCOL, VITREOSCILLA FERMENT, CITRIC ACID, TRISODIUM ETHYLENEDIAMINE DISUCCINATE, LACTOBACILLUS, ACETYLATED GLYCOL STEARATE, MALTODEXTRIN, POLYGLYCERYL-4 ISOSTEARATE, TOCOPHEROL, PENTAERYTHRITYL TETRA-DI-T-BUTYL HYDROXYHYDROCINNAMATE, CI 77891/TITANIUM DIOXIDE',
    url: 'https://www.laroche-posay.fr',
  },
  {
    name: 'Tolérance Control Crème',
    brand: 'Avène',
    kind: 'skincare',
    unit: 'pump',
    slug: VISAGE_SLUGS.AVENE_TOLERANCE_CONTROL_CREME,
    totalAmount: 40,
    amountUnit: 'ml',
    priceCents: 0,
    description:
      'Crème apaisante restauratrice haute tolérance pour peaux hypersensibles, intolérantes ou allergiques.',
    notes: 'Occlusion 7/10. Texture crème légère. D-Sensinose™ postbiotique ultra-calmante.',
    inci: 'AVENE THERMAL SPRING WATER (AVENE AQUA), CAPRYLIC/CAPRIC TRIGLYCERIDE, ETHYLHEXYL PALMITATE, GLYCERIN, CETEARYL ALCOHOL, SQUALANE, CETEARYL GLUCOSIDE, CETYL ESTERS, AQUAPHILUS DOLOMIAE EXTRACT FILTRATE, ARGININE, BEESWAX (CERA ALBA), CITRIC ACID, TROMETHAMINE, WATER (AQUA), XANTHAN GUM',
    url: 'https://www.eau-thermale-avene.fr',
  },
  {
    name: 'Xeracalm A.D Baume Relipidant',
    brand: 'Avène',
    kind: 'skincare',
    unit: 'pump',
    slug: VISAGE_SLUGS.AVENE_XERACALM_AD_BAUME,
    totalAmount: 200,
    amountUnit: 'ml',
    priceCents: 0,
    description:
      'Baume relipidant très riche pour peaux très sèches à tendance atopique, dès la naissance.',
    notes:
      'Occlusion 9/10. Texture baume très riche. I-modulia® + Cer-Omega apaisent démangeaisons et relipident durablement.',
    inci: 'AVENE THERMAL SPRING WATER (AVENE AQUA). MINERAL OIL (PARAFFINUM LIQUIDUM). GLYCERIN. CAPRYLIC/CAPRIC TRIGLYCERIDE. PEG-12. OENOTHERA BIENNIS (EVENING PRIMROSE) OIL. GLYCERYL STEARATE. MYRETH-3 MYRISTATE. PEG-100 STEARATE. POLYACRYLATE-13. AQUAPHILUS DOLOMIAE EXTRACT. ARGININE. CITRIC ACID. EVENING PRIMROSE OIL/PALM OIL AMINOPROPANEDIOL ESTERS. GLYCINE. POLYISOBUTENE. POLYSORBATE 20. SORBITAN ISOSTEARATE. TOCOPHEROL. WATER (AQUA)',
    url: 'https://www.eau-thermale-avene.fr',
  },
  {
    name: 'Créaline Defensive Riche',
    brand: 'Bioderma',
    kind: 'skincare',
    unit: 'pump',
    slug: VISAGE_SLUGS.BIODERMA_CREALINE_DEFENSIVE_RICHE,
    totalAmount: 40,
    amountUnit: 'ml',
    priceCents: 1398,
    description:
      'Crème active apaisante riche pour peaux sensibles et sensibilisées, sèches à très sèches.',
    notes:
      "Texture riche enveloppante. Technologie Défensive renforce l'auto-défense cutanée. Hydratation 12h.",
    inci: 'AQUA/WATER/EAU, GLYCERIN, DICAPRYLYL ETHER, GLYCOL PALMITATE, BUTYLENE GLYCOL, CETYL PALMITATE, GLYCERYL STEARATE CITRATE, SQUALANE, SUCROSE STEARATE, TRIDECYL TRIMELLITATE, GLYCERYL DIBEHENATE, POLYSORBATE 60, PENTYLENE GLYCOL, TRIBEHENIN, GLYCERYL BEHENATE, ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER, CAPRYLYL GLYCOL, CARNOSINE, HYDROXYETHYL ACRYLATE/SODIUM ACRYLOYLDIMETHYL TAURATE COPOLYMER, MANNITOL, XYLITOL, TOCOPHEROL, SALVIA MILTIORRHIZA FLOWER/LEAF/ROOT EXTRACT, RHAMNOSE, GLYCINE SOJA (SOYBEAN) OIL, SORBITAN ISOSTEARATE, SODIUM HYDROXIDE, PALMITOYL TETRAPEPTIDE-10',
    url: 'https://www.bioderma.fr',
  },
  {
    name: 'Créaline Defensive Légère',
    brand: 'Bioderma',
    kind: 'skincare',
    unit: 'pump',
    slug: VISAGE_SLUGS.BIODERMA_CREALINE_DEFENSIVE_LEGERE,
    totalAmount: 40,
    amountUnit: 'ml',
    priceCents: 1398,
    description:
      'Crème active apaisante légère pour peaux sensibles et sensibilisées, normales à mixtes.',
    notes:
      'Texture légère et fraîche. Même technologie Défensive que la version Riche, idéale jour/sous maquillage.',
    inci: 'AQUA/WATER/EAU, GLYCERIN, DICAPRYLYL ETHER, PROPYLHEPTYL CAPRYLATE, BUTYLENE GLYCOL, GLYCERYL STEARATE CITRATE, GLYCOL PALMITATE, SQUALANE, SUCROSE STEARATE, MANGIFERA INDICA (MANGO) SEED BUTTER, PENTYLENE GLYCOL, ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER, CAPRYLYL GLYCOL, CARNOSINE, HYDROXYETHYL ACRYLATE/SODIUM ACRYLOYLDIMETHYL TAURATE COPOLYMER, MANNITOL, XYLITOL, TOCOPHEROL, SALVIA MILTIORRHIZA FLOWER/LEAF/ROOT EXTRACT, RHAMNOSE, GLYCINE SOJA (SOYBEAN) OIL, POLYSORBATE 60, SORBITAN ISOSTEARATE, PALMITOYL TETRAPEPTIDE-10',
    url: 'https://www.bioderma.fr',
  },
  {
    name: 'Cicabio Crème+',
    brand: 'Bioderma',
    kind: 'skincare',
    unit: 'pump',
    slug: VISAGE_SLUGS.BIODERMA_CICABIO_CREME_PLUS,
    totalAmount: 40,
    amountUnit: 'ml',
    priceCents: 698,
    description:
      'Soin ultra-réparateur apaisant pour peaux abîmées, irritées ou lésées (visage, corps, zones intimes).',
    notes:
      'Texture effet pansement. Antalgicine™ + Optimal Repair complex. Restaure microbiome en 3h.',
    inci: 'AQUA/WATER/EAU, CAPRYLIC/CAPRIC TRIGLYCERIDE, GLYCERIN, POLYGLYCERYL-3 POLYRICINOLEATE, BRASSICA CAMPESTRIS (RAPESEED) SEED OIL, BUTYLENE GLYCOL, TAPIOCA STARCH, HYDROGENATED RAPESEED OIL, XYLOSE, POLYGLYCERYL-3 DIISOSTEARATE, SIMMONDSIA CHINENSIS (JOJOBA) SEED OIL, MAGNESIUM SULFATE, PENTYLENE GLYCOL, SQUALANE, 1,2-HEXANEDIOL, CAPRYLYL GLYCOL, SODIUM POLYGLUTAMATE, SODIUM CITRATE, XANTHAN GUM, SODIUM HYALURONATE, TOCOPHEROL, MANNITOL, RHAMNOSE, XYLITOL, ACETYL DIPEPTIDE-1 CETYL ESTER, HELIANTHUS ANNUUS (SUNFLOWER) SEED OIL, CITRIC ACID, FRUCTOOLIGOSACCHARIDES',
    url: 'https://www.bioderma.fr',
  },
  {
    name: 'Xémose C8+ Soin Visage Nourrissant Apaisant',
    brand: 'Uriage',
    kind: 'skincare',
    unit: 'pump',
    slug: VISAGE_SLUGS.URIAGE_XEMOSE_C8_PLUS_VISAGE,
    totalAmount: 40,
    amountUnit: 'ml',
    priceCents: 1300,
    description:
      'Soin visage nourrissant apaisant pour peaux très sèches à tendance atopique (toute la famille, dès la naissance).',
    notes:
      '8 céramides biomimétiques + 10% beurre de karité + squalane. Répare les 3 barrières cutanées, apaise dès la 1ère application, anti-rechute.',
    inci: 'AQUA (WATER, EAU) • BUTYROSPERMUM PARKII (SHEA) BUTTER • SQUALANE • DICAPRYLYL ETHER • GLYCERIN • POLYSORBATE 60 • CAPRYLIC/CAPRIC TRIGLYCERIDE • SORBITAN STEARATE • 1,2-HEXANEDIOL • ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER • BEHENYL ALCOHOL • HYDROXYACETOPHENONE • POTASSIUM CETYL PHOSPHATE • SHOREA STENOPTERA SEED BUTTER • SODIUM POLYACRYLATE • SAFFLOWER OIL/PALM OIL AMINOPROPANEDIOL ESTERS • TOCOPHERYL ACETATE • XANTHAN GUM • SODIUM HYDROXIDE • POLYGLYCERYL-10 STEARATE • BORAGE SEED OIL AMINOPROPANEDIOL AMIDES • TRIETHYL CITRATE • POLYGLYCERYL-6 BEHENATE • ASIATICOSIDE • PHYTOSPHINGOSINE • BEHENIC ACID • CERAMIDE NP • CETEARYL ALCOHOL • CHOLESTEROL • GLYCERYL STEARATE • LACTIC ACID • TOCOPHEROL • CERAMIDE NS • CERAMIDE EOP • CERAMIDE AP • SODIUM CETEARYL SULFATE',
    url: 'https://www.uriage.fr',
  },
  {
    name: 'Cicavit+ Crème HPPI Apaisante, Hydratante, Réparatrice',
    brand: 'SVR',
    kind: 'skincare',
    unit: 'pump',
    slug: VISAGE_SLUGS.SVR_CICAVIT_PLUS_CREME_HPPI,
    totalAmount: 100,
    amountUnit: 'ml',
    priceCents: 1000,
    description:
      'Crème réparatrice apaisante HPPI pour peaux abîmées, irritées, post-cicatrisation (visage + corps).',
    notes:
      'Action sur inflammation/réparation/remodelage. Cellules souches de curcuma + pré/postbiotiques + HA + céramides. Anti-taches.',
    inci: 'AQUA/WATER/EAU, ORBIGNYA OLEIFERA SEED OIL, HELIANTHUS ANNUUS (SUNFLOWER) SEED OIL, BUTYROSPERMUM PARKII (SHEA) BUTTER, ZEA MAYS (CORN) OIL, PROPANEDIOL, GLYCERYL STEARATE, GLYCERIN, BEHENYL ALCOHOL, NIACINAMIDE, BUTYLENE GLYCOL, CETEARYL ALCOHOL, CORN STARCH MODIFIED, CURCUMA LONGA (TURMERIC) ROOT EXTRACT, GLYCOLIPIDS, GLYCOSPHINGOLIPIDS, HYDROLYZED YEAST EXTRACT, LECITHIN, SODIUM STEAROYL GLUTAMATE, SODIUM STEAROYL LACTYLATE, ALPHA-GLUCAN OLIGOSACCHARIDE, GLUCOSE, HYDROLYZED HYALURONIC ACID, RHAMNOSE, TOCOPHEROL, 1,2-HEXANEDIOL, CAPRYLYL GLYCOL, CITRIC ACID, GLUCURONIC ACID, PENTYLENE GLYCOL, SODIUM HYDROXIDE, SODIUM POLYACRYLATE, XANTHAN GUM',
    url: 'https://fr.svr.com',
  },
  // ── Coréennes ────────────────────────────────────────────
  {
    name: 'Madagascar Centella Probio-Cica Enrich Cream',
    brand: 'SKIN1004',
    kind: 'skincare',
    unit: 'pump',
    slug: VISAGE_SLUGS.SKIN1004_MADAGASCAR_CENTELLA_PROBIO_CICA,
    totalAmount: 50,
    amountUnit: 'ml',
    priceCents: 1319,
    description:
      'Crème enrichie probiotique à la centella pour apaiser, renforcer la barrière et hydrater les peaux sensibles/irritées.',
    notes:
      'Occlusion 7/10. Texture crème nourrissante. Centella fermentée + céramides + probiotiques.',
    inci: 'CENTELLA ASIATICA EXTRACT, GLYCERIN, DIGLYCERIN, 1,2-HEXANEDIOL, BUTYLENE GLYCOL, NIACINAMIDE, WATER, POLYGLYCERYL-3 DISTEARATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, NEOPENTYL GLYCOL DIHEPTANOATE, ISOSTEARYL ISOSTEARATE, PENTAERYTHRITYL TETRAISOSTEARATE, HYDROGENATED POLY(C6-14 OLEFIN), HEPTYL UNDECYLENATE, LACTOBACILLUS/CENTELLA ASIATICA EXTRACT FERMENT FILTRATE, BIS-DIGLYCERYL POLYACYLADIPATE-2, GLYCERYL STEARATE, C14-22 ALCOHOLS, CETEARYL ALCOHOL, BUTYROSPERMUM PARKII (SHEA) BUTTER, POLYGLYCERYL-2 STEARATE, SODIUM ACRYLATE/SODIUM ACRYLOYLDIMETHYL TAURATE COPOLYMER, GLYCERYL STEARATE CITRATE, ARGININE, STEARYL ALCOHOL, POLYISOBUTENE, C12-20 ALKYL GLUCOSIDE, SQUALANE, SODIUM SURFACTIN, SODIUM POLYACRYLATE, ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER, CARBOMER, HYDROXYSTEARIC ACID, ETHYLHEXYLGLYCERIN, ADENOSINE, HYDROGENATED LECITHIN, SORBITAN OLEATE, CAPRYLYL/CAPRYL GLUCOSIDE, MACADAMIA TERNIFOLIA SEED OIL, SODIUM HYALURONATE, MORINGA OLEIFERA SEED OIL, SODIUM PHYTATE, CERAMIDE NP, DEXTRIN, THEOBROMA CACAO (COCOA) EXTRACT, GLYCERYL ACRYLATE/ACRYLIC ACID COPOLYMER, POLYGLYCERYL-10 MYRISTATE, GLUCOSE, STEARIC ACID, PHYTOSPHINGOSINE, MADECASSIC ACID, ASIATICOSIDE, SUCROSE DISTEARATE, ASIATIC ACID, LAURIC ACID, PHYTOSTEROLS, POLYGLUTAMIC ACID',
    url: 'https://www.skin1004.com',
  },
  {
    name: 'Madagascar Centella Soothing Cream',
    brand: 'SKIN1004',
    kind: 'skincare',
    unit: 'pump',
    slug: VISAGE_SLUGS.SKIN1004_MADAGASCAR_CENTELLA_SOOTHING_CREAM,
    totalAmount: 75,
    amountUnit: 'ml',
    priceCents: 1005,
    description:
      "Crème apaisante légère à 72% d'extrait de centella pour calmer rougeurs et irritations.",
    notes: 'Occlusion 5.5/10. Texture gel-crème. Céramides + centella haute concentration.',
    inci: 'CENTELLA ASIATICA (GOTU KOLA) EXTRACT (72%), GLYCERIN, PROPANEDIOL, DIPROPYLENE GLYCOL, CYCLOMETHICONE, WATER, 1,2-HEXANEDIOL, TREHALOSE, CAPRYLYL METHICONE, C12-14 PARETH-12, CARBOMER, TROMETHAMINE, AMMONIUM ACRYLOYLDIMETHYLTAURATE/VP COPOLYMER, C30-45 ALKYL CETEARYL DIMETHICONE CROSSPOLYMER, XANTHAN GUM, MENTHA PIPERITA (PEPPERMINT) LEAF EXTRACT, ZINGIBER OFFICINALE (GINGER) ROOT EXTRACT, BUTYLENE GLYCOL, ETHYLHEXYLGLYCERIN, DIPOTASSIUM GLYCYRRHIZATE, TRANEXAMIC ACID, COPTIS CHINENSIS ROOT EXTRACT, THEOBROMA CACAO (COCOA) EXTRACT, DEXTRIN, LEUCONOSTOC/RADISH ROOT FERMENT FILTRATE, BIOSACCHARIDE GUM-1, DISODIUM EDTA, SODIUM HYALURONATE, BETA GLUCAN, CERAMIDE EOP, CERAMIDE NS, CERAMIDE NP, CERAMIDE AP, PHYTOSPHINGOSINE, HYDROGENATED LECITHIN, CETEARYL ALCOHOL, STEARIC ACID, CHOLESTEROL',
    url: 'https://www.skin1004.com',
  },
  {
    name: 'Dynasty Cream',
    brand: 'Beauty of Joseon',
    kind: 'skincare',
    unit: 'pump',
    slug: VISAGE_SLUGS.BEAUTY_OF_JOSEON_DYNASTY_CREAM,
    totalAmount: 50,
    amountUnit: 'g',
    priceCents: 1920,
    description:
      'Crème hydratante légère inspirée de la dynastie Joseon, pour peau glowy et équilibrée.',
    notes:
      'Occlusion 6/10. Texture crème légère. Eau de riz + ginseng + squalane + niacinamide + céramides + HA.',
    inci: 'WATER, ORYZA SATIVA (RICE) BRAN WATER, GLYCERIN, PANAX GINSENG ROOT WATER, HYDROGENATED POLYDECENE, 1,2-HEXANEDIOL, NIACINAMIDE, SQUALANE, BUTYLENE GLYCOL, PROPANEDIOL, DICAPRYLATE/DICAPRATE, CETEARYL OLIVATE, SORBITAN OLIVATE, AMMONIUM ACRYLOYLDIMETHYLTAURATE/VP COPOLYMER, XANTHAN GUM, ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER, TROMETHAMINE, CARTHAMUS TINCTORIUS (SAFFLOWER) SEED OIL, HYDROGENATED COCONUT OIL, GLYCERYL ACRYLATE/ACRYLIC ACID COPOLYMER, ETHYLHEXYLGLYCERIN, ADENOSINE, CAPRYLIC/CAPRIC TRIGLYCERIDE, DISODIUM EDTA, HYALURONIC ACID, HYDROLYZED HYALURONIC ACID, SODIUM HYALURONATE, HONEY EXTRACT, CERAMIDE NP, HYDROGENATED LECITHIN, COPTIS JAPONICA ROOT EXTRACT, RAPHANUS SATIVUS (RADISH) SEED EXTRACT, LYCIUM CHINENSE FRUIT EXTRACT, THEOBROMA CACAO (COCOA) SEED EXTRACT, PHELLINUS LINTEUS EXTRACT, DEXTRIN, SCUTELLARIA BAICALENSIS ROOT EXTRACT',
    url: 'https://beautyofjoseon.com',
  },
  {
    name: 'R.E.D Blemish Cica Soothing Cream',
    brand: 'Dr.G',
    kind: 'skincare',
    unit: 'pump',
    slug: VISAGE_SLUGS.DRG_RED_BLEMISH_CICA_SOOTHING,
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
    slug: VISAGE_SLUGS.PURITO_OAT_IN_CALMING_GEL,
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
    slug: VISAGE_SLUGS.COSRX_ADVANCED_SNAIL_92,
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
    slug: VISAGE_SLUGS.ISNTREE_HYALURONIC_ACID_MOIST,
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
