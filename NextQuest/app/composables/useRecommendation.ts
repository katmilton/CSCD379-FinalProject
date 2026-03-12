export const useRecommendations = () => {
  const { profileId } = useProfile()
  const config = useRuntimeConfig()

  const getRecommendations = async (prompt: string) => {
    if (!profileId.value) {
      throw new Error('Profile not initialized')
    }

    return $fetch(`${config.public.apiBaseUrl}/recommendations`, {
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

    return $fetch(`${config.public.apiBaseUrl}/recommendations/history`, {
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