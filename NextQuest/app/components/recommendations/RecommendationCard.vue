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

        <v-btn icon variant="text" aria-label="Save game">
          <v-icon icon="mdi-bookmark-outline" />
        </v-btn>
      </div>

      <div class="meta-row mb-4">
        <span><v-icon icon="mdi-clock-outline" size="18" class="mr-1" /> {{ game.estimatedHours }} hrs</span>
        <span><v-icon icon="mdi-controller-classic-outline" size="18" class="mr-1" /> {{ game.platforms.join(' · ') }}</span>
      </div>

      <p class="text-body-2 muted-copy mb-5">
        {{ game.description }}
      </p>

      <div class="action-row">
        <v-btn color="primary">Why it matches</v-btn>
        <v-btn variant="text">Save</v-btn>
      </div>
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
  color: rgba(255, 255, 255, 0.62);
  font-size: 0.92rem;
}

.action-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
</style>
