export default {
  srcDir: 'src',
  buildDir: 'dist',
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Suzanne Laclautre',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { hid: 'description', name: 'description', content: 'Designeuse graphique et conceptrice d\'outils pédagogiques.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Eczar:wght@400;700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap'
      }
    ]
  },

  loading: '~/components/LoadingScreen.vue',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // See: https://nicolas-cusan.github.io/destyle.css/
    'node_modules/destyle.css/destyle.min.css',
    '~/assets/styles/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vuex-persist.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  styleResources: {
    scss: [
      '~/assets/styles/_variables.scss',
      '~/assets/styles/_mixins.scss'
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // See: https://www.npmjs.com/package/@nuxtjs/style-resources
    '@nuxtjs/style-resources',
    // See: https://www.npmjs.com/package/@nuxtjs/router-extras
    '@nuxtjs/router-extras',
    // See: https://www.npmjs.com/package/@nuxtjs/svg
    '@nuxtjs/svg'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // See: https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // See: https://image.nuxtjs.org/
    '@nuxt/image',
    // See: https://google-analytics.nuxtjs.org/setup
    '@nuxtjs/google-analytics'
  ],

  image: {
    provider: 'cloudinary',
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dzgr86lad/image/upload/'
    }
  },

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL || 'http://localhost:1337'
  },

  publicRuntimeConfig: {
    apiURL: process.env.API_URL || 'http://localhost:1337',
    emailJsServiceId: process.env.EMAILJS_SERVICE_ID,
    emailJsTemplateId: process.env.EMAILJS_TEMPLATE_ID,
    emailJsUserId: process.env.EMAILJS_USER_ID,
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },

  server: {
    host: '0.0.0.0'
  }
}
