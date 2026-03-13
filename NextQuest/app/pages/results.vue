<script setup lang="ts">
const route = useRoute()
const prompt = useState<string>('recommendationPrompt', () => '')
const recommendations = useState<any[]>('recommendationResults', () => [])
const loading = ref(false)
const errorMessage = ref('')
const { profileId, initProfile } = useProfile()
const { getRecommendations } = useRecommendations()

const runSearch = async (queryPrompt: string) => {
  if (!queryPrompt) return
  try {
    loading.value = true
    errorMessage.value = ''
    if (!profileId.value) await initProfile()
    const response = await getRecommendations(queryPrompt)
    prompt.value = response.prompt
    recommendations.value = response.recommendations
  } catch (error) {
    console.error(error)
    errorMessage.value = 'The recommendation service is temporarily unavailable. Please try again.'
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  const routePrompt = typeof route.query.prompt === 'string' ? route.query.prompt : ''
  if (!prompt.value && routePrompt) {
    prompt.value = routePrompt
  }
  if (routePrompt && (!recommendations.value.length || prompt.value !== routePrompt)) {
    await runSearch(routePrompt)
  }
})

const retrySearch = async () => {
  const routePrompt = typeof route.query.prompt === 'string' ? route.query.prompt : prompt.value
  await runSearch(routePrompt)
}
</script>

<template>
  <v-container class="page-section section-stack fade-in">
    <SectionTitle
      eyebrow="AI recommendations"
      title="Curated for your vibe"
      subtitle="These recommendations come from vector search plus AI-generated spoiler-free explanations."
    />

    <v-card class="glass-card pa-6 mb-2" rounded="2xl">
      <div class="d-flex flex-column flex-lg-row align-start justify-space-between ga-5">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">Your prompt</div>
          <div class="text-h6 font-weight-bold mb-2">{{ prompt }}</div>
          <div class="muted-copy text-body-2">
            {{ recommendations.length }} spoiler-free matches · ranked by vector similarity and refined by AI.
          </div>
        </div>
      </div>
    </v-card>

    <div v-if="loading" class="results-loading">
      <div class="text-body-1 font-weight-medium mb-4">Finding your next game...</div>
      <v-row style="row-gap: 16px;">
        <v-col v-for="item in 3" :key="item" cols="12" sm="6" lg="4">
          <v-card class="glass-card pa-4 pa-md-5" rounded="2xl">
            <v-skeleton-loader type="image, article, actions" color="transparent" />
          </v-card>
        </v-col>
      </v-row>
    </div>

    <div v-else-if="errorMessage" class="results-error glass-card pa-6" rounded="2xl">
      <div class="text-h6 font-weight-bold mb-2">Search unavailable</div>
      <div class="text-body-2 mb-4" style="color: rgba(255,255,255,.72)">{{ errorMessage }}</div>
      <v-btn color="primary" prepend-icon="mdi-refresh" @click="retrySearch">Try again</v-btn>
    </div>

    <v-row v-else-if="recommendations.length" style="row-gap: 16px;">
      <v-col
        v-for="(game, index) in recommendations"
        :key="game.title"
        cols="12"
        sm="6"
        lg="4"
      >
        <div :style="{ animationDelay: `${index * 70}ms` }" class="fade-up">
          <RecommendationCard :game="game" />
        </div>
      </v-col>
    </v-row>

    <v-card
      v-else
      class="glass-card pa-8 text-center"
      rounded="2xl"
    >
      <div class="text-h6 font-weight-bold mb-2">No recommendations yet</div>
      <div class="muted-copy mb-4">
        Go back to the homepage and describe the kind of game you want.
      </div>
      <v-btn color="primary" to="/">Back to Home</v-btn>
    </v-card>
  </v-container>
</template>

<style scoped>
.results-loading,
.results-error {
  border-radius: 24px;
}
</style>
