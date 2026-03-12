export const useProfile = () => {
  const profileId = useState<string | null>('profileId', () => null)

  const initProfile = () => {
    if (import.meta.client) {
      let id = localStorage.getItem('nextquest-profile-id')

      if (!id) {
        id = crypto.randomUUID()
        localStorage.setItem('nextquest-profile-id', id)
      }

      profileId.value = id
    }
  }

  return {
    profileId,
    initProfile
  }
}
