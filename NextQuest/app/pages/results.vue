<script setup lang="ts">
const route = useRoute()

const prompt = computed(() =>
  typeof route.query.prompt === 'string'
    ? route.query.prompt
    : 'I want a cozy game with a strong story under 20 hours'
)

const recommendations = [
  {
    title: 'Spiritfarer',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    description: 'A warm, emotional management adventure with gorgeous art, approachable systems, and a relaxed pace.',
    tags: ['Cozy', 'Story Rich', 'Management'],
    estimatedHours: 15,
    platforms: ['PC', 'Switch', 'Xbox']
  },
  {
    title: 'A Short Hike',
    imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    description: 'A short and charming exploration game with lighthearted writing, relaxing traversal, and lovely atmosphere.',
    tags: ['Short Game', 'Exploration', 'Cozy'],
    estimatedHours: 4,
    platforms: ['PC', 'Switch', 'PS5']
  },
  {
    title: 'Night in the Woods',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
    description: 'A story-driven adventure with memorable characters, emotional themes, and a strong sense of place.',
    tags: ['Narrative', 'Story Rich', 'Indie'],
    estimatedHours: 9,
    platforms: ['PC', 'Switch', 'PS5']
  }
]
</script>

<template>
  <v-container class="page-section section-stack fade-in">
    <SectionTitle
      eyebrow="AI recommendations"
      title="Curated for your vibe"
      subtitle="These results are currently mocked on the frontend. Next, they’ll come from your NestJS backend and Azure vector search flow."
    />

    <v-card class="glass-card pa-6" rounded="2xl">
      <div class="d-flex flex-column flex-lg-row align-start justify-space-between ga-5">
        <div>
          <div class="text-caption text-medium-emphasis mb-2">Your prompt</div>
          <div class="text-h6 font-weight-bold mb-2">{{ prompt }}</div>
          <div class="muted-copy text-body-2">3 spoiler-free matches · ranked by vector similarity and refined for presentation.</div>
        </div>

        <div class="d-flex flex-wrap ga-2">
          <v-chip color="primary" variant="tonal">Cozy</v-chip>
          <v-chip variant="outlined" class="chip-soft">Story Rich</v-chip>
          <v-chip variant="outlined" class="chip-soft">Under 20 Hours</v-chip>
        </div>
      </div>
    </v-card>

    <v-row style="row-gap: 16px;">
      <v-col
        v-for="game in recommendations"
        :key="game.title"
        cols="12"
        sm="6"
        lg="4"
      >
        <RecommendationCard :game="game" />
      </v-col>
    </v-row>
  </v-container>
</template>
