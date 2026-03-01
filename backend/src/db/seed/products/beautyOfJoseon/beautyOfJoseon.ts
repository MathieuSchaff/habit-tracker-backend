export const BOJ_PDOCUT_SLUGS = {
  BEAUTY_OF_JOSEON_DYNASTY_CREAM: 'beauty-of-joseon-dynasty-cream',
  BEAUTY_OF_JOSEON_GLOW_RICE_MILK: 'beauty-of-joseon-glow-replenishing-rice-milk',
  BOJ_GINSENG_ESSENCE_WATER: 'beauty-of-joseon-ginseng-essence-water',
  BOJ_RELIEF_SUN_AQUA_FRESH: 'beauty-of-joseon-relief-sun-aqua-fresh',
}

export const BOJ_PDOCUT_DATA = [
  {
    name: 'Dynasty Cream',
    brand: 'Beauty of Joseon',
    kind: 'skincare',
    unit: 'pump',
    slug: BOJ_PDOCUT_SLUGS.BEAUTY_OF_JOSEON_DYNASTY_CREAM,
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
    name: 'Ginseng Essence Water',
    brand: 'Beauty of Joseon',
    slug: BOJ_PDOCUT_SLUGS.BOJ_GINSENG_ESSENCE_WATER,
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
  {
    name: 'Glow Replenishing Rice Milk',
    brand: 'Beauty of Joseon',
    kind: 'skincare',
    unit: 'pump',
    slug: BOJ_PDOCUT_SLUGS.BEAUTY_OF_JOSEON_GLOW_RICE_MILK,
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
    name: 'Relief Sun Aqua-fresh',
    brand: 'Beauty of Joseon',
    slug: BOJ_PDOCUT_SLUGS.BOJ_RELIEF_SUN_AQUA_FRESH,
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
]
