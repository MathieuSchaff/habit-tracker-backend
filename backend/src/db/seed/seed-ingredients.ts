import type { CreateIngredientInput } from '@habit-tracker/shared'
// ─── Ingredients (wiki) ─────────────────────────────────
// IDs générés par la DB. Les slugs servent de référence.
// Chaque ingrédient est vérifié comme présent dans au moins un INCI des produits seed.

export const INGREDIENT_SLUGS = {
  GLYCERIN: 'glycerin',
  SQUALANE: 'squalane',
  GLYCYRRHETINIC_ACID: 'glycyrrhetinic-acid',
  AMMONIUM_GLYCYRRHIZATE: 'ammonium-glycyrrhizate',
  PHYTOSPHINGOSINE: 'phytosphingosine',
  NIACINAMIDE: 'niacinamide',
  PENTYLENE_GLYCOL: 'pentylene-glycol',
  TOCOPHEROL: 'tocopherol',
  SHEA_BUTTER: 'shea-butter',
  ESCIN: 'escin',
  CENTELLA_ASIATICA: 'centella-asiatica',
  RUSCUS_ACULEATUS: 'ruscus-aculeatus',
  PANTHENOL: 'panthenol',
  CERAMIDE_NP: 'ceramide-np',
  CERAMIDE_NS: 'ceramide-ns',
  CERAMIDE_EOP: 'ceramide-eop',
  CERAMIDE_AP: 'ceramide-ap',
  SPHINGOMONAS_FERMENT: 'sphingomonas-ferment-extract',
  SILYBUM_MARIANUM: 'silybum-marianum',
  GLYCYRRHIZA_INFLATA: 'glycyrrhiza-inflata',
  SODIUM_HYALURONATE: 'sodium-hyaluronate',
  AVENA_SATIVA: 'avena-sativa',
  RHAMNOSE: 'rhamnose',
  CALENDULA: 'calendula-officinalis',
  SCHISANDRA: 'schisandra-sphenanthera',
  PLANKTON_EXTRACT: 'plankton-extract',
  VACCINIUM_MYRTILLUS: 'vaccinium-myrtillus',
  ASIATICOSIDE: 'asiaticoside',
  OPHIOPOGON_JAPONICUS: 'ophiopogon-japonicus',
  CAMELLIA_SINENSIS: 'camellia-sinensis',
  HIPPOPHAE_RHAMNOIDES: 'hippophae-rhamnoides',
  CHOLESTEROL: 'cholesterol',
  GLYCOSPHINGOLIPIDS: 'glycosphingolipids',
} as const

// createdBy sera remplacé au runtime par l'ID du user admin
export const ingredientData: CreateIngredientInput[] = [
  // ── Humectants & excipients ───────────────────────
  {
    name: 'Glycérine',
    slug: INGREDIENT_SLUGS.GLYCERIN,
    description: "Humectant puissant qui attire l'eau dans la couche cornée.",
    content:
      "# Glycérine\n\nIngrédient hydratant universel présent dans la quasi-totalité des soins. Attire l'eau des couches profondes et de l'environnement vers la surface cutanée.\n\n## INCI\nGLYCERIN\n\n## Concentration typique\n2-10% dans les soins hydratants.",
    category: 'excipient',
  },
  {
    name: 'Squalane',
    slug: INGREDIENT_SLUGS.SQUALANE,
    description: 'Émollient biomimétique dérivé du squalène, renforce la barrière cutanée.',
    content:
      "# Squalane\n\nVersion hydrogénée et stable du squalène, un lipide naturellement présent dans le sébum. Excellente tolérance, non comédogène.\n\n## INCI\nSQUALANE\n\n## Origine\nDérivé de l'olive ou de la canne à sucre.",
    category: 'excipient',
  },
  {
    name: 'Pentylène glycol',
    slug: INGREDIENT_SLUGS.PENTYLENE_GLYCOL,
    description: 'Hydratant et conservateur doux. Améliore la pénétration des actifs.',
    content:
      '# Pentylène glycol\n\nDiol multifonctionnel : hydratant, solvant et agent antimicrobien doux. Souvent utilisé comme alternative aux conservateurs traditionnels.\n\n## INCI\nPENTYLENE GLYCOL',
    category: 'excipient',
  },
  {
    name: 'Beurre de karité',
    slug: INGREDIENT_SLUGS.SHEA_BUTTER,
    description: 'Émollient riche en acides gras. Nourrit et protège la barrière cutanée.',
    content:
      '# Beurre de karité\n\nBeurre végétal riche en acides oléique et stéarique, insaponifiables et vitamines A/E. Relipidant et anti-inflammatoire naturel.\n\n## INCI\nBUTYROSPERMUM PARKII (SHEA) BUTTER',
    category: 'excipient',
  },
  {
    name: 'Cholestérol',
    slug: INGREDIENT_SLUGS.CHOLESTEROL,
    description: 'Lipide structurel de la barrière cutanée. Stabilise les lamelles lipidiques.',
    content:
      '# Cholestérol\n\nLipide essentiel de la couche cornée, il forme avec les céramides et les acides gras les lamelles lipidiques intercellulaires. Souvent combiné aux céramides dans les soins réparateurs.\n\n## INCI\nCHOLESTEROL',
    category: 'excipient',
  },
  {
    name: 'Glycosphingolipides',
    slug: INGREDIENT_SLUGS.GLYCOSPHINGOLIPIDS,
    description: 'Sphingolipides naturels qui renforcent la barrière cutanée.',
    content:
      '# Glycosphingolipides\n\nLipides membranaires qui participent à la signalisation cellulaire et au maintien de la barrière cutanée. Présents dans les formulations visant à restaurer les peaux sensibles.\n\n## INCI\nGLYCOSPHINGOLIPIDS',
    category: 'excipient',
  },

  // ── Vitamines ─────────────────────────────────────
  {
    name: 'Tocophérol (Vitamine E)',
    slug: INGREDIENT_SLUGS.TOCOPHEROL,
    description: 'Vitamine E naturelle. Antioxydant protecteur et stabilisant.',
    content:
      '# Tocophérol (Vitamine E)\n\nAntioxydant liposoluble qui protège les membranes cellulaires contre le stress oxydatif. Utilisé aussi comme stabilisant des huiles dans les formulations.\n\n## INCI\nTOCOPHEROL\n\n## Note\nTOCOPHERYL ACETATE est la forme estérifiée, plus stable mais nécessitant une conversion cutanée pour être active.',
    category: 'vitamine',
  },
  {
    name: 'Niacinamide (Vitamine B3)',
    slug: INGREDIENT_SLUGS.NIACINAMIDE,
    description: 'Renforce la barrière cutanée, anti-inflammatoire, régule le sébum.',
    content:
      "# Niacinamide (Vitamine B3)\n\nActif polyvalent : renforce la barrière cutanée en stimulant la synthèse de céramides, réduit l'inflammation, atténue les rougeurs et régule la production de sébum.\n\n## INCI\nNIACINAMIDE\n\n## Concentration typique\n2-5% en cosmétique, jusqu'à 10% en dermocosmétique.",
    category: 'vitamine',
  },
  {
    name: 'Panthénol (Provitamine B5)',
    slug: INGREDIENT_SLUGS.PANTHENOL,
    description: 'Hydratant, apaisant et cicatrisant.',
    content:
      "# Panthénol (Provitamine B5)\n\nPrécurseur de l'acide pantothénique. Pénètre l'épiderme où il est converti en vitamine B5. Hydrate, apaise les irritations et accélère la réparation cutanée.\n\n## INCI\nPANTHENOL",
    category: 'vitamine',
  },

  // ── Actifs anti-inflammatoires ────────────────────
  {
    name: 'Acide glycyrrhétinique',
    slug: INGREDIENT_SLUGS.GLYCYRRHETINIC_ACID,
    description: 'Dérivé de la réglisse. Puissant anti-inflammatoire topique.',
    content:
      "# Acide glycyrrhétinique\n\nDérivé de la racine de réglisse (*Glycyrrhiza glabra*). Inhibe la 11β-hydroxystéroïde déshydrogénase, amplifiant l'effet du cortisol endogène. Puissant anti-inflammatoire.\n\n## INCI\nGLYCYRRHETINIC ACID\n\n## Utilisations\nRosacée, dermatite, peaux sensibles.",
    category: 'actif',
  },
  {
    name: `Glycyrrhizate d'ammonium`,
    slug: INGREDIENT_SLUGS.AMMONIUM_GLYCYRRHIZATE,
    description: 'Sel de la glycyrrhizine (réglisse). Anti-inflammatoire et apaisant.',
    content:
      "# Glycyrrhizate d'ammonium\n\nSel d'ammonium de l'acide glycyrrhizique, extrait de réglisse. Anti-inflammatoire qui agit par une voie différente de l'acide glycyrrhétinique. Souvent combiné à celui-ci dans les formules anti-rougeurs.\n\n## INCI\nAMMONIUM GLYCYRRHIZATE",
    category: 'actif',
  },
  {
    name: 'Glycyrrhiza inflata (Licochalcone A)',
    slug: INGREDIENT_SLUGS.GLYCYRRHIZA_INFLATA,
    description: 'Flavonoïde de réglisse chinoise. Anti-inflammatoire et antioxydant.',
    content:
      '# Glycyrrhiza inflata\n\nExtrait de réglisse chinoise riche en Licochalcone A, une chalcone qui inhibe les médiateurs inflammatoires (PGE2, NO). Actif signature de la gamme Eucerin AntiRougeurs.\n\n## INCI\nGLYCYRRHIZA INFLATA ROOT EXTRACT\n\n## Note\nDifférent de la réglisse classique (*G. glabra*) — espèce spécifique plus riche en licochalcone.',
    category: 'actif',
  },

  // ── Actifs vasculaires ────────────────────────────
  {
    name: 'Escine',
    slug: INGREDIENT_SLUGS.ESCIN,
    description: "Saponine du marronnier d'Inde. Veinotonique et anti-œdémateuse.",
    content:
      "# Escine\n\nSaponine triterpénique extraite du marron d'Inde (*Aesculus hippocastanum*). Renforce les parois vasculaires, réduit la perméabilité capillaire et l'inflammation.\n\n## INCI\nESCIN\n\n## Utilisations\nSoins anti-rougeurs, anti-cernes, jambes lourdes.",
    category: 'actif',
  },
  {
    name: 'Ruscus aculeatus (Petit-houx)',
    slug: INGREDIENT_SLUGS.RUSCUS_ACULEATUS,
    description: 'Veinotonique naturel. Améliore la microcirculation.',
    content:
      '# Ruscus Aculeatus (Petit-houx)\n\nRhizome riche en ruscogénine et néoruscogénine. Vasoconstricteur veineux, réduit la perméabilité capillaire.\n\n## INCI\nRUSCUS ACULEATUS ROOT EXTRACT\n\n## Utilisations\nInsuffisance veineuse, anti-rougeurs.',
    category: 'actif',
  },

  // ── Actifs réparateurs / barrière ─────────────────
  {
    name: 'Phytosphingosine',
    slug: INGREDIENT_SLUGS.PHYTOSPHINGOSINE,
    description: 'Lipide naturel de la peau, précurseur des céramides. Anti-inflammatoire.',
    content:
      '# Phytosphingosine\n\nSphingolipide naturellement présent dans la couche cornée. Précurseur des céramides, participe à la cohésion de la barrière cutanée et possède des propriétés antimicrobiennes.\n\n## INCI\nPHYTOSPHINGOSINE',
    category: 'actif',
  },
  {
    name: 'Céramide NP',
    slug: INGREDIENT_SLUGS.CERAMIDE_NP,
    description: 'Lipide clé de la barrière cutanée (anciennement Céramide 3).',
    content:
      "# Céramide NP\n\nUn des céramides majeurs de la couche cornée. Forme les lamelles lipidiques intercellulaires essentielles à l'imperméabilité de la barrière cutanée.\n\n## INCI\nCERAMIDE NP",
    category: 'actif',
  },
  {
    name: 'Céramide NS',
    slug: INGREDIENT_SLUGS.CERAMIDE_NS,
    description: 'Céramide non-hydroxylé. Composant majeur des lipides intercellulaires.',
    content:
      '# Céramide NS\n\nCéramide à base sphingosine (anciennement Céramide 2). Le céramide le plus abondant dans la couche cornée humaine.\n\n## INCI\nCERAMIDE NS',
    category: 'actif',
  },
  {
    name: 'Céramide EOP',
    slug: INGREDIENT_SLUGS.CERAMIDE_EOP,
    description: "Céramide à longue chaîne. Ancre les lamelles lipidiques à l'enveloppe cornée.",
    content:
      "# Céramide EOP\n\nCéramide estérifié à très longue chaîne (anciennement Céramide 1). Rôle structural unique : fait le pont entre l'enveloppe cornée et les lamelles lipidiques intercellulaires.\n\n## INCI\nCERAMIDE EOP",
    category: 'actif',
  },
  {
    name: 'Céramide AP',
    slug: INGREDIENT_SLUGS.CERAMIDE_AP,
    description: 'Céramide alpha-hydroxylé. Renforce la cohésion de la barrière cutanée.',
    content:
      '# Céramide AP\n\nCéramide alpha-hydroxylé (anciennement Céramide 6-II). Participe à la desquamation normale et à la cohésion des cornéocytes.\n\n## INCI\nCERAMIDE AP',
    category: 'actif',
  },
  {
    name: 'Sphingomonas Ferment Extract',
    slug: INGREDIENT_SLUGS.SPHINGOMONAS_FERMENT,
    description: 'Postbiotique. Rééquilibre le microbiome cutané.',
    content:
      '# Sphingomonas Ferment Extract\n\nExtrait de fermentation bactérienne riche en sphingolipides. Renforce la barrière cutanée et module le microbiome.\n\n## INCI\nSPHINGOMONAS FERMENT EXTRACT\n\n## Présent dans\nSVR Sensifine AR, La Roche-Posay Rosaliac AR.',
    category: 'actif',
  },

  // ── Actifs botaniques ─────────────────────────────
  {
    name: 'Centella asiatica',
    slug: INGREDIENT_SLUGS.CENTELLA_ASIATICA,
    description: 'Plante cicatrisante et apaisante. Stimule la synthèse de collagène.',
    content:
      '# Centella Asiatica\n\nPlante tropicale riche en asiaticoside, madécassoside et acide asiatique. Stimule la synthèse de collagène I et III, apaise et accélère la cicatrisation.\n\n## INCI\nCENTELLA ASIATICA EXTRACT / CENTELLA ASIATICA LEAF EXTRACT',
    category: 'actif',
  },
  {
    name: 'Asiaticoside',
    slug: INGREDIENT_SLUGS.ASIATICOSIDE,
    description: 'Saponine pure de Centella asiatica. Stimule la synthèse de collagène.',
    content:
      "# Asiaticoside\n\nSaponine triterpénique isolée de *Centella asiatica*. Forme purifiée utilisée à la place de l'extrait total. Stimule la synthèse de collagène et renforce les parois vasculaires.\n\n## INCI\nASIATICOSIDE\n\n## Note\nUtilisé sous forme purifiée par Noreva et Uriage plutôt que l'extrait total de centella.",
    category: 'actif',
  },
  {
    name: 'Chardon-Marie (Silybum marianum)',
    slug: INGREDIENT_SLUGS.SILYBUM_MARIANUM,
    description: "Antioxydant et anti-inflammatoire. Actif phare d'Avène Rosamed.",
    content:
      "# Silybum Marianum (Chardon-Marie)\n\nPlante riche en silymarine, un complexe de flavonolignanes aux propriétés antioxydantes et anti-inflammatoires. Composant clé de l'Angiopausine™ d'Avène.\n\n## INCI\nSILYBUM MARIANUM FRUIT EXTRACT",
    category: 'actif',
  },
  {
    name: 'Avoine Rhealba',
    slug: INGREDIENT_SLUGS.AVENA_SATIVA,
    description: "Extrait d'avoine breveté A-Derma. Apaisant et anti-irritant.",
    content:
      "# Avoine Rhealba®\n\nVariété d'avoine cultivée par Pierre Fabre. Riche en saponines, flavonoïdes et avénanthramides aux propriétés anti-inflammatoires et antiprurigineuses.\n\n## INCI\nAVENA SATIVA (OAT) FLOWER/LEAF/STEM JUICE",
    category: 'actif',
  },
  {
    name: 'Calendula',
    slug: INGREDIENT_SLUGS.CALENDULA,
    description: 'Anti-inflammatoire et cicatrisant traditionnel.',
    content:
      '# Calendula Officinalis\n\nExtrait de fleur de souci riche en flavonoïdes et triterpènes. Propriétés anti-inflammatoires, cicatrisantes et antiseptiques douces.\n\n## INCI\nCALENDULA OFFICINALIS FLOWER EXTRACT',
    category: 'actif',
  },
  {
    name: 'Schisandra sphenanthera',
    slug: INGREDIENT_SLUGS.SCHISANDRA,
    description: 'Baie adaptogène. Antioxydant et anti-rougeurs.',
    content:
      '# Schisandra Sphenanthera\n\nExtrait de baie riche en lignanes (schisandrine). Propriétés antioxydantes et anti-inflammatoires. Utilisé par La Roche-Posay dans sa gamme Rosaliac.\n\n## INCI\nSCHISANDRA SPHENANTHERA FRUIT EXTRACT',
    category: 'actif',
  },
  {
    name: 'Extrait de plancton',
    slug: INGREDIENT_SLUGS.PLANKTON_EXTRACT,
    description: 'Extrait marin apaisant et régénérant.',
    content:
      '# Plankton Extract\n\nExtrait de micro-organismes marins aux propriétés apaisantes et régénérantes. Utilisé par Garancia dans ses formules anti-rougeurs.\n\n## INCI\nPLANKTON EXTRACT',
    category: 'actif',
  },
  {
    name: 'Myrtille (Vaccinium myrtillus)',
    slug: INGREDIENT_SLUGS.VACCINIUM_MYRTILLUS,
    description: 'Antioxydant riche en anthocyanes. Protège les capillaires.',
    content:
      '# Vaccinium Myrtillus (Myrtille)\n\nExtrait de feuille riche en anthocyanes et proanthocyanidines. Renforce les parois capillaires et possède des propriétés antioxydantes.\n\n## INCI\nVACCINIUM MYRTILLUS LEAF EXTRACT',
    category: 'actif',
  },
  {
    name: 'Ophiopogon japonicus',
    slug: INGREDIENT_SLUGS.OPHIOPOGON_JAPONICUS,
    description: 'Plante asiatique apaisante et thermorégulatrice.',
    content:
      "# Ophiopogon Japonicus\n\nPlante de la pharmacopée traditionnelle asiatique. Propriétés apaisantes, utilisée par SVR pour son effet thermorégulateur dans les soins anti-flushs.\n\n## INCI\nOPHIOPOGON JAPONICUS ROOT EXTRACT\n\n## Note\nActif clé de la technologie SVR Sensifine, contribue à l'effet anti-flush.",
    category: 'actif',
  },
  {
    name: 'Acide hyaluronique (Sodium Hyaluronate)',
    slug: INGREDIENT_SLUGS.SODIUM_HYALURONATE,
    description: 'Humectant capable de retenir 1000x son poids en eau.',
    content:
      "# Sodium Hyaluronate\n\nSel sodique de l'acide hyaluronique, de plus faible poids moléculaire que l'HA natif. Pénètre mieux l'épiderme. Hydrate en profondeur et repulpe.\n\n## INCI\nSODIUM HYALURONATE",
    category: 'actif',
  },
  {
    name: 'Thé vert (Camellia sinensis)',
    slug: INGREDIENT_SLUGS.CAMELLIA_SINENSIS,
    description: 'Antioxydant puissant riche en catéchines (EGCG).',
    content: `# Camellia Sinensis (Thé vert)\n\nExtrait de feuille riche en polyphénols, notamment l'EGCG (épigallocatéchine gallate). Puissant antioxydant et anti-inflammatoire.\n\n## INCI\nCAMELLIA SINENSIS LEAF EXTRACT`,
    category: 'actif',
  },
  {
    name: 'Argousier (Hippophae rhamnoides)',
    slug: INGREDIENT_SLUGS.HIPPOPHAE_RHAMNOIDES,
    description: 'Baie riche en vitamines C/E et caroténoïdes. Régénérant cutané.',
    content:
      "# Hippophae Rhamnoides (Argousier)\n\nBaie exceptionnellement riche en vitamine C, E, caroténoïdes et acides gras essentiels (oméga-7). Propriétés régénérantes et anti-inflammatoires.\n\n## INCI\nHIPPOPHAE RHAMNOIDES FRUIT EXTRACT\n\n## Note\nUne des rares sources végétales d'acide palmitoléique (oméga-7).",
    category: 'actif',
  },

  // ── Sucres actifs ─────────────────────────────────
  {
    name: 'Rhamnose',
    slug: INGREDIENT_SLUGS.RHAMNOSE,
    description: 'Sucre végétal anti-âge. Stimule les fibroblastes et le collagène.',
    content: `# Rhamnose\n\nDésoxysugar d'origine végétale. Stimule la production de collagène par les fibroblastes et possède des propriétés anti-inflammatoires. Breveté par L'Oréal.\n\n## INCI\nRHAMNOSE`,
    category: 'actif',
  },
]
