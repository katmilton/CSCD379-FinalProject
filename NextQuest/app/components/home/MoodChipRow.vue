<script setup lang="ts">
const moods = [
  'Cozy',
  'Story Rich',
  'Roguelike',
  'Emotional',
  'Short Game',
  'Co-op',
  'Challenging',
  'Open World'
]
</script>

<template>
  <div class="d-flex flex-wrap ga-3 mt-6">
    <v-chip
      v-for="mood in moods"
      :key="mood"
      variant="outlined"
      size="large"
      class="chip-soft"
    >
      {{ mood }}
    </v-chip>
  </div>
</template>
