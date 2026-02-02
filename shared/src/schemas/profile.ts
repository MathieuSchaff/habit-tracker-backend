import { z } from 'zod'

export const profileUpdateSchema = z
  .object({
    username: z.string().min(1).max(50).optional(),
    bio: z.string().max(500).optional(),
    avatarUrl: z.url().optional(),
  })
  .strict()

export type ProfileUpdateInput = z.infer<typeof profileUpdateSchema>
