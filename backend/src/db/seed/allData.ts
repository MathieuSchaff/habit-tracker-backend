/**
 * ARCHITECTURE DU DATASET : COSMÉTIQUES & INGRÉDIENTS
 * * 1. ENTITÉS PRINCIPALES (Nodes) :
 * - TAG : Une propriété ou bénéfice (ex: "Anti-acné", "Hydratant").
 * - INGREDIENT : Une matière première chimique ou naturelle (ex: "Niacinamide").
 * - PRODUCT : Un article fini commercialisé (ex: "Uriage Roséliane").
 * * 2. SYSTÈME DE CLÉS (Primary Keys) :
 * - Les relations se font exclusivement via des 'Slugs' (Strings uniques).
 * - Tag Key        : TAG_SLUGS (ex: "ANTI_AGE")
 * - Product Key    : allProductSlugs (ex: "URIAGE_ROSELIANE")
 * - Ingredient Key : INGREDIENT_SLUGS (non fourni ici, mais utilisé comme pivot)
 * * 3. TABLES DE LIAISON (Edges / Relations) :
 * - allProductTags : [Product] <-> [Tag]
 * (Définit à qui s'adresse le produit).
 * * - allIngredientProductTags : [Product] <-> [Ingredient]
 * (Définit la composition du produit : contient des 'notes' et 'concentrations').
 * * - ingredientTagAssociations : [Ingredient] <-> [Tag]
 * (Définit les propriétés intrinsèques d'un ingrédient).
 */
