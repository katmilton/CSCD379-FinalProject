export const useProfile = () => {
  const profileId = useState<string | null>('profileId', () => null)

  const initProfile = async () => {
    if (!import.meta.client) return

    let id = localStorage.getItem('nextquest-profile-id')
    if (!id) {
      id = crypto.randomUUID()
      localStorage.setItem('nextquest-profile-id', id)
    }

    const config = useRuntimeConfig()
    try {
      const response = await $fetch<{ profileId: string }>(`${config.public.apiBaseUrl}/profiles/init`, {
        method: 'POST',
        body: { profileId: id }
      })
      profileId.value = response.profileId
    } catch {
      profileId.value = id
    }
  }

  return { profileId, initProfile }
}
