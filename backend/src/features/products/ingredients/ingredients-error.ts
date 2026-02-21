import type { IngredientErrorCode } from '@habit-tracker/shared'

export class IngredientError extends Error {
  constructor(
    public code: IngredientErrorCode,
    public details?: unknown
  ) {
    super(code)
    this.name = 'IngredientError'
  }
}
