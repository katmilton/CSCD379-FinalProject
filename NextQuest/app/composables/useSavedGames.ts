export type SavedGameRecord = {
  id: number
  profileId: string
  gameId: number
  status: 'Want to Play' | 'Playing' | 'Finished' | 'Dropped'
  note?: string
  createdAt: string
  updatedAt: string
  game: {
    id: number
    title: string
    description: string
    genres: string
    tags: string
    platforms: string
    estimatedHours: number
    releaseYear: number
    imageUrl: string
    searchDocumentId: string
    createdAt: string
  }
}

export const useSavedGames = () => {
  const { profileId } = useProfile()
  const config = useRuntimeConfig()

  const getSavedGames = async (): Promise<SavedGameRecord[]> => {
    if (!profileId.value) throw new Error('Profile not initialized')
    return await $fetch<SavedGameRecord[]>(`${config.public.apiBaseUrl}/saved-games`, {
      params: { profileId: profileId.value }
    })
  }

  const saveGame = async (gameId: number, status: 'Want to Play' | 'Playing' | 'Finished' | 'Dropped' = 'Want to Play', note = '') => {
    if (!profileId.value) throw new Error('Profile not initialized')
    return await $fetch(`${config.public.apiBaseUrl}/saved-games`, {
      method: 'POST',
      body: { profileId: profileId.value, gameId, status, note }
    })
  }

  return { getSavedGames, saveGame }
}
