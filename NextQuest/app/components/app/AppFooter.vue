<template>
  <v-footer color="transparent" class="footer-wrap">
    <v-container>
      <v-divider class="mb-4" />
      <div class="footer-content">
        <div>NextQuest — Find your next obsession.</div>
        <div class="footer-note">
          Built with Nuxt, Vuetify, Azure AI, and vector search.
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<style scoped>
.footer-wrap {
  padding-top: 0;
  padding-bottom: 16px;
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: rgba(255, 255, 255, 0.82);
}

.footer-note {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.62);
}

@media (min-width: 960px) {
  .footer-content {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>