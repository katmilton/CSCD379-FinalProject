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
  <v-card class="glass-card card-hover h-100">
    <v-img :src="game.imageUrl" height="220" cover />

    <v-card-text class="pa-6">
      <div class="d-flex align-start justify-space-between ga-3 mb-3">
        <div>
          <div class="text-h6 font-weight-bold mb-2">{{ game.title }}</div>
          <StatusChip :status="game.status" />
        </div>

        <v-btn icon variant="text">
          <v-icon icon="mdi-dots-horizontal" />
        </v-btn>
      </div>

      <div class="d-flex flex-wrap ga-2 mb-4">
        <v-chip
          v-for="tag in game.tags"
          :key="tag"
          size="small"
          color="primary"
          variant="outlined"
        >
          {{ tag }}
        </v-chip>
      </div>

      <div class="text-body-2 text-medium-emphasis mb-3">
        <v-icon icon="mdi-clock-outline" class="mr-1" />
        {{ game.estimatedHours }} hours
      </div>

      <p class="text-body-2 text-medium-emphasis mb-4">
        {{ game.description }}
      </p>

      <v-card class="pa-4" color="rgba(255,255,255,0.03)" rounded="xl">
        <div class="text-caption text-medium-emphasis mb-2">Your note</div>
        <div class="text-body-2">
          {{ game.note || 'No note yet.' }}
        </div>
      </v-card>
    </v-card-text>
  </v-card>
</template>
