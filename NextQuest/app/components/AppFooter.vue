<template>
  <v-footer color="transparent" class="footer-wrap">
    <v-container>
      <div class="footer-shell surface-panel fade-in">
        <div>
          <div class="footer-title">NextQuest</div>
          <div class="footer-copy">Find, save, and track your next obsession.</div>
        </div>

        <div class="footer-meta">
          Built with Nuxt, Vuetify, Azure AI, and vector search.
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<style scoped>
.footer-wrap {
  padding: 0 0 16px;
}

.footer-shell {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 22px;
  border-radius: 28px;
}

.footer-title {
  font-weight: 700;
  margin-bottom: 2px;
}

.footer-copy,
.footer-meta {
  color: rgba(255, 255, 255, 0.64);
  font-size: 0.92rem;
}

@media (max-width: 760px) {
  .footer-shell {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
