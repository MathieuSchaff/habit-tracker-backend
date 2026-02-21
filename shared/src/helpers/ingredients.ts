import type { HttpStatus } from '../types/api'
import type { IngredientErrorCode } from '../types/ingredients'
import { HTTP_STATUS } from './constants'

export const ingredientErrorMapping = {
  ingredient_not_found: HTTP_STATUS.NOT_FOUND,
  ingredient_creation_failed: HTTP_STATUS.INTERNAL_SERVER_ERROR,
  ingredient_update_failed: HTTP_STATUS.INTERNAL_SERVER_ERROR,
  ingredient_delete_failed: HTTP_STATUS.INTERNAL_SERVER_ERROR,
  ingredient_already_exists: HTTP_STATUS.CONFLICT,
  unauthorized_access: HTTP_STATUS.FORBIDDEN,
  database_error: HTTP_STATUS.INTERNAL_SERVER_ERROR,
} as const satisfies Record<IngredientErrorCode, HttpStatus>
