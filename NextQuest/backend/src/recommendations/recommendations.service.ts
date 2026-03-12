import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { OpenAiService } from '../openai/openai.service'
import { AzureSearchService } from '../azure-search/azure-search.service'

@Injectable()
export class RecommendationsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly search: AzureSearchService,
    private readonly openai: OpenAiService
  ) {}

  async getRecommendations(profileId: string, prompt: string) {
    // 1. Create embedding for the user's prompt
    const vector = await this.openai.createEmbedding(prompt)

    // 2. Search Azure AI Search using vector search
    const candidateDocs = await this.search.searchByVector(vector, 5)

    // 3. Ask OpenAI to explain the candidates
    const aiResult = await this.openai.explainRecommendations(
      prompt,
      candidateDocs
    )

    // 4. Merge Azure Search documents with AI explanations
    const recommendations = candidateDocs.map((doc: any) => {
      const explanation = aiResult.recommendations?.find(
        (item: any) => item.title === doc.title
      )

      return {
        gameId: doc.gameId,
        title: doc.title,
        description: doc.description,
        whyItMatches:
          explanation?.whyItMatches ||
          `This matches your request based on genre, tone, and tags.`,
        tags: Array.isArray(doc.tags) ? doc.tags : [],
        estimatedHours: doc.estimatedHours,
        imageUrl: doc.imageUrl,
        platforms: Array.isArray(doc.platforms) ? doc.platforms : []
      }
    })

    const result = {
      prompt,
      recommendations
    }

    await this.prisma.profile.upsert({
      where: { id: profileId },
      update: {},
      create: { id: profileId }
    })

    await this.prisma.recommendationHistory.create({
      data: {
        profileId,
        prompt,
        resultJson: JSON.stringify(result)
      }
    })

        return result}

  async getHistory(profileId: string) {
    return this.prisma.recommendationHistory.findMany({
      where: { profileId },
      orderBy: { createdAt: 'desc' }
    })
  }
}