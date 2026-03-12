export type RecommendationItem = {
  gameId: number
  title: string
  description: string
  whyItMatches: string
  tags: string[]
  estimatedHours: number
  imageUrl: string
  platforms: string[]
}

export type RecommendationResponse = {
  prompt: string
  recommendations: RecommendationItem[]
}

export const useRecommendations = () => {
  const { profileId } = useProfile()
  const config = useRuntimeConfig()

  const getRecommendations = async (prompt: string): Promise<RecommendationResponse> => {
    if (!profileId.value) {
      throw new Error('Profile not initialized')
    }

    return await $fetch<RecommendationResponse>(`${config.public.apiBaseUrl}/recommendations`, {
      method: 'POST',
      body: {
        profileId: profileId.value,
        prompt
      }
    })
  }

  const getHistory = async () => {
    if (!profileId.value) {
      throw new Error('Profile not initialized')
    }

    return await $fetch<any[]>(`${config.public.apiBaseUrl}/recommendations/history`, {
      params: {
        profileId: profileId.value
      }
    })
  }

  return {
    getRecommendations,
    getHistory
  }
}