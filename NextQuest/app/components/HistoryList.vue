<script setup lang="ts">
interface HistoryItem {
  id: number
  prompt: string
  createdAt: string
  topPick: string
}

defineProps<{
  items: HistoryItem[]
}>()
</script>

<template>
  <v-timeline density="comfortable" side="end">
    <v-timeline-item
      v-for="item in items"
      :key="item.id"
      dot-color="primary"
      fill-dot
      size="small"
    >
      <v-card class="glass-card pa-5">
        <div class="text-caption text-medium-emphasis mb-2">
          {{ item.createdAt }}
        </div>
        <div class="text-subtitle-1 font-weight-bold mb-2">
          {{ item.prompt }}
        </div>
        <div class="text-body-2 text-medium-emphasis">
          Top pick: {{ item.topPick }}
        </div>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>
