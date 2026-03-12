<script setup lang="ts">
const featuredGames = [
  {
    title: 'Hades',
    imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
    description: 'A fast, stylish roguelike with sharp combat, memorable characters, and endless replay value.',
    tags: ['Roguelike', 'Action', 'Story Rich'],
    estimatedHours: 25,
    platforms: ['PC', 'Switch', 'PS5']
  },
  {
    title: 'Celeste',
    imageUrl: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=1200&q=80',
    description: 'A precise platformer with emotional storytelling, beautiful music, and a rewarding challenge curve.',
    tags: ['Platformer', 'Emotional', 'Indie'],
    estimatedHours: 10,
    platforms: ['PC', 'Switch', 'PS5']
  },
  {
    title: 'Spiritfarer',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    description: 'A comforting management adventure full of heart, beautiful art direction, and unforgettable moments.',
    tags: ['Cozy', 'Management', 'Story Rich'],
    estimatedHours: 15,
    platforms: ['PC', 'Switch', 'Xbox']
  }
]

const highlights = [
  { value: '3', label: 'mocked recommendations ready', icon: 'mdi-sparkles' },
  { value: 'No login', label: 'anonymous local profile', icon: 'mdi-account-off-outline' },
  { value: 'Azure-ready', label: 'AI + vector search pipeline', icon: 'mdi-cloud-outline' }
]

const howItWorks = [
  {
    title: 'Describe your vibe',
    copy: 'Tell the app what kind of experience you want, from cozy farming to high-pressure roguelikes.',
    icon: 'mdi-text-box-search-outline',
    color: 'primary'
  },
  {
    title: 'Vector search finds matches',
    copy: 'Your prompt is compared against embedded game data to surface titles that actually fit the request.',
    icon: 'mdi-database-search-outline',
    color: 'secondary'
  },
  {
    title: 'Build your own journal',
    copy: 'Save recommendations, track play status, and add notes without needing to create an account.',
    icon: 'mdi-bookmark-multiple-outline',
    color: 'accent'
  }
]
</script>

<template>
  <div>
    <HeroSearch />

    <section class="page-section section-tight fade-in">
      <v-container class="section-stack">
        <v-row class="align-start" style="row-gap: 16px;">
          <v-col cols="12" lg="7">
            <SectionTitle
              eyebrow="Featured picks"
              title="Games worth discovering"
              subtitle="Search with AI, save games to your list, and keep track of what you want to play next."
            />
          </v-col>

          <v-col cols="12">
            <div class="highlights-grid fade-up-delay-1">
              <v-card
                v-for="item in highlights"
                :key="item.label"
                class="surface-panel metric-card highlight-card"
                rounded="2xl"
              >
                <div class="d-flex align-center ga-3 mb-3">
                  <v-avatar size="38" color="rgba(255,255,255,0.05)">
                    <v-icon :icon="item.icon" color="primary" />
                  </v-avatar>
                  <div class="metric-value">{{ item.value }}</div>
                </div>
                <div class="metric-label">{{ item.label }}</div>
              </v-card>
            </div>
          </v-col>
        </v-row>

        <v-row style="row-gap: 16px;">
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

    <section class="page-section fade-in">
      <v-container>
        <SectionTitle
          eyebrow="How it works"
          title="Fast, personalized, spoiler-free"
          subtitle="Built to feel sharp and polished without making the experience complicated."
          align="center"
        />

        <v-row style="row-gap: 16px;">
          <v-col
            v-for="(item, index) in howItWorks"
            :key="item.title"
            cols="12"
            md="4"
          >
            <v-card
              class="glass-card pa-7 h-100 spotlight-card"
              rounded="2xl"
              :class="index === 0 ? 'fade-up' : index === 1 ? 'fade-up-delay-1' : 'fade-up-delay-2'"
            >
              <v-icon :icon="item.icon" size="42" class="mb-5" :color="item.color" />
              <div class="text-h6 font-weight-bold mb-3">{{ item.title }}</div>
              <p class="text-body-1 muted-copy mb-0">
                {{ item.copy }}
              </p>
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
  gap: 12px;
  grid-template-columns: 1fr;
}

.highlight-card {
  min-height: 122px;
}

@media (min-width: 960px) {
  .highlights-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
