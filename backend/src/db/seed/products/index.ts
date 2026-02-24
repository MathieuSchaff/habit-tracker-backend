// ─── Anti-rougeurs (soins visage AR) ──────────────────────
export {
  PRODUCT_SLUGS as ANTI_ROUGEURS_SLUGS,
  productData as antiRougeursProductData,
} from './anti-rougeurs'
// ─── Acide azélaïque ──────────────────────────────────────
export { AZELAIQUE_SLUGS, azelaicProductData } from './azelaique'
// ─── Colibri Skincare ─────────────────────────────────────
export { COLIBRI_SLUGS, colibriProductData } from './colibri'
// ─── Soins corps ──────────────────────────────────────────
export { CORPS_SLUGS, corpsProductData } from './corps'
// ─── Mixa ─────────────────────────────────────────────────
export { MIXA_SLUGS, mixaProductData } from './mixa'
// ─── Sérums peptides ──────────────────────────────────────
export { SERUMS_PEPTIDES_SLUGS, serumsPeptidesProductData } from './serums-peptides'
// ─── Solaires ─────────────────────────────────────────────
export { SOLAIRES_SLUGS, solairesProductData } from './solaires'
// ─── Toners ───────────────────────────────────────────────
export { TONERS_SLUGS, tonersProductData } from './toners'
// ─── Soins visage (françaises + coréennes) ────────────────
export { VISAGE_SLUGS, visageProductData } from './visage'

// ─── Tous les produits combinés ───────────────────────────
import { productData as antiRougeursProductData } from './anti-rougeurs'
import { azelaicProductData } from './azelaique'
import { colibriProductData } from './colibri'
import { corpsProductData } from './corps'
import { mixaProductData } from './mixa'
import { serumsPeptidesProductData } from './serums-peptides'
import { solairesProductData } from './solaires'
import { tonersProductData } from './toners'
import { visageProductData } from './visage'

export const allProductData = [
  ...antiRougeursProductData,
  ...visageProductData,
  ...corpsProductData,
  ...tonersProductData,
  ...solairesProductData,
  ...serumsPeptidesProductData,
  ...azelaicProductData,
  ...colibriProductData,
  ...mixaProductData,
]
