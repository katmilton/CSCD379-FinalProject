<script setup lang="ts">
const route = useRoute()
const { profileId, initProfile } = useProfile()
const { getRecommendations } = useRecommendations()

const prompt = useState<string>('recommendationPrompt', () => '')
const recommendations = useState<any[]>('recommendationResults', () => [])
const loading = ref(false)
const errorMessage = ref('')

const loadFromQuery = async () => {
  const queryPrompt = typeof route.query.prompt === 'string' ? route.query.prompt : ''
  if (!queryPrompt || recommendations.value.length) return

  try {
    loading.value = true
    if (!profileId.value) await initProfile()
    const response = await getRecommendations(queryPrompt)
    prompt.value = response.prompt
    recommendations.value = response.recommendations
  } catch (error) {
    console.error(error)
    errorMessage.value = 'Could not load recommendations.'
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  if (!prompt.value && typeof route.query.prompt === 'string') {
    prompt.value = route.query.prompt
  }
  await loadFromQuery()
})
</script>

<template>
  <v-container class="page-section section-stack fade-in">
    <SectionTitle
      eyebrow="AI recommendations"
      title="Curated for your vibe"
      subtitle="These recommendations come from vector search plus AI-generated spoiler-free explanations."
    />

    <v-card class="glass-card pa-6" rounded="2xl">
      <div class="d-flex flex-column flex-lg-row align-start justify-space-between ga-5">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">Your prompt</div>
          <div class="text-h6 font-weight-bold mb-2">{{ prompt }}</div>
          <div class="text-body-2" style="color: rgba(255,255,255,.66)">{{ recommendations.length }} spoiler-free matches · ranked by vector similarity and refined by AI.</div>
        </div>
      </div>
    </v-card>

    <div v-if="loading" class="text-medium-emphasis">Loading recommendations...</div>
    <div v-else-if="errorMessage" class="text-body-2" style="color: #ff8a80;">{{ errorMessage }}</div>

    <v-row v-else-if="recommendations.length" style="row-gap: 16px;">
      <v-col v-for="game in recommendations" :key="game.title" cols="12" sm="6" lg="4">
        <RecommendationCard :game="game" />
      </v-col>
    </v-row>

    <v-card v-else class="glass-card pa-8 text-center" rounded="2xl">
      <div class="text-h6 font-weight-bold mb-2">No recommendations yet</div>
      <div style="color: rgba(255,255,255,.66)" class="mb-4">Go back to the homepage and describe the kind of game you want.</div>
      <v-btn color="primary" to="/">Back to Home</v-btn>
    </v-card>
  </v-container>
</template>
