// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    etsyAPIKey: '',
    public: {
      baseEtsyUrl: 'https://openapi.etsy.com/v3/application/shops/{shop_id}/listings'
    }
  },
  modules: [
    'nuxt-primevue'
  ],
  css: [
    'assets/scss/main.scss',
    'primevue/resources/themes/bootstrap4-light-blue/theme.css'
  ],
  primevue: {
    usePrimeVue: true,
    options: {
      ripple: true
    },
    importPT: undefined,
    cssLayerOrder: 'primevue',
    components: {
        prefix: 'P'
    },
    directives: {
        prefix: 'p'
    }
  },
  devtools: { enabled: false }
})
