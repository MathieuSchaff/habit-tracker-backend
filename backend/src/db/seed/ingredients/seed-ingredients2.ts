import type { CreateIngredientInput } from '@habit-tracker/shared'

export const INGREDIENT_SLUGS = {
  MATRIXYL_3000: 'matrixyl-3000',
  ARGIRELINE: 'argireline',
  COPPER_TRIPEPTIDE_1: 'copper-tripeptide-1',
  GHK_CU: 'ghk-cu',
  PALMITOYL_TRIPEPTIDE_1: 'palmitoyl-tripeptide-1',
  PALMITOYL_TETRAPEPTIDE_7: 'palmitoyl-tetrapeptide-7',
  ACETYL_HEXAPEPTIDE_8: 'acetyl-hexapeptide-8',
  PALMITOYL_PENTAPEPTIDE_4: 'palmitoyl-pentapeptide-4',
  SYN_AKE: 'syn-ake',
  COPPER_PEPTIDES: 'copper-peptides',
  AZELAIC_ACID: 'azelaic-acid',
  HYPOCHLOROUS_ACID: 'hypochlorous-acid',
  ALPHA_ARBUTIN: 'alpha-arbutin',
  KOJIC_ACID: 'kojic-acid',
  BEEF_TALLOW: 'beef-tallow',
  NIACINAMIDE: 'niacinamide',
  TRANEXAMIC_ACID: 'tranexamic-acid',
  HUMECTANTS_EMOLLIENTS_OCCLUSIFS: 'humectants-emollients-occlusifs',
  CERAMIDES: 'ceramides',
  PDRN: 'pdrn',
  UREA: 'urea',
  GLUTATHION: 'glutathion',
  SULFUR: 'souffre',
  HEARTLEAF: 'heartleaf',
  PHA: 'pha',
  RETINOL: 'retinol',
  RETINAL: 'retinal',
  RETINALDEHYDE: 'retinaldehyde',
  BAKUCHIOL: 'bakuchiol',
  VITAMIN_C: 'vitamin-c',
  ASCORBIC_ACID: 'ascorbic-acid',
  SALICYLIC_ACID: 'salicylic-acid',
  GLYCOLIC_ACID: 'glycolic-acid',
  LACTIC_ACID: 'lactic-acid',
  MANDELIC_ACID: 'mandelic-acid',
  PEPTIDES: 'peptides',
  HYALURONIC_ACID: 'hyaluronic-acid',
  POLYGLUTAMIC_ACID: 'polyglutamic-acid',
  ALLANTOIN: 'allantoin',
  ALOE_VERA: 'aloe-vera',
  GREEN_TEA: 'green-tea',
  LICORICE_EXTRACT: 'licorice-extract',
  SNOW_MUSHROOM: 'snow-mushroom',
  PROBIOTICS: 'probiotics',
  POSTBIOTICS: 'postbiotics',
  L_ASCORBIC_ACID: 'l-ascorbic-acid',
  SODIUM_ASCORBYL_PHOSPHATE: 'sodium-ascorbyl-phosphate',
  MAGNESIUM_ASCORBYL_PHOSPHATE: 'magnesium-ascorbyl-phosphate',
  ASCORBYL_GLUCOSIDE: 'ascorbyl-glucoside',
  // TETRAHEXYLDECYL_ASCORBATE: 'tetrahexyldecyl-ascorbate',
  // ASCORBYL_TETRAISOPALMITATE: 'ascorbyl-tetraisopalmitate',
  THD_ASCORBATE: 'thd-ascorbate',
  THREE_O_ETHYL_ASCORBIC_ACID: '3-o-ethyl-ascorbic-acid',
  ASCORBYL_PALMITATE: 'ascorbyl-palmitate',
} as const
export const ingredientsSeed: CreateIngredientInput[] = [
  {
    name: 'Acide azélaïque',
    slug: INGREDIENT_SLUGS.AZELAIC_ACID,
    description:
      "Acide dicarboxylique naturel approuvé FDA pour l'acné et la rosacée. Très efficace sur l'hyperpigmentation, le melasma et l'érythème post-inflammatoire. Excellent profil de tolérance, safe grossesse.",
    content: `## Qu'est-ce que c'est ?
  Acide faible (diacide dicarboxylique) naturellement présent dans le blé, l'orge, et produit par la levure *Malassezia furfur* sur la peau elle-même. Ce n'est **pas** un exfoliant chimique classique — il n'agit pas directement sur la cohésion des cornéocytes comme l'acide glycolique.

  Non photosensibilisant, sans risque de résistance bactérienne, sûr à long terme.

  ## Mécanismes d'action

  ### Anti-inflammatoire
  Inhibe les voies IL-1β, IL-6, TNF-α (principaux médiateurs inflammatoires cutanés). Base de son efficacité sur l'acné inflammatoire et la rosacée. Peut même aider contre les dommages UV (en complément du SPF).

  ### Antimicrobien (sans résistance)
  Tue les bactéries de l'intérieur, notamment *Cutibacterium acnes* et *S. aureus*, **sans induire de résistance bactérienne** — contrairement aux antibiotiques topiques ou oraux. Intérêt majeur pour l'usage prolongé.
  - Étude in vitro à 20 % : réduction de *C. acnes* de **96,7 %** et *S. aureus* de **99,6 %**.
  - L'absorption bactérienne augmente fortement quand le pH baisse (×14 pour *C. acnes* entre pH 6 et 4) → **synergie avec les acides** (glycolique, vitamine C) qui acidifient l'environnement cutané. Le pH naturel de la peau est ~4,5–5,5.

  ### Normalisation de la kératinisation (comédolytique)
  Ralentit la différenciation terminale des kératinocytes → réduit l'hyperkératose folliculaire, l'épaississement du stratum corneum et les comédons (points noirs/blancs). Effet similaire à un exfoliant, mais par un mécanisme différent → excellente combinaison avec AHA/BHA.

  ### Inhibiteur de la tyrosinase
  Bloque la synthèse de mélanine de manière **sélective** sur les mélanocytes hyperactifs, sans détruire les mélanocytes sains. Ne touche pas les grains de beauté ou taches de vieillesse normales.
  - Étude cobaye (années 80, 15 %) : après 6 semaines, nombre de mélanocytes stable — contrairement à l'hydroquinone 2 % qui le fait chuter de ~900 à 52 en 3 semaines.
  - In vitro sur cellules humaines : rupture mitochondriale surtout dans les mélanocytes malins/hyperactifs, effet atténué sur les mélanocytes sains.
  - Avantage majeur pour les **peaux foncées (Fitzpatrick III–VI)** : pas de risque de dépigmentation paradoxale, halo dépigmenté ou ochronose.

  ### Antioxydant
  Piège les radicaux libres, contribue à la protection contre le stress oxydatif.

  ## Indications
  Acné vulgaire (mild to moderate), rosacée papulo-pustuleuse, hyperpigmentation post-inflammatoire (PIH), melasma, érythème post-inflammatoire (PIE), dermatite séborrhéique, dermatite périorale/périorificielle.

  ## Concentrations et efficacité

  | Concentration | Statut | Usage |
  |---|---|---|
  | 10 % | OTC / cosmétique | Soutien acné légère, actif secondaire |
  | 15 % | OTC+ / quasi-Rx | Rosacée, acné, hyperpigmentation |
  | 20 % | Prescription | Melasma, acné modérée, gold standard clinique |

  ### Ce que 10 % peut (et ne peut pas) faire
  Très peu d'études directes sur 10 % — l'essentiel des données cliniques portent sur 15–20 %.
  - **Étude iranienne (2011)** : deux gels 10 % (hydroalcoolique vs sans alcool) sur acné mild-moderate → réduction significative des lésions inflammatoires et non-inflammatoires en 8 semaines. Les deux bases équivalentes, sauf supériorité hydroalcoolique sur peaux grasses.
  - **Pas de données solides** pour hyperpigmentation ou rosacée à 10 % seul.
  - Conclusion : à 10 %, l'acide azélaïque est un **actif de soutien**, pas un actif principal. Insuffisant seul pour acné modérée/sévère, mélasma marqué ou rosacée franche. Pour l'hyperpigmentation, combinaison obligatoire.

  ## Efficacité clinique prouvée (15–20 %)

  ### Acné
  - 20 % crème ≈ 0,05 % trétinoïne sur réduction des comédons (deux études : 92 et 289 patients, 3–6 mois), avec **meilleure tolérance**.
  - Comparable à 5 % peroxyde de benzoyle sur 2 mois, 2 % érythromycine, voire antibiotiques oraux dans certaines études.
  - Réduit significativement lésions inflammatoires et non-inflammatoires.
  - **Double action** unique : traite l'acné + prévient/fade les taches post-acné (PIH) simultanément → avantage majeur pour peaux foncées.
  - Observation fréquente : peau **moins grasse** après 1–2 mois (pas de mécanisme clair établi, mais rapportée régulièrement en pratique).
  - **Pas de purging** : pas d'augmentation temporaire des boutons au début (contrairement aux rétinoïdes).

  ### Rosacée
  - 15 % gel ou mousse → réduit érythème, lésions inflammatoires, améliore la sévérité globale.
  - La mousse (Finacea) est encore moins irritante que le gel — moins de sécheresse et de desquamation. Véhicule recommandé pour rosacée.
  - Bon profil également pour **dermatite séborrhéique** (anti-inflammatoire sur zones grasses/rouges).

  ### Hyperpigmentation / Mélasma
  Comparé à l'hydroquinone 4 % (gold standard) — méta-analyse (6 études randomisées, peaux asiatiques/moyen-orientales/iraniennes) :
  - Réduction du score MASI très proche entre les deux.
  - Grande étude (240 sujets, 24 semaines) :
    - Résultat bon/excellent : ~65 % (azélaïque) vs ~73 % (hydroquinone)
    - Réduction >50 % de la taille des lésions : ~60 % vs ~66 %
  - Hydroquinone légèrement supérieure pour les cas très marqués, mais l'écart reste faible.
  - Azélaïque idéal en **maintenance après hydroquinone** ou pour peaux foncées (Fitzpatrick IV–VI).

  | Critère | Acide azélaïque 20 % | Hydroquinone 4 % |
  |---|---|---|
  | Efficacité globale | ★★★★ | ★★★★★ |
  | Sécurité peaux foncées | Excellent | Risqué |
  | Risque ochronose | Non | Oui (long terme) |
  | Dépigmentation paradoxale | Rare | Possible |
  | Irritation | Modérée (transitoire) | Faible |
  | Usage long terme | Oui, indéfiniment | Limité |
  | Grossesse | Safe (catégorie B) | Déconseillé |

  > ⚠️ Malgré sa réputation « douce », l'acide azélaïque 20 % se révèle légèrement **plus irritant** que l'hydroquinone 4 % dans ces études (picotements, brûlures, démangeaisons, desquamation). Souvent transitoire, mais peut persister chez certains.

  ## Formulation : pourquoi ça compte énormément

  L'acide azélaïque est une molécule **très peu soluble** (longue chaîne carbonée + deux groupes acides) → ni hydrophile ni lipophile → souvent en suspension à 20 % (texture épaisse, pâteuse).

  - **Pénétration cutanée faible** : ~3 % pour la crème 20 % classique.
  - 15 % gel (Finacea) → pénétration ~8 % (×2–3 vs crème 20 %).
  - 15 % mousse → encore moins irritante, meilleure tolérance.

  Une bonne solubilisation/dispersion est donc plus efficace qu'une concentration brute élevée. Éviter les formulations « gritty » (grains non dissous = mauvaise pénétration).

  **Produits prescription US** : Azelex (20 % crème), Finacea (15 % gel ou mousse).

  ### Produits OTC 10 % — notes pratiques
  - **Inkey List, Naturium** : textures émulsion légères, moins irritantes, bien tolérées.
  - **Paula's Choice Azelaic Acid Booster** : 10 % + acide salicylique + réglisse — confiance clinique, texture pâteuse, plus de picotements initiaux.
  - **The Ordinary** : souvent gritty (grains non dissous → pénétration compromise).
  - Stinging fréquent au début — acclimatation normale, introduire lentement.

  ## Dérivé : Potassium Azéloyl Diglycinate (PAD / Azeloglycine)

  ### Pourquoi ce dérivé existe
  L'acide azélaïque est un cauchemar en formulation (suspension pâteuse, gritty, stinging, pénétration faible). Le PAD est créé en attachant deux groupes glycine à la molécule → **solubilité explosive** (jusqu'à 30–40 % en solution claire). Résultat : textures légères et fluides, pH neutre, moins irritant, meilleure compatibilité avec d'autres actifs.

  ### Mécanismes théoriques
  Similaires à l'acide azélaïque (anti-inflammatoire, antimicrobien, inhibition de la tyrosinase, régulation du sébum). Inhibition de la tyrosinase confirmée in vitro. Mais les **preuves cliniques humaines sont bien plus faibles**.

  ### Données cliniques (très limitées)

  **Rosacée légère à modérée** (meilleure étude disponible) : étude randomisée double-aveugle placebo-contrôlée (2012), 5 % PAD + 1 % hydroxypropyl chitosan vs placebo, 42 patients, 28 jours + suivi J42. Réduction significative de l'érythème (Mexameter + évaluation clinique) sur joues et menton, amélioration de l'hydratation, effet persistant 2 semaines après arrêt. → Meilleure preuve pour PAD : **anti-rougeurs en rosacée légère**.

  **Hyperpigmentation + sébum** (étude fournisseur, faible qualité) : 3 % PAD, 5 volontaires. ~12 % amélioration des taches (sans barre d'erreur, n=5 → non significatif). ~30 % réduction du sébum en 3 semaines (plus convaincant). → Intéressant pour sébum/acné légère, preuves anecdotiques.

  Pas d'études head-to-head vs acide azélaïque 15–20 %. Pas de grosses études sur acné modérée ou mélasma marqué.

  ### PAD vs Acide azélaïque

  | Critère | Acide azélaïque | PAD |
  |---|---|---|
  | Preuves cliniques | Solides (15–20 %) | Faibles (3–5 %) |
  | Texture | Pâteuse / gritty | Légère, fluide |
  | Irritation | Modérée | Faible |
  | Solubilité | Mauvaise | Excellente |
  | Peaux sensibles | Correct | Excellent |
  | Acné modérée / mélasma | Efficace | Non prouvé |

  ### Position dans la routine
  - **Tier 3 (nice to have)**, pas un actif principal.
  - Utile comme soutien (acné légère, rosacée sensible) ou alternative quand l'acide azélaïque irrite trop.
  - Concentrations efficaces dans les études : 3–5 %. Les produits à 10–20 % (Beauty of Joseon, Naturium) sont potentiellement plus forts mais sans données solides → patch test recommandé.
  - Préférer un produit isolé à 5–10 %+ (Naturium, Beauty of Joseon) plutôt qu'un multi-actifs « kitchen sink » pour vraiment évaluer l'effet.

  ## Combinaisons

  ### Cliniquement testées
  **Azélaïque 10 % + Trétinoïne 0,05 %** (étude, 50 femmes indiennes, 24 semaines) : réduction moyenne MASI ~80 %. Meilleure réponse sur mélasma épidermique que dermique. La trétinoïne accélère le renouvellement cellulaire et améliore la pénétration.

  **Azélaïque 20 % + Acide glycolique (15 % → 20 %)** : efficacité inférieure à l'hydroquinone seule sur mélasma modéré à sévère + PIH. Illustre la résistance du mélasma même avec des combos actifs.

  ### Synergies logiques
  - **AHA/BHA (glycolique, salicylique)** : acidifient l'environnement cutané → boostent l'activité antimicrobienne + mécanismes exfoliants complémentaires.
  - **Rétinol / rétinoides** : renouvellement cellulaire, améliore la pénétration, combo excellent pour acné et hyperpigmentation. Pas d'inactivation mutuelle.
  - **Niacinamide** : inhibe le transfert des mélanosomes vers les kératinocytes (mécanisme différent et complémentaire).
  - **Vitamine C** : antioxydant + inhibiteur de tyrosinase, compatible matin.
  - **Acide tranexamique** : très étudié seul contre mélasma, synergie probable sur voies complémentaires.
  - **Hydroquinone** : compatible, combo possible pour cas résistants (résultats visibles seulement après 8–16 semaines même avec 5 % HQ + 20 % azélaïque). Azélaïque excellent en maintenance après cure d'hydroquinone.

  ## Sécurité et tolérance

  **Catégorie B (FDA)** — considéré sûr pendant la grossesse et l'allaitement. Absorption systémique faible (~3–8 %). Meilleur profil que la plupart des actifs anti-acné (rétinoïdes, peroxyde de benzoyle, antibiotiques topiques). Option de premier choix pour acné ou mélasma gestationnel (quand on arrête spironolactone, contraceptifs oraux, rétinoïdes) — toujours valider avec un médecin au 1er trimestre.

  **Pas d'effets adverses à long terme** : pas d'atrophie cutanée, pas de rebond hyperpigmentation, pas de blanchiment des zones saines, pas de résistance bactérienne.

  **Contre-indication** : allergie au **propylène glycol** (présent dans toutes les formes prescription).

  ### Gestion de l'irritation initiale
  Sécheresse, picotements, brûlures, démangeaisons sont fréquents les premières semaines — souvent transitoires (2–4 semaines). Plus fréquents sur peaux sensibles, peaux matures (moins de lipides/céramides), ou en association avec d'autres irritants.

  - Choisir le **véhicule adapté** : mousse (Finacea) mieux tolérée pour rosacée ; gel plus sec ; crème plus lente mais hydratante.
  - Appliquer sur **peau sèche**, moisturizer après.
  - Si pilling avec trétinoïne gel : attendre 20–30 min entre les deux, ou alterner les soirs.
  - Si irritation persistante : changer de véhicule ou ajuster avec un dermatologue.

  ## Intégration routine
  **2×/jour** (matin + soir) une fois toléré. Quantité : **taille d'un petit pois** pour tout le visage — épargner le contour des yeux. Laver les mains après (éviter yeux/bouche).

  - Introduire **lentement** : 1×/jour les 1–2 premières semaines, puis 2×/jour si toléré.
  - **SPF obligatoire** tous les jours — indispensable, sans quoi les résultats sur l'hyperpigmentation sont compromis.
  - **Patience** : acné 4–12 semaines, rosacée 12+ semaines, mélasma/PIH 8–16 semaines minimum, optimum à 6 mois.
  - Photos avant/après recommandées — les changements sont graduels et difficiles à percevoir au quotidien.
  - Compatible avec superposition : crème solaire, maquillage, rétinoïdes, BPO, AHA/BHA — pas d'inactivation.

  ## Efficacité selon les préoccupations
  | Problème | Niveau |
  |---|---|
  | Acné | Très bon |
  | Rosacée | Excellent |
  | Hyperpigmentation / PIH | Excellent |
  | Mélasma | Très bon (avec patience) |
  | Érythème post-inflammatoire | Excellent |
  | Dermatite séborrhéique | Bon |
  | Dermatite périorale | Bon |
  | Exfoliation | Modéré |
  | Anti-âge | Faible |`,
    category: 'actif',
  },
  {
    name: 'Acide hypochloreux',
    slug: INGREDIENT_SLUGS.HYPOCHLOROUS_ACID,
    description:
      'Composé naturellement produit par les globules blancs via la myéloperoxydase. Antimicrobien puissant à large spectre et anti-inflammatoire, mais extrêmement doux. Idéal pour peaux réactives, acnéiques, rosacée, eczéma et post-procédures.',
    content: `## Qu'est-ce que c'est ?
  Substance naturellement produite par les neutrophiles (globules blancs) pour combattre infections et inflammation. Formulé en skincare par électrolyse d'une solution saline, c'est un acide faible (pH ~3–6) appliqué en spray ou toner. Ce pH bas est ce qui le distingue de l'eau de Javel classique : à ce pH, on obtient du HOCl pur, beaucoup plus doux et contrôlé. Il agit en détruisant l'intégrité des membranes microbiennes — y compris les **biofilms** bactériens résistants — sans irriter ni laisser de résidus toxiques.

  Utilisé depuis la Première Guerre mondiale pour nettoyer les plaies, il est reconnu comme **dispositif médical** depuis ~2016 et couramment utilisé en dermatologie avant les procédures (Botox, fillers, laser, microneedling) pour réduire le risque infectieux.

  ## Bénéfices

  **Antimicrobien à large spectre**
  Tue bactéries (*C. acnes*, *S. aureus*, *P. aeruginosa*), virus (dont COVID) et champignons (*Candida albicans*). Pénètre les biofilms bactériens qui ralentissent la cicatrisation. Particulièrement utile pour les peaux eczémateuses (surcolonisation à *S. aureus*) et acnéiques. Pas de résistance microbienne connue, contrairement aux antibiotiques.

  **Anti-inflammatoire**
  Inhibe histamine, leucotriènes et IL-2 → réduit rougeurs, irritations et démangeaisons. Utile pour rosacée, dermatite séborrhéique, eczéma, psoriasis.

  **Cicatrisation**
  Favorise la réépithélialisation et le dépôt de collagène. Supérieur au peroxyde d'hydrogène et à l'alcool (qui endommagent les cellules saines). Non allergisant (contrairement à néomycine/bacitracine). Sûr autour des yeux et oreilles (contrairement à la chlorhexidine). Indiqué post-laser, microneedling, Botox/fillers, piercings, tatouages, plaies mineures, coupures, éraflures, brûlures légères.

  **Barrière cutanée & microbiome**
  Régule le microbiome cutané et contribue à restaurer/maintenir la barrière.

  ## Preuves cliniques
  - **Acné inflammatoire** : comparable au peroxyde de benzoyle dans une étude comparative (BPO agit peut-être plus vite). Logique via double action antimicrobienne + anti-inflammatoire.
  - **Eczéma / prurit** : amélioration rapide des démangeaisons en 3–14 jours dans plusieurs études (attention : certaines sans placebo, effet hydratation/occlusion possible).
  - **Cicatrisation / plaies** : preuves les plus solides, y compris ulcères diabétiques.
  - **Cicatrices hypertrophiques** : meilleur que silicone dans certaines études (2025).
  - **Blépharite / orgelet** : efficace et sûr autour des paupières, utilisé en ophtalmologie.
  - **Anti-âge** : données très faibles, souvent anecdotiques ou issues de posters d'entreprises. Risque pro-oxydant théorique probablement minime aux concentrations skincare.

  ## Mode d'utilisation
  1. Nettoyer la peau
  2. Vaporiser directement (peau sèche de préférence pour efficacité optimale)
  3. Laisser sécher **complètement** (30 s–2 min) avant la suite de la routine
  4. Pas de rinçage
  5. Appliquer crème/sérum/SPF par-dessus normalement

  **Usages pratiques :**
  - **Acné mécanique / maskné** : vaporiser *avant* de mettre masque, casque, filet à cheveux → réduit la charge bactérienne en amont
  - **Post-entraînement** : corps, aisselles (odeurs liées aux bactéries qui décomposent la sueur), zones sujettes à l'eczéma (la sueur déclenche itch/inflammation)
  - **Sanitizer mains** : non desséchant, ne pique pas sur les coupures, pas de rinçage nécessaire
  - **Barbe** : réduit la transmission bactérienne (ex. impétigo)
  - **On-the-go** : post-maquillage en début de soirée, réapplication en journée sans décaper la peau

  ## Fréquence
  1–2×/jour ou plus selon les besoins — la réapplication fréquente est bien tolérée, sans effet strippant. Mieux comme produit **au besoin** que comme permanent si pas de problème microbien/inflammatoire actif.

  ## Incompatibilités & précautions

  **Interactions à connaître**
  Oxydant → peut inactiver vitamine C, rétinol et autres antioxydants (la vitamine C est détruite en ~10 min au contact direct). Laisser sécher **complètement** avant application des autres actifs, ou espacer dans la routine (ex. HOCl le matin, vitamine C/rétinol le soir).

  **Stabilité fragile — point critique**
  Le HOCl se dégrade rapidement avec :
  - La lumière (UV → destruction en quelques heures)
  - L'air/oxygène (ouvrir le flacon = perte rapide)
  - La chaleur (éviter voiture chaude, congélation)
  - Un pH inadapté
  - Les métaux et certaines molécules
  - L'eau du robinet (préférer eau pure)

  Même les produits du commerce peuvent perdre leur efficacité assez rapidement après ouverture. Conserver au frigo, à l'abri de la lumière, dans un flacon hermétique opaque. Ne pas stocker en gros ni transvaser. Privilégier des lots récents.

  ## Pour qui ?
  ✅ Peaux acnéiques, réactives, sensibles, rosacée, eczéma, dermatite atopique
  ✅ Post-procédures (laser, microneedling, injections)
  ✅ Sportifs (sueur → inflammation/odeurs/itch)
  ✅ Peaux irritées par lavages fréquents ou sanitizers
  ✅ Blépharite, orgelet
  ⛔ Peau saine sans problème particulier → pas de bénéfice prouvé en préventif long terme

  ## Produits recommandés
  Privilégier des formules **ultra-simples** (< 5 ingrédients, sans parfum ni additifs), dans des flacons opaques hermétiques.

  - **Briotech** : grand flacon abordable (<15€), formule minimaliste
  - **Tower 28 SOS Spray** : a popularisé l'ingrédient en skincare grand public, certifié National Eczema Association
  - **Prequel Universal Skin Solution** : transparent (pH et % HOCl indiqués sur l'emballage), <15€
  - **SkinSmart Antimicrobial** : abordable, utilisé en cabinet dermatologique
  - **Active Skin Repair** : multi-usage (visage, corps, post-coupure, animaux)`,
    category: 'actif',
  },

  {
    name: 'Alpha-arbutine',
    slug: INGREDIENT_SLUGS.ALPHA_ARBUTIN,
    description:
      "Dérivé glycosylé de l'hydroquinone, inhibiteur de la tyrosinase. Anti-taches et éclaircissant progressif, plus doux que l'hydroquinone. Préférer l'alpha sur la bêta, max 2 %.",
    content: `## Mécanisme d'action
  Dérivé glycosylé de l'hydroquinone (β-D-glucopyranoside de l'hydroquinone). Inhibiteur **compétitif de la tyrosinase** (enzyme limitante de la mélanogenèse), ce qui réduit la production de mélanine sans altérer significativement la viabilité ou la différenciation des mélanocytes — contrairement à l'hydroquinone qui interfère plus fortement avec la maturation des mélanocytes et leurs prolongements.

  Une conversion en hydroquinone libre est possible via le microbiome cutané (S. epidermidis, S. aureus hydrolysent l'arbutine → hydroquinone), mais reste très faible en conditions réelles (< 0,12 % détecté dans les formules stables). Conversion par UV : minime, non significative. L'effet éclaircissant est donc principalement **indépendant de cette conversion**. À noter : l'arbutine nécessite souvent des concentrations plus élevées que l'hydroquinone pour un effet comparable in vitro.

  ## Alpha-arbutine vs bêta-arbutine
  L'**alpha-arbutine** est plus efficace : meilleure affinité pour la tyrosinase humaine, IC50 plus bas que la bêta. La bêta est la forme naturelle (plantes), active mais moins puissante sur la tyrosinase humaine. Attention : les tests de tyrosinase sont souvent réalisés sur champignon (mushroom tyrosinase) → résultats variables vs humain (à prendre comme un "sniff test" initial plutôt que comme preuve définitive).

  Limites cosmétiques réglementaires : **max 2 % alpha**, **7 % bêta** (EU/cosmétiques). Exemples : The Ordinary = 2 % alpha ; To WooM = 7 % bêta.

  ## Efficacité clinique
  Données cliniques limitées mais positives — surtout en combinaison, rarement seule. Résultats lents (3–6 mois minimum), inférieurs à l'hydroquinone ou aux traitements prescription pour les cas sévères.

  **Études notables :**
  - **RCT double-aveugle placebo-contrôlée** (102 femmes, mélasma + lentigos solaires) : 2,51 % arbutine (extrait plante) 2×/jour pendant 8 semaines → amélioration clinique chez ~76 % mélasma et ~56 % lentigos solaires, réduction mélanine significative vs placebo (p < 0,000001).
  - **5 % alpha-arbutine + 2 % acide kojique** vs Triluma (4 % HQ + trétinoïne + corticoïde) sur mélasma bilatéral symétrique : amélioration significative du mMASI après 16 semaines, mais plus lente et moins marquée que Triluma. Moins irritante.
  - **2 % alpha-arbutine seule** vs 4 % extrait de radis blanc : réduction du melanin index ~10–15 % après 12 semaines (mesures instrumentales). Effet modeste.
  - **4 % niacinamide + 3 % arbutine + 1 % bisabolol + 0,05 % rétinaldéhyde** : réduction significative MASI/surface mélasma (étude ouverte, 60 jours).
  - **4 % arbutine + 3 % bisabolol + 1 % rétinaldéhyde** : efficace sur mélasma épidermique.
  - Combinaisons multi-actifs (tranexamique, kojique, peptides…) peuvent dépasser l'hydroquinone seule dans certaines formulations.

  Globalement : plus efficace en cocktail qu'en solo. Pour hyperpigmentation légère à modérée (taches solaires, mélasma épidermique, marques post-acné). Insuffisant seul pour mélasma sévère/stubborn.

  ## Bénéfices
  - Améliore l'uniformité du teint progressivement
  - Traite hyperpigmentation, taches solaires, marques post-acné, mélasma léger à modéré
  - Excellente tolérance (peaux sensibles, peaux de couleur)
  - Utilisable long terme (moins de risques que l'hydroquinone)
  - Bonne alternative douce pour maintenance après traitement plus agressif

  ## Risques
  - Allergie / irritation : risque très faible (moins irritant que HQ, kojique ou acide glycolique)
  - Hyperpigmentation paradoxale (rare, concentrations élevées)
  - Ochronose exogène (très rare, usage excessif sur très long terme à fortes concentrations)
  - Libère une faible quantité d'HQ → éviter cumul avec d'autres sources d'HQ

  ## Concentration recommandée
  **1–2 % alpha-arbutine** pour le visage. Au-delà, bénéfice marginal et risques accrus. La limite cosmétique EU de 2 % alpha est aussi la concentration optimale pratique.

  ## Précautions
  - Éviter juste après un traitement à l'hydroquinone (libère quand même une faible quantité d'HQ → risque de cumul)
  - Prudence sur usage très prolongé à fortes concentrations
  - Toujours coupler avec un **SPF strict** (sans protection solaire, les actifs éclaircissants perdent l'essentiel de leur efficacité)

  ## Cocktails efficaces
  L'arbutine est un **ingrédient secondaire** : les meilleurs résultats s'obtiennent en association avec d'autres actifs ciblant différentes voies de la mélanogenèse :

  - **Acide tranexamique** + **acide azélaïque** (combo très courant et synergique)
  - **Niacinamide** (transfert mélanine → kératinocytes), **acide kojique** (chélation cuivre/tyrosinase)
  - **Bisabolol**, extraits de réglisse, mûrier, bearberry/Uva ursi (actifs secondaires, concentration active souvent inconnue/faible dans les extraits bruts → ne pas compter dessus seuls)
  - **AHA** (exfoliation, renouvellement cellulaire)
  - **Rétinoïdes** (trétinoïne, rétinaldéhyde) en complément de routine soir
  - **SPF strict indispensable** en journée

  ## Produits de référence

  ### Alpha-arbutine 2 % (testés)
  - **Cosrx The Alpha Arbutin 2 Discoloration Care** (~25 $ / 50 ml) — meilleur choix global. Formule cocktail solide : 2 % alpha-arbutine + 3 % acide tranexamique + 5 % niacinamide + 2 % NAG. Données : étude perception consommateur (20 personnes, 4 semaines) + mesures instrumentales → réduction ~20–22 % mélanine/spots sombres/marques acné. Photos avant/après sur peaux foncées. Texture sérum aqueux fin, légèrement collant (moins marqué sur peau sèche). Légèrement trouble/turbide. Surveiller cumul niacinamide si routine déjà chargée.
  - **The Ordinary Alpha Arbutin 2% + HA** (~11,50 $ / 30 ml) — formule minimaliste : 2 % alpha-arbutine + acide hyaluronique haut poids moléculaire. Texture fine, layerable facilement (même avec azélaïque). Idéal pour tester l'arbutine pure sans surcharge. Pas de données cliniques détaillées publiées.
  - **Naturium Alpha Arbutin Serum** (~20 $ / 30 ml) — proche de The Ordinary + niacinamide + sodium hyaluronate. Texture légèrement plus lourde mais comparable. Sans données additionnelles.
  - **Beauty of Joseon Glow Serum** (~17 $ / 30 ml) — texture gel-crème blanc, presque siliconée. Alpha-arbutine + niacinamide (~2 % max) + humectants (glycérine, butylène glycol, panthénol). Positionnée comme moisturizer mais insuffisamment hydratante seule. La plus collante et persistante du test → layering et makeup difficiles. Étude : hydratation + éclat (20 personnes, 4 semaines), pas de mesures pigmentation. Moins recommandée pour la pigmentation.
  - **To WooM 7% Arbutin + 4% Tranexamic Acid Cream** (~25 $ / 50 ml) — **bêta-arbutine** à 7 % (forme moins efficace que l'alpha) + 4 % acide tranexamique + niacinamide + extraits + huiles légères. Texture crème émulsion collante, peu layerable. Communication marketing floue/misleading (positionnement "K-beauty clinique" douteux sur Amazon), pas de données cliniques transparentes. Moins recommandé.

  ### Options premium (cocktails plus complets)
  - **Dr. Idriss** (~68 $ / 30 ml) : alpha-arbutine + acide kojique + extraits racine réglisse + niacinamide
  - **Allies of Skin Tranexamic & Arbutin Advanced Brightening Serum** (~101 $ / 30 ml) : 2 % alpha-arbutine + 3 % tranexamique + peptides
  - **Eadem Dark Spot Serum** (~38–68 $ selon variante) : 1 % alpha-arbutine + 5 % tranexamique + peptides + autres

  Ces options apportent un meilleur cocktail multi-voies pour hyperpigmentation tenace, au prix d'un budget plus élevé.

  ### Note sur les extraits (bearberry, réglisse, mûrier…)
  Ces extraits contiennent de l'arbutine ou des inhibiteurs de tyrosinase naturels. Utiles comme actifs secondaires, mais la concentration d'actif réel est souvent inconnue/faible dans les formules → ne pas en attendre les mêmes résultats qu'une alpha-arbutine dosée.

  ## Intégration routine
  **Matin :** nettoyant → alpha-arbutine → hydratant → SPF 30+
  **Soir :** nettoyant → alpha-arbutine → hydratant (± rétinoïde en alternance)

  ## Verdict
  Actif **sûr, doux et utile en cocktail** pour hyperpigmentation modérée (mélasma épidermique, taches solaires, marques post-acné). Pas un gold standard — l'hydroquinone reste plus puissante et rapide — mais excellente alternative long terme, particulièrement adaptée aux peaux sensibles et aux peaux de couleur. Patience requise : progrès sur plusieurs mois.

  Pour les cas sévères ou le mélasma résistant, l'arbutine seule ne suffit pas → consulter un dermatologue (hydroquinone prescription, trétinoïne, lasers, peelings).`,
    category: 'actif',
  },
  {
    name: 'Acide kojique',
    slug: INGREDIENT_SLUGS.KOJIC_ACID,
    description:
      "Produit par fermentation fongique (Aspergillus). Inhibe la tyrosinase pour réduire l'hyperpigmentation. Alternative plus douce à l'hydroquinone, mais instable et photosensibilisant. Max 1 % en UE (2024).",
    content: `## Origine
  Produit naturellement par certains champignons (Aspergillus). Également sous-produit de la fermentation d'aliments asiatiques : pâte de soja, sauce soja, saké, miso.

  ## Mécanisme d'action
  Puissant **inhibiteur de tyrosinase** : bloque l'enzyme clé de la production de mélanine. Possède également des propriétés antioxydantes (neutralise les radicaux libres UV/pollution), antibactériennes (y compris bactéries de l'acné), antifongiques et anti-inflammatoires (rougeurs, démangeaisons).

  ## Bénéfices
  - Estompe taches solaires, marques post-acné, melasma, masque de grossesse, taches de vieillesse
  - Apporte de l'éclat et uniformise le teint
  - Alternative plus douce à l'hydroquinone (agent de blanchiment interdit dans plusieurs pays)
  - L'activité antioxydante renforce l'effet dépigmentant

  ## Efficacité clinique (études humaines)
  - **Vs Hydroquinone :** Acide kojique (2 %) + acide glycolique ≈ efficacité comparable à l'hydroquinone sur le melasma.
  - **Vs Laser Pico :** Sur 20 semaines, amélioration de 42 % des taches (vs 62 % pour le laser). Score solide pour un topique.
  - **Délai de résultats :** 3 à 6 mois d'utilisation constante pour des résultats visibles.

  ## Réglementation UE (Règlement UE 2024/996)
  - **Limite actuelle :** max **1 %** dans les produits visage et mains.
  - **Avis CSSC :** recommande une réduction à **0,7 %** (considéré "non sûr" en l'état à 1 %).
  - **Raison :** inquiétudes sur un potentiel effet perturbateur endocrinien à haute dose + toxicité montrée dans des études animales à forte concentration.
  - Les sérums à 2 % (anciennes études cliniques) ne sont plus autorisés à la vente en UE.

  ## Effets secondaires & risques
  - **Dermatite de contact** (surtout peaux sensibles, > 1 %) : rougeurs, démangeaisons, éruptions, voire douleurs et cloques
  - **Photosensibilité accrue** (inhibe la mélanine = protection naturelle réduite) → SPF 50 obligatoire
  - **Blanchiment de la peau** possible sur phototypes 4, 5 et 6 si mal utilisé
  - Déconseillé aux personnes souffrant d'affections cutanées ou d'allergies
  - Recherches non concluantes sur les effets à long terme

  ## Stabilité
  L'acide kojique est **très instable** et s'oxyde facilement. Si le produit devient brun foncé ou noir → le jeter immédiatement (plus efficace + potentiellement irritant). Conserver au frais et à l'abri de la lumière.

  ## Combinaisons efficaces
  - **Acide tranexamique** : agit sur une étape différente de la formation des taches
  - **Niacinamide** : complémentaire, bien toléré
  - **Vitamine C** / **Vitamine E** : renforce l'éclat global
  - **Acide glycolique** : exfoliation + action anti-taches (combo puissant le soir)
  - Éviter de cumuler avec AHA/BHA forts ou rétinol élevé en début d'utilisation

  ## Intégration routine
  - **Forme :** Privilégier les produits finis (sérums, crèmes, lotions) — ne pas utiliser la poudre brute
  - **Début :** 1–2×/semaine, observer la tolérance
  - **Si bonne tolérance :** augmenter progressivement jusqu'à usage quotidien
  - **SPF 50** chaque matin, sans exception
  - Ne pas appliquer avant une exposition solaire. Porter un couvre-chef.
  - Consulter un dermatologue avant de commencer, surtout pour le melasma

  ## Produits de référence (≤ 1 %, dispo UE 2025-2026)
  | Produit | Actifs complémentaires | Points forts |
  |---|---|---|
  | **SkinCeuticals Discoloration Defense** | 1 % Kojique, 3 % Tranexamique, 5 % Niacinamide | Référence clinique melasma/post-acné |
  | **La Roche-Posay Glycolic B5** | Kojique, 10 % Glycolique, Vit B5 | Exfoliation + anti-taches (soir) |
  | **Nineless B-Boost (K-Beauty)** | 1 % Kojique, 10 % Niacinamide, 2 % Tranexamique | Bon rapport qualité-prix, formule complète |
  | **Hyper Skin Brightening Dark Spot** | Kojique, 15 % Vit C, Vit E | Éclat global (dispo via Revolve/Ubuy) |`,
    category: 'actif',
  },
  {
    name: 'Suif de bœuf (Beef Tallow)',
    slug: INGREDIENT_SLUGS.BEEF_TALLOW,
    description:
      'Graisse animale rendue, émollient et occlusif efficace pour les peaux très sèches. Comparable au karité en comportement. Les allégations marketing (similitude au sébum, richesse vitaminique) sont largement exagérées et peu étayées scientifiquement.',
    content: `## Origine
  Graisse animale issue des déchets de l'industrie de la viande bovine, obtenue par la fonte de tissus adipeux (principalement autour des reins pour le **suet**, la qualité la plus fine). Peut aussi provenir de mouton ou d'autres espèces. Fondue et raffinée avant usage cosmétique.

  ## Propriétés physico-chimiques
  - **Point de fusion** : ~35–50 °C (large fourchette selon les lots et le raffinage) → proche du sébum humain (début ~33 °C, pic ~42 °C) et de beurres végétaux comme le karité (~32–38 °C), le cacao ou le mangue.
  - **Indice de saponification** : ~190 mg KOH/g → très proche du karité (170–190).
  - **Indice d'iode** (degré d'insaturation) : 40–50 → similaire au karité (50–70), beaucoup plus saturé que la plupart des huiles liquides.

  Comportement global **très proche du karité** : beurre fondant, émollient, assez occlusif.

  ## Composition lipidique
  Principalement triglycérides **saturés et mono-insaturés** :
  - Acide palmitique, acide stéarique (saturés)
  - Acide oléique (mono-insaturé)
  - Petite part d'acide linoléique

  Ces acides gras partagent certaines similarités avec le sébum humain (notamment palmitique et oléique), ce qui lui confère une certaine biocompatibilité. Cependant, il **n'est pas chimiquement identique au sébum** : pas de céramides, pas de squalène, pas de cholestérol en proportions similaires → la similitude chimique profonde avec le sébum humain est un argument marketing non étayé.

  ## Teneur en vitamines liposolubles
  Malgré les affirmations courantes, le suif n'est **pas une source significative** de vitamines A, D, E ou K :
  - Vitamine E : ~0,03 mg/g (3 mg/100 g) — très faible comparé à :
    - Huile de rose musquée : ~0,1 mg/g
    - Huile d'argan : ~1 mg/g
    - Tocophérol ajouté en cosmétique : ~1 mg/g (0,1 %)

  ## Efficacité clinique
  Données scientifiques limitées, popularité très largement supérieure aux preuves disponibles :

  - **Hydratation / effet émollient-occlusif** → oui, prouvé, comparable à d'autres beurres (karité, cacao). Efficace pour les peaux très sèches.
  - **Dermatite atopique, psoriasis** → bénéfices modestes dans quelques études, souvent sur des mélanges modifiés (ex. suif de mouton inter-estérifié) ou sur animaux. Pas de preuves longitudinales robustes chez l'humain. Résultats parfois inférieurs à d'autres lipides (ex. huile de graines de courge).
  - **Acné, cicatrisation, anti-âge, anti-inflammatoire** → revendications anecdotiques, aucune étude clinique solide.
  - Manque criant d'études cliniques de haute qualité (revues 2024–2025 confirment ce constat).

  ## Allégations marketing vs réalité
  | Allégation | Réalité |
  |---|---|
  | « Similaire au sébum humain » | Non étayé chimiquement (pas de céramides, squalène, proportions différentes) |
  | « Riche en vitamines » | Teneurs très faibles, bien inférieures aux huiles végétales |
  | « Remède contre eczéma/psoriasis/acné » | Données très limitées, résultats modestes |
  | Hydratation / occlusion | ✓ Réel, comparable au karité |

  ## Comédogénicité et tolérance
  - Indice comédogène généralement coté **0–2/5** selon les sources (similaire à l'huile de jojoba ou d'olive).
  - Malgré ce score, nature très occlusive → **risque élevé pour peaux grasses ou acnéiques** (comédons, aggravation d'inflammations).
  - Données contradictoires sur l'irritation ; manque de tests de sécurité à long terme, surtout pour les produits DIY ou non raffinés.

  ## Bénéfices
  - Émollient et occlusif efficace pour **peaux très sèches ou abîmées**
  - Texture fondante agréable (comportement proche du karité)
  - Affinité raisonnable avec la barrière cutanée grâce à ses acides gras
  - Bon marché

  ## Risques
  - Déconseillé pour peaux **grasses, acnéiques ou mixtes**
  - Irritation possible (données contradictoires, manque de régulation stricte)
  - Produits non raffinés ou DIY : qualité et sécurité variables
  - Origine animale (considérations éthiques)

  ## Comparaison avec le karité
  Sur le plan sensoriel et occlusif, le suif se rapproche fortement du **karité** (texture, tenue, hydratation immédiate, indices physico-chimiques similaires). Le karité est cependant beaucoup mieux caractérisé scientifiquement, plus stable, mieux toléré et disponible en versions raffinées de qualité constante. Pour la majorité des usages, le karité ou ses dérivés restent préférables.

  ## Intégration routine
  Réservé aux **peaux très sèches, déshydratées ou abîmées** uniquement :

  **Soir :** nettoyant → actifs sérums → suif (en occlusif final, en petite quantité)

  À éviter en couche épaisse ou sous maquillage. Ne pas utiliser sur peaux grasses/acnéiques.

  ## Verdict
  Émollient et occlusif **efficace et naturel pour les peaux très sèches**, comparable au karité en comportement. Les allégations miraculeuses — similitude parfaite avec le sébum, richesse vitaminique exceptionnelle, remède universel contre l'acné ou l'eczéma — sont largement exagérées et peu étayées. Pour la grande majorité des usages cosmétiques, des alternatives végétales mieux documentées (karité raffiné, huiles riches en acides gras similaires) restent préférables.`,
    category: 'émollient',
  },
  {
    name: 'Niacinamide',
    slug: INGREDIENT_SLUGS.NIACINAMIDE,
    description:
      "Dérivé amide de la vitamine B3 (nicotinamide). Ingrédient hydrosoluble, ultra-stable, \"jack-of-all-trades\" avec des centaines d'études. Agit sur la barrière cutanée, l'hyperpigmentation, les rougeurs, le sébum, les pores et les rides. Excellent support qui rend les autres actifs plus performants et tolérables. Sur la liste des médicaments essentiels de l'OMS.",
    content: `## Nature et origine
  Forme amide de l'acide nicotinique (niacine), découverte entre 1935 et 1937. Hydrosoluble, stable, naturellement présente dans l'organisme et l'alimentation (viande, poisson, légumineuses, noix, champignons, levure, lait, légumes verts, café). Précurseur de **NAD+/NADH** et **NADPH** → rôle central dans le métabolisme cellulaire, la réparation ADN et la production d'ATP.

  Le corps peut aussi synthétiser du NAD+ à partir du tryptophane (acide aminé) et de la niacine, sans ingestion directe de niacinamide (voie de sauvetage vs voie de novo).

  À ne pas confondre avec la **niacine** (acide nicotinique) qui provoque un flush (rougeur/chaleur) et agit sur le cholestérol — la niacinamide n'a aucun de ces effets.

  ## Mécanismes d'action
  - **Barrière cutanée** : augmente la synthèse in vivo de céramides, acides gras et cholestérol (ratio idéal ~50/25/15 % dans la couche cornée) → réduit la TEWL (perte d'eau transépidermique)
  - **Hyperpigmentation** : inhibe le transfert des mélanosomes des mélanocytes vers les kératinocytes (voie différente des inhibiteurs classiques de tyrosinase comme la vitamine C)
  - **Anti-inflammatoire** : inhibe NF-κB, PARP-1 et production de monoxyde d'azote (NO). Empêche l'activation du toll-like receptor 2 par C. acnes → down-régulation de l'interleukine-8 pro-inflammatoire
  - **Sébum** : diminue la sécrétion des sébocytes → régulation production d'huile
  - **Antioxydant** : régénère NADPH → neutralise radicaux libres (UV, pollution)
  - **Anti-glycation** : réduit le jaunissement cutané (rigidité collagène/élastine)
  - **Immunité cutanée** : augmente production de kératine → couche cornée plus intacte
  - **Inhibition PARP-1** : enzymes impliquées dans la réparation des cassures ADN induites par radiation/chimiothérapie → rôle potentiel en photoprotection et chimioprévention

  ## Bénéfices prouvés cliniquement (études randomisées, double-aveugle)
  - Renforce la barrière cutanée (hydratation +35 %, TEWL −24 % à 2 %)
  - Réduit la production de sébum (−20 à 40 %) et l'apparence des pores
  - Atténue l'hyperpigmentation / PIH / melasma (−35 à 68 % transfert mélanosomes)
  - Diminue les rougeurs et l'inflammation (acné, rosacée, érythème post-UV)
  - Améliore ridules (−18 à 23 %) et élasticité (+16 %)
  - Unifie le teint, réduit le jaunissement cutané
  - Anti-acné inflammatoire comparable à clindamycine topique 2 % (études à 4 %)

  ## Bénéfices systémiques (voie orale)
  - **Chimioprévention cutanée** : 500–1000 mg/jour oral réduit le risque de cancers cutanés non-mélanome et kératoses actiniques chez les personnes à haut risque
  - **Santé oculaire** : résultats prometteurs pour ralentir la perte de vision liée au glaucome (protection des cellules ganglionnaires rétiniennes — recherche en cours, pas encore approuvé)
  - **Psoriasis** : données préliminaires suggérant un bénéfice potentiel
  - **Dermatite atopique / pemphigoïde bulleuse** : preuves préliminaires
  - **Modulateur GABAA** : allostérique positif (pourrait contribuer à l'effet calmant/anxiolytique rapporté)

  ## Concentration recommandée (topique)
  - **2 %** : excellent pour barrière, hydratation, sébum modéré, peaux sensibles/irritées
  - **4–5 %** : le **sweet spot** le plus documenté — résultats solides sur tous les bénéfices ci-dessus
  - **10 %** : populaire (The Ordinary), toléré par certains mais **aucune étude ne montre un avantage clair vs 5 %**
  - **Au-delà de 10 %** : marketing pur, pas de dose-réponse linéaire prouvée, risque d'irritation ×3

  **Formule > concentration** : un 5 % bien formulé (pH 5–7, texture pénétrante, adjuvants comme zinc/panthénol) bat un 15 % mal fichu.

  ## Mode d'utilisation
  Appliquer sur tout le visage, **leave-on** (rinse-off = effet limité). Assez doux pour **2×/jour**.

  **Layering** (fin → épais, aqueux → occlusif) :
  1. Nettoyant doux
  2. Toner (optionnel)
  3. Sérum niacinamide ← placement typique
  4. Crème / moisturizer
  5. SPF (matin)

  **Fréquence** : quotidienne AM + PM. Commencer 3–4×/semaine si peau réactive, puis augmenter.
  **Patience** : résultats visibles 4–8 semaines, optimaux 3–6 mois. Constance > concentration haute.

  ## Compatibilités et associations
  - **Rétinol / rétinoïdes** → excellent ensemble (niacinamide calme l'irritation du rétinol et renforce la barrière)
  - **Vitamine C** → pas d'incompatibilité chimique prouvée (mythe ancien démenti). Souvent vit C d'abord, puis niacinamide
  - **Acides (AHA/BHA)** → réduit souvent l'irritation. Peut alterner ou superposer
  - **Acide azélaïque** → synergie puissante (anti-rougeurs + anti-inflammatoire + PIH)
  - **Hyaluronique / peptides / céramides** → complémentarité parfaite pour hydratation
  - **Bakuchiol** → synergie sans risque

  ## Meilleurs pairings selon objectif
  | Objectif | Combo recommandé |
  |---|---|
  | **Taches / hyperpigmentation / PIH** | Niacinamide + rétinoïde + inhibiteur tyrosinase (vit C, azélaïque, kojique, tranexamique, arbutine) + SPF teinté |
  | **Contrôle sébum / pores** | Niacinamide + acide salicylique (BHA) |
  | **Acné / imperfections** | Niacinamide + rétinoïde (adapalène) ou acide azélaïque |
  | **Barrière / hydratation / sécheresse** | Niacinamide + céramides + hyaluronique |
  | **Rougeurs / rosacée** | Niacinamide + acide azélaïque |
  | **Anti-âge global** | Niacinamide + vitamine C (matin) + rétinol (soir) + SPF |
  | **Grossesse** | Niacinamide + acide azélaïque (combo sûr et puissant) |

  ## Précautions
  - **Cumul à surveiller** : nettoyant + sérum + crème + SPF tous avec niacinamide → total peut dépasser 15–20 % → irritation paradoxale (rougeurs, sécheresse, picotements, boutons). Vérifier les listes INCI
  - **Irritation possible** : rare mais existe (surtout hautes doses, barrière déjà faible, routine surchargée). Si rougeurs/picotements/boutons → baisser % ou fréquence. **Pas de "purge" avec la niacinamide**
  - **Éviter les poudres pures** à mélanger soi-même : risque de surdosage, inutile
  - Irritation plus fréquente dans les **nettoyants** (rinse-off)
  - **Interactions médicamenteuses potentielles** : inhibiteur CYP2D6 et CYP3A4 (à considérer en cas de traitements oraux métabolisés par ces voies)

  ## Sécurité
  - Effets secondaires minimaux jusqu'à 5–10 % topique (pas irritant, pas sensibilisant, pas photosensibilisant)
  - **Safe pendant grossesse et allaitement**
  - Tous types de peau : grasse, sèche, mixte, sensible, jeune, mature, claire, foncée
  - Toxicité hépatique aiguë documentée uniquement au-delà de **3 g/jour oral** (adultes)
  - Pas de contre-indication majeure connue

  ## Qui en a vraiment besoin ?
  - **Dès 35–40 ans** : très intéressant → boost céramides + soutien anti-âge (chute naturelle des céramides avec l'âge)
  - **Peaux grasses/acnéiques** : complément utile (sébum ↓ + anti-inflammatoire), mais pas miracle seul
  - **Peaux sensibles / rosacée** : introduire tôt → renforce tolérance pour les actifs suivants
  - **Hyperpigmentation** : aide en prévention/combo, pas suffisant seul pour taches tenaces
  - **Haut risque cancer cutané** : 500–1000 mg/jour oral réduit les récurrences (sous avis médical)
  - **Jeunes avec bonne routine** : facultatif, pas indispensable

  ## Niacine vs niacinamide (rappel)
  | | Niacine (acide nicotinique) | Niacinamide (nicotinamide) |
  |---|---|---|
  | Flush | Oui (intense, dès 30–50 mg) | Non |
  | Cholestérol / lipides | Réduit LDL/TG, augmente HDL | Aucun effet |
  | Usage skincare topique | Impraticable (flush) | Star en cosmétique |
  | Hépatotoxicité | Risque à hautes doses (>500–2000 mg/j, surtout sustained-release) | Très sûr (toxicité >3 g/j) |
  | Indication principale | Dyslipidémie, stéatose hépatique | Peau, anti-inflammatoire, anxiété |

  ## Comparaison vitamine C vs niacinamide
  | | Vitamine C (L-ascorbique) | Niacinamide |
  |---|---|---|
  | Collagène | Co-facteur direct (effet puissant) | Boost via NAD (effet modéré) |
  | Pigmentation | Inhibe tyrosinase (rapide, puissant) | Inhibe transfert mélanosomes (progressif, meilleur pour PIH) |
  | Photoprotection | Anti-radicaux libres directs | Réparation ADN post-UV + chimioprévention orale |
  | Acné / rosacée | Aide indirecte | Avantage net (sébum, anti-C. acnes via TLR2, anti-inflammatoire) |
  | Barrière | Peut augmenter TEWL (formules acides) | Renforce (céramides, hydratation) |
  | Stabilité | Instable, sensible oxydation/lumière/pH | Ultra-stable, facile à formuler |
  | Tolérance | Peut irriter (pH bas) | Excellente |
  | **Verdict** | Brightening rapide, collagène, photoprotection | Barrière, acné, rougeurs, tolérance, multifonction |
  | **Meilleure option** | **Les deux ensemble** (synergie prouvée) | |

  ## Déficience en B3 (pellagre)
  Rare en pays développés. Causée par manque de niacine/tryptophane (alimentation pauvre, alcoolisme, régime maïs non nixtamalisé). Symptômes : les "4 D" → **Dermatite** (photosensible), **Diarrhée**, **Démence**, **Death**. La niacinamide est le traitement de référence (sans le flush de la niacine).`,
    category: 'actif',
  },
  {
    name: 'Acide tranexamique',
    slug: INGREDIENT_SLUGS.TRANEXAMIC_ACID,
    description:
      "Dérivé synthétique de la lysine, développé comme antihémorragique dans les années 1960 par des chercheurs japonais. Reconverti en actif dépigmentant après observation fortuite dans les années 1970 d'une réduction du mélasma chez des patients traités par voie orale. Aujourd'hui considéré comme un actif phare en cosmétique, avec une efficacité comparable à l'hydroquinone et un bien meilleur profil de tolérance en topique (2–5 %). Tendance forte en 2025–2026 (recherches +107 % fin 2024).",
    content: `## Origine et historique
  - Dérivé de la **lysine** (acide aminé essentiel), molécule simple, peu coûteuse, facile à conserver.
  - Découvert dans les années 1960 par des chercheurs japonais (Suquet et Otako au Kamoto).
  - Initialement développé pour réduire les hémorragies (notamment obstétricales — essais WOMAN/CRASH en médecine, recommandations OMS).
  - Retrouve une seconde vie en dermatologie dans les années 1970 grâce à une observation fortuite : réduction d'hyperpigmentations chez un patient traité par voie orale pour des urticaires.
  - Explosion d'intérêt cosmétique depuis ~2010–2011, aujourd'hui classé parmi les stars beauté.

  ## Mécanisme d'action
  Agit sur **plusieurs voies complémentaires**, ce qui le distingue d'actifs à mécanisme unique :

  ### Inhibition de la mélanogenèse
  - Bloque l'activation du plasminogène dans les kératinocytes (couche basale de l'épiderme), empêchant la cascade UV/inflammation → prostaglandines/leucotriènes → production excessive de mélanine.
  - Régule l'enzyme **tyrosinase** (enzyme clé de la synthèse de mélanine) → moins de mélanine produite à la source.

  ### Réduction de la dendricité des mélanocytes
  - Les mélanocytes possèdent des dendrites (« tentacules ») qui déposent le pigment dans les kératinocytes environnants.
  - L'acide tranexamique réduit la formation et la longueur de ces dendrites → limite physiquement la propagation des taches.
  - Mécanisme distinct de l'inhibition de la tyrosinase — agit sur le *transport*, pas seulement la *production*.

  ### Blocage du transfert de mélanine
  - Empêche l'interaction mélanocytes-kératinocytes via inhibition de PAR-2.
  - Les pigments produits ne remontent pas à la surface cutanée.

  ### Action anti-vasculaire
  - Inhibe l'angiogenèse (formation de nouveaux vaisseaux) via réduction du VEGF (facteur de croissance vasculaire endothélial).
  - Réduit l'hypervascularisation fréquente dans le mélasma → atténue la composante rouge/rose souvent sous-estimée.
  - Réduit les mastocytes et les facteurs de croissance vasculaire associés.
  - C'est cette double action (pigment + vaisseaux) qui rend le TXA particulièrement pertinent pour le mélasma par rapport à d'autres dépigmentants.

  ### Action anti-inflammatoire
  - Réduit les marqueurs inflammatoires (ET-1 notamment), ce qui le rend efficace sur le mélasma ET les taches post-acné.
  - Renforce la barrière cutanée (améliore hydratation et radiance globale).
  - Calme les peaux sensibilisées, réactives, rosacéiques.

  ### Potentiel anti-âge
  - Augmente la prolifération des fibroblastes (études sur souris) → potentiel de réduction des rides et de la sécheresse cutanée.
  - Effet complémentaire intéressant mais secondaire par rapport à l'action dépigmentante.

  ## Bénéfices
  - **Mélasma** (masque de grossesse/hormonal) : indication principale. Étude citée → 5 % TXA topique aussi efficace que 3 % hydroquinone, avec double action pigment + vaisseaux.
  - **Hyperpigmentation post-inflammatoire (PIH)** : taches brunes post-acné, post-eczéma, post-blessure.
  - **PIE (Post-Inflammatory Erythema)** : marques rouges/roses post-acné, grâce à l'action anti-vasculaire.
  - **Taches de photo-vieillissement** : lentigos solaires, dégâts UV cumulés.
  - **Prévention du rebond pigmentaire post-laser/IPL** : améliore la récupération de la barrière cutanée après traitement.
  - **Cernes colorés/pigmentaires** : cernes bruns (mélanine) ou violacés (inflammation/vascularisation).
  - **Rosacée / couperose** : action vasoconstrictrice + anti-inflammatoire.
  - **Teint terne / irrégulier** : améliore l'éclat global via meilleure hydratation et réduction micro-inflammation.
  - **Cicatrices pathologiques** : prévient l'hyperpigmentation post-inflammatoire sur cicatrices.

  ## Efficacité : ce que disent les études
  Les preuves scientifiques sont solides et plus nombreuses que pour d'autres actifs comme l'arbutine.

  ### Comparaison avec l'hydroquinone
  - Topique 3–5 % ≈ 2–4 % hydroquinone dans les essais comparatifs directs (réduction MASI/mMASI de **40–65 %** sur 8–12 semaines).
  - Études 2025 : 5 % TXA comparable à 2 % HQ avec satisfaction patient supérieure (moins d'irritation).
  - TXA niosomal 2 % + niacinamide aussi efficace que 4 % HQ avec moins d'effets secondaires et moins de rechute.
  - Revue de littérature 2026 (AlJabr et al.) : TXA topique/intradermique réduit significativement la pigmentation et améliore la qualité de vie dans mélasma/PIH.

  ### Concentrations efficaces
  - Bénéfices visibles dès **2 %**.
  - Résultats les plus probants entre **3 % et 5 %**.
  - Au-delà de 5 %, pas de données robustes montrant un bénéfice supplémentaire significatif en topique.

  ### Combinaisons
  - TXA + laser/microneedling > monothérapie (70–75 % d'amélioration dans certaines études).
  - TXA + niacinamide/vitamine C booste les résultats (mécanismes complémentaires).
  - Approche « tout sauf l'évier » recommandée pour les taches tenaces : TXA + niacinamide + vitamine C + acide kojique + exfoliants (AHA).

  ### Limites
  - **Pénétration cutanée** : TXA est polaire/hydrophile, donc les formulations classiques peuvent ne pas atteindre assez profondément (jonction dermo-épidermique). Les formulations liposomale, niosomale ou enrichies (avec acides pour le turnover) performent mieux.
  - Résultats variables selon les formulations : certains essais à 12 semaines montrent des résultats modestes si la formulation est basique.
  - **Pas un actif miracle en solo** : mélasma/PIH sont chroniques et multifactoriels (hormones, UV, lumière visible, inflammation). Nécessite une approche multimodale.
  - Oral/intradermique souvent plus puissant, mais topique excellent pour maintenance/relais (après cycles d'hydroquinone) ou quand le systémique n'est pas envisageable.
  - Résultats progressifs (semaines à mois), pas de magie instantanée.

  ## Formes et effets secondaires

  ### Topique (2–5 %) — usage cosmétique courant
  - **Très sûr**. Profil sécurité excellent.
  - Légère irritation ou rougeur possible en début d'utilisation, rare.
  - Aucun risque systémique. Pas d'effets secondaires majeurs.
  - Mieux toléré que l'hydroquinone pour la majorité des patients.
  - Idéal pour peaux sensibles, réactives, rosacéiques.

  ### Oral (~250 mg × 2/jour, soit ~500 mg/jour) — usage médical encadré
  - Très efficace sur mélasma réfractaire (souvent 50–60 % de réduction MASI).
  - Dose bien inférieure aux doses antihémorragiques (3–4 g/jour).
  - Risque thrombotique très faible à cette dose — étude rétrospective de Singapour (561 patients) : 1 seul cas de thrombose (chez une patiente avec déficit en protéine S + antécédents familiaux). Pas d'augmentation large du risque thromboembolique veineux.
  - **Screening nécessaire** : antécédents de thrombose, déficit protéine S/C, antécédents familiaux. Accord OB/GYN si contraception hormonale.
  - Effets secondaires courants : nausées, crampes abdominales.
  - Pas un traitement de première intention — réservé aux cas résistants aux topiques bien conduits.
  - Pas un traitement à vie : relais par topiques/lifestyle en maintenance.

  ### Intradermique (micro-injections)
  - Efficace, parfois supérieur au topique pour mélasma récalcitrant.
  - Réservé au dermatologue.
  - Études solides confirmant la réduction de pigmentation et l'amélioration de la qualité de vie.

  ## Intégration routine

  ### Fréquence et application
  1. Pour des résultats optimaux, utiliser **2×/jour** (matin et soir).
  2. Commencer à **1×/jour** (souvent le soir) si peau sensible ou fragile, puis augmenter progressivement.
  3. Appliquer sur peau propre et légèrement humide pour meilleure absorption.

  ### Combinaisons recommandées
  4. Se combine très bien avec :
     - **Niacinamide** : bloque le transfert de mélanine (mécanisme complémentaire). Attention : souvent déjà présente dans les formules TXA, vérifier les doublons.
     - **Vitamine C** : antioxydant, éclaircissant complémentaire, protection anti-radicalaire.
     - **Rétinol / bakuchiol** : accélère le turnover cellulaire, booste la pénétration.
     - **AHA légers** (glycolique, mandélique) : exfoliation douce, améliore pénétration et efficacité.
     - **Acide kojique** : inhibiteur de tyrosinase complémentaire.
     - **Acide hyaluronique** : hydratation, support barrière.

  ### Précautions
  5. Éviter de cumuler trop d'acides forts au début — risque d'irritation qui peut paradoxalement aggraver la pigmentation.
  6. Vérifier les doublons d'actifs entre produits (niacinamide, vitamine C parfois déjà dans les sérums TXA).
  7. **SPF 50+ obligatoire** chaque matin, réappliqué — les UV annulent les bénéfices très rapidement (« le soleil annule les effets en 1 jour »).

  ### Timeline
  8. Premiers résultats visibles après **6–8 semaines**.
  9. Résultats optimaux à **12 semaines**.
  10. Traitement de fond à maintenir dans le temps pour les conditions chroniques (mélasma notamment).

  ## Produits notables (2024–2026)

  ### Haut de gamme / cliniques
  - **SkinCeuticals Discoloration Defense** (~102 €) : 3 % TXA + acide kojique + 5 % niacinamide. Cliniquement testé, excellent point d'entrée.
  - **Murad Rapid Dark Correcting Serum** (~78 €) : TXA + glycolique + peptide éclaircissant. Usage soir.
  - **SkinMedica Lytera** (~160 €) : peptides + niacinamide + extraits marins. Cher mais puissant.

  ### Milieu de gamme
  - **Paula's Choice Discoloration Repair Serum** (~55 € / 35 ml) : 3 % TXA + 5 % niacinamide + 0,5 % bakuchiol. Alternative au rétinol, compatible grossesse. Texture fluide, hydratante, sans parfum. Efficace sur marques post-acné et taches tenaces.
  - **Typology Sérum Hyperpigmentation et Perte de Fermeté** (~46 € / 30 ml) : 5 % TXA + actifs anti-âge (stimule fibroblastes). Texture fluide/laiteuse émolliente. Bon pour photo-vieillissement, taches + relâchement.
  - **Vichy LiftActiv Specialist B3** (~42 € / 30 ml) : TXA + dérivé vitamine C + ferments + protéines de riz hydrolysées. Utilisable contour des yeux. Bon pour taches + cernes colorés.

  ### Entrée de gamme / accessibles
  - **The Inkey List 2% Tranexamic Acid** (~15–20 €) : 2 % TXA + 2 % bêtaïne + 2 % ascorbyl glucoside (dérivé vit C) + acide glycolique léger + peptides. Pour peaux sensibles, débutants, irrégularités teint.
  - **Minimalist 3% Tranexamic Acid** (~12–20 €) : TXA + acide mandélique + salicylique + HPA + avoine/HA. Fort pour PIH/PIE post-acné (exfoliation + anti-inflammatoire). Résultats visibles sur 3–5 mois.

  ### Exfoliants / traitements combinés
  - **Chemist Confessions Gold Standard** : 30 % AHA + 5 % TXA. Puissant — à mélanger dans un hydratant comme masque hebdomadaire, pas quotidien (trop sensibilisant pour mélasma).
  - **La Roche-Posay Glycolic B5 Serum** (~40 €) : usage soir 3–4×/semaine, première étape post-nettoyage.
  - **Topicals Faded** : multi-éclaircissants (alpha arbutine, réglisse, kojique). Odeur particulière mais efficace.
  - **Hero Cosmetics Lightning Wand** : vitamine C + niacinamide en rollerball. Traitement ciblé marques d'acné.
  - **Beauty Project Retinol Remix** : 1 % rétinol blend + TXA. 2-en-1 si pas le temps de superposer.`,
    category: 'actif',
  },
  {
    name: 'Humectants, émollients et occlusifs',
    slug: INGREDIENT_SLUGS.HUMECTANTS_EMOLLIENTS_OCCLUSIFS,
    description:
      "Les trois piliers de l'hydratation cutanée. Les humectants attirent l'eau, les émollients lissent et renforcent la barrière, les occlusifs scellent l'hydratation et limitent la TEWL.",
    content: `## Les trois catégories

### Humectants
Attirent l'eau depuis l'environnement ou les couches profondes vers le stratum corneum. En air très sec, peuvent paradoxalement déshydrater sans occlusif.
**Exemples** : Glycérine, Acide hyaluronique, Urée, Aloe vera, Propylène glycol

### Émollients
Comblent les espaces entre cellules de la couche cornée, lissent la surface, restaurent la souplesse. Renforcent la barrière sans attirer d'eau supplémentaire.
**Exemples** : Squalane, Beurre de karité, Huiles végétales (jojoba, argan), Cholestérol, Céramides

### Occlusifs
Forment un film protecteur limitant la perte d'eau transépidermique (TEWL). Peuvent sembler lourds ou gras — moins adaptés aux peaux grasses/acnéiques.
**Exemples** : Pétrolatum (vaseline), Cire d'abeille, Huile minérale, Diméthicone

## Layering recommandé
1. Nettoyage (peau légèrement humide)
2. Sérum
3. **Humectants** (sur peau encore humide)
4. **Émollients**
5. **Occlusifs** (soir / hiver)

## Conseils selon la peau
- **Peau sèche / très sèche** : équilibre des trois
- **Peau mixte à grasse** : humectants + émollients légers, sans occlusifs lourds
- **Peau sensible / atopique** : occlusifs + émollients riches + humectants doux
- **Climat sec / hiver** : ajouter un occlusif en dernière étape`,
    category: 'concept',
  },
  {
    name: 'Urée',
    slug: INGREDIENT_SLUGS.UREA,
    description:
      'Composé naturellement présent dans le stratum corneum, membre des Natural Moisturizing Factors (NMF). À faible concentration, humectant puissant. À haute concentration, kératolytique — dissout et ramollit la kératine accumulée. Un actif unique qui hydrate et exfolie selon sa formulation.',
    content: `## Origine & identité
  L'urée est une molécule **skin-identical** : elle est naturellement synthétisée par le corps et constitue l'un des composants clés des **Natural Moisturizing Factors (NMF)** du stratum corneum. En cosmétique, elle est produite par synthèse chimique — purifiée, stable, sans lien avec l'urine ou les sous-produits biologiques.
  Parce qu'elle est bioidentique, la peau la reconnaît et ne développe pas de réaction immunitaire. Elle peut donc être utilisée sur les peaux les plus sensibles.
  ## Mécanisme : tout dépend de la concentration
  ### À 2–10 % → Humectant
  - Attire l'eau dans les couches superficielles du stratum corneum
  - Améliore la capacité de rétention hydrique des kératinocytes
  - Réactive les enzymes de maturation épidermique qui ont besoin d'eau pour fonctionner
  - Résultat : peau plus souple, texture lissée, barrière renforcée
  > À ce stade, l'urée agit comme la glycérine ou l'acide hyaluronique — mais avec une affinité particulière pour le stratum corneum.
  ### À 10–40 % → Kératolytique
  - Rompt les **liaisons hydrogène au sein de la kératine** (protéine structurelle de la couche cornée)
  - Ramollit et désépaissit les accumulations de peau morte
  - **Ne stimule pas directement le renouvellement cellulaire** — contrairement aux AHAs
  - La kératine ramollie se détache plus facilement, mécaniquement
  > C'est cette propriété qui la distingue des AHAs : elle ne "dissout pas les liens entre cellules", elle ramollit la protéine elle-même.
  ### Au-delà de 40 %
  Usage clinique uniquement (onychomycoses, hyperkératoses sévères, psoriasis en plaques) — hors cosmétique grand public.
  ## Bienfaits selon la concentration
  | Concentration | Action principale | Indications |
  |---|---|---|
  | 2–5 % | Humectant doux | Hydratation quotidienne, peaux sèches, peaux matures |
  | 5–10 % | Humectant + légère exfoliation indirecte | Xérose cutanée, eczéma sec, peau sèche des jambes |
  | 10–20 % | Kératolytique modéré | Kératose pilaire, coudes/genoux rugueux, ongles |
  | 20–40 % | Kératolytique fort | Psoriasis, hyperkératoses, callosités, mycoses unguéales |
  ## Comparaison avec les autres exfoliants
  | | Urée | AHAs | BHA (acide salicylique) |
  |---|---|---|---|
  | Mécanisme | Ramollit la kératine | Rompt les liens intercellulaires | Pénètre dans les pores (liposoluble) |
  | Humectant | ✅ Oui | ✅ Oui (lactic acid surtout) | ❌ Non |
  | Photosensibilisant | ❌ Non | ⚠️ Oui | ❌ Non |
  | Stimule le collagène | ❌ Non | ✅ Oui (glycolique surtout) | ❌ Non |
  | Anti-acné | ❌ Peu | ⚠️ Indirect | ✅ Oui (pores) |
  | Peau sensible | ✅ Excellent | ⚠️ Selon concentration | ⚠️ Selon concentration |
  ## Indications spécifiques
  - **Xérose cutanée** (sécheresse sévère, souvent médicamenteuse) : référence chez les personnes âgées et diabétiques
  - **Kératose pilaire** : l'actif de choix — hydrate + kératolyse les follicules bouchés
  - **Eczéma atopique** : renforce la barrière dans les formules à 5–10 %
  - **Psoriasis** : potentialise les traitements topiques en assouplissant les plaques
  - **Ongles épaissis, mycoses** : les formules à 20–40 % améliorent la santé de la tablette unguéale
  - **Callosités, talons crevassés** : kératolyse progressive sans agressivité
  ## Layering
  Produit polyvalent, matin et soir, sans photosensibilisation.
  1. Nettoyage
  2. Actifs ciblés (sérums)
  3. **Urée** (crème ou lotion — souvent véhicule de formule hydratante)
  4. Occlusif si besoin (peaux très sèches)
  > Pour le corps (jambes, talons, coudes) : appliquer de préférence après la douche sur peau légèrement humide pour maximiser la pénétration.
  ## Compatibilités
  - ✅ Glycérine, acide hyaluronique : synergie humectante
  - ✅ Céramides, cholestérol : renforce la barrière (combo NMF + lipides)
  - ✅ AHAs / BHA : complémentaires (mécanismes différents) — produits combinés fréquents
  - ✅ Rétinol : compatible, l'urée aide à tamponner l'irritation
  - ✅ Niacinamide : aucune interaction
  - ⚠️ Peaux très réactives : commencer par des concentrations basses
  ## Précautions
  - À forte concentration (>20 %), légère sensation de picotement transitoire à l'application — normale
  - Éviter sur peau lésée ouverte
  - Pas de contre-indication majeure, pas de photosensibilisation
  - **Grossesse** : les formules cosmétiques à concentrations standard sont considérées sûres`,
    category: 'ingredient',
  },
  {
    name: 'Gluconolactone (PHA)',
    slug: INGREDIENT_SLUGS.PHA,
    description:
      "PHA (polyhydroxy acid) dérivé de l'acide gluconique, naturellement présent dans les fruits, le miel et le vin. Exfoliant chimique de nouvelle génération — plus doux que les AHAs grâce à sa grande molécule, avec en bonus des propriétés humectantes, antioxydantes et chélatantes.",
    content: `## Mécanisme d'action
  Le gluconolactone est un **lactone cyclique** qui, au contact de l'humidité cutanée, s'hydrolyse en **acide gluconique** — la forme active responsable de l'exfoliation.
  Comme les AHAs, il rompt les liaisons entre les cornéocytes du stratum corneum, facilitant l'élimination des cellules mortes. Sa grande taille moléculaire ralentit la pénétration dans l'épiderme, ce qui explique son profil de tolérance nettement supérieur à la glycolique ou à la lactique.
  Ses **groupes hydroxyles multiples (-OH)** lui confèrent également une action humectante : ils attirent et retiennent les molécules d'eau dans l'épiderme.
  ## Sa place dans la famille des hydroxy acids
  | Acide | Type | Taille molécule | Pénétration | Tolérance |
  |---|---|---|---|---|
  | Acide glycolique | AHA | Très petite | Profonde | Irritant |
  | Acide lactique | AHA | Petite | Moyenne | Moyen |
  | Acide salicylique | BHA | Moyenne | Liposoluble (pores) | Moyen |
  | **Gluconolactone** | **PHA** | **Grande** | **Superficielle** | **Excellente** |
  | Acide lactobionique | PHA | Grande | Superficielle | Excellente |
  Les PHAs sont souvent présentés comme les AHAs de "nouvelle génération" — même bénéfice exfoliant, sans le pic d'irritation.
  ## Bienfaits
  - **Exfoliation douce** : élimination des cellules mortes, affinement de la texture, éclat du teint
  - **Humectant** : rétention d'eau dans l'épiderme, hydratation simultanée à l'exfoliation
  - **Renforcement de la barrière cutanée** : réduit la TEWL, améliore la cohésion du stratum corneum
  - **Antioxydant** : neutralise les radicaux libres — effet comparable à la vitamine C (qui reste plus puissante globalement)
  - **Chélateur** : lie les ions métalliques (fer, cuivre) qui pourraient dégrader d'autres actifs dans la formule
  - **Photoprotection indirecte** : contrairement aux AHAs, **ne photosensibilise pas la peau** — voire atténue les dommages UV préexistants
  - **Anti-acné** : une étude historique (1992) montre une efficacité comparable au peroxyde de benzoyle à 5%
  ## Pour qui ?
  Le gluconolactone est l'exfoliant le plus universel :
  - **Peau sensible / réactive** : le choix de référence quand les AHAs sont trop agressifs
  - **Rosacée, dermatite atopique** : toléré là où la glycolique est contre-indiquée
  - **Peau sèche / déshydratée** : exfolie sans assécher (double effet exfoliant + humectant)
  - **Débutants en actifs** : introduction idéale aux acides
  - **Post-traitement** (peeling, laser, IPL) : recommandé pour prolonger les bénéfices sans irriter
  - **Peau mature** : améliore texture, fermeté et éclat progressivement
  ## Concentrations courantes
  - **3 – 8 %** : toners, essences, usage quotidien
  - **10 – 14 %** : sérums exfoliants
  - **20 – 30 %** : traitements intensifs (Chemist Confessions Baby Steps)
  Pas de maximum réglementaire strict en UE pour les PHAs (contrairement aux AHAs limités à 10% avec pH ≥ 3,5 en leave-on grand public).
  ## Layering (routine soir — application type)
  1. Nettoyage
  2. **Gluconolactone** (toner ou sérum, sur peau propre)
  3. Sérum ciblé (hyaluronique, niacinamide…)
  4. Crème hydratante
  5. SPF le matin (bien qu'il ne photosensibilise pas, reste une bonne pratique)
  > Peut aussi s'utiliser le matin — avantage rare parmi les exfoliants.
  ## Compatibilités
  - ✅ Niacinamide : complémentaire, aucune interaction
  - ✅ Acide hyaluronique : synergie hydratante
  - ✅ Rétinol : compatible (PHAs + rétinoïdes = combo anti-âge validé en études)
  - ✅ Vitamine C : un sérum combinant gluconolactone + vitamine C montre des résultats significatifs sur le photo-vieillissement
  - ✅ Azelaic acid : renforce l'efficacité sur rosacée et hyperpigmentation
  - ✅ Hydroquinone : potentialise l'action dépigmentante
  - ⚠️ AHA + BHA en même application : surveiller la tolérance (sur-exfoliation possible si hautes concentrations)
  ## Précautions
  - Actif exfoliant malgré tout — patch test recommandé sur peau très réactive
  - Éviter contour des yeux avec les formules concentrées
  - Comme tous les exfoliants : ne pas cumuler mécaniquement (gommage) le même jour
  ## Produits de référence
  - **Neostrata Restore Bionic Lotion** : formule historique PHA, référence clinique
  - **ANUA Clear Pad** : pads exfoliants gluconolactone + BHA
  - **Be Minimalist PHA 3% + Biotic Toner** : toner quotidien accessible
  - **Chemist Confessions Baby Steps** : traitement 30% gluconolactone`,
    category: 'ingredient',
  },
  {
    name: 'Heartleaf (Houttuynia cordata)',
    slug: INGREDIENT_SLUGS.HEARTLEAF,
    description:
      "Plante herbacée originaire d'Asie de l'Est, utilisée depuis des siècles en médecine traditionnelle coréenne et japonaise. Riche en flavonoïdes, polysaccharides et polyphénols, c'est un actif apaisant, antioxydant et antibactérien — star de la K-beauty pour les peaux sensibles et réactives.",
    content: `## Origine & identité
  Connue sous le nom d'**어성초 (eoseongcho)** en coréen et **dokudami (毒痛み)** en japonais, la Houttuynia cordata est aussi surnommée "les dix médecines" en référence à sa polyvalence thérapeutique. Son nom INCI est **Houttuynia Cordata Extract**.
  Elle a été propulsée dans la K-beauty grand public en 2019 par ANUA et ses formules à 70–77% de filtrat.
  ## Composition & mécanisme d'action
  Son efficacité repose sur plusieurs familles de composés bioactifs :
  - **Flavonoïdes** (quercétine, quercitrine, hyperoside, rutine) : anti-inflammatoires, antioxydants, antibactériens. La quercitrine protège notamment contre les dommages UVB
  - **Polysaccharides** (acide galacturonique, galactose, rhamnose…) : humectants puissants, rétention d'eau
  - **Polyphénols & acide chlorogénique** : inhibition de la tyrosinase (anti-taches), protection contre le stress oxydatif
  - **Acides aminés & acides gras** : réparation de la barrière cutanée
  Au niveau moléculaire, l'extrait inhibe TNF-α et COX-2 (médiateurs de l'inflammation), bloque NF-κB, réduit les ROS et active Nrf2 — mécanismes proches de ceux du Centella Asiatica.
  > ⚠️ L'essentiel des études est *in vitro*. Les preuves cliniques sont prometteuses mais encore limitées comparées aux actifs comme la niacinamide ou le rétinol.
  ## Bienfaits
  - **Apaisement & anti-inflammatoire** : réduit rougeurs, irritations, démangeaisons (eczéma, rosacée, acné inflammatoire)
  - **Antibactérien** : actif contre *C. acnes* et *S. aureus* (pathogène impliqué dans la dermatite atopique)
  - **Humectant** : hydratation via les polysaccharides, renforce la barrière hydrolipidique
  - **Antioxydant** : protection contre pollution, UV, stress oxydatif
  - **Séborégulateur léger** : aide à contrôler l'excès de sébum et à dégager les pores
  - **Anti-taches** : inhibition de la tyrosinase, atténuation progressive de l'hyperpigmentation post-inflammatoire
  - **Réparation cutanée** : accélère la cicatrisation post-acné ou post-traitement
  ## Pour qui ?
  Actif parmi les plus universels et bien tolérés :
  - **Peau sensible / réactive** : l'usage de référence
  - **Peau acnéique** : antibactérien + apaisant + non comédogène
  - **Dermatite atopique / eczéma** : réduit la réponse inflammatoire à *S. aureus*
  - **Rosacée** : calme les flush et rougeurs persistantes
  - **Post-traitement** (IPL, laser, acides) : accélère la récupération, réduit l'inflammation réactionnelle
  - **Peau grasse** : séborégulation légère sans dessécher
  ## Layering
  Peut s'utiliser matin et soir — aucune photosensibilisation, pas de contre-indication saisonnière.
  1. Nettoyage
  2. Toner/essence heartleaf (sur peau légèrement humide — profite de l'effet humectant)
  3. Sérum ciblé
  4. Crème hydratante
  5. SPF (matin)
  > Les produits à haute concentration (70–96%) peuvent s'utiliser comme soin unique apaisant lors des phases de réaction cutanée (rétinisation, post-traitement, poussée inflammatoire).
  ## Compatibilités
  L'heartleaf est l'un des actifs les plus "stack-friendly" :
  - ✅ Centella Asiatica, aloe vera : synergie apaisante renforcée
  - ✅ Niacinamide : complémentaire sur le contrôle sébum et les taches
  - ✅ Snail mucin : combo réparateur/apaisant
  - ✅ Rétinol : aide à tamponner la rétinisation (même usage que le snail mucin)
  - ✅ AHA/BHA, vitamine C : aucune incompatibilité connue
  Aucune incompatibilité majeure documentée.
  ## Précautions
  - **Qualité d'extraction** : la méthode (eau vs alcool, feuilles vs racines) impacte fortement la teneur en actifs — favoriser les marques transparentes
  - **Patch test** recommandé : cas rares de picotements sur peaux très réactives
  - L'odeur légèrement végétale/poisson (caractéristique de la plante fraîche) est absente des formules cosmétiques bien formulées
  ## Produits de référence
  - **ANUA Heartleaf 77% Soothing Toner** : référence accessible, 77% d'extrait, minimaliste
  - **ANUA Heartleaf 70% Intense Calming Cream** : hydratant apaisant riche
  - **Abib Heartleaf Essence Calming Pump** : essence légère quotidienne
  - **Goodal Houttuynia Cordata Calming Moisture Serum** : sérum hydratant et soothing`,
    category: 'ingredient',
  },
  {
    name: 'Glutathion',
    slug: INGREDIENT_SLUGS.GLUTATHION,
    description:
      "Tripeptide antioxydant naturel (glutamate, cystéine, glycine). Inhibe la tyrosinase et recycle la vitamine C. Très instable (pH < 4, sensible à la chaleur/oxydation). Données cliniques encore faibles pour le blanchiment cutané en 2026 — plutôt un antioxydant secondaire qu'un actif anti-taches de premier plan.",
    content: `## Structure & rôle biologique
  Tripeptide composé de **glutamate, cystéine et glycine**, présent naturellement dans l'organisme. Surnommé "master antioxidant" : protège les cellules du stress oxydatif et **recycle d'autres antioxydants** comme la vitamine C.

  ## Mécanisme d'action (peau)
  - **Inhibiteur de tyrosinase** : freine la production de mélanine
  - **Neutralise les radicaux libres** qui déclenchent la cascade d'hyperpigmentation
  - Double action : antioxydant + anti-taches

  ## Efficacité clinique
  Les données restent **limitées** et reposent souvent sur des mesures instrumentales plutôt que sur des résultats visibles à l'œil nu.

  ### Glutathion réduit (GSH) — topique 0,5 %
  - Étude sur 81 sujets (0,1 % vs 0,5 % vs placebo)
  - Résultat : **5 % d'amélioration** de l'hyperpigmentation en 8 semaines (groupe 0,5 %)
  - Limite : 5 % mesuré par instrument = souvent **invisible à l'œil nu**
  - Effets secondaires : jusqu'à **12,5 %** des sujets ont rapporté picotements/irritations

  ### Glutathion oxydé (GSSG) — topique 2 %
  - Beaucoup plus **stable** que le GSH
  - Étude sur 30 sujets : diminution de l'indice de mélanine (résultats plus prometteurs)
  - Limite : toujours **pas de photos Avant/Après standardisées** dans la littérature

  ### Oral + topique combiné
  - Étude split-phase, groupes de 20 personnes
  - Problèmes méthodologiques : type de glutathion non précisé, couplé à une concentration inconnue de vitamine C, indices de mélanine de départ trop variables
  - Conclusion : effet possible mais **preuves trop faibles** pour recommander en 2026

  ## Stabilité — le point critique
  Le glutathion est **notoirement instable**, comparable à la vitamine C.
  - Nécessite un **pH < 4,0** (environnement très acide)
  - **Demi-vie à 20 °C** : seulement 7–8 semaines → une grande partie peut être dégradée avant même l'achat
  - **Demi-vie à 4 °C** : ~1 an (la réfrigération aide considérablement)
  - **Oxydation** : odeur soufrée caractéristique ("funky") qui s'intensifie avec la dégradation
  - Si le produit change d'odeur ou de couleur → le jeter

  ## Injections IV & suppléments oraux
  ### Injections IV ⚠️ À ÉVITER
  - Populaires en Asie du Sud-Est pour le blanchiment cutané
  - Résultats **éphémères** (temporaires)
  - Risques graves : **dysfonction hépatique, anaphylaxie**

  ### Suppléments oraux
  - Certaines études suggèrent un effet synergique avec les crèmes topiques
  - Données encore **prématurées** pour recommander comme traitement standard

  ## Effets secondaires (topique)
  - Picotements/irritations légères (jusqu'à 12,5 % des sujets)
  - Pas de danger majeur en topique (contrairement aux injections)

  ## Combinaisons courantes
  Rarement utilisé seul — presque toujours associé à :
  - **Vitamine C** (synergie antioxydante, le glutathion recycle la vit C)
  - **Niacinamide**
  - **Acide tranexamique**

  ## Place dans la hiérarchie anti-taches (2026)
  1. **Indétrônables :** Vitamine C, Acide Kojique (1 %), Acide Tranexamique
  2. **Soutiens solides :** Niacinamide, Acide Azélaïque, Arbutine
  3. **Bonus facultatif :** Glutathion (antioxydant secondaire, "sprinkle ingredient")

  ## Conseils d'achat
  - Vérifier le **sourcing** : un glutathion stable et de qualité est coûteux et rare
  - Privilégier les formules **combinées** (avec vit C, niacinamide, tranexamique) plutôt que le glutathion seul
  - Considérer la forme **GSSG** (oxydée) pour une meilleure stabilité
  - Conserver au réfrigérateur si possible`,
    category: 'actif',
  },
  {
    name: 'PDRN (Polydeoxyribonucleotide)',
    slug: INGREDIENT_SLUGS.PDRN,
    description:
      "Fragments d'ADN issus principalement de saumon. Agit sur les récepteurs A2A (inflammation, prolifération cellulaire, collagène). Prometteur en injection médicale, mais preuves très limitées en application topique (crème/sérum). Tendance 2025-2026 largement portée par le marketing.",
    content: `## Structure & origine
  - **PDRN** = Polydeoxyribonucleotide = fragments d'ADN
  - Source principale : **sperme de saumon** (choisi car proche de l'ADN humain)
  - Utilisé à l'origine en **médecine** (injections) pour la cicatrisation (ulcères diabétiques, greffes) et l'anti-inflammation
  - Transposé ensuite en cosmétique (crèmes, sérums)

  ## Mécanisme d'action (théorique)
  Agit sur les **récepteurs à l'adénosine A2A** :
  - Régulation de l'inflammation
  - Stimulation de la prolifération cellulaire
  - Production de collagène

  En théorie : régénération + cicatrisation + collagène.

  ## Efficacité clinique

  ### En injection 💉
  Données **intéressantes et documentées** : cicatrisation, anti-inflammation, régénération tissulaire.

  ### En topique 🧴 — le vrai sujet
  **Très peu d'études cliniques pertinentes.** La majorité des données concernent les injections ou l'in vitro, pas les crèmes.

  Seulement **2 études topiques** identifiées (revue de décembre 2024) :

  #### Étude 1 — Cicatrisation sur greffes de peau (40 patients)
  - Re-épithélialisation plus rapide : **12,5 jours vs 24 jours** (placebo)
  - ⚠️ Peau déjà ouverte → pénétration facilitée, **pas comparable à une peau normale**

  #### Étude 2 — Cicatrices d'acné (1 seul patient)
  - Traitement ultra-intensif combiné : subcision, filler HA, microneedling RF, peeling TCA 90 %, rétinoïde, niacinamide, SPF… + PDRN
  - Score cicatrice amélioré en 10 jours
  - ⚠️ **Impossible d'attribuer l'effet au PDRN** vu le nombre de traitements simultanés

  ### Problème de pénétration cutanée
  Sur peau intacte, la capacité du PDRN à pénétrer suffisamment reste **non démontrée**.

  ## PDRN saumon vs alternatives végétales
  | Source | Niveau de preuve |
  |---|---|
  | **Saumon** | Le plus étudié, seule source avec des données cliniques |
  | **Végétal (ex : ginseng)** | Tests préliminaires, modèles 3D, **pas de validation clinique solide** |

  Problèmes des alternatives : concentrations variables, activité biologique moins claire.

  ## Allégations marketing vs réalité
  Le PDRN est vendu comme anti-âge, anti-taches, antioxydant, améliorateur de texture, régénérant, réparateur…
  👉 **Quand un ingrédient est "bon pour tout", c'est souvent un signal marketing.** Les preuves topiques restent très faibles pour chacune de ces allégations.

  ## Effets secondaires
  Pas de risques majeurs identifiés en topique. Les risques concernent surtout les **injections** (à réaliser en cabinet médical uniquement).

  ## Si on veut tester quand même
  - Privilégier la **source saumon** (la seule réellement étudiée)
  - Considérer comme du "skincare fun", **pas comme un actif transformateur**
  - Ne pas remplacer des actifs prouvés (vitamine C, rétinol, niacinamide…)

  ## Place dans la hiérarchie skincare (2026)
  - **Actifs prouvés en topique :** Vitamine C, Rétinol, Niacinamide, Acide Kojique, Acide Tranexamique, Acide Azélaïque
  - **PDRN :** Hype élevée, preuves topiques quasi inexistantes — marketing largement en avance sur la science`,
    category: 'actif',
  },
  {
    name: 'Céramides',
    slug: INGREDIENT_SLUGS.CERAMIDES,
    description:
      "Lipides naturels qui constituent 30 à 40% du poids de la couche cornée et forment le ciment de la barrière cutanée. Retiennent l'hydratation, protègent des agressions et améliorent la pénétration des actifs.",
    content: `## Rôle dans la peau
  Les céramides forment le « mortier » entre les cellules cutanées (cornéocytes) dans le stratum corneum. Si les cellules sont des **briques**, les céramides sont le **ciment** qui les maintient ensemble. Chimiquement, un céramide est composé d'une **sphingosine** liée à un **acide gras** — c'est cet assemblage cireux et gras qui assure l'étanchéité de la barrière.

  Ils sont essentiels pour :
  - Maintenir la cohésion cellulaire
  - Réduire la perte d'eau transépidermique (**TEWL**)
  - Agir comme bouclier contre les irritants extérieurs (bactéries, pollution)
  - Protéger les marqueurs de collagène contre les dommages UV

  ## Pourquoi nos niveaux de céramides chutent

  | Facteur | Impact |
  | --- | --- |
  | **Âge** | Diminution de ~30 % des lipides totaux chez les peaux matures |
  | **Hiver** | Le froid réduit drastiquement les lipides, causant une peau écailleuse |
  | **Acné** | Contrairement aux idées reçues, les peaux acnéiques manquent souvent de céramides, aggravant l'inflammation |
  | **Nettoyage agressif** | Peut décaper les graisses essentielles de la barrière |
  | **Traitements irritants** | Rétinol, acides exfoliants, etc. |

  ## Nomenclature et Types (INCI)
  Les marques utilisent désormais un système de **lettres** décrivant la structure chimique. Chaque nom combine un type d'acide gras + un type de sphingosine.

  ### Types d'acides gras (1ère lettre)
  - **N (Non-hydroxy)** : Le plus abondant dans la peau. "Colle" principale de la barrière.
  - **A (Alpha-hydroxy)** : Groupe hydroxyle supplémentaire permettant des liaisons plus serrées, renforçant la structure lipidique et le manteau acide.
  - **E (Esterified omega-hydroxy)** : Grosses molécules complexes agissant comme des "ancres" liant les couches lipidiques entre elles.

  ### Types de sphingosine (2ème lettre)
  - **S (Sphingosine)**
  - **P (Phytosphingosine)** : Le sous-type le plus étudié en topique.
  - **H (6-hydroxysphingosine)**

  ### Céramides clés
  - **Ceramide NP (ex Céramide 3)** : Le plus étudié depuis les années 80, le plus fiable. Améliore radicalement l'hydratation et renforce la barrière. **La valeur sûre.**
  - **Ceramide EOP (ex Céramide 1)** : Agit comme une "agrafe" pour lier les couches de lipides. Crucial pour l'élasticité.
  - **Ceramide AP (ex Céramide 6-II)** : Favorise le renouvellement cellulaire et lisse le grain de peau.
  - **Ceramide NS / NG (ex Céramide 2)** : Fonctionnellement très similaires, souvent regroupés.
  - **Phytosphingosine & Sphingosine** : Précurseurs lipidiques aidant la peau à synthétiser ses propres céramides + propriétés antimicrobiennes.

  > **Note :** Les pseudo-céramides (ex: Céramide PC 104 / *Hydroxypropyl Bispalmitamide MEA*) sont des analogues synthétiques populaires en K-Beauty. Pas techniquement des céramides, mais aident les peaux sèches.

  ## Données scientifiques clés

  ### Céramide NP seul
  Une étude coréenne a montré que **0,5 % de Céramide NP** aide significativement à la récupération de la barrière après agression : réduction de la TEWL et renforcement sur le long terme.

  ### Mélange > Céramide unique
  Une étude taïwanaise a comparé céramides seuls vs combinés : le mélange (1 + 3) a montré une hydratation de **+25 %**, contre seulement +12 % pour un céramide seul.

  ### Phytosphingosine et acné
  Comparaison BPO 3,7 % seul vs BPO + 2 % phytosphingosine : après 60 jours, le côté avec phytosphingosine montrait une réduction plus importante de l'acné et une meilleure cicatrisation. Ce lipide freine la croissance de *P. acnes* in vitro.

  ### Céramides et photo-vieillissement
  Des tests sur peau non photo-exposée ont prouvé que les céramides maintiennent les niveaux de collagène et réduisent l'inflammation face aux UV, même sans changement visible immédiat (action sur l'expression génétique).

  ### Délai d'efficacité
  Il faut environ **7 jours** d'application constante pour voir une amélioration réelle de la barrière cutanée.

  ## Bénéfices Clés
  - **Restauration de la barrière** : Indispensable pour les peaux sèches, atopiques (eczéma, psoriasis) ou fragilisées par des traitements irritants.
  - **Anti-âge** : Repulpent la peau, maintiennent l'hydratation, réduisent les ridules de déshydratation. Excellent bouclier préventif pour **tous les types de peau**.
  - **Réduction de la sensibilité** : Diminuent la réactivité face aux polluants et allergènes.
  - **Peau acnéique** : Certains lipides (phytosphingosine) sont essentiels pour la guérison et la clarté du teint.
  - **Soin capillaire** : Gainent la fibre, lissent les écailles et protègent de la casse.

  ## Le "Ratio d'Or" de la Barrière Cutanée
  Pour une efficacité maximale, les céramides doivent imiter la composition naturelle du sébum humain :
  > **Céramides + Cholestérol + Acides Gras Libres** (ratio 3:1:1 ou 1:1:1)

  Les céramides sans ce ratio risquent de cristalliser dans le pot et rester à la surface de la peau sans pénétrer.

  ### Cholestérol vs Phytostérols
  - **Cholestérol** : Traditionnellement d'origine animale (SkinCeuticals, Dr. Jart+, Epiance).
  - **Phytostérols** : Alternative végétale (Vanicream).
  - **Cholestérol végétalien** : Identique à l'animal mais synthétisé à partir de plantes.

  ## Associations synergiques
  - **Céramides + Niacinamide** : La niacinamide stimule la production naturelle de céramides.
  - **Céramides + Acide Hyaluronique** : L'HA retient l'eau, les céramides empêchent l'évaporation.
  - **Céramides + Urée** : Idéal pour peaux très sèches ou kératose pilaire.
  - **Céramides + Vitamine C / Azélaïque / Rétinoïdes** : Réduisent considérablement les sensations de brûlure et picotement post-actifs.

  ## Stratégies des marques

  | Stratégie | Exemples | Types de céramides |
  | --- | --- | --- |
  | **Approche intégrale** | Dr. Althea 147, Vanicream | NP, NS, NG, AP, EOP |
  | **Trio équilibré** | Mr. Reliable, Epiance | NP, AP, EOP (un de chaque type N/A/E) |
  | **Spécialiste** | SkinCeuticals, LRP, Æstura | NP seul ou NP + EOP |

  ### Recommandations produits
  - **Quotidien** : Dr. Jart+ Ceramidin Cream (bon équilibre texture/efficacité), Dieux Instant Angel (idéal hiver).
  - **Cas critiques / post-procédure** : SkinCeuticals Triple Lipid 2:4:2 (gold standard, 2 % céramides purs — le taux le plus élevé du marché).
  - **Peau grasse** : Émulsions légères (lotions CeraVe) pour les bénéfices sans boucher les pores.

  ## Ingrédients de soutien à rechercher
  - **Cholestérol / Phytostérols** : Indispensables pour le ratio naturel.
  - **Meadowfoam Estolide** : Augmente l'hydratation d'environ 45 % en 30 minutes.
  - **Niacinamide** : Stimule la production de céramides + apaisant.
  - **Allantoïne** : Apaisant complémentaire.
  - **Vitamine E** : Antioxydant protecteur.

  ## Conseils d'achat

  ### 1. Transparence des dosages
  Le meilleur céramide est celui dont on connaît la concentration. Se méfier des traces infimes (ex: 4 ppm = 0,000004 %) présentes juste pour l'étiquette.

  ### 2. Priorité au Céramide NP
  Vérifier qu'il figure en bonne place dans la liste INCI, surtout dans un mélange.

  ### 3. La texture compte
  Les céramides sont des lipides qui détestent l'eau.
  - **Privilégier** : Crèmes, baumes, lotions épaisses (émulsions).
  - **Se méfier** : Toniques/sérums aqueux transparents vantant les céramides — efficacité moins prouvée que les crèmes.
  - **Compromis** : Plus une crème contient de vrais lipides, plus elle laisse un film gras/cireux. C'est normal et signe d'efficacité.

  ### 4. Données cliniques
  Si les % ne sont pas affichés, chercher des études sur la formule finie (Dr. Jart+, Dieux Instant Angel ont des tests prouvant l'amélioration de la barrière).

  ### 5. Le prix
  Les céramides de qualité coûtent cher (matière première coûteuse, complexe à synthétiser). Produit très bon marché = céramides probablement en quantité infime.

  ## Intégration routine
  1. **Nettoyage** : Nettoyant relipidant pour ne pas décaper les lipides naturels.
  2. **Sérums aqueux** : Appliquer sur peau légèrement humide.
  3. **Traitements ciblés** : Actifs (vitamine C, azélaïque, rétinoïdes…).
  4. **Hydratant aux céramides** : Pour sceller le tout.
  5. **Fréquence** : Quotidienne (matin et soir), particulièrement en hiver ou en période de sécheresse.`,
    category: 'actif',
  },
  {
    name: 'Soufre (Sulfur)',
    slug: INGREDIENT_SLUGS.SULFUR,
    description:
      'Actif anti-acné parmi les plus anciens en dermatologie. Kératolytique, séborégulateur et antibactérien, il cible comédons, points noirs et inflammations — particulièrement efficace sur les peaux grasses et acnéiques.',
    content: `## Contexte historique & réglementaire
  Le soufre est l'un des plus anciens ingrédients actifs en dermatologie, utilisé depuis l'Antiquité (époque de Cléopâtre) et même employé historiquement contre la peste. Aujourd'hui, il est classé comme **médicament en vente libre (OTC)** aux États-Unis, au même titre que l'acide salicylique ou le peroxyde de benzoyle. Après avoir perdu en popularité face à ces actifs modernes, il connaît un **regain d'intérêt** notable.

  ## Nature & formulation
  Le soufre est un **minéral non métallique** d'origine naturelle, reconnaissable à son odeur caractéristique (souvent comparée à l'œuf pourri). C'est un ingrédient **difficile à formuler** :
  - Non soluble dans l'eau ni dans la plupart des supports cosmétiques classiques
  - Se présente généralement sous forme de **suspension** ou sédimente au fond des flacons
  - La **taille des particules** est cruciale : plus elles sont fines, plus le produit est efficace. Un produit granuleux est souvent le signe d'une mauvaise formulation

  ## Mécanisme d'action
  Le soufre agit sur plusieurs fronts simultanément :
  - **Kératolytique** (action la plus documentée) : dissout les liaisons entre kératinocytes en interagissant avec la cystéine de la peau, favorise l'élimination des cellules mortes et désincruste les pores
  - **Séborégulateur** : absorbe l'excès de sébum (mécanisme similaire aux argiles), réduit la production par action sur les glandes sébacées — bien que ce volet soit moins documenté scientifiquement
  - **Antimicrobien** : inhibe la prolifération de *Cutibacterium acnes* (anciennement *P. acnes*), mais son action spécifique sur cette bactérie est **moins prouvée** que celle du peroxyde de benzoyle
  - **Antifongique** (point fort) : très efficace contre *Malassezia* et les champignons — utilisé pour les pellicules, infections fongiques et fungal acne
  - **Anti-inflammatoire léger** : réduit rougeurs et gonflements des lésions actives

  ## Ce que dit la science
  Les données cliniques modernes sur le soufre utilisé seul sont **limitées** :
  - La plupart des études datent des **années 60–70**
  - Une étude récente de J&J sur une lotion asséchante (10 % soufre + 4 % niacinamide) a montré une **réduction de la rougeur et de la taille des boutons en 1 à 3 jours**
  - Les conclusions de la recherche actuelle (2020) qualifient les preuves d'efficacité du soufre de **"faibles à très faibles"** par rapport à d'autres actifs comme l'acide azélaïque
  - Le soufre reste néanmoins un actif OTC reconnu par la FDA

  > *Source : podcast Chemist Confessions — épisode dédié au soufre*

  ## Bienfaits
  - Traitement des comédons ouverts et fermés
  - Réduction des papules et pustules
  - Contrôle du brillant et du sébum en excès
  - Traitement de la dermite séborrhéique (squames, pellicules)
  - Efficace sur le "fungal acne" (folliculite à Malassezia)
  - Atténuation des points noirs

  ## Concentrations courantes
  - **2 – 5 %** : formules douces, usage quotidien, peaux mixtes
  - **5 – 10 %** : efficacité renforcée, usage ciblé ou en masque
  - **10 %+** : usage clinique / prescriptions dermatologiques

  ## Formes & formats
  - **Masque point noir / clay mask** : usage 1–2x/semaine, laissé 5–15 min
  - **Spot treatment** : application ciblée sur les lésions actives — **usage idéal** selon les experts
  - **Nettoyant** : contrôle sébum sans résidu occlusif
  - **Crème de nuit** : usage régulier sur zones problématiques

  ## Layering (routine soir recommandée)
  1. Nettoyage doux
  2. Toner équilibrant (optionnel)
  3. **Soufre** (spot treatment ou couche fine sur zones ciblées)
  4. Hydratant non comédogène (le soufre peut assécher — compenser)

  > En masque : appliquer après nettoyage, rincer, puis reprendre la routine habituelle.

  ## Compatibilités
  - ✅ Niacinamide : complémentaire, renforce la séborrégulation (combo validé par l'étude J&J : 10 % soufre + 4 % niacinamide)
  - ✅ Zinc : synergie anti-acné et anti-inflammatoire
  - ✅ Argile (kaolin, bentonite) : association classique en masque
  - ✅ Acide salicylique (BHA) : kératolyse complémentaire — mais surveiller la tolérance
  - ⚠️ Rétinol : utiliser en alternance, pas simultanément (risque de sur-irritation)
  - ❌ Peroxyde de benzoyle : **incompatibilité majeure** — réaction chimique produisant des composés irritants, éviter absolument
  - ❌ AHA forts + soufre en même application : sur-exfoliation

  ## Précautions & effets secondaires
  - **Odeur** caractéristique (œuf, soufre) — normale, varie selon la formule
  - **Assèchement** important : ingrédient très desséchant, **non recommandé en usage quotidien sur tout le visage**, surtout sur peaux sèches ou mixtes. Toujours hydrater après
  - **Acanthose** : une étude ancienne suggère qu'un usage prolongé pourrait causer un épaississement/noircissement de la peau — renforce l'idée d'un usage **ponctuel** plutôt que préventif à long terme
  - **Décoloration** : peut jaunir certains textiles — rincer les mains après application
  - **Peau sensible** : commencer par faible concentration, fréquence réduite
  - Éviter contour des yeux et muqueuses

  ## Verdict
  Le soufre est un actif de **secours** plutôt qu'un soin préventif quotidien. Son usage idéal reste le **spot treatment ponctuel** pour calmer rapidement un bouton inflammatoire. Les preuves scientifiques modernes restent faibles comparées à celles de l'acide azélaïque ou du peroxyde de benzoyle, mais son profil kératolytique + antifongique en fait un choix pertinent dans certaines situations (fungal acne, dermite séborrhéique).

  ## Conseils selon le profil
  - **Acné légère à modérée** : spot treatment 5 % soir + niacinamide matin
  - **Peau grasse / comédons** : masque soufre 1–2x/semaine
  - **Fungal acne** : soufre seul ou avec zinc pyrithione, éviter les huiles comédogènes
  - **Dermite séborrhéique** : formule soufre + acide salicylique en nettoyant`,
    category: 'ingredient',
  },
  // ── Actifs anti-âge & renouvellement ───────────────────────
  {
    name: 'Rétinol',
    slug: INGREDIENT_SLUGS.RETINOL,
    description:
      'Dérivé de la vitamine A, puissant anti-âge qui accélère le renouvellement cellulaire.',
    content: `
     # Rétinol

     Ingrédient star anti-âge et anti-acné, dérivé de la vitamine A. Il accélère le renouvellement cellulaire, stimule la production de collagène et d’élastine, réduit rides et ridules, affine le grain de peau, régule le sébum et unifie le teint pour une peau plus lisse, ferme et éclatante.

     ## INCI
     RETINOL

     ## Concentration typique
     0,1 à 0,3 % maximum dans les produits non rincés selon la réglementation européenne (SCCS).
     Débuter à **0,1-0,2 %** pour les peaux débutantes ou sensibles.
     Les formes micro-encapsulées ou stabilisées permettent parfois d’atteindre 0,5-1 % avec une meilleure tolérance.
     Augmenter progressivement après 4-8 semaines d’adaptation (période de « rétinisation »).

     ## Mécanisme d’action
     Le rétinol est une forme précurseur de la vitamine A. Une fois appliqué, il pénètre les couches cutanées et se convertit en deux étapes :
     1. Rétinol → Rétinaldéhyde
     2. Rétinaldéhyde → Acide rétinoïque (forme active)

     Il se lie alors aux récepteurs nucléaires des kératinocytes et des fibroblastes, boostant la synthèse de collagène, d’élastine et d’acide hyaluronique, accélérant le turnover cellulaire (effet kératolytique) et régulant la mélanine et la production de sébum.

     ## Bienfaits prouvés
     - **Anti-âge** : réduit visiblement rides et ridules, améliore fermeté et élasticité.
     - **Anti-acné & pores** : désobstrue les pores, diminue la production de sébum, action antibactérienne et anti-inflammatoire.
     - **Éclat & homogénéité** : atténue taches pigmentaires, cicatrices d’acné et hyperpigmentation, affine le grain de peau.
     - **Global** : effet antioxydant, prévient le photovieillissement, redonne luminosité et rebondi.

     Résultats visibles dès 4-6 semaines, optimaux après 3-6 mois d’utilisation régulière.

     ## Comment l’utiliser (guide débutant)
     - **Soir uniquement** (photosensibilisant).
     - Peau propre et parfaitement sèche.
     - Quantité : taille d’un petit pois pour tout le visage (éviter contour des yeux, ailes du nez et lèvres sauf produit spécifique).
     - **Protocole d’introduction** :
       Semaines 1-2 → 1-2 soirs/semaine
       Semaines 3-4 → 3 soirs/semaine
       Puis quotidien si tolérance bonne.
     - Technique « sandwich » pour minimiser les irritations : crème hydratante → rétinol → crème hydratante.
     - Le matin : toujours SPF 30+ large spectre (obligatoire !).
     - Compatible avec niacinamide, peptides, céramides, acide hyaluronique. Éviter dans un premier temps les AHA/BHA forts et la vitamine C pure (les utiliser le matin).

     ## Effets secondaires & précautions
     - **Effets temporaires courants** (1-6 semaines) : rougeurs, sécheresse, desquamation, picotements, légère purge (pour les peaux acnéiques).
     - **Photosensibilité** accrue → risque de coups de soleil et taches si pas de SPF.
     - **Contre-indiqué** pendant la grossesse et l’allaitement (principe de précaution – risque tératogène).
     - Test patch recommandé 24-48 h avant première utilisation.
     - Ne pas utiliser sur peau lésée, brûlée ou eczémateuse.
     - Conserver à l’abri de la lumière, chaleur et air (flacon opaque, pompe airless idéal).

     ## Rétinol vs autres rétinoïdes
     - **Esters de rétinol** (palmitate, acétate…) → très doux, pour peaux ultra-sensibles, mais moins puissants.
     - **Rétinal (rétinaldéhyde)** → 1 seule étape de conversion, jusqu’à 11× plus efficace que le rétinol, excellente tolérance.
     - **Acide rétinoïque (trétinoïne)** → forme active pure, sur ordonnance uniquement, très puissante mais très irritante.

     Le rétinol reste le meilleur compromis efficacité / tolérance / accessibilité en cosmétique libre.

     **Conseil expert** : associez-le à des actifs apaisants (centella, bisabolol, panthénol) et à une routine barrière cutanée renforcée pour un confort optimal.
     `,

    category: 'actif',
  },
  {
    name: 'Bakuchiol',
    slug: INGREDIENT_SLUGS.BAKUCHIOL,
    description: 'Alternative végétale douce au rétinol, anti-âge sans irritation.',
    content: `
     # Bakuchiol

     Alternative végétale douce au rétinol, extraite des graines de Psoralea corylifolia (plante babchi). Il mime les effets anti-âge du rétinol (stimulation du collagène, renouvellement cellulaire, réduction des rides) sans irritation, sans rougeurs, sans desquamation et sans photosensibilisation. Idéal pour peaux sensibles, réactives, débutants en actifs puissants, ou pendant la grossesse/allaitement (sous avis médical).

     ## INCI
     BAKUCHIOL

     ## Concentration typique
     0,5 à 1 % (le plus souvent 0,5–1 % dans les sérums et crèmes efficaces).
     Études cliniques majeures ont utilisé 0,5 % deux fois par jour avec d’excellents résultats et très bonne tolérance.
     Pas de limite réglementaire stricte en UE (contrairement au rétinol limité à 0,3 % depuis 2025–2027), ce qui permet des formules plus concentrées si stabilisées.

     ## Mécanisme d’action
     Bakuchiol n’est **pas** un dérivé de vitamine A, mais un meroterpène végétal. Il active des voies génétiques similaires à celles du rétinol (expression de gènes impliqués dans la production de collagène I/III, élastine, et inhibition des MMP-1), sans se lier aux récepteurs RAR/RXR du rétinol.
     Résultat :
     - Augmente la synthèse de collagène et d’élastine
     - Accélère le renouvellement cellulaire
     - Réduit l’inflammation et l’oxydation
     - Inhibe la mélanogenèse (action anti-taches)
     Le tout avec une stabilité photochimique excellente (pas de dégradation au soleil) et sans altérer la barrière cutanée.

     ## Bienfaits prouvés (études cliniques)
     - **Anti-âge** : réduit rides et ridules, améliore fermeté, élasticité et densité cutanée (études 12 semaines : résultats comparables au rétinol 0,5 %).
     - **Éclat & teint** : atténue hyperpigmentation, taches solaires et post-inflammatoires.
     - **Texture** : affine le grain de peau, lisse les irrégularités.
     - **Antioxydant & apaisant** : protège contre le stress oxydatif, réduit l’inflammation.
     Étude clé (British Journal of Dermatology, 2019 & revues 2024–2025) : bakuchiol 0,5 % = efficacité quasi identique au rétinol sur photo-vieillissement, mais **significativement moins irritant** (pas de scaling, stinging, rougeurs rapportés).

     Résultats visibles dès 4–8 semaines, optimaux après 12 semaines d’utilisation régulière.

     ## Comment l’utiliser (guide pratique)
     - **Matin et/ou soir** (pas photosensibilisant → utilisable en journée).
     - Peau propre, sèche ou légèrement humide.
     - Quantité : 2–3 gouttes de sérum ou quantité d’un petit pois pour le visage.
     - **Débutants** : commencez tous les soirs (ou 3–4 soirs/semaine), puis quotidien. Pas besoin de phase d’adaptation longue.
     - **Technique** : appliquez après sérum hydratant (acide hyaluronique), avant crème.
     - **Routine du matin** : bakuchiol → hydratant → SPF 30+ (recommandé même sans photosensibilisation).
     - **Routine du soir** : nettoyage → bakuchiol → hydratant riche.

     ## Compatibilités & associations gagnantes
     - **Parfait avec** : niacinamide, peptides, céramides, acide hyaluronique, centella asiatica, panthénol (apaisant).
     - **Vitamine C** (stable) : matin ou soir, super combo antioxydant + éclat.
     - **AHA/BHA doux** (lactique, mandélique, salicylique faible %) : possible le soir, surveillez la tolérance.
     - **Rétinol / rétinoïdes** : oui ! Beaucoup combinent bakuchiol le matin + rétinol le soir, ou alternent les jours pour booster les résultats tout en minimisant irritations.
     - **Éviter en layering agressif** : très forts AHA/BHA en même temps si peau sensible (risque cumulatif de sécheresse).

     ## Effets secondaires & précautions
     - Très rare : légère sécheresse ou picotements transitoires chez peaux ultra-réactives (quasi inexistant vs rétinol).
     - **Pas de photosensibilité** confirmée en études cliniques.
     - **Grossesse & allaitement** : considéré comme sûr par la majorité des experts (pas de risque tératogène connu, structure chimique différente du rétinol). Souvent recommandé comme alternative. **Toujours consulter un médecin** avant utilisation (données limitées mais rassurantes).
     - Test patch 24–48 h conseillé si peau très réactive.
     - Conserver à température ambiante, à l’abri de la chaleur extrême (stable à la lumière).

     ## Bakuchiol vs Rétinol – comparatif rapide
     | Critère              | Bakuchiol                          | Rétinol                              |
     |----------------------|------------------------------------|--------------------------------------|
     | Origine              | Végétale (Psoralea corylifolia)   | Dérivé vitamine A                   |
     | Irritation           | Très faible                        | Moyenne à élevée (surtout début)    |
     | Photosensibilisation | Non                                | Oui (SPF obligatoire)               |
     | Utilisation          | Matin + soir                       | Soir uniquement                     |
     | Grossesse            | Généralement OK (avis médical)     | Contre-indiqué                      |
     | Concentration typique| 0,5–1 %                            | 0,1–0,3 % (UE max 0,3 %)            |
     | Vitesse résultats    | Progressive (4–12 semaines)        | Plus rapide mais avec purge         |
     | Peaux cibles         | Sensibles, réactives, enceintes    | Tous (avec précautions)             |

     **Conseil expert** : le bakuchiol est le choix n°1 pour introduire un actif anti-âge puissant sans stresser la barrière cutanée. Il peut même potentialiser un rétinol plus tard en routine mixte. Associez-le à une bonne hydratation et protection solaire pour des résultats durables et glowy !
     `,
    category: 'actif',
  },
  {
    name: 'Vitamine C',
    slug: INGREDIENT_SLUGS.VITAMIN_C,
    description: 'Antioxydant puissant qui illumine et protège contre les radicaux libres.',
    content: `
     # Vitamine C

     Antioxydant star qui illumine le teint, protège contre les radicaux libres, booste la synthèse de collagène et atténue taches pigmentaires, hyperpigmentation et signes de fatigue. Elle redonne éclat, uniformité et vitalité à la peau, tout en renforçant sa défense contre pollution, UV et stress oxydatif. Parfaite pour tous les types de peau cherchant glow naturel et prévention du vieillissement.

     ## INCI
     - **Forme pure** : ASCORBIC ACID (L-Ascorbic Acid)
     - **Dérivés stables** : ASCORBYL GLUCOSIDE, SODIUM ASCORBYL PHOSPHATE (SAP), MAGNESIUM ASCORBYL PHOSPHATE (MAP), 3-O-ETHYL ASCORBIC ACID, ASCORBYL TETRAISOPALMITATE, TETRAHEXYLDECYL ASCORBATE (THD Ascorbate)…

     ## Concentration typique
     - **Acide ascorbique pur (L-Ascorbic Acid)** : 10-20 % (15 % souvent optimal pour équilibre efficacité / tolérance ; au-delà de 20 %, irritation ↑ sans gain majeur prouvé).
     - **Dérivés** : 5-15 % (souvent 10-12 % pour ascorbyl glucoside ou SAP ; jusqu’à 20-30 % pour certains liposolubles comme THD ou 3-O-ethyl).
     Concentration idéale en 2025-2026 : **10-15 %** pour la plupart des peaux (études confirment pénétration et bénéfices maximaux sans excès d’irritation). Débuter à 8-10 % si peau sensible. Pas de limite réglementaire stricte en UE pour la vitamine C (contrairement au rétinol ou vitamine A).

     ## Mécanisme d’action
     La vitamine C (acide ascorbique) est un cofacteur essentiel pour les enzymes prolyl et lysyl hydroxylases → stabilise et stimule la production de collagène.
     - Neutralise les radicaux libres (ROS) générés par UV, pollution → protection antioxydante directe.
     - Inhibe la tyrosinase → réduit la formation de mélanine → action anti-taches et éclaircissante.
     - Régénère la vitamine E → synergie antioxydante renforcée.
     - Favorise la réparation cutanée et diminue l’inflammation post-UV.

     Les dérivés se convertissent en acide ascorbique dans la peau (plus lentement, mais avec moins d’irritation et meilleure stabilité).

     ## Bienfaits prouvés (études cliniques)
     - **Éclat & uniformité** : réduit teint terne, hyperpigmentation, taches solaires/post-acné (efficace dès 4-8 semaines).
     - **Anti-âge** : augmente collagène I/III, améliore fermeté, élasticité, réduit ridules fines.
     - **Protection** : photoprotection complémentaire (pas un filtre UV, mais renforce défense contre photo-vieillissement).
     - **Antioxydant global** : combat stress oxydatif quotidien (pollution, lumière bleue).
     - **Anti-inflammatoire** : apaise rougeurs, aide peaux acnéiques (surtout SAP).

     Résultats optimaux après 8-12 semaines d’utilisation régulière ; plus rapides avec forme pure + ferulic acid + vitamine E.

     ## Comment l’utiliser (guide pratique)
     - **Matin idéalement** (protection antioxydante diurne), possible soir si toléré.
     - Peau propre, sèche ou légèrement humide.
     - Quantité : 3-4 gouttes de sérum ou petit pois pour le visage + cou.
     - **Ordre** : après nettoyage → vitamine C → hydratant → SPF 30+ (indispensable le matin !).
     - **Débutants / peaux sensibles** : commencez 3-4 matins/semaine, puis quotidien.
     - **Formes pures** : pH bas (<3.5) → appliquer sur peau sèche pour minimiser picotements.
     - **Astuce stabilité** : choisir flacon opaque/airless/pompe, conserver au frais et à l’abri de la lumière (oxydation = couleur jaune/orange → jeter).

     ## Compatibilités & associations gagnantes
     - **Parfait avec** : vitamine E + acide férulique (boost stabilité et efficacité x8), niacinamide (éclat + apaisant), acide hyaluronique (hydratation), peptides, céramides.
     - **Matin** : combo antioxydant ultime (vit C + niacinamide + SPF).
     - **Soir** : alterner avec rétinol/bakuchiol (vit C matin, rétinol soir) ou superposer si toléré.
     - **Éviter layering agressif** : AHA/BHA forts le même moment (irritation cumulée) ; attendre 15-30 min si combinaison.

     ## Effets secondaires & précautions
     - **Forme pure** : picotements, rougeurs, sécheresse possibles (surtout >15 % ou pH très bas).
     - **Dérivés** : quasi sans irritation (choix n°1 peaux sensibles/réactives).
     - **Photosensibilité** : non (au contraire, protège !), mais SPF obligatoire.
     - **Grossesse & allaitement** : **sûre et recommandée** (antioxydant doux, sans risque tératogène connu). Souvent conseillée pour lutter contre masque de grossesse et teint terne. Consultez un médecin si doute sur la formule complète.
     - Test patch 24-48 h si peau réactive.
     - Éviter sur peau lésée ou eczémateuse.

     ## Vitamine C pure vs Dérivés – comparatif rapide
     | Critère              | Acide ascorbique pur (LAA)         | Dérivés (SAP, MAP, Glucoside, THD…) |
     |----------------------|------------------------------------|-------------------------------------|
     | Puissance            | La plus élevée (gold standard)     | Moyenne à bonne (conversion lente)  |
     | Stabilité            | Faible (s’oxyde vite)              | Excellente (pH neutre, lumière/air) |
     | Irritation           | Moyenne à élevée (picotements)     | Très faible                         |
     | pH requis            | <3.5                               | Neutre à légèrement acide           |
     | Pénétration          | Excellente si pH bas               | Variable (liposolubles >)           |
     | Peaux cibles         | Peaux normales à mixtes, tolérantes| Sensibles, réactives, enceintes     |
     | Concentration typique| 10-20 %                            | 5-15 % (jusqu’à 20-30 % certains)   |
     | Utilisation          | Matin (idéal)                      | Matin + soir possible               |

     **Conseil expert** : pour un glow maximal sans risque, optez pour un sérum stabilisé (ex. LAA 15 % + ferulic + E) ou un dérivé liposoluble (THD Ascorbate) si peau sensible. Associez toujours à un SPF large spectre et une hydratation riche pour potentialiser les effets et protéger la barrière cutanée. La vitamine C reste l’actif le plus polyvalent pour un teint lumineux et sain au quotidien !
     `,
    category: 'actif',
  },

  // ── Acides exfoliants ───────────────────────
  {
    name: 'Acide Salicylique',
    slug: INGREDIENT_SLUGS.SALICYLIC_ACID,
    description:
      "BHA liposoluble, pénètre les pores pour lutter contre l'acné et les points noirs.",
    content: `
    # Acide Salicylique

    BHA (beta-hydroxy acid) liposoluble, exfoliant chimique qui pénètre au cœur des pores pour dissoudre le sébum, les cellules mortes et les impuretés. Idéal pour peaux grasses, mixtes, acnéiques, points noirs, pores dilatés et texture irrégulière. Action anti-inflammatoire, antibactérienne et kératolytique → réduit boutons, comédons, rougeurs et brillance excessive.

    ## INCI
    SALICYLIC ACID

    ## Concentration typique
    - **Exfoliant / anti-acné** : 0,5 à 2 % (2 % est la concentration la plus courante et efficace en OTC pour usage quotidien ; au-delà souvent localisé ou rinse-off).
    - **Conservateur** : jusqu’à 0,5 % (selon SCCS et réglementation UE).
    - **Localisé / spot treatment** : jusqu’à 5 % (crèmes ou patchs ciblés).
    En UE (2026) : max 2 % pour produits non rincés sur le visage/corps adulte ; limite plus stricte (0,1-0,5 %) pour enfants/enfants en bas âge selon usages. Pas de restriction majeure pour adultes si bien formulé.

    ## Mécanisme d’action
    L’acide salicylique est lipophile → il pénètre facilement les follicules pileux et les pores obstrués. Il :
    - Dissout le « ciment » intercellulaire (kératolytique) → exfolie en profondeur sans frotter.
    - Fluidifie le sébum accumulé → désobstrue et réduit la taille des pores.
    - Inhibe la production de prostaglandines → anti-inflammatoire (réduit rougeurs et gonflements).
    - A une légère action antimicrobienne contre Cutibacterium acnes (bactérie acnéique).
    - Améliore la forme interne des pores sur le long terme → moins de comédons futurs.

    ## Bienfaits prouvés (études cliniques)
    - **Anti-acné** : réduit comédons ouverts/fermés, boutons inflammatoires, microkystes (efficace dès 2-4 semaines).
    - **Pores & texture** : affine l’apparence des pores dilatés, lisse la peau rugueuse.
    - **Anti-inflammatoire** : apaise rougeurs, post-boutons et irritation.
    - **Exfoliation douce** : élimine cellules mortes, prévient accumulation de sébum.
    - **Prévention** : régule production de sébum, diminue brillance et risque de nouvelles poussées.

    Résultats optimaux après 4-12 semaines ; souvent une « purge » initiale (voir ci-dessous) accélère la clarté cutanée.

    ## Comment l’utiliser (guide pratique)
    - **Soir de préférence** (photosensibilisant léger → SPF matin obligatoire).
    - Peau propre et sèche.
    - Quantité : 2-3 gouttes de sérum ou petit pois pour le visage ; localisé sur zones touchées.
    - **Débutants / peaux sensibles** : commencez 2-3 soirs/semaine, puis quotidien si toléré.
    - **Protocole** : nettoyage → acide salicylique → hydratant riche (céramides, niacinamide, hyaluronique).
    - **Technique sandwich** (si irritation) : hydratant → BHA → hydratant.
    - **Matin** : possible si toléré, mais toujours suivi de SPF 30+ large spectre.
    - Éviter contour yeux, lèvres, zones lésées.

    ## Compatibilités & associations gagnantes
    - **Parfait avec** : niacinamide (apaisant + régule sébum), acide hyaluronique/céramides (renforce barrière), centella/panthénol (anti-rougeurs).
    - **Vitamine C** : oui (matin C, soir BHA) ou alterner.
    - **Bakuchiol** : excellent combo (matin bakuchiol, soir BHA).
    - **Rétinol / rétinoïdes** : possible mais prudence → alterner les soirs (ex. BHA lundi/mercredi/vendredi, rétinol autres soirs) pour éviter irritation cumulée. Commencer lentement.
    - **AHA (glycolique, lactique)** : alterner ou utiliser faible % ; risque irritation si layering agressif.
    - **Éviter layering immédiat** : très forts AHA + BHA même soir si peau sensible ; attendre 15-30 min si combo.

    ## Effets secondaires & précautions
    - **Effets courants** (surtout début) : sécheresse, desquamation, picotements, rougeurs transitoires.
    - **Purge cutanée** : poussée temporaire d’imperfections (4-8 semaines) → microkystes et comédons remontent plus vite → signe que ça marche ! Persévérez avec hydratation renforcée.
    - **Photosensibilité** : légère → SPF quotidien indispensable.
    - **Grossesse & allaitement** : prudence recommandée. Faibles concentrations (<2 %) topiques considérées généralement sûres par beaucoup d’experts (pas absorbé systémiquement en quantité significative), mais principe de précaution : éviter ou limiter (surtout >2 % ou grandes surfaces). Alternatives : niacinamide, azélaïque, acide hyaluronique. **Toujours consulter un médecin/dermatologue**.
    - Test patch 24-48 h conseillé.
    - Éviter sur peau très sèche, eczémateuse, lésée ou post-peeling.
    - Conserver à température ambiante, flacon opaque.

    ## Acide Salicylique vs autres exfoliants – comparatif rapide
    | Critère              | Acide Salicylique (BHA)            | AHA (glycolique, lactique)         | PHA (gluconolactone)               |
    |----------------------|------------------------------------|------------------------------------|------------------------------------|
    | Solubilité           | Liposoluble (pénètre pores)        | Hydrosoluble (surface)             | Hydrosoluble (très doux)           |
    | Action principale    | Désobstrue pores, anti-acné        | Exfolie surface, anti-âge          | Exfolie + hydrate, antioxydant     |
    | Irritation           | Moyenne (purge possible)           | Moyenne à élevée                   | Très faible                        |
    | Peaux cibles         | Grasses, acnéiques, pores dilatés  | Sèches, matures, taches            | Sensibles, réactives               |
    | Concentration typique| 0,5-2 %                            | 5-10 %                             | 5-15 %                             |
    | Utilisation          | Soir (idéal)                       | Soir                               | Matin + soir                       |
    | Photosensibilité     | Légère                             | Oui                                | Faible                             |

    **Conseil expert** : l’acide salicylique est l’actif n°1 pour transformer une peau acnéique/grasse en peau nette et mate. Introduisez-le progressivement, hydratez intensément et protégez du soleil pour éviter irritation et maximiser les bénéfices. Associez à niacinamide pour booster tolérance et résultats anti-imperfections. Patience pendant la purge → la peau en sort plus belle et équilibrée !
    `,

    category: 'actif',
  },
  {
    name: 'Acide Glycolique',
    slug: INGREDIENT_SLUGS.GLYCOLIC_ACID,
    description: 'AHA le plus petit, exfolie en surface pour lisser et éclaircir le teint.',
    content: `
     # Acide Glycolique

     AHA (alpha-hydroxy acid) le plus petit et le plus puissant : exfolie en surface et en profondeur pour lisser la texture, booster l’éclat, réduire ridules, taches pigmentaires et marques post-acné. Stimule le renouvellement cellulaire, augmente collagène et hydratation naturelle. Idéal pour peaux ternes, matures, mixtes à normales, ou avec hyperpigmentation/sun damage.

     ## INCI
     GLYCOLIC ACID

     ## Concentration typique
     - **OTC quotidien** : 5-10 % (8-10 % souvent optimal pour efficacité / tolérance ; 5 % pour débutants/sensibles).
     - **Peelings maison ou pros** : 20-70 % (uniquement sous supervision dermato).
     En UE (2026) : pas de limite réglementaire stricte pour acide glycolique (contrairement au rétinol max 0,3 % ou BHA 2 %), mais SCCS recommande prudence >10 % en usage quotidien pour éviter irritation. pH bas (<4) essentiel pour efficacité (plus le pH est bas, plus l’acide est actif).

     ## Mécanisme d’action
     Molécule la plus petite des AHA → pénètre profondément l’épiderme. Il :
     - Dissout les liaisons entre cornéocytes (kératolytique) → exfolie cellules mortes, accélère turnover cellulaire.
     - Stimule prolifération kératinocytes/fibroblastes → boost collagène I/III, élastine et acide hyaluronique.
     - Inhibe tyrosinase → réduit production mélanine → action anti-taches et éclaircissante.
     - Améliore hydratation naturelle (augmente NMF et hyaluronique).
     Effet global : peau plus lisse, ferme, lumineuse, pores affinés, texture affinée.

     ## Bienfaits prouvés (études cliniques)
     - **Anti-âge** : réduit ridules fines, améliore fermeté/élasticité, atténue photo-vieillissement (études 8-12 semaines : + collagène, + éclat).
     - **Éclat & uniformité** : exfolie surface → teint plus lumineux, homogène dès 4-6 semaines.
     - **Hyperpigmentation** : atténue taches solaires, melasma, post-inflammatoires (inhibe mélanine + accélère élimination pigments).
     - **Texture & pores** : lisse rugosités, affine grain de peau.
     - **Acné léger** : prévient comédons, réduit marques (moins puissant que BHA sur pores obstrués).

     Résultats optimaux après 8-12 semaines ; souvent une légère desquamation initiale signe d’efficacité.

     ## Comment l’utiliser (guide pratique)
     - **Soir uniquement** (photosensibilisant → augmente sensibilité UV).
     - Peau propre et sèche (éviter humidité pour minimiser picotements).
     - Quantité : 2-4 gouttes sérum ou petit pois pour visage + cou.
     - **Débutants / sensibles** : commencez 2-3 soirs/semaine, puis quotidien.
     - **Protocole** : nettoyage → acide glycolique → attendre 15-30 min → hydratant riche (céramides, hyaluronique).
     - **Technique sandwich** (si irritation) : hydratant → glycolique → hydratant.
     - **Matin** : toujours SPF 30+ large spectre (obligatoire !).
     - Éviter contour yeux/lèvres sauf produit spécifique.

     ## Compatibilités & associations gagnantes
     - **Parfait avec** : niacinamide (apaise + boost éclat), acide hyaluronique/céramides (hydrate + barrière), peptides, centella/panthénol.
     - **Vitamine C** : super combo matin (C) + soir (glycolique) ou alterner.
     - **Bakuchiol** : excellent (matin bakuchiol, soir glycolique).
     - **Rétinol / BHA** : alterner soirs (ex. glycolique lundi/jeudi, rétinol mardi/vendredi) pour éviter irritation cumulée. Commencer lentement.
     - **Éviter layering agressif** : BHA fort ou rétinol même soir si peau sensible ; attendre 20-30 min si combo.

     ## Effets secondaires & précautions
     - **Effets courants** (début) : picotements, rougeurs, sécheresse, desquamation légère (1-4 semaines).
     - **Photosensibilité** : accrue → SPF quotidien indispensable (risque taches si oubli).
     - **Grossesse & allaitement** : généralement sûr à <10 % topique (pas de risque tératogène connu, absorption faible). Souvent recommandé vs rétinol/salicylique fort pour hyperpigmentation/masque grossesse. **Consultez médecin** (principe précaution pour peelings forts).
     - Test patch 24-48 h conseillé.
     - Éviter peau lésée, eczémateuse, post-peeling ou très sensible.
     - Conserver flacon opaque, à l’abri lumière/chaleur.

     ## Acide Glycolique vs autres exfoliants – comparatif rapide
     | Critère              | Acide Glycolique (AHA)             | Acide Salicylique (BHA)            | PHA (gluconolactone)               |
     |----------------------|------------------------------------|------------------------------------|------------------------------------|
     | Solubilité           | Hydrosoluble (surface + profondeur)| Liposoluble (pénètre pores)        | Hydrosoluble (très doux)           |
     | Action principale    | Exfolie surface, anti-âge, taches  | Désobstrue pores, anti-acné        | Exfolie + hydrate, antioxydant     |
     | Pénétration          | Profonde (molécule petite)         | Profonde dans pores                | Superficielle                      |
     | Irritation           | Moyenne à élevée                   | Moyenne (purge possible)           | Très faible                        |
     | Peaux cibles         | Ternes, matures, hyperpigmentées   | Grasses, acnéiques, pores dilatés  | Sensibles, réactives               |
     | Concentration typique| 5-10 %                             | 0,5-2 %                            | 5-15 %                             |
     | Utilisation          | Soir                               | Soir                               | Matin + soir                       |
     | Photosensibilité     | Oui                                | Légère                             | Faible                             |

     **Conseil expert** : l’acide glycolique est l’exfoliant n°1 pour un glow rapide et un anti-âge visible. Introduisez-le progressivement, hydratez intensément et protégez du soleil pour éviter irritation et maximiser bénéfices. Associez à niacinamide ou hyaluronique pour une tolérance optimale. Patience : la peau devient plus lisse, lumineuse et rebondie en 2-3 mois !
     `,
    category: 'actif',
  },
  {
    name: 'Acide Lactique',
    slug: INGREDIENT_SLUGS.LACTIC_ACID,
    description: 'AHA hydratant, doux exfoliant et humectant.',
    content: `
     # Acide Lactique

     AHA (alpha-hydroxy acid) issu de la fermentation du lait ou de sucres végétaux, le plus doux et hydratant de la famille. Exfolie doucement la surface cutanée tout en agissant comme humectant naturel → parfait pour peaux sèches, sensibles, matures ou déshydratées. Améliore texture, éclat, hydratation, atténue ridules fines et marques pigmentaires sans irritation majeure.

     ## INCI
     LACTIC ACID

     ## Concentration typique
     - **Usage quotidien OTC** : 5-10 % (8-10 % souvent optimal pour équilibre exfoliation / hydratation ; 5 % pour peaux très sensibles/débutants).
     - **Formules avancées** : jusqu’à 12 % dans certaines études (amélioration texture sans irritation accrue).
     En UE (2026) : pas de limite réglementaire stricte spécifique pour l’acide lactique (contrairement au rétinol ou BHA), mais prudence recommandée >10 % en usage quotidien pour minimiser irritation. pH bas (<4) essentiel pour efficacité maximale.

     ## Mécanisme d’action
     Molécule plus grande que le glycolique → pénètre moins profondément, reste majoritairement en surface. Il :
     - Dissout les liaisons intercellulaires (kératolytique doux) → exfolie cellules mortes, accélère turnover cellulaire.
     - Attire et retient l’eau (humectant) → booste hydratation naturelle, stimule production de céramides et NMF (facteurs naturels d’hydratation).
     - Stimule synthèse collagène et glycosaminoglycanes (GAGs) → améliore fermeté, épaisseur épidermique.
     - Inhibe légèrement tyrosinase → réduit hyperpigmentation et taches.
     Effet global : exfoliation + hydratation simultanée → barrière cutanée renforcée, moins de sécheresse post-exfoliation.

     ## Bienfaits prouvés (études cliniques)
     - **Hydratation & barrière** : augmente hydratation, restaure fonction barrière (études 2025 sur xérose/eczéma : réduit sécheresse, démangeaisons).
     - **Exfoliation douce** : lisse texture, affine grain de peau, réduit rugosités sans desquamation agressive.
     - **Anti-âge** : atténue ridules fines, booste collagène, améliore élasticité et fermeté (efficace dès 4-8 semaines).
     - **Éclat & uniformité** : illumine teint terne, atténue marques post-acné/hyperpigmentation légère.
     - **Peaux sensibles** : tolérance excellente, souvent préféré au glycolique pour moins d’irritation.

     Résultats optimaux après 8-12 semaines ; hydratation visible dès les premières utilisations.

     ## Comment l’utiliser (guide pratique)
     - **Soir de préférence** (photosensibilisant léger → SPF matin obligatoire).
     - Peau propre et sèche.
     - Quantité : 2-4 gouttes sérum ou petit pois pour visage + cou.
     - **Débutants / sensibles** : commencez 2-3 soirs/semaine, puis quotidien.
     - **Protocole** : nettoyage → acide lactique → attendre 10-20 min → hydratant riche (céramides, hyaluronique).
     - **Technique sandwich** (si besoin) : hydratant → lactique → hydratant.
     - **Matin** : possible si toléré, toujours suivi de SPF 30+ large spectre.
     - Éviter contour yeux/lèvres sauf produit dédié.

     ## Compatibilités & associations gagnantes
     - **Parfait avec** : acide hyaluronique (boost hydratation), niacinamide (apaise + éclat), céramides/panthénol (renforce barrière), centella.
     - **Vitamine C** : super combo (matin C, soir lactique).
     - **Bakuchiol** : excellent (matin bakuchiol, soir lactique).
     - **Rétinol / BHA** : alterner soirs (ex. lactique lundi/mercredi, rétinol mardi/jeudi) pour minimiser irritation.
     - **Acide glycolique** : possible en alternance ou faible % ; lactique plus doux pour layering prudent.
     - **Éviter layering agressif** : forts AHA/BHA même soir si peau sensible.

     ## Effets secondaires & précautions
     - **Effets courants** (rares) : picotements légers, sécheresse minime (beaucoup moins que glycolique).
     - **Photosensibilité** : légère → SPF quotidien indispensable.
     - **Grossesse & allaitement** : **généralement sûr** à <10 % topique (pas de risque tératogène connu, absorption faible ; souvent recommandé comme alternative douce aux rétinol/salicylique). Idéal pour hyperpigmentation/masque grossesse. **Consultez médecin** pour confirmation.
     - Test patch 24-48 h conseillé.
     - Éviter peau lésée, eczémateuse active ou post-peeling.
     - Conserver flacon opaque, à l’abri lumière/chaleur.

     ## Acide Lactique vs Acide Glycolique – comparatif rapide
     | Critère              | Acide Lactique                     | Acide Glycolique                   |
     |----------------------|------------------------------------|------------------------------------|
     | Taille moléculaire   | Plus grande (pénètre moins profond)| Plus petite (pénètre plus profond) |
     | Action principale    | Exfolie + hydrate fortement        | Exfolie puissante, anti-âge/taches |
     | Irritation           | Très faible                        | Moyenne à élevée                   |
     | Hydratation          | Excellente (humectant naturel)     | Moyenne                            |
     | Peaux cibles         | Sèches, sensibles, déshydratées    | Ternes, matures, hyperpigmentées   |
     | Concentration typique| 5-10 %                             | 5-10 %                             |
     | Utilisation          | Soir (ou matin si toléré)          | Soir                               |
     | Photosensibilité     | Légère                             | Oui                                |

     **Conseil expert** : l’acide lactique est l’AHA idéal pour introduire l’exfoliation chimique sans stresser la peau – surtout si sèche, sensible ou en hiver. Il hydrate en même temps qu’il exfolie, ce qui le rend parfait pour routines minimalistes ou peaux réactives. Associez à une hydratation riche et SPF pour un teint glowy, lisse et rebondi durablement !
     `,
    category: 'actif',
  },

  // ── Hydratants & barrière renforcés ───────────────────────
  {
    name: 'Acide Hyaluronique',
    slug: INGREDIENT_SLUGS.HYALURONIC_ACID,
    description: "Humectant star capable de retenir jusqu'à 1000× son poids en eau.",
    content:
      "# Acide Hyaluronique\n\nHydrate en profondeur, repulpe et réduit l'apparence des ridules.\n\n## INCI\nSODIUM HYALURONATE / HYALURONIC ACID (multi-masse souvent)\n\n## Concentration typique\n0.1-2%.",
    category: 'excipient',
  },
  // ── Autres très courants / trending ───────────────────────
  {
    name: 'Peptides',
    slug: INGREDIENT_SLUGS.PEPTIDES,
    description: "Chaînes d'acides aminés qui boostent le collagène et raffermissent.",
    content:
      '# Peptides\n\nSignalent à la peau de produire plus de collagène, élastine et acide hyaluronique. Très utilisés en anti-âge.\n\n## INCI\nvarie (Palmitoyl Tripeptide-1, Copper Tripeptide-1, Matrixyl…)\n\n## Concentration typique\nvariable selon le type (souvent 1-5%).',
    category: 'actif',
  },
  {
    name: 'Allantoïne',
    slug: INGREDIENT_SLUGS.ALLANTOIN,
    description: 'Apaisante, adoucissante et favorise la régénération.',
    content:
      '# Allantoïne\n\nCalme les irritations, hydrate légèrement et aide à la cicatrisation.\n\n## INCI\nALLANTOIN\n\n## Concentration typique\n0.1-2%.',
    category: 'excipient',
  },
  // ── Peptides & anti-âge ciblé ───────────────────────
  {
    name: 'Matrixyl 3000',
    slug: INGREDIENT_SLUGS.MATRIXYL_3000,
    description:
      "Complexe breveté qui stimule fortement la production de collagène et d'élastine pour réduire les rides.",
    content:
      "# Matrixyl 3000\n\nCombinaison de deux peptides (Palmitoyl Tripeptide-1 + Palmitoyl Tetrapeptide-7) qui booste jusqu'à +350% la synthèse de collagène selon les études du fabricant. Réduit rides, améliore fermeté et élasticité.\n\n## INCI\nPALMITOYL TRIPEPTIDE-1, PALMITOYL TETRAPEPTIDE-7 (souvent listé comme 'Matrixyl 3000')\n\n## Concentration typique\n3-10% (le plus efficace autour de 3-5% dans les sérums).",
    category: 'actif',
  },
  {
    name: 'Argireline',
    slug: INGREDIENT_SLUGS.ARGIRELINE,
    description:
      "Peptide relaxant musculaire ('Botox-like') qui atténue les rides d'expression sans injection.",
    content:
      "# Argireline\n\nAcetyl Hexapeptide-8 inhibe la libération d'acétylcholine pour détendre les muscles faciaux. Idéal pour rides du front, pattes d'oie et rides du sourire.\n\n## INCI\nACETYL HEXAPEPTIDE-8 (ou Acetyl Hexapeptide-3 anciennement)\n\n## Concentration typique\n5-10% (souvent 10% dans les formules 'Botox in a bottle').",
    category: 'actif',
  },
  {
    name: 'Copper Tripeptide-1 (GHK-Cu)',
    slug: INGREDIENT_SLUGS.COPPER_TRIPEPTIDE_1,
    description: 'Peptide cuivré régénérant qui booste collagène, élasticité et cicatrisation.',
    content: `
     # Copper Tripeptide-1 (GHK-Cu)

     Peptide cuivré régénérant naturel (présent dans le plasma humain), transporteur de cuivre qui accélère la réparation cutanée, stimule collagène/élastine/glycosaminoglycanes, réduit inflammation et protège contre radicaux libres. Idéal pour peaux matures, abîmées, post-traitements (laser, microneedling), cicatrices, perte d’élasticité ou signes de photo-vieillissement. Action anti-âge douce, sans irritation majeure ni photosensibilisation.

     ## INCI
     COPPER TRIPEPTIDE-1
     (ou TRIPEPTIDE-1 COPPER, GHK-Cu, Copper Tripeptide)

     ## Concentration typique
     - **Sérums/crèmes OTC** : 0,5-2 % (1 % courant dans produits bleutés comme The Ordinary ou NIOD ; 0,05-0,1 % dans études pour fermeté visible).
     - **Formules avancées** : 0,01-0,5 % (efficace même à très faible dose grâce à nanomolaire activité).
     Pas de limite réglementaire stricte en UE (autorisé sans restriction spécifique, évalué cas par cas via CPSR). Concentrations >2 % rares (risque irritation ou surcharge cuivre). Débuter bas si peau sensible.

     ## Mécanisme d’action
     GHK-Cu est un tripeptide (glycyl-histidyl-lysine) complexé au cuivre (Cu²⁺). Il agit comme signal moléculaire :
     - Stimule fibroblastes → boost synthèse collagène I/III, élastine, glycosaminoglycanes (acide hyaluronique inclus).
     - Active enzymes cuivre-dépendantes (lysyl oxydase) → renforce réticulation collagène pour fermeté durable.
     - Module gènes (reset expression en cellules âgées) → réduit MMP (dégradation matrice), augmente TIMP (inhibiteurs).
     - Antioxydant + anti-inflammatoire → neutralise ROS, baisse cytokines (IL-1β, TNF-α), attire cellules immunitaires pour réparation.
     - Améliore cicatrisation → accélère angiogenèse, épithélialisation, réduit fibrose.
     Pénètre bien (hydrophile, parfois encapsulé liposomes pour + efficacité).

     ## Bienfaits prouvés (études cliniques 2025-2026)
     - **Anti-âge** : augmente fermeté (22 % en 12 semaines à 0,05 %), élasticité, densité cutanée ; réduit ridules, rides fines, relâchement (études split-face vs placebo).
     - **Réparation & cicatrisation** : accélère guérison post-laser/microneedling (25 % plus rapide), réduit érythème/inflammation post-procédure.
     - **Texture & éclat** : lisse peau rugueuse, atténue photodamage, hyperpigmentation, cicatrices/acné.
     - **Antioxydant** : protège UV/pollution, réduit stress oxydatif.
     - **Hydratation** : boost hyaluronique naturel → peau plus rebondie.
     Résultats visibles dès 4-8 semaines, optimaux 12+ semaines ; plus progressifs que rétinol mais sans purge/irritation.

     ## Comment l’utiliser (guide pratique)
     - **Matin et/ou soir** (non photosensibilisant → utilisable jour/nuit).
     - Peau propre, sèche ou humide.
     - Quantité : 2-3 gouttes sérum ou petit pois pour visage + cou.
     - **Débutants** : quotidien dès le départ (tolérance excellente).
     - **Protocole** : après nettoyage/sérum hydratant → GHK-Cu → hydratant/crème.
     - **Post-traitement** : idéal après microneedling/laser pour accélérer récupération.
     - **Matin** : GHK-Cu → SPF 30+ (renforce protection sans interférer).
     - Éviter contour yeux si formule non dédiée (risque bleuissement temporaire).

     ## Compatibilités & associations gagnantes
     - **Parfait avec** : acide hyaluronique, niacinamide, céramides, panthénol, centella (boost réparation + apaisant).
     - **Peptides** : super combo multi-peptides.
     - **Bakuchiol** : matin bakuchiol, soir GHK-Cu (ou layering).
     - **Vitamine C** : dérivés stables OK ; éviter acide ascorbique pur (risque oxydation cuivre → inefficacité).
     - **Rétinol / rétinoïdes** : alterner (ex. rétinol soir, GHK-Cu matin) ou layering prudent (GHK-Cu apaise irritation rétinol).
     - **Acides (AHA/BHA)** : alterner ; éviter layering agressif (attendre 20-30 min ou jours différents).
     - **Éviter** : acides forts (glycolique élevé), vitamine C pure, EDTA/certain chelateurs (décoloration verte), carnosine (violet).

     ## Effets secondaires & précautions
     - **Très rare** : rougeurs légères, picotements, bleuissement temporaire (cuivre → rince).
     - **Irritation** : minime (mieux toléré que rétinol/acides).
     - **Photosensibilité** : **non** (au contraire, protège).
     - **Grossesse & allaitement** : **généralement sûr** (naturel, absorption faible, pas tératogène connu ; CIR 2014/revues 2025 rassurantes). Souvent recommandé post-grossesse pour cicatrices/élasticité. **Consultez médecin** (principe précaution).
     - Test patch 24-48 h si réactive.
     - Éviter sur peau lésée ouverte (sauf post-traitement supervisé).
     - Conserver frais, flacon opaque (cuivre sensible oxydation).

     ## GHK-Cu vs autres anti-âge – comparatif rapide
     | Critère              | GHK-Cu (Copper Tripeptide-1)       | Rétinol                            | Bakuchiol                          |
     |----------------------|------------------------------------|------------------------------------|------------------------------------|
     | Origine              | Naturel (plasma humain)            | Dérivé vitamine A                  | Végétal (Psoralea)                 |
     | Mécanisme principal  | Régénération, collagène via cuivre | Turnover cellulaire, gènes RAR     | Mimétisme rétinol sans irritation  |
     | Irritation           | Très faible                        | Moyenne à élevée (purge)           | Très faible                        |
     | Photosensibilité     | Non                                | Oui                                | Non                                |
     | Grossesse            | Généralement OK                    | Contre-indiqué                     | OK (avis médical)                  |
     | Concentration typique| 0,5-2 % (efficace bas)             | 0,1-0,3 %                          | 0,5-1 %                            |
     | Vitesse résultats    | Progressive (4-12 semaines)        | Rapide mais irritant               | Progressive                        |
     | Peaux cibles         | Matures, sensibles, post-traitement| Tous (avec précautions)            | Sensibles, enceintes               |

     **Conseil expert** : GHK-Cu est l’actif régénérant n°1 pour une anti-âge douce et réparatrice – parfait si rétinol irrite ou pour booster récupération cutanée. Il potentialise bien bakuchiol/peptides/hydratants. Utilisez-le quotidiennement avec hydratation riche et SPF pour fermeté, éclat et résilience durable. La peau paraît plus dense, lisse et "remodelée" sur le long terme sans stress !
     `,
    category: 'actif',
  },
  {
    name: 'Palmitoyl Tripeptide-1',
    slug: INGREDIENT_SLUGS.PALMITOYL_TRIPEPTIDE_1,
    description: "Signal peptide qui stimule la production de collagène et d'acide hyaluronique.",
    content:
      '# Palmitoyl Tripeptide-1\n\nPartie du complexe Matrixyl 3000, agit comme un signal pour les fibroblastes : plus de collagène, meilleure hydratation et réparation.\n\n## INCI\nPALMITOYL TRIPEPTIDE-1\n\n## Concentration typique\nVariable, souvent combiné (1-5% dans les blends).',
    category: 'actif',
  },
  {
    name: 'Palmitoyl Tetrapeptide-7',
    slug: INGREDIENT_SLUGS.PALMITOYL_TETRAPEPTIDE_7,
    description: "Réduit l'inflammation et booste collagène pour une peau plus ferme et apaisée.",
    content:
      "# Palmitoyl Tetrapeptide-7\n\nDiminue l'inflammation (via IL-6), stimule collagène et améliore la fermeté. Souvent associé à Palmitoyl Tripeptide-1 dans Matrixyl 3000.\n\n## INCI\nPALMITOYL TETRAPEPTIDE-7\n\n## Concentration typique\nVariable, efficace à faible dose dans les complexes.",
    category: 'actif',
  },
  {
    name: 'Palmitoyl Pentapeptide-4',
    slug: INGREDIENT_SLUGS.PALMITOYL_PENTAPEPTIDE_4,
    description: 'Matrixyl original, puissant stimulateur de collagène pour lisser les rides.',
    content:
      "# Palmitoyl Pentapeptide-4\n\nLe 'Matrixyl' original (Matrixyl 1999), augmente collagène, glycosaminoglycanes et réduit profondeur des rides de façon prouvée.\n\n## INCI\nPALMITOYL PENTAPEPTIDE-4\n\n## Concentration typique\n3-10% (études sur 3%).",
    category: 'actif',
  },
  {
    name: 'Syn-Ake',
    slug: INGREDIENT_SLUGS.SYN_AKE,
    description:
      'Peptide inspiré du venin de serpent, relaxe les muscles pour effet anti-rides expressifs.',
    content:
      "# Syn-Ake\n\nDipeptide diaminobutyroyl benzylamide diacetate : mime le waglerin-1 du venin, bloque les contractions musculaires pour lisser rides du front et pattes d'oie.\n\n## INCI\nDIPEPTIDE DIAMINOBUTYROYL BENZYLAMIDE DIACETATE\n\n## Concentration typique\n1-4% (effet visible à 4%).",
    category: 'actif',
  },
  // ── Dérivés de Vitamine C ───────────────────────
  {
    name: 'Ascorbyl Glucoside',
    slug: INGREDIENT_SLUGS.ASCORBYL_GLUCOSIDE,
    description: 'Dérivé stable et doux, libère lentement la vitamine C pour un éclat progressif.',
    content:
      '# Ascorbyl Glucoside\n\nDérivé hydrosoluble très stable (pH neutre), converti lentement en acide ascorbique dans la peau. Idéal peaux sensibles, illumine sans irritation, anti-taches et antioxydant modéré.\n\n## INCI\nASCORBYL GLUCOSIDE\n\n## Concentration typique\n1-5% (efficace dès 2%).',
    category: 'actif',
  },
  {
    name: 'Sodium Ascorbyl Phosphate (SAP)',
    slug: INGREDIENT_SLUGS.SODIUM_ASCORBYL_PHOSPHATE,
    description: 'Dérivé stable, anti-acné et brighten, très doux pour peaux sensibles.',
    content:
      '# Sodium Ascorbyl Phosphate\n\nForme hydrosoluble stable, convertie en vitamine C dans la peau. Propriétés anti-inflammatoires et antibactériennes (bon pour acné), illumine, réduit taches, moins irritant que la pure.\n\n## INCI\nSODIUM ASCORBYL PHOSPHATE\n\n## Concentration typique\n1-10% (souvent 3-5%).',
    category: 'actif',
  },
  {
    name: 'Magnesium Ascorbyl Phosphate (MAP)',
    slug: INGREDIENT_SLUGS.MAGNESIUM_ASCORBYL_PHOSPHATE,
    description: 'Dérivé stable et hydratant, booste collagène et hydrate.',
    content:
      '# Magnesium Ascorbyl Phosphate\n\nStable en formule, hydrosoluble, stimule collagène, illumine et hydrate légèrement. Bon compromis pour peaux sèches/sensibles.\n\n## INCI\nMAGNESIUM ASCORBYL PHOSPHATE\n\n## Concentration typique\n1-10% (efficace à 3-5%).',
    category: 'actif',
  },
  {
    name: 'THD Ascorbate (Ascorbyl Tetraisopalmitate)',
    slug: INGREDIENT_SLUGS.THD_ASCORBATE,
    description:
      'Dérivé liposoluble stable de vitamine C : pénétration profonde, éclat, réduction taches et anti-âge doux. Faible irritation, idéal peaux sèches/sensibles, mais antioxydant in vitro limité.',
    category: 'actif',
    content: `
  (Tetrahexyldecyl Ascorbate / Ascorbyl Tetraisopalmitate)\n\n

  Forme huileuse ultra-stable de vitamine C (dérivé tétra-ester liposoluble).\n
  Pénètre profondément dans la peau.\n
  Illumine le teint, atténue taches pigmentaires (hyperpigmentation, melasma, post-acné).\n
  Booste collagène et élastine.\n
  Protège contre radicaux libres.\n
  Améliore hydratation et barrière cutanée.\n\n

  Très faible irritation comparé à l’acide ascorbique pur.\n
  Parfait pour peaux sensibles, sèches, matures ou réactives.\n
  Texture huileuse idéale pour sérums/crèmes riches.\n
  Pas photosensibilisant → matin et soir OK.\n\n

  ## INCI\n
  TETRAHEXYLDECYL ASCORBATE
  ou
  ASCORBYL TETRAISOPALMITATE\n\n
  (même ingrédient ; synonymes : THD / THDA / THDC / ATIP / VC-IP)\n\n

  ## Concentration typique\n
  - 3-10 % : zone la plus courante et efficace (5-10 % dans la plupart des sérums performants).\n
  - 20 % : exemple The Ordinary Ascorbyl Tetraisopalmitate Solution 20 % (bon pour éclat quotidien).\n
  - 30 % : exemple Revision C+ Correcting Complex 30 % (meilleurs résultats cliniques sur pigmentation).\n\n
  Même à 1-3 % → déjà actif grâce à haute biodisponibilité et pénétration profonde.\n
  Pas de limite réglementaire stricte en UE.\n\n

  ## Mécanisme d’action\n
  THD est un ester tétra de l’acide ascorbique avec acide 2-hexyldécanoïque (chaînes grasses longues).\n
  Liposoluble → traverse facilement la barrière lipidique de l’épiderme.\n\n
  Actions principales :\n
  - Conversion enzymatique lente en acide ascorbique pur dans la peau (pénétration plus profonde que LAA).\n
  - Neutralise radicaux libres (antioxydant, mais in vitro faible vs LAA).\n
  - Stimule fibroblastes → synthèse collagène I/III, élastine, glycosaminoglycanes (dont acide hyaluronique).\n
  - Inhibe tyrosinase → réduit production de mélanine → anti-taches puissante.\n
  - Améliore barrière cutanée et hydratation (effet émollient huileux).\n\n
  Pénétration : x3 supérieure à l’acide ascorbique pur (études in vitro/in vivo).\n\n

  ## Bienfaits prouvés\n
  - **Éclat & uniformité du teint** : illumine teint terne, atténue taches solaires/post-inflammatoires/melasma.\n  Résultats visibles dès 4-8 semaines ; jusqu’à +35 % amélioration hyperpigmentation à 20 % + stabilisants en 12 semaines.\n- **Anti-âge** : augmente fermeté, élasticité, densité cutanée ; réduit ridules fines et photodamage (boost collagène visible).\n- **Protection** : antioxydant complémentaire SPF (neutralise ROS UV/pollution).\n- **Hydratation & confort** : texture huileuse renforce barrière, apaise peaux sèches.\n- **Anti-inflammatoire** : réduit rougeurs, aide acné légère.\n\n
  Tolérance excellente : quasi zéro irritation, picotements ou sécheresse vs acide ascorbique pur.\n\n

  ## Insights du podcast Chemist Confessions (#148, 2025)\n
  Gloria et Victoria analysent THD en profondeur :\n\n
  - **Antioxydant in vitro** : très faible.\n  ORAC assay → THD ~1 000 μmol TE/g vs acide ascorbique ~30 000 μmol TE/mg (soit ~30 000x plus faible après ajustement).\n  IC50 lipid peroxidation ~38,7 mg/mL (vs acétyl zingérone ~46 μg/mL → beaucoup moins efficace).\n  Verdict : "pas un bon antioxydant pur".\n\n
  - **Stabilité** : discutable sans stabilisants.\n  Dégrade à 0 % en 6 min sous stress oxydatif (singlet oxygen/UV).\n  Avec acétyl zingérone → ~75 % restant après 10 min.\n  "Pas aussi stable qu’on le dit ; besoin d’autres antioxydants pour le booster."\n\n
  - **Études cliniques clés** :\n  - 5 % THD seul : décevant (pigment ↓ ~4 %, rougeurs ↑, rides ↑ ~7 % à 8 semaines).\n  - 5 % + acétyl zingérone : mieux mais faible (pigment ↓ ~4-10 %).\n  - 20 % + acétyl zingérone (Image Skincare Power-C) : ~35 % amélioration hyperpigmentation à 12 semaines.\n  - 30 % + acétyl zingérone + autres (Revision C+) : impressionnant sur pigmentation (grade ↓ de ~7 à 4,5) et uniformité ton malgré soleil estival (n=10).\n\n
  - **Verdict global** : Pas un remplaçant antioxydant fiable vs acide ascorbique.\n  Bénéfices surtout sur hyperpigmentation/uniformité à hautes concentrations (20-30 %) + stabilisants.\n  "Higher is better".\n  Pas leur dérivé préféré ; ils préfèrent ascorbyl phosphates (SAP/MAP) ou LAA pour prévention.\n\n

  ## Comment l’utiliser (guide pratique)\n
  - **Quand** : Matin et/ou soir (stable à la lumière/air, non photosensibilisant).\n
  - **Préparation** : Peau propre, sèche ou légèrement humide.\n
  - **Quantité** : 2-4 gouttes sérum (ou petit pois) pour visage + cou.\n
  - **Débutants** : Quotidien dès le départ (très doux, pas de phase d’adaptation).\n
  - **Ordre idéal** : Nettoyage → THD → attendre 5-10 min → hydratant/crème riche.\n
  - **Matin** : THD → SPF 30+ large spectre (combo antioxydant puissant).\n
  - **Astuces** :\n  - Texture huileuse → excellent en layering huileux ou crème.\n  - Peut jaunir lentement si oxydé (stable avec bons stabilisants).\n  - Éviter layering agressif avec AHA/BHA forts (alterner ou attendre 20-30 min).\n\n

  ## Compatibilités & associations gagnantes\n
  - **Parfait avec** :\n  - Niacinamide (éclat + apaisant).\n  - Acide hyaluronique / céramides (hydratation).\n  - Peptides, centella asiatica, panthénol.\n- **Bakuchiol / GHK-Cu** : Duo régénérant anti-âge doux.\n- **Rétinol / rétinoïdes** : Alterner (THD matin, rétinol soir) ou layering prudent (THD apaise irritations).\n- **Autres Vit C** : Combiner avec dérivés aqueux (ascorbyl glucoside/SAP) ou acide ascorbique pur (prudence oxydation).\n- **À éviter** : Acides forts (glycolique/salicylique élevé) en layering immédiat si peau sensible.\n\n

  ## Effets secondaires & précautions\n
  - **Très rares** : Sensation huileuse (normale), oxydation lente si mal conservé (jaunissement).\n
  - **Photosensibilité** : Non (au contraire, protège et complète SPF).\n
  - **Grossesse & allaitement** : Sûr et recommandé (dérivé doux, absorption contrôlée, pas tératogène connu).\n
  - Test patch 24-48 h si peau ultra-réactive.\n
  - Conservation : Flacon opaque/airless/pompe, frais et à l’abri lumière/chaleur (stabilité excellente avec stabilisants comme acétyl zingérone).\n\n

  ## Comparatif THD vs autres formes Vitamine C\n
  | Critère                  | THD Ascorbate                          | Acide ascorbique pur (LAA)     | Ascorbyl Glucoside / SAP / MAP | 3-O-Ethyl Ascorbic Acid |
  |--------------------------|----------------------------------------|--------------------------------|--------------------------------|-------------------------|
  | Solubilité               | Huile (liposoluble)                    | Eau                            | Eau                            | Eau/huile mixte         |
  | Stabilité                | Excellente (avec stabilisants)         | Faible                         | Bonne                          | Bonne                   |
  | Pénétration              | Très profonde (x3 vs LAA)              | Moyenne                        | Moyenne                        | Bonne                   |
  | Irritation               | Très faible                            | Moyenne+                       | Très faible                    | Faible                  |
  | Antioxydant in vitro     | Faible (ORAC ~30 000x < LAA)           | Très fort                      | Moyen                          | Moyen-fort              |
  | Concentration typique    | 5-30 % (higher better pigmentation)    | 10-20 %                        | 5-15 %                         | 1-5 %                   |
  | Peaux cibles             | Sèches/sensibles/matures, pigmentation | Normales/mixtes/tolérantes     | Sensibles/hydratantes          | Tous                    |
  | Utilisation              | Matin + soir                           | Matin idéal                    | Matin + soir                   | Matin + soir            |
  | Bénéfices principaux     | Pigmentation, hydratation, anti-âge doux | Antioxydant max, éclat       | Éclat doux, anti-acné (SAP)    | Éclat + taches          |\n\n

  **Conseil expert**
  THD Ascorbate est excellent pour un glow quotidien sans irritation, surtout peaux sèches/sensibles ou ciblage pigmentation (taches, melasma) → privilégie 20-30 % + stabilisants (acétyl zingérone comme dans Revision/Image).\n
  Pas le meilleur antioxydant pur (in vitro faible vs LAA) → ne remplace pas un sérum Vit C puissant pour prévention globale.\n
  Choisis formules cliniquement testées.\n
  Associer toujours SPF large spectre + hydratation riche → teint lumineux, ferme et protégé durablement.\n
  Upgrade doux et confortable vs Vit C instable – idéal en routine mixte !
  `,
  },
  {
    name: '3-O-Ethyl Ascorbic Acid',
    slug: INGREDIENT_SLUGS.THREE_O_ETHYL_ASCORBIC_ACID,
    description: 'Dérivé éthylé ultra-stable, bonne pénétration et activité proche de la pure.',
    content:
      "# 3-O-Ethyl Ascorbic Acid\n\nDérivé liposoluble/hydrosoluble hybride, très stable, pénètre efficacement, inhibe tyrosinase (anti-taches), booste collagène. Un des plus prometteurs en 2025-2026.\n\n## INCI\n3-O-ETHYL ASCORBIC ACID\n\n## Concentration typique\n1-5% (jusqu'à 10% dans certaines formules).",
    category: 'actif',
  },
  {
    name: 'Ascorbyl Palmitate',
    slug: INGREDIENT_SLUGS.ASCORBYL_PALMITATE,
    description: 'Dérivé liposoluble basique, antioxydant dans les formules huileuses.',
    content:
      '# Ascorbyl Palmitate\n\nForme liposoluble stable, utilisée comme antioxydant dans les huiles/crèmes. Moins pénétrante que THD ou Tetraisopalmitate, mais protège la formule et offre bénéfices légers.\n\n## INCI\nASCORBYL PALMITATE\n\n## Concentration typique\n0.1-1% (souvent pour stabilité formule).',
    category: 'actif',
  },
] as const
