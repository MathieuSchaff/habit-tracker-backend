// const INPUT_PATH = `${import.meta.dir}/ingredients.ts`
// const OUTPUT_PATH = `${import.meta.dir}/ingredients.sorted.ts`

// async function testerLeTri() {
//   const file = Bun.file(INPUT_PATH)

//   if (!(await file.exists())) {
//     console.error('Erreur : Le fichier source est introuvable.')
//     return
//   }

//   const text = await file.text()

//   // La RegEx pour isoler l'objet
//   const regex = /(export const INGREDIENT_SLUGS = \{)([\s\S]*?)(\} as const)/
//   const match = text.match(regex)

//   if (!match) {
//     console.error("Erreur : Impossible de trouver l'objet INGREDIENT_SLUGS.")
//     return
//   }

//   const [fullMatch, start, content, end] = match

//   // Tri des lignes
//   const lines = content
//     .split('\n')
//     .filter((line) => line.trim().includes(':'))
//     .sort((a, b) => {
//       const keyA = a.trim().split(':')[0]
//       const keyB = b.trim().split(':')[0]
//       return keyA.localeCompare(keyB)
//     })

//   // Reconstruction du nouveau contenu
//   const sortedContent = '\n' + lines.map((l) => `  ${l.trim()}`).join('\n') + '\n'
//   const finalResult = text.replace(fullMatch, `${start}${sortedContent}${end}`)

//   // Écriture dans le NOUVEAU fichier
//   await Bun.write(OUTPUT_PATH, finalResult)

//   console.log(`---`)
//   console.log(`✅ Test terminé !`)
//   console.log(`Source : ${INPUT_PATH}`)
//   console.log(`Résultat : ${OUTPUT_PATH}`)
//   console.log(`---`)
// }

// testerLeTri()
