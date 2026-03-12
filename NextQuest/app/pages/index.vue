<script setup lang="ts">
const highlights = [
  { title: 'Personalized', body: 'Prompt-based recommendations tailored to mood, genre, and available time.' },
  { title: 'Search-backed', body: 'Vector search retrieves relevant games before AI explains why they fit.' },
  { title: 'Persistent', body: 'Save games and revisit your search history without creating an account.' }
]
</script>

<template>
  <div>
    <HeroSearch />

    <section class="page-section section-tight fade-in">
      <v-container>
        <div class="highlights-grid mb-10">
          <v-card v-for="item in highlights" :key="item.title" class="glass-card pa-5 highlight-card" rounded="2xl">
            <div class="pill-label mb-3">{{ item.title }}</div>
            <div class="text-body-1" style="color: rgba(255,255,255,.72)">{{ item.body }}</div>
          </v-card>
        </div>

        <SectionTitle
          eyebrow="How it works"
          title="Fast, personalized, spoiler-free"
          subtitle="Built to feel smart without making the experience complicated."
        />

        <v-row style="row-gap: 12px;">
          <v-col cols="12" md="4">
            <v-card class="glass-card pa-7 h-100" rounded="2xl">
              <v-icon icon="mdi-text-box-search-outline" size="42" class="mb-5" color="primary" />
              <div class="text-h6 font-weight-bold mb-3">Describe your vibe</div>
              <p class="text-body-1 text-medium-emphasis mb-0">Tell the app what kind of experience you want, from cozy farming to high-pressure roguelikes.</p>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card class="glass-card pa-7 h-100" rounded="2xl">
              <v-icon icon="mdi-database-search-outline" size="42" class="mb-5" color="secondary" />
              <div class="text-h6 font-weight-bold mb-3">Vector search finds matches</div>
              <p class="text-body-1 text-medium-emphasis mb-0">Your prompt is compared against embedded game data to surface titles that actually fit the request.</p>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card class="glass-card pa-7 h-100" rounded="2xl">
              <v-icon icon="mdi-bookmark-multiple-outline" size="42" class="mb-5" color="accent" />
              <div class="text-h6 font-weight-bold mb-3">Build your own journal</div>
              <p class="text-body-1 text-medium-emphasis mb-0">Save recommendations and revisit what the AI suggested whenever you want.</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<style scoped>
.highlights-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}
@media (max-width: 960px) {
  .highlights-grid { grid-template-columns: 1fr; }
}
</style>
