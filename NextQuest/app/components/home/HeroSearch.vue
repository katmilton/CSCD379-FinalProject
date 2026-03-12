<script setup lang="ts">
const prompt = ref('')
const loading = ref(false)
const errorMessage = ref('')

const examplePrompts = [
  'I want a cozy game with a great story under 20 hours',
  'Recommend something like Hades but less stressful',
  'Give me a beautiful single-player game with exploration'
]

const { profileId, initProfile } = useProfile()
const { getRecommendations } = useRecommendations()

const recommendationPrompt = useState<string>('recommendationPrompt', () => '')
const recommendationResults = useState<any[]>('recommendationResults', () => [])

const submitPrompt = async () => {
  if (!prompt.value.trim()) return

  try {
    loading.value = true
    errorMessage.value = ''

    if (!profileId.value) {
      await initProfile()
    }

    const response = await getRecommendations(prompt.value)

    recommendationPrompt.value = response.prompt
    recommendationResults.value = response.recommendations

    await navigateTo(`/results?prompt=${encodeURIComponent(prompt.value)}`)
  } catch (error) {
    console.error(error)
    errorMessage.value = 'Something went wrong while generating recommendations.'
  } finally {
    loading.value = false
  }
}

const useExample = async (value: string) => {
  prompt.value = value
  await submitPrompt()
}
</script>

<template>
  <section class="hero-section hero-compact">
    <v-container>
      <v-row align="center" class="hero-row">
        <v-col cols="12" lg="7">
          <div class="hero-glow fade-up">
            <div class="hero-copy">
              <div class="pill-label mb-4 fade-up">
                <v-icon icon="mdi-sparkles" size="16" color="secondary" />
                AI-powered game recommendations
              </div>

              <h1 class="text-h3 text-sm-h2 text-md-h1 font-weight-black mb-4 hero-heading fade-up-delay-1">
                Discover your <span class="text-gradient">next favorite game</span> with a journal that feels personal.
              </h1>

              <p class="text-body-1 text-md-h6 font-weight-regular muted-copy mb-6 hero-subcopy fade-up-delay-2">
                Describe your vibe, favorite mechanics, or available time. NextQuest turns that into spoiler-free recommendations and lets you save the ones worth coming back to.
              </p>

              <div class="hero-metrics fade-up-delay-2">
                <div class="pill-label"><strong>AI-first</strong> recommendations</div>
                <div class="pill-label"><strong>Vector search</strong> retrieval</div>
                <div class="pill-label"><strong>No login</strong> required</div>
              </div>
            </div>

            <v-card class="glass-card hero-search-card shimmer-border fade-up-delay-2" rounded="2xl">
              <form @submit.prevent="submitPrompt">
                <v-textarea
                  v-model="prompt"
                  label="Describe the kind of game you want"
                  rows="3"
                  auto-grow
                  hide-details
                  placeholder="Example: I want a cozy pixel-art game with strong characters and no sweaty combat."
                />

                <div class="d-flex flex-column flex-sm-row ga-3 mt-5">
                  <v-btn
                    color="primary"
                    size="large"
                    prepend-icon="mdi-magnify"
                    class="hero-action"
                    :loading="loading"
                    type="submit"
                  >
                    Find my next game
                  </v-btn>

                  <v-btn
                    variant="tonal"
                    size="large"
                    prepend-icon="mdi-bookmark-outline"
                    class="hero-action"
                    to="/my-list"
                  >
                    Open my list
                  </v-btn>
                </div>
              </form>

              <div class="mt-6">
                <div class="text-caption text-medium-emphasis mb-3">Try an example</div>
                <div class="d-flex flex-wrap ga-2">
                  <v-chip
                    v-for="item in examplePrompts"
                    :key="item"
                    size="small"
                    variant="outlined"
                    class="chip-soft interactive-lift"
                    @click="useExample(item)"
                  >
                    {{ item }}
                  </v-chip>
                </div>
              </div>

              <div v-if="errorMessage" class="text-body-2 mt-4" style="color: #ff8a80;">
                {{ errorMessage }}
              </div>
            </v-card>

            <MoodChipRow class="fade-up-delay-3" />
          </div>
        </v-col>

        <v-col cols="12" lg="5">
          <v-card class="glass-card card-hover hero-preview shimmer-border spotlight-card float-card fade-up-delay-3" rounded="2xl">
            <div class="d-flex align-center justify-space-between ga-3 mb-5">
              <div class="d-flex align-center ga-3">
                <v-avatar color="secondary" size="46">
                  <v-icon icon="mdi-sparkles" />
                </v-avatar>
                <div>
                  <div class="text-subtitle-1 font-weight-bold">Sample match</div>
                  <div class="text-caption text-medium-emphasis">Powered by vibe + vector search</div>
                </div>
              </div>

              <v-chip size="small" color="primary" variant="tonal">15 hrs</v-chip>
            </div>

            <v-img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80"
              height="240"
              cover
              class="rounded-xl mb-5"
            />

            <div class="text-h5 font-weight-bold mb-2">Spiritfarer</div>

            <div class="d-flex flex-wrap ga-2 mb-4">
              <v-chip size="small" color="primary" variant="tonal">Cozy</v-chip>
              <v-chip size="small" color="secondary" variant="tonal">Story Rich</v-chip>
              <v-chip size="small" variant="outlined" class="chip-soft">Management</v-chip>
            </div>

            <p class="text-body-2 muted-copy mb-5">
              A warm, emotional management adventure with gorgeous art, approachable systems, and a relaxed pace that makes it ideal for players wanting comfort plus heart.
            </p>

            <div class="preview-meta">
              <div>
                <div class="text-caption text-medium-emphasis">Why it works</div>
                <div class="text-body-2">Calm pacing, heartfelt characters, and no punishing difficulty curve.</div>
              </div>
              <v-btn
                color="primary"
                variant="flat"
                @click="useExample('I want a cozy game with a great story under 20 hours')"
              >
                Preview results
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.hero-row {
  row-gap: 24px;
}

.hero-copy {
  position: relative;
  z-index: 1;
}

.hero-heading {
  max-width: 760px;
  line-height: 0.98;
  letter-spacing: -0.03em;
}

.hero-subcopy {
  max-width: 700px;
}

.hero-metrics {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 26px;
}

.hero-search-card {
  position: relative;
  z-index: 1;
  padding: 22px;
}

.hero-preview {
  padding: 22px;
}

.preview-meta {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
}

.hero-action {
  min-width: 180px;
}

@media (max-width: 760px) {
  .hero-search-card,
  .hero-preview {
    padding: 18px;
  }

  .preview-meta {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
