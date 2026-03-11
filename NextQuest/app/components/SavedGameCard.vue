<script setup lang="ts">
interface SavedGame {
  id: number
  title: string
  imageUrl: string
  description: string
  tags: string[]
  estimatedHours: number
  status: 'Want to Play' | 'Playing' | 'Finished' | 'Dropped'
  note: string
}

defineProps<{
  game: SavedGame
}>()
</script>

<template>
  <v-card class="glass-card card-hover saved-card h-100 fade-up" rounded="2xl">
    <v-img :src="game.imageUrl" height="220" cover />

    <div class="saved-body">
      <div class="d-flex align-start justify-space-between ga-3 mb-4">
        <div>
          <div class="text-h6 font-weight-bold mb-2">{{ game.title }}</div>
          <StatusChip :status="game.status" />
        </div>

        <v-btn icon variant="text" aria-label="More actions">
          <v-icon icon="mdi-dots-horizontal" />
        </v-btn>
      </div>

      <div class="d-flex flex-wrap ga-2 mb-4">
        <v-chip
          v-for="tag in game.tags"
          :key="tag"
          size="small"
          variant="outlined"
          class="chip-soft"
        >
          {{ tag }}
        </v-chip>
      </div>

      <div class="text-body-2 muted-copy mb-3">
        <v-icon icon="mdi-clock-outline" size="18" class="mr-1" />
        {{ game.estimatedHours }} hours
      </div>

      <p class="text-body-2 muted-copy mb-5">
        {{ game.description }}
      </p>

      <div class="note-surface">
        <div class="text-caption text-medium-emphasis mb-2">Your note</div>
        <div class="text-body-2">{{ game.note || 'No note yet.' }}</div>
      </div>
    </div>
  </v-card>
</template>

<style scoped>
.saved-card {
  overflow: hidden;
}

.saved-body {
  padding: 22px;
}

.note-surface {
  padding: 16px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
}
</style>
