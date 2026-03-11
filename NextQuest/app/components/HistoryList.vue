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
  <div class="history-list">
    <v-card
      v-for="item in items"
      :key="item.id"
      class="glass-card history-card fade-up"
      rounded="2xl"
    >
      <div class="history-topline">
        <v-chip size="small" color="primary" variant="tonal">
          {{ item.createdAt }}
        </v-chip>
        <div class="text-caption text-medium-emphasis">Top pick: {{ item.topPick }}</div>
      </div>

      <div class="text-subtitle-1 font-weight-bold mb-2">
        {{ item.prompt }}
      </div>

      <div class="text-body-2 muted-copy">
        Saved to your anonymous profile so you can revisit recommendation sessions later.
      </div>
    </v-card>
  </div>
</template>

<style scoped>
.history-list {
  display: grid;
  gap: 16px;
}

.history-card {
  padding: 20px;
}

.history-topline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
}

@media (max-width: 700px) {
  .history-topline {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
