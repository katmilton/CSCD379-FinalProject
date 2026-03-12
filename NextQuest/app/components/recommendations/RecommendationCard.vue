<script setup lang="ts">
const props = defineProps<{
  game: {
    gameId?: number | string
    title: string
    imageUrl: string
    description: string
    tags: string[]
    estimatedHours: number
    platforms: string[]
    whyItMatches?: string
  }
}>()

const saving = ref(false)
const saved = ref(false)

const { saveGame } = useSavedGames()

const onSave = async () => {
  if (typeof props.game.gameId !== 'number') return

  try {
    saving.value = true
    await saveGame(props.game.gameId)
    saved.value = true
  } catch (error) {
    console.error(error)
  } finally {
    saving.value = false
  }
}
</script>

<template>
  <v-card class="glass-card card-hover recommendation-card h-100 fade-up shimmer-border" rounded="2xl">
    <v-img :src="game.imageUrl" height="228" cover />

    <div class="card-body">
      <div class="d-flex align-start justify-space-between ga-3 mb-3">
        <div>
          <div class="text-h6 font-weight-bold mb-2">{{ game.title }}</div>
          <div class="d-flex flex-wrap ga-2">
            <v-chip
              v-for="tag in game.tags"
              :key="tag"
              size="small"
              color="primary"
              variant="tonal"
            >
              {{ tag }}
            </v-chip>
          </div>
        </div>

        <v-btn icon variant="text" class="interactive-lift">
          <v-icon :icon="saved ? 'mdi-bookmark' : 'mdi-bookmark-outline'" />
        </v-btn>
      </div>

      <div class="meta-row text-body-2 text-medium-emphasis mb-4">
        <span class="meta-item">
          <v-icon icon="mdi-clock-outline" size="18" class="mr-1" />
          {{ game.estimatedHours }} hrs
        </span>
        <span class="meta-item">
          <v-icon icon="mdi-controller" size="18" class="mr-1" />
          {{ game.platforms.join(', ') }}
        </span>
      </div>

      <p class="text-body-2 text-medium-emphasis mb-3 recommendation-copy">
        {{ game.description }}
      </p>

      <v-card
        v-if="game.whyItMatches"
        class="pa-4 mb-4"
        color="rgba(255,255,255,0.03)"
        rounded="xl"
      >
        <div class="text-caption text-medium-emphasis mb-2">Why it matches</div>
        <div class="text-body-2">
          {{ game.whyItMatches }}
        </div>
      </v-card>

      <v-card-actions class="px-0 pb-0 pt-0 d-flex flex-wrap ga-2">
        <v-btn color="primary">Why it matches</v-btn>

        <v-btn
          v-if="typeof game.gameId === 'number'"
          variant="text"
          :loading="saving"
          @click="onSave"
        >
          {{ saved ? 'Saved' : 'Save' }}
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<style scoped>
.recommendation-card {
  overflow: hidden;
}

.card-body {
  padding: 22px;
}

.meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.meta-item {
  display: inline-flex;
  align-items: center;
}

.recommendation-copy {
  line-height: 1.65;
}
</style>