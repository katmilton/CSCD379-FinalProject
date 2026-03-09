<script setup lang="ts">
interface Recommendation {
  title: string
  imageUrl: string
  description: string
  tags: string[]
  estimatedHours: number
  platforms: string[]
}

defineProps<{
  game: Recommendation
}>()
</script>

<template>
  <v-card class="glass-card card-hover h-100">
    <v-img :src="game.imageUrl" height="240" cover />

    <v-card-item>
      <v-card-title class="text-wrap">
        {{ game.title }}
      </v-card-title>

      <template #append>
        <v-btn icon variant="text">
          <v-icon icon="mdi-heart-outline" />
        </v-btn>
      </template>
    </v-card-item>

    <v-card-text>
      <div class="d-flex flex-wrap ga-2 mb-4">
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

      <div class="d-flex align-center ga-4 text-body-2 text-medium-emphasis mb-4">
        <span><v-icon icon="mdi-clock-outline" class="mr-1" /> {{ game.estimatedHours }} hrs</span>
        <span><v-icon icon="mdi-controller" class="mr-1" /> {{ game.platforms.join(', ') }}</span>
      </div>

      <p class="text-body-2 text-medium-emphasis">
        {{ game.description }}
      </p>
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary">Why it matches</v-btn>
      <v-btn variant="text">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>