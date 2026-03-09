<script setup lang="ts">
const route = useRoute()
const prompt = computed(() => route.query.prompt || 'No prompt yet')
</script>

<template>
  <v-container class="page-section">
    <SectionTitle
      eyebrow="Recent activity"
      title="Recommendation history"
      subtitle="Later this page will load past searches from your backend."
    />

    <v-card class="glass-card pa-6">
      <div class="text-subtitle-2 text-medium-emphasis mb-2">Latest prompt</div>
      <div class="text-h6 font-weight-bold">{{ prompt }}</div>
    </v-card>
  </v-container>
</template>