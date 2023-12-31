// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase : 'http://localhost:8000/api',
    }
  },
  css: [
    '~/assets/css/main.css'
  ],
  build:{
    transpile:['vue-toastification']
  }
})
