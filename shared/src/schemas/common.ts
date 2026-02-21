import { z } from 'zod'

export const fieldChangeSchema = <T extends z.ZodTypeAny>(valueSchema: T) =>
  z.object({
    old: valueSchema.nullable(),
    new: valueSchema.nullable(),
  })
