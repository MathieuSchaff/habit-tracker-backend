import { TAG_SLUGS } from '../../tags/seed-tags'
import { SEPHORA_PRODUCT_SLUGS } from './sephora'

export const SEPHORA_PRODUCT_TAGS: { productSlug: string; tagSlug: string }[] = [
  // Crème Apaisante - Acide hyaluronique & Centella asiatica
  {
    productSlug: SEPHORA_PRODUCT_SLUGS.SEPHORA_CREME_APAISANTE_CENTELLA,
    tagSlug: TAG_SLUGS.CREME_HYDRATANTE,
  },
  {
    productSlug: SEPHORA_PRODUCT_SLUGS.SEPHORA_CREME_APAISANTE_CENTELLA,
    tagSlug: TAG_SLUGS.ANTI_ROUGEURS,
  },
  {
    productSlug: SEPHORA_PRODUCT_SLUGS.SEPHORA_CREME_APAISANTE_CENTELLA,
    tagSlug: TAG_SLUGS.REPARATEUR,
  },
  {
    productSlug: SEPHORA_PRODUCT_SLUGS.SEPHORA_CREME_APAISANTE_CENTELLA,
    tagSlug: TAG_SLUGS.PEAU_REACTIVE,
  },
  {
    productSlug: SEPHORA_PRODUCT_SLUGS.SEPHORA_CREME_APAISANTE_CENTELLA,
    tagSlug: TAG_SLUGS.PIGMENTS_VERTS,
  },

  // GLOW Gel-Crème Éclat Vitamine C & Acide Polyglutamique
  {
    productSlug: SEPHORA_PRODUCT_SLUGS.SEPHORA_GLOW_GEL_CREME_VIT_C,
    tagSlug: TAG_SLUGS.CREME_HYDRATANTE,
  },
  { productSlug: SEPHORA_PRODUCT_SLUGS.SEPHORA_GLOW_GEL_CREME_VIT_C, tagSlug: TAG_SLUGS.ECLAT },
  {
    productSlug: SEPHORA_PRODUCT_SLUGS.SEPHORA_GLOW_GEL_CREME_VIT_C,
    tagSlug: TAG_SLUGS.ANTI_OXYDANT,
  },
  { productSlug: SEPHORA_PRODUCT_SLUGS.SEPHORA_GLOW_GEL_CREME_VIT_C, tagSlug: TAG_SLUGS.HUMECTANT },
  {
    productSlug: SEPHORA_PRODUCT_SLUGS.SEPHORA_GLOW_GEL_CREME_VIT_C,
    tagSlug: TAG_SLUGS.PEAU_MIXTE,
  },
]
