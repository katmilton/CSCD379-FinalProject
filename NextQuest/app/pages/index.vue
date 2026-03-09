<script setup lang="ts">
const featuredGames = [
  {
    title: 'Hades',
    imageUrl: '/images/games/hades.jpg',
    description: 'A fast, stylish roguelike with sharp combat, memorable characters, and endless replay value.',
    tags: ['Roguelike', 'Action', 'Story Rich'],
    estimatedHours: 25,
    platforms: ['PC', 'Switch', 'PS5']
  },
  {
    title: 'Celeste',
    imageUrl: '/images/games/celeste.jpg',
    description: 'A precise platformer with emotional storytelling, beautiful music, and a rewarding challenge curve.',
    tags: ['Platformer', 'Emotional', 'Indie'],
    estimatedHours: 10,
    platforms: ['PC', 'Switch', 'PS5']
  },
  {
    title: 'Spiritfarer',
    imageUrl: '/images/games/spiritfarer.jpg',
    description: 'A comforting management adventure full of heart, beautiful art direction, and unforgettable moments.',
    tags: ['Cozy', 'Management', 'Story Rich'],
    estimatedHours: 15,
    platforms: ['PC', 'Switch', 'Xbox']
  }
]
</script>

<template>
  <div>
    <HeroSearch />

    <section class="page-section">
      <v-container>
        <SectionTitle
          eyebrow="Featured picks"
          title="Games worth discovering"
          subtitle="A preview of the kind of recommendations NextQuest will generate once your AI search flow is connected."
        />

        <v-row>
          <v-col
            v-for="game in featuredGames"
            :key="game.title"
            cols="12"
            sm="6"
            lg="4"
          >
            <RecommendationCard :game="game" />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="page-section">
      <v-container>
        <SectionTitle
          eyebrow="How it works"
          title="Fast, personalized, spoiler-free"
          subtitle="Built to feel smart without making the experience complicated."
        />

        <v-row>
          <v-col cols="12" md="4">
            <v-card class="glass-card pa-6 h-100">
              <v-icon icon="mdi-text-box-search-outline" size="40" class="mb-4" color="primary" />
              <div class="text-h6 font-weight-bold mb-2">Describe your vibe</div>
              <p class="text-medium-emphasis mb-0">
                Tell the app what kind of experience you want, from cozy farming to high-pressure roguelikes.
              </p>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card class="glass-card pa-6 h-100">
              <v-icon icon="mdi-database-search-outline" size="40" class="mb-4" color="secondary" />
              <div class="text-h6 font-weight-bold mb-2">Vector search finds matches</div>
              <p class="text-medium-emphasis mb-0">
                Your prompt is compared against embedded game data to surface titles that actually fit the request.
              </p>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card class="glass-card pa-6 h-100">
              <v-icon icon="mdi-robot-excited-outline" size="40" class="mb-4" color="accent" />
              <div class="text-h6 font-weight-bold mb-2">AI explains the picks</div>
              <p class="text-medium-emphasis mb-0">
                You get concise, spoiler-free reasons that make each recommendation feel curated instead of random.
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>