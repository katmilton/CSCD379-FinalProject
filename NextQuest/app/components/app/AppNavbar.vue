<template>
  <v-app-bar
    flat
    color="transparent"
    height="76"
    class="border-b"
  >
    <v-container class="nav-container">
      <NuxtLink to="/" class="brand-link">
        <v-avatar color="primary" size="40">
          <v-icon icon="mdi-gamepad-variant" />
        </v-avatar>

        <div class="brand-copy">
          <div class="brand-title">NextQuest</div>
          <div class="brand-subtitle">AI game discovery</div>
        </div>
      </NuxtLink>

      <nav class="nav-links d-none d-md-flex">
        <v-btn variant="text" to="/">Home</v-btn>
        <v-btn variant="text" to="/favorites">Favorites</v-btn>
        <v-btn variant="text" to="/history">History</v-btn>
      </nav>

      <div class="d-flex d-md-none">
        <v-btn icon variant="text">
          <v-icon icon="mdi-menu" />
        </v-btn>
      </div>
    </v-container>
  </v-app-bar>
</template>

<style scoped>
.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
}

.brand-link {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
}

.brand-copy {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.brand-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
}

.brand-subtitle {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>