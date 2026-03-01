import { ingredientTagAssociations } from '../IngredientsTags/seed-ingredients-tags'
import { INGREDIENT_SLUGS } from '../ingredients/seed-ingredients'

function ChecIngredientsSlugs() {
  const slugsCounter = new Map<string, number>(
    Object.values(INGREDIENT_SLUGS).map((slug) => [slug, 0] as const)
  )
  for (const ingredientTagAssociation of ingredientTagAssociations) {
    const slug = ingredientTagAssociation.ingredientSlug
    if (slugsCounter.has(slug)) {
      slugsCounter.set(slug, (slugsCounter.get(slug) ?? 0) + 1)
    }
  }
  const withoutTags: string[] = []
  const withTags: [string, number][] = []

  // On parcourt le Map une seule fois pour ventiler dans les deux listes
  for (const [slug, count] of slugsCounter) {
    if (count === 0) {
      withoutTags.push(slug)
    } else {
      withTags.push([slug, count])
    }
  }

  console.log("--- RAPPORT D'AUDIT ---")

  if (withoutTags.length > 0) {
    console.error(`❌ ${withoutTags.length} ingrédients n'ont AUCUN tag :`)
    console.table(withoutTags.map((slug) => ({ 'Ingrédient Orphelin': slug })))
  }

  console.log('\n📊 Ingrédients avec tags :')
  // On transforme en objet juste pour l'affichage console.table si on veut un beau tableau
  console.table(Object.fromEntries(withTags))
}
ChecIngredientsSlugs()
