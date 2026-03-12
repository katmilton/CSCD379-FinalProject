<script setup lang="ts">
const savedGames = ref<any[]>([])
const loading = ref(true)
const errorMessage = ref('')

const { getSavedGames } = useSavedGames()

const loadSavedGames = async () => {
  try {
    loading.value = true
    errorMessage.value = ''
    savedGames.value = await getSavedGames()
  } catch (error) {
    console.error(error)
    errorMessage.value = 'Could not load your saved games.'
  } finally {
    loading.value = false
  }
}

onMounted(loadSavedGames)

const mappedGames = computed(() =>
  savedGames.value.map((item) => ({
    id: item.id,
    title: item.game.title,
    imageUrl: item.game.imageUrl,
    description: item.game.description,
    tags: item.game.tags.split(','),
    estimatedHours: item.game.estimatedHours,
    status: item.status,
    note: item.note || ''
  }))
)
</script>

<template>
  <v-container class="page-section section-stack fade-in">
    <SectionTitle
      eyebrow="My backlog"
      title="My List"
      subtitle="Track games you want to play, what you’re currently into, and what you’ve already finished."
    />

    <div v-if="loading" class="muted-copy">Loading your saved games...</div>

    <div v-else-if="errorMessage" class="text-body-2" style="color: #ff8a80;">
      {{ errorMessage }}
    </div>

    <v-row v-else-if="mappedGames.length" style="row-gap: 16px;">
      <v-col
        v-for="game in mappedGames"
        :key="game.id"
        cols="12"
        md="6"
        xl="4"
      >
        <SavedGameCard :game="game" />
      </v-col>
    </v-row>

    <v-card
      v-else
      class="glass-card pa-8 text-center"
      rounded="2xl"
    >
      <div class="text-h6 font-weight-bold mb-2">No saved games yet</div>
      <div class="muted-copy mb-4">
        Save a recommendation and it will show up here.
      </div>
      <v-btn color="primary" to="/">Find a game</v-btn>
    </v-card>
  </v-container>
</template>