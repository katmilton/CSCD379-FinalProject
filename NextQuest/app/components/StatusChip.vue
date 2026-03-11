<script setup lang="ts">
const props = defineProps<{
  status: 'Want to Play' | 'Playing' | 'Finished' | 'Dropped'
}>()

const chipColor = computed(() => {
  switch (props.status) {
    case 'Want to Play':
      return 'primary'
    case 'Playing':
      return 'secondary'
    case 'Finished':
      return 'success'
    case 'Dropped':
      return 'error'
    default:
      return 'primary'
  }
})
</script>

<template>
  <v-chip :color="chipColor" size="small" variant="tonal">
    {{ status }}
  </v-chip>
</template>
