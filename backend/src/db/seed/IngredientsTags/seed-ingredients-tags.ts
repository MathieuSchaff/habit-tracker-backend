export const ingredientTagAssociations: { ingredientSlug: string; tagSlug: string }[] = [
  // ── Vitamine C pure & dérivés ─────────────────────────────────────────────
  // vitamin-c / l-ascorbic-acid / ascorbic-acid → même molécule, slugs distincts dans le seed
  { ingredientSlug: 'vitamin-c', tagSlug: 'anti-taches' },
  { ingredientSlug: 'vitamin-c', tagSlug: 'anti-age' },
  { ingredientSlug: 'vitamin-c', tagSlug: 'anti-oxydant' },
  { ingredientSlug: 'vitamin-c', tagSlug: 'eclat' },
  { ingredientSlug: 'vitamin-c', tagSlug: 'hyperpigmentation' },
  { ingredientSlug: 'vitamin-c', tagSlug: 'soin-de-jour' },

  { ingredientSlug: 'l-ascorbic-acid', tagSlug: 'anti-taches' },
  { ingredientSlug: 'l-ascorbic-acid', tagSlug: 'anti-age' },
  { ingredientSlug: 'l-ascorbic-acid', tagSlug: 'anti-oxydant' },
  { ingredientSlug: 'l-ascorbic-acid', tagSlug: 'eclat' },
  { ingredientSlug: 'l-ascorbic-acid', tagSlug: 'hyperpigmentation' },
  { ingredientSlug: 'l-ascorbic-acid', tagSlug: 'soin-de-jour' },

  { ingredientSlug: 'ascorbic-acid', tagSlug: 'anti-taches' },
  { ingredientSlug: 'ascorbic-acid', tagSlug: 'anti-age' },
  { ingredientSlug: 'ascorbic-acid', tagSlug: 'anti-oxydant' },
  { ingredientSlug: 'ascorbic-acid', tagSlug: 'eclat' },
  { ingredientSlug: 'ascorbic-acid', tagSlug: 'hyperpigmentation' },
  { ingredientSlug: 'ascorbic-acid', tagSlug: 'soin-de-jour' },

  { ingredientSlug: '3-o-ethyl-ascorbic-acid', tagSlug: 'anti-taches' },
  { ingredientSlug: '3-o-ethyl-ascorbic-acid', tagSlug: 'hyperpigmentation' },
  { ingredientSlug: '3-o-ethyl-ascorbic-acid', tagSlug: 'anti-age' },
  { ingredientSlug: '3-o-ethyl-ascorbic-acid', tagSlug: 'anti-oxydant' },
  { ingredientSlug: '3-o-ethyl-ascorbic-acid', tagSlug: 'eclat' },
  { ingredientSlug: '3-o-ethyl-ascorbic-acid', tagSlug: 'soin-de-jour' },
  { ingredientSlug: '3-o-ethyl-ascorbic-acid', tagSlug: 'serum' },

  { ingredientSlug: 'ascorbyl-glucoside', tagSlug: 'anti-taches' },
  { ingredientSlug: 'ascorbyl-glucoside', tagSlug: 'hyperpigmentation' },
  { ingredientSlug: 'ascorbyl-glucoside', tagSlug: 'anti-oxydant' },
  { ingredientSlug: 'ascorbyl-glucoside', tagSlug: 'eclat' },
  { ingredientSlug: 'ascorbyl-glucoside', tagSlug: 'soin-de-jour' },
  { ingredientSlug: 'ascorbyl-glucoside', tagSlug: 'peau-sensible' },

  { ingredientSlug: 'ascorbyl-palmitate', tagSlug: 'anti-age' },
  { ingredientSlug: 'ascorbyl-palmitate', tagSlug: 'anti-oxydant' },
  { ingredientSlug: 'ascorbyl-palmitate', tagSlug: 'soin-de-nuit' },
  { ingredientSlug: 'ascorbyl-palmitate', tagSlug: 'peau-seche' },

  { ingredientSlug: 'magnesium-ascorbyl-phosphate', tagSlug: 'anti-taches' },
  { ingredientSlug: 'magnesium-ascorbyl-phosphate', tagSlug: 'anti-acne' },
  { ingredientSlug: 'magnesium-ascorbyl-phosphate', tagSlug: 'anti-oxydant' },
  { ingredientSlug: 'magnesium-ascorbyl-phosphate', tagSlug: 'peau-sensible' },
  { ingredientSlug: 'magnesium-ascorbyl-phosphate', tagSlug: 'serum' },

  { ingredientSlug: 'sodium-ascorbyl-phosphate', tagSlug: 'anti-acne' },
  { ingredientSlug: 'sodium-ascorbyl-phosphate', tagSlug: 'hyperpigmentation' },
  { ingredientSlug: 'sodium-ascorbyl-phosphate', tagSlug: 'anti-oxydant' },
  { ingredientSlug: 'sodium-ascorbyl-phosphate', tagSlug: 'sebo-regulateur' },
  { ingredientSlug: 'sodium-ascorbyl-phosphate', tagSlug: 'peau-mixte' },
  { ingredientSlug: 'sodium-ascorbyl-phosphate', tagSlug: 'serum' },

  { ingredientSlug: 'thd-ascorbate', tagSlug: 'anti-age' },
  { ingredientSlug: 'thd-ascorbate', tagSlug: 'hyperpigmentation' },
  { ingredientSlug: 'thd-ascorbate', tagSlug: 'anti-oxydant' },
  { ingredientSlug: 'thd-ascorbate', tagSlug: 'eclat' },
  { ingredientSlug: 'thd-ascorbate', tagSlug: 'peau-seche' },
  { ingredientSlug: 'thd-ascorbate', tagSlug: 'soin-de-nuit' },

  // ── Dépigmentants hors vitamine C ─────────────────────────────────────────
  { ingredientSlug: 'alpha-arbutin', tagSlug: 'anti-taches' },
  { ingredientSlug: 'alpha-arbutin', tagSlug: 'hyperpigmentation' },
  { ingredientSlug: 'alpha-arbutin', tagSlug: 'eclat' },
  { ingredientSlug: 'alpha-arbutin', tagSlug: 'post-acne' },
  { ingredientSlug: 'alpha-arbutin', tagSlug: 'serum' },

  { ingredientSlug: 'kojic-acid', tagSlug: 'anti-taches' },
  { ingredientSlug: 'kojic-acid', tagSlug: 'hyperpigmentation' },
  { ingredientSlug: 'kojic-acid', tagSlug: 'eclat' },
  { ingredientSlug: 'kojic-acid', tagSlug: 'serum' },

  { ingredientSlug: 'tranexamic-acid', tagSlug: 'hyperpigmentation' },
  { ingredientSlug: 'tranexamic-acid', tagSlug: 'anti-taches' },
  { ingredientSlug: 'tranexamic-acid', tagSlug: 'rosacee' },
  { ingredientSlug: 'tranexamic-acid', tagSlug: 'eclat' },
  { ingredientSlug: 'tranexamic-acid', tagSlug: 'serum' },

  { ingredientSlug: 'glutathion', tagSlug: 'anti-taches' },
  { ingredientSlug: 'glutathion', tagSlug: 'hyperpigmentation' },
  { ingredientSlug: 'glutathion', tagSlug: 'anti-age' },
  { ingredientSlug: 'glutathion', tagSlug: 'anti-oxydant' },
  { ingredientSlug: 'glutathion', tagSlug: 'eclat' },

  // ── Anti-rougeurs / Rosacée / Peau sensible ───────────────────────────────
  { ingredientSlug: 'azelaic-acid', tagSlug: 'rosacee' },
  { ingredientSlug: 'azelaic-acid', tagSlug: 'anti-rougeurs' },
  { ingredientSlug: 'azelaic-acid', tagSlug: 'anti-acne' },
  { ingredientSlug: 'azelaic-acid', tagSlug: 'hyperpigmentation' },
  { ingredientSlug: 'azelaic-acid', tagSlug: 'couperose' },
  { ingredientSlug: 'azelaic-acid', tagSlug: 'sebo-regulateur' },
  { ingredientSlug: 'azelaic-acid', tagSlug: 'post-acne' },

  { ingredientSlug: 'niacinamide', tagSlug: 'anti-rougeurs' },
  { ingredientSlug: 'niacinamide', tagSlug: 'barriere-cutanee' },
  { ingredientSlug: 'niacinamide', tagSlug: 'peau-mixte' },
  { ingredientSlug: 'niacinamide', tagSlug: 'peau-grasse' },
  { ingredientSlug: 'niacinamide', tagSlug: 'anti-acne' },
  { ingredientSlug: 'niacinamide', tagSlug: 'sebo-regulateur' },
  { ingredientSlug: 'niacinamide', tagSlug: 'eclat' },
  { ingredientSlug: 'niacinamide', tagSlug: 'serum' },

  { ingredientSlug: 'centella-asiatica', tagSlug: 'reparateur' },
  { ingredientSlug: 'centella-asiatica', tagSlug: 'peau-sensible' },
  { ingredientSlug: 'centella-asiatica', tagSlug: 'anti-rougeurs' },
  { ingredientSlug: 'centella-asiatica', tagSlug: 'barriere-cutanee' },

  { ingredientSlug: 'asiaticoside', tagSlug: 'reparateur' },
  { ingredientSlug: 'asiaticoside', tagSlug: 'rosacee' },
  { ingredientSlug: 'asiaticoside', tagSlug: 'peau-reactive' },

  { ingredientSlug: 'panthenol', tagSlug: 'reparateur' },
  { ingredientSlug: 'panthenol', tagSlug: 'humectant' },
  { ingredientSlug: 'panthenol', tagSlug: 'peau-seche' },
  { ingredientSlug: 'panthenol', tagSlug: 'peau-sensible' },
  { ingredientSlug: 'panthenol', tagSlug: 'creme-hydratante' },

  { ingredientSlug: 'allantoin', tagSlug: 'peau-sensible' },
  { ingredientSlug: 'allantoin', tagSlug: 'reparateur' },
  { ingredientSlug: 'allantoin', tagSlug: 'anti-rougeurs' },

  { ingredientSlug: 'glycyrrhetinic-acid', tagSlug: 'anti-rougeurs' },
  { ingredientSlug: 'glycyrrhetinic-acid', tagSlug: 'peau-reactive' },
  { ingredientSlug: 'glycyrrhetinic-acid', tagSlug: 'rosacee' },

  { ingredientSlug: 'ammonium-glycyrrhizate', tagSlug: 'anti-rougeurs' },
  { ingredientSlug: 'ammonium-glycyrrhizate', tagSlug: 'peau-sensible' },

  // Glycyrrhiza inflata = licochalcone A
  { ingredientSlug: 'glycyrrhiza-inflata', tagSlug: 'rosacee' },
  { ingredientSlug: 'glycyrrhiza-inflata', tagSlug: 'anti-rougeurs' },
  { ingredientSlug: 'glycyrrhiza-inflata', tagSlug: 'anti-acne' },
  { ingredientSlug: 'glycyrrhiza-inflata', tagSlug: 'sebo-regulateur' },
  { ingredientSlug: 'glycyrrhiza-inflata', tagSlug: 'anti-oxydant' },

  // licorice-extract = réglisse générique (anti-taches via inhibition tyrosinase)
  { ingredientSlug: 'licorice-extract', tagSlug: 'anti-rougeurs' },
  { ingredientSlug: 'licorice-extract', tagSlug: 'anti-taches' },
  { ingredientSlug: 'licorice-extract', tagSlug: 'hyperpigmentation' },
  { ingredientSlug: 'licorice-extract', tagSlug: 'rosacee' },
  { ingredientSlug: 'licorice-extract', tagSlug: 'peau-sensible' },

  { ingredientSlug: 'heartleaf', tagSlug: 'peau-sensible' },
  { ingredientSlug: 'heartleaf', tagSlug: 'anti-rougeurs' },
  { ingredientSlug: 'heartleaf', tagSlug: 'anti-acne' },
  { ingredientSlug: 'heartleaf', tagSlug: 'sebo-regulateur' },
  { ingredientSlug: 'heartleaf', tagSlug: 'humectant' },

  { ingredientSlug: 'avena-sativa', tagSlug: 'peau-sensible' },
  { ingredientSlug: 'avena-sativa', tagSlug: 'anti-rougeurs' },
  { ingredientSlug: 'avena-sativa', tagSlug: 'reparateur' },

  { ingredientSlug: 'calendula-officinalis', tagSlug: 'peau-sensible' },
  { ingredientSlug: 'calendula-officinalis', tagSlug: 'bio-naturel' },
  { ingredientSlug: 'calendula-officinalis', tagSlug: 'reparateur' },

  { ingredientSlug: 'camellia-sinensis', tagSlug: 'anti-rougeurs' },
  { ingredientSlug: 'camellia-sinensis', tagSlug: 'anti-age' },
  { ingredientSlug: 'camellia-sinensis', tagSlug: 'anti-acne' },
  { ingredientSlug: 'camellia-sinensis', tagSlug: 'anti-oxydant' },
  { ingredientSlug: 'camellia-sinensis', tagSlug: 'sebo-regulateur' },

  { ingredientSlug: 'aloe-vera', tagSlug: 'peau-sensible' },
  { ingredientSlug: 'aloe-vera', tagSlug: 'anti-rougeurs' },
  { ingredientSlug: 'aloe-vera', tagSlug: 'reparateur' },
  { ingredientSlug: 'aloe-vera', tagSlug: 'humectant' },

  // ── Hydratation / Barrière ─────────────────────────────────────────────────
  { ingredientSlug: 'hyaluronic-acid', tagSlug: 'humectant' },
  { ingredientSlug: 'hyaluronic-acid', tagSlug: 'peau-seche' },
  { ingredientSlug: 'hyaluronic-acid', tagSlug: 'serum' },
  { ingredientSlug: 'hyaluronic-acid', tagSlug: 'creme-hydratante' },

  { ingredientSlug: 'sodium-hyaluronate', tagSlug: 'humectant' },
  { ingredientSlug: 'sodium-hyaluronate', tagSlug: 'peau-seche' },
  { ingredientSlug: 'sodium-hyaluronate', tagSlug: 'serum' },

  { ingredientSlug: 'polyglutamic-acid', tagSlug: 'humectant' },
  { ingredientSlug: 'polyglutamic-acid', tagSlug: 'peau-seche' },
  { ingredientSlug: 'polyglutamic-acid', tagSlug: 'serum' },

  { ingredientSlug: 'snow-mushroom', tagSlug: 'humectant' },
  { ingredientSlug: 'snow-mushroom', tagSlug: 'peau-seche' },
  { ingredientSlug: 'snow-mushroom', tagSlug: 'peau-sensible' },

  { ingredientSlug: 'glycerin', tagSlug: 'humectant' },
  { ingredientSlug: 'glycerin', tagSlug: 'creme-hydratante' },
  { ingredientSlug: 'glycerin', tagSlug: 'peau-seche' },

  { ingredientSlug: 'squalane', tagSlug: 'emollient' },
  { ingredientSlug: 'squalane', tagSlug: 'occlusif' },
  { ingredientSlug: 'squalane', tagSlug: 'peau-seche' },
  { ingredientSlug: 'squalane', tagSlug: 'barriere-cutanee' },
  { ingredientSlug: 'squalane', tagSlug: 'soin-de-nuit' },

  { ingredientSlug: 'shea-butter', tagSlug: 'emollient' },
  { ingredientSlug: 'shea-butter', tagSlug: 'occlusif' },
  { ingredientSlug: 'shea-butter', tagSlug: 'peau-seche' },
  { ingredientSlug: 'shea-butter', tagSlug: 'barriere-cutanee' },
  { ingredientSlug: 'shea-butter', tagSlug: 'bio-naturel' },

  { ingredientSlug: 'beef-tallow', tagSlug: 'emollient' },
  { ingredientSlug: 'beef-tallow', tagSlug: 'occlusif' },
  { ingredientSlug: 'beef-tallow', tagSlug: 'barriere-cutanee' },
  { ingredientSlug: 'beef-tallow', tagSlug: 'peau-seche' },
  { ingredientSlug: 'beef-tallow', tagSlug: 'bio-naturel' },

  // Céramides génériques et types spécifiques
  { ingredientSlug: 'ceramides', tagSlug: 'emollient' },
  { ingredientSlug: 'ceramides', tagSlug: 'barriere-cutanee' },
  { ingredientSlug: 'ceramides', tagSlug: 'peau-seche' },
  { ingredientSlug: 'ceramides', tagSlug: 'reparateur' },

  { ingredientSlug: 'ceramide-np', tagSlug: 'emollient' },
  { ingredientSlug: 'ceramide-np', tagSlug: 'barriere-cutanee' },
  { ingredientSlug: 'ceramide-np', tagSlug: 'peau-seche' },
  { ingredientSlug: 'ceramide-np', tagSlug: 'reparateur' },

  { ingredientSlug: 'ceramide-ns', tagSlug: 'emollient' },
  { ingredientSlug: 'ceramide-ns', tagSlug: 'barriere-cutanee' },
  { ingredientSlug: 'ceramide-ns', tagSlug: 'peau-seche' },

  { ingredientSlug: 'ceramide-eop', tagSlug: 'barriere-cutanee' },
  { ingredientSlug: 'ceramide-eop', tagSlug: 'peau-seche' },
  { ingredientSlug: 'ceramide-eop', tagSlug: 'reparateur' },

  { ingredientSlug: 'ceramide-ap', tagSlug: 'barriere-cutanee' },
  { ingredientSlug: 'ceramide-ap', tagSlug: 'peau-seche' },
  { ingredientSlug: 'ceramide-ap', tagSlug: 'exfoliant' },

  { ingredientSlug: 'cholesterol', tagSlug: 'emollient' },
  { ingredientSlug: 'cholesterol', tagSlug: 'barriere-cutanee' },
  { ingredientSlug: 'cholesterol', tagSlug: 'reparateur' },

  { ingredientSlug: 'phytosphingosine', tagSlug: 'barriere-cutanee' },
  { ingredientSlug: 'phytosphingosine', tagSlug: 'anti-acne' },

  { ingredientSlug: 'glycosphingolipids', tagSlug: 'barriere-cutanee' },

  { ingredientSlug: 'sphingomonas-ferment-extract', tagSlug: 'barriere-cutanee' },
  { ingredientSlug: 'sphingomonas-ferment-extract', tagSlug: 'reparateur' },

  { ingredientSlug: 'pentylene-glycol', tagSlug: 'antiseptique' },
  { ingredientSlug: 'pentylene-glycol', tagSlug: 'humectant' },

  { ingredientSlug: 'probiotics', tagSlug: 'barriere-cutanee' },
  { ingredientSlug: 'probiotics', tagSlug: 'peau-sensible' },
  { ingredientSlug: 'probiotics', tagSlug: 'anti-acne' },

  { ingredientSlug: 'postbiotics', tagSlug: 'barriere-cutanee' },
  { ingredientSlug: 'postbiotics', tagSlug: 'peau-sensible' },
  { ingredientSlug: 'postbiotics', tagSlug: 'reparateur' },

  { ingredientSlug: 'rhamnose', tagSlug: 'anti-age' },
  { ingredientSlug: 'rhamnose', tagSlug: 'peau-sensible' },

  // ── Exfoliants / Kératolytiques ───────────────────────────────────────────
  { ingredientSlug: 'glycolic-acid', tagSlug: 'exfoliant' },
  { ingredientSlug: 'glycolic-acid', tagSlug: 'keratolytique' },
  { ingredientSlug: 'glycolic-acid', tagSlug: 'anti-taches' },
  { ingredientSlug: 'glycolic-acid', tagSlug: 'eclat' },
  { ingredientSlug: 'glycolic-acid', tagSlug: 'post-acne' },
  { ingredientSlug: 'glycolic-acid', tagSlug: 'soin-de-nuit' },

  { ingredientSlug: 'lactic-acid', tagSlug: 'exfoliant' },
  { ingredientSlug: 'lactic-acid', tagSlug: 'keratolytique' },
  { ingredientSlug: 'lactic-acid', tagSlug: 'humectant' },
  { ingredientSlug: 'lactic-acid', tagSlug: 'eclat' },
  { ingredientSlug: 'lactic-acid', tagSlug: 'peau-seche' },

  { ingredientSlug: 'mandelic-acid', tagSlug: 'exfoliant' },
  { ingredientSlug: 'mandelic-acid', tagSlug: 'keratolytique' },
  { ingredientSlug: 'mandelic-acid', tagSlug: 'anti-taches' },
  { ingredientSlug: 'mandelic-acid', tagSlug: 'post-acne' },
  { ingredientSlug: 'mandelic-acid', tagSlug: 'peau-sensible' },

  { ingredientSlug: 'salicylic-acid', tagSlug: 'anti-acne' },
  { ingredientSlug: 'salicylic-acid', tagSlug: 'keratolytique' },
  { ingredientSlug: 'salicylic-acid', tagSlug: 'exfoliant' },
  { ingredientSlug: 'salicylic-acid', tagSlug: 'sebo-regulateur' },
  { ingredientSlug: 'salicylic-acid', tagSlug: 'post-acne' },
  { ingredientSlug: 'salicylic-acid', tagSlug: 'peau-mixte' },
  { ingredientSlug: 'salicylic-acid', tagSlug: 'peau-grasse' },

  // pha = Gluconolactone dans le seed
  { ingredientSlug: 'pha', tagSlug: 'exfoliant' },
  { ingredientSlug: 'pha', tagSlug: 'anti-age' },
  { ingredientSlug: 'pha', tagSlug: 'anti-oxydant' },
  { ingredientSlug: 'pha', tagSlug: 'humectant' },
  { ingredientSlug: 'pha', tagSlug: 'peau-sensible' },

  { ingredientSlug: 'urea', tagSlug: 'humectant' },
  { ingredientSlug: 'urea', tagSlug: 'keratolytique' },
  { ingredientSlug: 'urea', tagSlug: 'reparateur' },
  { ingredientSlug: 'urea', tagSlug: 'peau-seche' },

  // souffre = slug dans le seed (avec faute de frappe)
  { ingredientSlug: 'souffre', tagSlug: 'anti-acne' },
  { ingredientSlug: 'souffre', tagSlug: 'antiseptique' },
  { ingredientSlug: 'souffre', tagSlug: 'sebo-regulateur' },
  { ingredientSlug: 'souffre', tagSlug: 'keratolytique' },
  { ingredientSlug: 'souffre', tagSlug: 'peau-mixte' },
  { ingredientSlug: 'souffre', tagSlug: 'peau-grasse' },

  // ── Antiseptique / Nettoyant ──────────────────────────────────────────────
  { ingredientSlug: 'hypochlorous-acid', tagSlug: 'antiseptique' },
  { ingredientSlug: 'hypochlorous-acid', tagSlug: 'rosacee' },
  { ingredientSlug: 'hypochlorous-acid', tagSlug: 'peau-reactive' },
  { ingredientSlug: 'hypochlorous-acid', tagSlug: 'nettoyant' },

  // ── Anti-âge / Rétinoïdes ────────────────────────────────────────────────
  { ingredientSlug: 'retinol', tagSlug: 'anti-age' },
  { ingredientSlug: 'retinol', tagSlug: 'anti-taches' },
  { ingredientSlug: 'retinol', tagSlug: 'anti-acne' },
  { ingredientSlug: 'retinol', tagSlug: 'post-acne' },
  { ingredientSlug: 'retinol', tagSlug: 'sebo-regulateur' },
  { ingredientSlug: 'retinol', tagSlug: 'eclat' },
  { ingredientSlug: 'retinol', tagSlug: 'soin-de-nuit' },

  { ingredientSlug: 'retinal', tagSlug: 'anti-age' },
  { ingredientSlug: 'retinal', tagSlug: 'anti-taches' },
  { ingredientSlug: 'retinal', tagSlug: 'anti-acne' },
  { ingredientSlug: 'retinal', tagSlug: 'post-acne' },
  { ingredientSlug: 'retinal', tagSlug: 'sebo-regulateur' },
  { ingredientSlug: 'retinal', tagSlug: 'eclat' },
  { ingredientSlug: 'retinal', tagSlug: 'soin-de-nuit' },

  { ingredientSlug: 'retinaldehyde', tagSlug: 'anti-age' },
  { ingredientSlug: 'retinaldehyde', tagSlug: 'anti-taches' },
  { ingredientSlug: 'retinaldehyde', tagSlug: 'anti-acne' },
  { ingredientSlug: 'retinaldehyde', tagSlug: 'eclat' },
  { ingredientSlug: 'retinaldehyde', tagSlug: 'soin-de-nuit' },

  { ingredientSlug: 'bakuchiol', tagSlug: 'anti-age' },
  { ingredientSlug: 'bakuchiol', tagSlug: 'peau-sensible' },
  { ingredientSlug: 'bakuchiol', tagSlug: 'soin-de-nuit' },
  { ingredientSlug: 'bakuchiol', tagSlug: 'bio-naturel' },

  // ── Peptides anti-âge ────────────────────────────────────────────────────
  { ingredientSlug: 'peptides', tagSlug: 'anti-age' },
  { ingredientSlug: 'peptides', tagSlug: 'serum' },

  { ingredientSlug: 'matrixyl-3000', tagSlug: 'anti-age' },
  { ingredientSlug: 'matrixyl-3000', tagSlug: 'serum' },

  { ingredientSlug: 'palmitoyl-pentapeptide-4', tagSlug: 'anti-age' },
  { ingredientSlug: 'palmitoyl-pentapeptide-4', tagSlug: 'serum' },

  { ingredientSlug: 'palmitoyl-tetrapeptide-7', tagSlug: 'anti-age' },
  { ingredientSlug: 'palmitoyl-tetrapeptide-7', tagSlug: 'anti-rougeurs' },

  { ingredientSlug: 'palmitoyl-tripeptide-1', tagSlug: 'anti-age' },

  { ingredientSlug: 'argireline', tagSlug: 'anti-age' },
  { ingredientSlug: 'argireline', tagSlug: 'serum' },

  // acetyl-hexapeptide-8 = nom INCI d'Argireline (doublon de slug dans le seed)
  { ingredientSlug: 'acetyl-hexapeptide-8', tagSlug: 'anti-age' },
  { ingredientSlug: 'acetyl-hexapeptide-8', tagSlug: 'serum' },

  { ingredientSlug: 'syn-ake', tagSlug: 'anti-age' },
  { ingredientSlug: 'syn-ake', tagSlug: 'serum' },

  // copper-tripeptide-1 et ghk-cu = même molécule, slugs distincts
  { ingredientSlug: 'copper-tripeptide-1', tagSlug: 'reparateur' },
  { ingredientSlug: 'copper-tripeptide-1', tagSlug: 'anti-age' },
  { ingredientSlug: 'copper-tripeptide-1', tagSlug: 'anti-oxydant' },
  { ingredientSlug: 'copper-tripeptide-1', tagSlug: 'peau-sensible' },

  { ingredientSlug: 'ghk-cu', tagSlug: 'reparateur' },
  { ingredientSlug: 'ghk-cu', tagSlug: 'anti-age' },
  { ingredientSlug: 'ghk-cu', tagSlug: 'anti-oxydant' },
  { ingredientSlug: 'ghk-cu', tagSlug: 'peau-sensible' },

  { ingredientSlug: 'copper-peptides', tagSlug: 'reparateur' },
  { ingredientSlug: 'copper-peptides', tagSlug: 'anti-age' },
  { ingredientSlug: 'copper-peptides', tagSlug: 'peau-sensible' },

  { ingredientSlug: 'pdrn', tagSlug: 'reparateur' },
  { ingredientSlug: 'pdrn', tagSlug: 'anti-age' },
  { ingredientSlug: 'pdrn', tagSlug: 'peau-sensible' },

  // ── Antioxydants ─────────────────────────────────────────────────────────
  { ingredientSlug: 'tocopherol', tagSlug: 'anti-oxydant' },
  { ingredientSlug: 'tocopherol', tagSlug: 'anti-age' },
  { ingredientSlug: 'tocopherol', tagSlug: 'soin-de-nuit' },
  { ingredientSlug: 'tocopherol', tagSlug: 'peau-seche' },

  // ── Plantes & extraits botaniques ────────────────────────────────────────
  { ingredientSlug: 'hippophae-rhamnoides', tagSlug: 'anti-age' },
  { ingredientSlug: 'hippophae-rhamnoides', tagSlug: 'anti-oxydant' },
  { ingredientSlug: 'hippophae-rhamnoides', tagSlug: 'eclat' },
  { ingredientSlug: 'hippophae-rhamnoides', tagSlug: 'peau-seche' },
  { ingredientSlug: 'hippophae-rhamnoides', tagSlug: 'bio-naturel' },

  { ingredientSlug: 'silybum-marianum', tagSlug: 'anti-age' },
  { ingredientSlug: 'silybum-marianum', tagSlug: 'anti-oxydant' },
  { ingredientSlug: 'silybum-marianum', tagSlug: 'peau-sensible' },

  { ingredientSlug: 'escin', tagSlug: 'anti-rougeurs' },
  { ingredientSlug: 'escin', tagSlug: 'couperose' },

  { ingredientSlug: 'plankton-extract', tagSlug: 'reparateur' },
  { ingredientSlug: 'plankton-extract', tagSlug: 'anti-age' },

  { ingredientSlug: 'vaccinium-myrtillus', tagSlug: 'anti-age' },
  { ingredientSlug: 'vaccinium-myrtillus', tagSlug: 'anti-oxydant' },
  { ingredientSlug: 'vaccinium-myrtillus', tagSlug: 'bio-naturel' },

  { ingredientSlug: 'ophiopogon-japonicus', tagSlug: 'peau-seche' },
  { ingredientSlug: 'ophiopogon-japonicus', tagSlug: 'humectant' },
  { ingredientSlug: 'ophiopogon-japonicus', tagSlug: 'reparateur' },

  { ingredientSlug: 'ruscus-aculeatus', tagSlug: 'couperose' },
  { ingredientSlug: 'ruscus-aculeatus', tagSlug: 'anti-rougeurs' },

  { ingredientSlug: 'schisandra-sphenanthera', tagSlug: 'peau-sensible' },
  { ingredientSlug: 'schisandra-sphenanthera', tagSlug: 'anti-rougeurs' },
  { ingredientSlug: 'schisandra-sphenanthera', tagSlug: 'anti-oxydant' },
]
