<script setup lang="ts">
const historyItems = [
  {
    id: 1,
    prompt: 'I want a cozy game with a strong story under 20 hours',
    createdAt: 'Today, 2:14 PM',
    topPick: 'Spiritfarer'
  },
  {
    id: 2,
    prompt: 'Recommend something like Hades but less stressful',
    createdAt: 'Yesterday, 8:42 PM',
    topPick: 'Dead Cells'
  },
  {
    id: 3,
    prompt: 'Give me a beautiful single-player exploration game',
    createdAt: 'Monday, 6:05 PM',
    topPick: 'A Short Hike'
  }
]
</script>

<template>
  <v-container class="page-section section-stack fade-in">
    <SectionTitle
      eyebrow="Your activity"
      title="Recommendation history"
      subtitle="Revisit your past prompts and remember what the AI suggested."
    />

    <v-card class="glass-card pa-6" rounded="2xl">
      <div class="text-caption text-medium-emphasis mb-2">Anonymous profile persistence</div>
      <div class="text-body-1 muted-copy">
        Your history is attached to a lightweight local profile id stored in the browser, so the app remembers your activity without requiring login.
      </div>
    </v-card>

    <HistoryList :items="historyItems" />
  </v-container>
</template>
