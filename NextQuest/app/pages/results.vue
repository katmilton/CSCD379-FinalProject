<script setup lang="ts">
const prompt = useState<string>('recommendationPrompt', () => '')
const recommendations = useState<any[]>('recommendationResults', () => [])
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

    <v-card
      v-if="!recommendations.length"
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