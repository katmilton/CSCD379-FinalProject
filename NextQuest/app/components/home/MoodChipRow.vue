<script setup lang="ts">
const props = defineProps<{ modelValue?: string[] }>()
const emit = defineEmits<{ 'update:modelValue': [string[]] }>()

const moods = ['Cozy', 'Story Rich', 'Roguelike', 'Emotional', 'Short Game', 'Co-op', 'Challenging', 'Open World']

const selected = computed(() => props.modelValue ?? [])

const toggleMood = (mood: string) => {
  const next = selected.value.includes(mood)
    ? selected.value.filter((item) => item !== mood)
    : [...selected.value, mood]

  emit('update:modelValue', next)
}
</script>

<template>
  <div class="d-flex flex-wrap ga-3 mt-6">
    <v-chip
      v-for="mood in moods"
      :key="mood"
      :variant="selected.includes(mood) ? 'flat' : 'outlined'"
      :color="selected.includes(mood) ? 'primary' : undefined"
      size="large"
      class="interactive-lift"
      @click="toggleMood(mood)"
    >
      {{ mood }}
    </v-chip>
  </div>
</template>
