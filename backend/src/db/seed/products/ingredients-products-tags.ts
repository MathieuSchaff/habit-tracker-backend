// import {  } from './anua/anua-ingredients-tags'
// import { AROMAZONE_INGREDIENTS_TAGS } from './aromaZone/aromaZone-ingredients-tags'
// import { AZELAIQUE_INGREDIENTS_TAGS } from './azelaique/azelaique-ingredients-tags'
// import { BOJ_INGREDIENTS_TAGS } from './beautyOfJoseon/beautyOfJoseon-ingredients-tags'
// import { CERAVE_INGREDIENTS_TAGS } from './cerave/cerave-ingredients-tags'
// import { COLIBRI_INGREDIENTS_TAGS } from './colibri/colibri-ingredients-tags'
// import { CORPS_INGREDIENTS_TAGS } from './corps/corps-ingredients-tags'
// import { COSRX_INGREDIENTS_TAGS } from './cosrx/cosrx-ingredients-tags'
// import { DR_IDRISS_INGREDIENTS_TAGS } from './drIdriss/drIdriss-ingredients-tags'
// import { DR_SAM_INGREDIENTS_TAGS } from './drSam/drSam-ingredients-tags'
// import { GG_INGREDIENTS_TAGS } from './geekAndGorgeous/geekAndGorgeous-ingredients-tags'
// import {  } from './koreanSkincare/koreanSkincare-ingredients-tags'
// import { MAD_ABOUT_SKIN_INGREDIENTS_TAGS } from './madAboutSkin/madAboutSkin-ingredients-tags'
// import { MIXA_INGREDIENTS_TAGS } from './mixa/mixa-ingredients-tags'
// import { PREQUEL_INGREDIENTS_TAGS } from './prequel/prequel-ingredients-tags'
// import { REMEDY_INGREDIENTS_TAGS } from './remedy/remedy-ingredients-tags'
// import { SEPHORA_INGREDIENTS_TAGS } from './sephora/sephora-ingredient-tags'
// import { SERUMS_PEPTIDES_INGREDIENTS_TAGS } from './serums-peptides/serums-peptides-ingredients-tags'
// import { SKIN1004_INGREDIENTS_TAGS } from './skin1004/skin1004-ingredients-tags'
// import { SOLAIRE_INGREDIENTS_TAGS } from './solaires/solaires-ingredients-tags'
// import { TO_INGREDIENTS_TAGS } from './theOrdinary/theOrdinary-ingredients-tags'
// import { THERAMID_INGREDIENTS_TAGS } from './theramid/theramid-ingredients-tags'
// import { TONERS_INGREDIENTS_TAGS } from './toners/toners-ingredients-tags'
// import { VICHY_INGREDIENTS_TAGS } from './vichy/vichy-ingredients-tags'

import { ADERMA_PRODUCT_INGREDIENTS } from './aDerma/aDerma-ingredients-tags'
import { AR_PRODUCT_INGREDIENTS } from './anti-rougeurs/anti-rougeurs-ingredients-tags'
import { AVENE_PRODUCT_INGREDIENTS } from './avene/avene-ingredients-tags'
import { BIODERMA_PRODUCT_INGREDIENTS } from './bioderma/bioderma-ingredients-tags'
import { CYLA_INGREDIENTS_PRODUCT } from './cyla/cyla-ingredients-tags'
import { GARANCIA_PRODUCT_INGREDIENTS } from './garancia/garancia-ingredients-tags'
import { ISISPHARMA_PRODUCT_INGREDIENTS } from './isispharma/isispharma-ingredients-tags'
import { LAB_BIARRITZ_PRODUCT_INGREDIENTS } from './labBiarritz/labBiarritz-ingredients-tags'
import { LRP_PRODUCT_INGREDIENTS } from './laRochePosay/laRochePosay-ingredients-tags'
import { MEME_PRODUCT_INGREDIENTS } from './memeCancer/memeCancer-ingredients-tags'
import { SVR_PRODUCT_INGREDIENTS } from './svr/svr-ingredients-tags'
import { URIAGE_PRODUCT_INGREDIENTS } from './uriage/uriage-ingredients-tags'

export const allIngredientProductTags = [
  ...URIAGE_PRODUCT_INGREDIENTS,
  ...SVR_PRODUCT_INGREDIENTS,
  ...LAB_BIARRITZ_PRODUCT_INGREDIENTS,
  ...CYLA_INGREDIENTS_PRODUCT,
  ...GARANCIA_PRODUCT_INGREDIENTS,
  ...ISISPHARMA_PRODUCT_INGREDIENTS,
  ...LRP_PRODUCT_INGREDIENTS,
  ...MEME_PRODUCT_INGREDIENTS,
  ...AVENE_PRODUCT_INGREDIENTS,
  ...AR_PRODUCT_INGREDIENTS,
  ...ADERMA_PRODUCT_INGREDIENTS,
  ...BIODERMA_PRODUCT_INGREDIENTS,
] as const
