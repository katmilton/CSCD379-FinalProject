<template>
  <div class="layout-shell">
    <AppNavbar />

    <v-main class="main-content">
      <slot />
    </v-main>

    <AppFooter />
  </div>
</template>

<style scoped>
.layout-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}
</style>