<script setup lang="ts">
const { initProfile } = useProfile()

onMounted(() => {
  initProfile()
})
</script>

<template>
  <v-app>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>
