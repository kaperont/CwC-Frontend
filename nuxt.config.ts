import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    etsyAPIKey: '',
    public: {
      baseEtsyUrl: 'https://openapi.etsy.com/v3/application/shops/{shop_id}/listings'
    }
  },
  modules: [
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
  ],
  css: [
    'primeicons/primeicons.css'
    // 'assets/scss/main.scss',
    // 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
  ],
  primevue: {
    usePrimeVue: true,
    options: {
      ripple: true,
      theme: {
        preset: Aura,
        options: {
            darkModeSelector: 'system',
            cssLayer: false
        }
      }
    },
    importPT: undefined,
  },
  devtools: { enabled: true }
})
