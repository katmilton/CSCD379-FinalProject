export const useSavedGames = () => {
  const { profileId } = useProfile()
  const config = useRuntimeConfig()

  const getSavedGames = async () => {
    if (!profileId.value) {
      throw new Error('Profile not initialized')
    }

    return $fetch(`${config.public.apiBaseUrl}/saved-games`, {
      params: {
        profileId: profileId.value
      }
    })
  }

  const saveGame = async (gameId: number, status = 'Want to Play', note = '') => {
    if (!profileId.value) {
      throw new Error('Profile not initialized')
    }

    return $fetch(`${config.public.apiBaseUrl}/saved-games`, {
      method: 'POST',
      body: {
        profileId: profileId.value,
        gameId,
        status,
        note
      }
    })
  }

  const updateSavedGame = async (id: number, status?: string, note?: string) => {
    return $fetch(`${config.public.apiBaseUrl}/saved-games/${id}`, {
      method: 'PATCH',
      body: { status, note }
    })
  }

  const deleteSavedGame = async (id: number) => {
    return $fetch(`${config.public.apiBaseUrl}/saved-games/${id}`, {
      method: 'DELETE'
    })
  }

  return {
    getSavedGames,
    saveGame,
    updateSavedGame,
    deleteSavedGame
  }
}