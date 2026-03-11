<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}>()
</script>

<template>
  <div class="section-title-wrap" :class="align === 'center' ? 'section-title--center' : ''">
    <div v-if="eyebrow" class="text-overline text-secondary mb-2 fade-up">
      {{ eyebrow }}
    </div>
    <h2 class="text-h4 text-md-h3 font-weight-bold mb-3 fade-up-delay-1">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="section-subtitle text-body-1 mb-0 fade-up-delay-2">
      {{ subtitle }}
    </p>
  </div>
</template>

<style scoped>
.section-title-wrap {
  margin-bottom: 28px;
}

.section-title--center {
  text-align: center;
}

.section-title--center .section-subtitle {
  margin-left: auto;
  margin-right: auto;
}
</style>
