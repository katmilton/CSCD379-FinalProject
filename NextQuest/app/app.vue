<script setup lang="ts">
const { initProfile } = useProfile()

onMounted(async () => {
  try {
    await initProfile()
  } catch (error) {
    console.error('Profile init failed', error)
  }
})
</script>

<template>
  <v-app>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>
