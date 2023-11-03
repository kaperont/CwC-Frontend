// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-primevue'
  ],
  css: ['primevue/resources/themes/lara-dark-teal/theme.css'],
  primevue: {
    usePrimeVue: true,
    options: {
      ripple: true
    },
    importPT: undefined,
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
    components: {
        prefix: 'P'
    },
    directives: {
        prefix: 'p'
    }
  },
  devtools: { enabled: false }
})
