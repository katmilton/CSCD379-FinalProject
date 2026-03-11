<script setup lang="ts">
const savedGames = [
  {
    id: 1,
    title: 'Spiritfarer',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    description: 'A cozy management adventure with emotional storytelling and beautiful hand-drawn art.',
    tags: ['Cozy', 'Story Rich', 'Management'],
    estimatedHours: 15,
    status: 'Want to Play' as const,
    note: 'Looks perfect for a relaxing weekend.'
  },
  {
    id: 2,
    title: 'Hades',
    imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
    description: 'A fast-paced roguelike with incredible combat flow, memorable characters, and sharp writing.',
    tags: ['Roguelike', 'Action', 'Story Rich'],
    estimatedHours: 25,
    status: 'Playing' as const,
    note: 'Love the combat loop so far.'
  },
  {
    id: 3,
    title: 'Celeste',
    imageUrl: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=1200&q=80',
    description: 'A precise platformer with emotional storytelling and an unforgettable soundtrack.',
    tags: ['Platformer', 'Emotional', 'Indie'],
    estimatedHours: 10,
    status: 'Finished' as const,
    note: 'Amazing music and challenge curve.'
  }
]
</script>

<template>
  <v-container class="page-section section-stack fade-in">
    <div class="d-flex flex-column flex-lg-row align-start justify-space-between ga-4">
      <SectionTitle
        eyebrow="My backlog"
        title="My List"
        subtitle="Track games you want to play, what you’re currently into, and what you’ve already finished."
      />

      <div class="d-grid" style="width: min(100%, 360px); gap: 12px;">
        <v-card class="surface-panel metric-card" rounded="2xl">
          <div class="metric-value">{{ savedGames.length }}</div>
          <div class="metric-label">saved games in your journal</div>
        </v-card>
      </div>
    </div>

    <v-row style="row-gap: 16px;">
      <v-col
        v-for="game in savedGames"
        :key="game.id"
        cols="12"
        md="6"
        lg="4"
      >
        <SavedGameCard :game="game" />
      </v-col>
    </v-row>
  </v-container>
</template>
