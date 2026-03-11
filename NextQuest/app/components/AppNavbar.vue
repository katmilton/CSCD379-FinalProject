<script setup lang="ts">
const drawer = ref(false)
const route = useRoute()

const links = [
  { label: 'Home', to: '/', icon: 'mdi-home-variant-outline' },
  { label: 'Results', to: '/results', icon: 'mdi-sparkles-outline' },
  { label: 'My List', to: '/my-list', icon: 'mdi-bookmark-outline' },
  { label: 'History', to: '/history', icon: 'mdi-history' }
]

const isActive = (to: string) => route.path === to

watch(() => route.fullPath, () => {
  drawer.value = false
})
</script>

<template>
  <div>
    <v-app-bar flat color="transparent" height="88" class="fade-in">
      <v-container>
        <div class="nav-shell surface-panel shimmer-border">
          <NuxtLink to="/" class="brand-link interactive-lift">
            <v-avatar color="primary" size="42" class="brand-avatar">
              <v-icon icon="mdi-gamepad-variant" />
            </v-avatar>

            <div class="brand-copy">
              <div class="brand-title">NextQuest</div>
              <div class="brand-subtitle">AI game discovery journal</div>
            </div>
          </NuxtLink>

          <nav class="nav-links d-none d-md-flex">
            <NuxtLink
              v-for="link in links"
              :key="link.to"
              :to="link.to"
            >
              <v-btn
                :variant="isActive(link.to) ? 'flat' : 'text'"
                :color="isActive(link.to) ? 'primary' : undefined"
                rounded="xl"
                class="nav-button"
              >
                {{ link.label }}
              </v-btn>
            </NuxtLink>
          </nav>

          <v-btn
            class="d-md-none"
            icon
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
        <div class="drawer-header">
          <div class="text-overline text-secondary">Navigate</div>
          <div class="text-h6 font-weight-bold">NextQuest</div>
        </div>

        <div class="drawer-links">
          <v-btn
            v-for="link in links"
            :key="link.to"
            block
            size="large"
            class="justify-start drawer-link"
            :prepend-icon="link.icon"
            :variant="isActive(link.to) ? 'flat' : 'text'"
            :color="isActive(link.to) ? 'primary' : undefined"
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
.nav-shell {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 64px;
  padding: 10px 14px;
  border-radius: 999px;
}

.brand-link {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
}

.brand-avatar {
  box-shadow: 0 10px 28px rgba(139, 92, 246, 0.34);
}

.brand-copy {
  display: flex;
  flex-direction: column;
  line-height: 1.08;
}

.brand-title {
  font-size: 1.12rem;
  font-weight: 700;
  letter-spacing: 0.01em;
}

.brand-subtitle {
  color: rgba(255, 255, 255, 0.62);
  font-size: 0.82rem;
}

.nav-links {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  flex-wrap: wrap;
}

.nav-button {
  min-width: 0;
}

.mobile-drawer :deep(.v-navigation-drawer__content) {
  background:
    radial-gradient(circle at top, rgba(139, 92, 246, 0.18), transparent 30%),
    linear-gradient(180deg, rgba(11, 13, 18, 0.98) 0%, rgba(15, 20, 32, 0.98) 100%);
}

.drawer-inner {
  padding: 20px 16px;
}

.drawer-header {
  padding: 8px 10px 18px;
}

.drawer-links {
  display: grid;
  gap: 8px;
}

.drawer-link {
  min-height: 52px;
}

@media (max-width: 760px) {
  .nav-shell {
    border-radius: 28px;
  }

  .brand-subtitle {
    display: none;
  }
}
</style>
