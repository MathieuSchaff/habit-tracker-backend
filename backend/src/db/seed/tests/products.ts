import { allProductData } from '../products/index'
import { allProductTags } from '../products/product-tags'

// 1. Définition d'un type qui garantit la présence du slug
type ProductWithSlug = (typeof allProductData)[number] & { slug: string }

// 2. Fonction de garde (Type Guard)
// Elle permet à TS de comprendre que si la fonction renvoie true, le type est "nettoyé"
function hasSlug(product: (typeof allProductData)[number]): product is ProductWithSlug {
  return typeof product.slug === 'string'
}

function CheckProductTags() {
  // 3. On filtre avec le type guard : ici TS sait que 'validProducts' n'a QUE des slugs string
  const validProducts = allProductData.filter(hasSlug)

  // 4. On crée les entrées. On précise explicitement le type du Map pour la sécurité.
  const entries: [string, number][] = validProducts.map((p) => [p.slug, 0])

  const slugsCounter = new Map<string, number>(entries)

  for (const association of allProductTags) {
    const slug = association.productSlug
    const current = slugsCounter.get(slug)

    // On ne traite que si le slug existe dans notre référentiel de produits valides
    if (current !== undefined) {
      slugsCounter.set(slug, current + 1)
    }
  }

  const withoutTags: string[] = []
  const withTags: [string, number][] = []

  for (const [slug, count] of slugsCounter) {
    if (count === 0) {
      withoutTags.push(slug)
    } else {
      withTags.push([slug, count])
    }
  }

  console.log("--- 📋 RAPPORT D'AUDIT PRODUITS ---")

  if (withoutTags.length > 0) {
    console.error(`❌ ${withoutTags.length} produits sans tags :`)
    console.table(withoutTags.map((s) => ({ 'Slug Orphelin': s })))
  }

  console.log('\n📊 Répartition :')
  console.table(Object.fromEntries(withTags))
  for (const association of allProductTags) {
    const slug = association.productSlug
    const current = slugsCounter.get(slug)

    if (current !== undefined) {
      slugsCounter.set(slug, current + 1)
    } else {
      // AJOUTE CE LOG ICI :
      console.warn(`⚠️ Tag trouvé pour un slug inconnu : "${slug}"`)
    }
  }
}
CheckProductTags()
