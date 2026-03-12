<script setup lang="ts">
const drawer = ref(false)
const route = useRoute()

const links = [
  { label: 'Home', to: '/' },
  { label: 'Results', to: '/results' },
  { label: 'My List', to: '/my-list' },
  { label: 'History', to: '/history' }
]

watch(() => route.path, () => {
  drawer.value = false
})
</script>

<template>
  <div>
    <v-app-bar flat color="transparent" height="88" class="app-navbar">
      <v-container>
        <div class="nav-shell glass-card">
          <NuxtLink to="/" class="brand-link interactive-lift">
            <div class="brand-left">
              <v-avatar color="primary" size="40" class="brand-avatar">
                <v-icon icon="mdi-gamepad-variant" />
              </v-avatar>

              <div class="brand-copy">
                <div class="brand-title">NextQuest</div>
                <div class="brand-subtitle">AI game discovery journal</div>
              </div>
            </div>
          </NuxtLink>

          <nav class="nav-links d-none d-md-flex">
            <NuxtLink v-for="link in links" :key="link.to" :to="link.to">
              <v-btn
                rounded="pill"
                class="nav-btn"
                :variant="route.path === link.to ? 'flat' : 'text'"
                :color="route.path === link.to ? 'primary' : undefined"
              >
                {{ link.label }}
              </v-btn>
            </NuxtLink>
          </nav>

          <v-btn
            class="d-flex d-md-none"
            icon
            rounded="xl"
            variant="tonal"
            color="primary"
            aria-label="Open navigation menu"
            @click="drawer = !drawer"
          >
            <v-icon :icon="drawer ? 'mdi-close' : 'mdi-menu'" />
          </v-btn>
        </div>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      location="right"
      temporary
      width="290"
      class="mobile-drawer"
    >
      <div class="drawer-inner">
        <div class="text-overline text-secondary mb-2">Navigate</div>
        <div class="text-h6 font-weight-bold mb-4">NextQuest</div>

        <div class="drawer-links">
          <v-btn
            v-for="link in links"
            :key="link.to"
            block
            rounded="xl"
            size="large"
            class="justify-start"
            :variant="route.path === link.to ? 'flat' : 'text'"
            :color="route.path === link.to ? 'primary' : undefined"
            :to="link.to"
          >
            {{ link.label }}
          </v-btn>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<style scoped>
.app-navbar {
  backdrop-filter: blur(12px);
}

.nav-shell {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 68px;
  padding: 10px 14px;
  border-radius: 999px;
}

.brand-link {
  display: flex;
  align-items: center;
  min-width: 0;
}

.brand-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-avatar {
  box-shadow: 0 0 0 10px rgba(139, 92, 246, 0.08);
}

.brand-copy {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.brand-title {
  font-size: 1.15rem;
  font-weight: 800;
  color: white;
  white-space: nowrap;
}

.brand-subtitle {
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.66);
  white-space: nowrap;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
}

.nav-btn {
  min-width: 84px;
}

.mobile-drawer :deep(.v-navigation-drawer__content) {
  background:
    radial-gradient(circle at top, rgba(139, 92, 246, 0.18), transparent 32%),
    linear-gradient(180deg, rgba(14, 18, 30, 0.98), rgba(10, 13, 24, 0.98));
}

.drawer-inner {
  padding: 24px 18px;
}

.drawer-links {
  display: grid;
  gap: 8px;
}

@media (max-width: 959px) {
  .brand-subtitle {
    display: none;
  }
}
</style>
