<script setup lang="ts">
const historyItems = ref<any[]>([])
const loading = ref(true)
const errorMessage = ref('')

const { profileId, initProfile } = useProfile()
const { getHistory } = useRecommendations()

const loadHistory = async () => {
  try {
    loading.value = true
    errorMessage.value = ''
    if (!profileId.value) {
      await initProfile()
    }
    historyItems.value = await getHistory()
  } catch (error) {
    console.error(error)
    errorMessage.value = 'Could not load recommendation history.'
  } finally {
    loading.value = false
  }
}

onMounted(loadHistory)

const mappedHistory = computed(() =>
  historyItems.value.map((item) => {
    let parsed: any = {}

    try {
      parsed = JSON.parse(item.resultJson)
    } catch {
      parsed = {}
    }

    return {
      id: item.id,
      prompt: item.prompt,
      createdAt: new Date(item.createdAt).toLocaleString(),
      topPick: parsed.recommendations?.[0]?.title || 'Unknown'
    }
  })
)
</script>

<template>
  <v-container class="page-section section-stack fade-in">
    <SectionTitle
      eyebrow="Your activity"
      title="Recommendation history"
      subtitle="Revisit your past prompts and remember what the AI suggested."
    />

    <div v-if="loading" class="muted-copy">Loading your history...</div>

    <div v-else-if="errorMessage" class="text-body-2" style="color: #ff8a80;">
      {{ errorMessage }}
    </div>

    <HistoryList v-else-if="mappedHistory.length" :items="mappedHistory" />

    <v-card
      v-else
      class="glass-card pa-8 text-center"
      rounded="2xl"
    >
      <div class="text-h6 font-weight-bold mb-2">No history yet</div>
      <div class="muted-copy mb-4">
        Search for a game and your recommendation sessions will appear here.
      </div>
      <v-btn color="primary" to="/">Start searching</v-btn>
    </v-card>
  </v-container>
</template>
