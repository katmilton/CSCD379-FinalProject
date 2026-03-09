// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['vuetify-nuxt-module'],

  css: [
    '@/assets/styles/main.scss',
    '@mdi/font/css/materialdesignicons.css'
  ],

  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dark',
        themes: {
          dark: {
            colors: {
              background: '#0b0d12',
              surface: '#121722',
              primary: '#8b5cf6',
              secondary: '#22d3ee',
              accent: '#f472b6',
              success: '#22c55e',
              info: '#38bdf8',
              warning: '#f59e0b',
              error: '#ef4444'
            }
          }
        }
      },
      icons: {
        defaultSet: 'mdi'
      },
      defaults: {
        VBtn: {
          rounded: 'xl',
          variant: 'flat'
        },
        VCard: {
          rounded: 'xl',
          elevation: 8
        },
        VChip: {
          rounded: 'xl'
        },
        VTextField: {
          variant: 'solo-filled'
        },
        VTextarea: {
          variant: 'solo-filled'
        }
      }
    }
  }
})
