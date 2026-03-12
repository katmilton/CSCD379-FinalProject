import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
// import { AzureSearchService } from '../azure-search/azure-search.service'

@Injectable()
export class RecommendationsService {
  constructor(
    private readonly prisma: PrismaService
    // private readonly azureSearchService: AzureSearchService
  ) {}

  async getRecommendations(profileId: string, prompt: string) {
    // Temporary mocked results until Azure OpenAI embeddings are connected.
    const games = await this.prisma.game.findMany({
      take: 3,
      orderBy: { id: 'asc' }
    })

    const recommendations = games.map((game) => ({
      gameId: game.id,
      title: game.title,
      description: game.description,
      whyItMatches: `This is a strong match for "${prompt}" based on its tags, tone, and play style.`,
      tags: game.tags.split(','),
      estimatedHours: game.estimatedHours,
      imageUrl: game.imageUrl,
      platforms: game.platforms.split(',')
    }))

    const result = {
      prompt,
      recommendations
    }

    await this.prisma.recommendationHistory.create({
      data: {
        profileId,
        prompt,
        resultJson: JSON.stringify(result)
      }
    })

    return result
  }

  async getHistory(profileId: string) {
    return this.prisma.recommendationHistory.findMany({
      where: { profileId },
      orderBy: { createdAt: 'desc' }
    })
  }
}