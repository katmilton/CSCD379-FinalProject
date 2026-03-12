export interface GameSearchDocument {
  id: string
  title: string
  description: string
  genres: string[]
  tags: string[]
  platforms: string[]
  estimatedHours: number
  releaseYear: number
  imageUrl: string
  contentVector: number[]
}