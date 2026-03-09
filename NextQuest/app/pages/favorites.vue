<template>
  <v-container class="page-section">
    <SectionTitle
      eyebrow="Saved"
      title="Your favorites"
      subtitle="Games you’ve bookmarked will show up here."
    />

    <v-card class="glass-card pa-8 text-center">
      <v-icon icon="mdi-heart-outline" size="56" color="primary" class="mb-4" />
      <div class="text-h6 font-weight-bold mb-2">No favorites yet</div>
      <p class="text-medium-emphasis mb-0">
        Save a few recommendations and build your personal queue.
      </p>
    </v-card>
  </v-container>
</template>