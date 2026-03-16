import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import OpenAI from 'openai'
import {
  AzureKeyCredential,
  SearchClient
} from '@azure/search-documents'

const prisma = new PrismaClient()

type SearchDoc = {
  id: string
  gameId: number
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

async function main() {
  const endpoint = process.env.AZURE_SEARCH_ENDPOINT!
  const apiKey = process.env.AZURE_SEARCH_API_KEY!
  const indexName = process.env.AZURE_SEARCH_INDEX_NAME!

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  })

  const embedModel = process.env.OPENAI_EMBED_MODEL!

  const searchClient = new SearchClient(
    endpoint,
    indexName,
    new AzureKeyCredential(apiKey)
  )

  const games = await prisma.game.findMany()

  const docs: SearchDoc[]  = []

  for (const game of games) {
    const text = `
${game.title}
${game.description}
${game.genres}
${game.tags}
${game.platforms}
${game.estimatedHours} hours
Released ${game.releaseYear}
`

    const emb = await openai.embeddings.create({
      model: embedModel,
      input: text
    })

    docs.push({
      id: game.searchDocumentId,
      gameId: game.id,
      title: game.title,
      description: game.description,
      genres: game.genres.split(','),
      tags: game.tags.split(','),
      platforms: game.platforms.split(','),
      estimatedHours: game.estimatedHours,
      releaseYear: game.releaseYear,
      imageUrl: game.imageUrl,
      contentVector: emb.data[0].embedding
    })
  }

  const result = await searchClient.uploadDocuments(docs)

  console.log('Uploaded:', result.results.length)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())