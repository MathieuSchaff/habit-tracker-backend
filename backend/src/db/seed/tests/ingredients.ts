import { INGREDIENT_SLUGS, ingredientData } from '../ingredients/seed-ingredients'

function AuditSlugsUsage() {
  const usageTracker: Record<string, number[]> = {}

  ingredientData.forEach((item, index) => {
    const slug = item.slug
    if (!usageTracker[slug]) {
      usageTracker[slug] = []
    }
    usageTracker[slug].push(index)
  })
  const report = Object.entries(INGREDIENT_SLUGS).map(([key, value]) => {
    const indexes = usageTracker[value] || []

    return {
      constante: key,
      slug: value,
      nbUtilisations: indexes.length,
      indexFound: indexes.length > 0 ? indexes : null,
    }
  })

  console.table(report)

  const duplicates = report.filter((r) => r.nbUtilisations > 1)
  console.warn('duplicates:', duplicates.length)
  if (duplicates.length > 0) {
    console.warn(' Certains slugs sont utilisés plusieurs fois :', duplicates)
  }

  const unUsed = report.filter((r) => r.nbUtilisations == 0)
  console.warn('unUsed:', unUsed.length)
  if (unUsed.length > 0) {
    console.warn(' Certains slugs sont utilisés plusieurs fois :', unUsed)
  }
}

AuditSlugsUsage()
