<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div class="mb-8">
    <div v-if="eyebrow" class="text-overline text-secondary mb-2">
      {{ eyebrow }}
    </div>
    <h2 class="text-h4 text-md-h3 font-weight-bold mb-3">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="section-subtitle text-body-1">
      {{ subtitle }}
    </p>
  </div>
</template>