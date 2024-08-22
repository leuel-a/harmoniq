import { z } from 'zod'

export const createMusicSchema = z.object({
  title: z.string(),
  artist: z.string(),
  album: z.string(),
  genre: z.string()
})

export type CreateMusicType = z.infer<typeof createMusicSchema>
