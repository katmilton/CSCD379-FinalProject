<script setup lang="ts">
const prompt = ref('')

const examplePrompts = [
  'I want a cozy game with a great story under 20 hours',
  'Recommend something like Hades but less stressful',
  'Give me a beautiful single-player game with exploration'
]

const submitPrompt = () => {
  if (!prompt.value.trim()) return
  navigateTo(`/history?prompt=${encodeURIComponent(prompt.value)}`)
}

const useExample = (value: string) => {
  prompt.value = value
}
</script>

<template>
  <section class="hero-section">
    <v-container>
      <v-row align="center" class="ga-6">
        <v-col cols="12" lg="7">
          <div class="hero-glow pa-2 pa-md-4">
            <div class="text-overline text-secondary mb-3">
              AI-powered game recommendations
            </div>

            <h1 class="text-h3 text-sm-h2 text-md-h1 font-weight-black mb-4">
              Find your <span class="text-gradient">next favorite game</span>
            </h1>

            <p
              class="text-body-1 text-md-h6 font-weight-regular text-medium-emphasis mb-6"
              style="max-width: 720px;"
            >
              Describe your vibe, your favorite mechanics, or how much time you have.
              NextQuest gives you spoiler-free game picks that actually fit.
            </p>

            <v-card class="glass-card pa-4 pa-md-6">
              <v-textarea
                v-model="prompt"
                label="Describe the kind of game you want"
                rows="3"
                auto-grow
                hide-details
                placeholder="Example: I want a cozy pixel-art game with strong characters and no sweaty combat."
              />

              <div class="d-flex flex-column flex-sm-row ga-3 mt-4">
                <v-btn
                  color="primary"
                  size="large"
                  prepend-icon="mdi-magnify"
                  @click="submitPrompt"
                >
                  Find my next game
                </v-btn>

                <v-btn
                  variant="tonal"
                  size="large"
                  prepend-icon="mdi-shuffle-variant"
                >
                  Surprise me
                </v-btn>
              </div>

              <div class="mt-6">
                <div class="text-caption text-medium-emphasis mb-2">Try an example</div>
                <div class="d-flex flex-wrap ga-2">
                  <v-chip
                    v-for="item in examplePrompts"
                    :key="item"
                    size="small"
                    variant="outlined"
                    @click="useExample(item)"
                  >
                    {{ item }}
                  </v-chip>
                </div>
              </div>
            </v-card>
          </div>
        </v-col>

        <v-col cols="12" lg="5">
          <v-card class="glass-card card-hover pa-4 pa-md-5">
            <div class="d-flex align-center ga-3 mb-4">
              <v-avatar color="secondary" size="44">
                <v-icon icon="mdi-sparkles" />
              </v-avatar>
              <div>
                <div class="text-subtitle-1 font-weight-bold">Sample match</div>
                <div class="text-caption text-medium-emphasis">Based on vibe + vector search</div>
              </div>
            </div>

            <v-img
              src="/images/games/sample-game.jpg"
              height="220"
              cover
              class="rounded-lg mb-4"
            />

            <div class="text-h5 font-weight-bold mb-2">Spiritfarer</div>

            <div class="d-flex flex-wrap ga-2 mb-4">
              <v-chip size="small" color="primary">Cozy</v-chip>
              <v-chip size="small" color="secondary">Story Rich</v-chip>
              <v-chip size="small" color="accent">15 hours</v-chip>
            </div>

            <p class="text-body-2 text-medium-emphasis mb-0">
              A warm, emotional management adventure with gorgeous art, approachable systems,
              and a relaxed pace that makes it ideal for players wanting comfort plus heart.
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>