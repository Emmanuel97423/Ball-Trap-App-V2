
export default {
  target: "static",
  router: {
    base: "/",

  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  //Environement variables 
  env: {
    stripePublishKey: 'pk_test_51JSFvUGiJRPLuK6CPyrQaQVCr4qRgXE2oVJRAFBqBss9PJ9vQiaScliPpx1Z0veH7MS4PTQObU4CS5EzKYtCKc3v00SjPAg67p',
    apiUrl: process.env.BASE_URL || "https://trap-one-api.herokuapp.com/api",
    // apiUrl: process.env.BASE_URL || "http://localhost:8080/api",
    baseUrl: process.env.BASE_URL || "https://trap-one-api.herokuapp.com/api",
    RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY || '6Le0-00eAAAAAL4skgRDMB6y_F04__ymqVOlCd12',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Trap One",
    titleTemplate: "%s - Trap One vente d'article de sport",
    htmlAttrs: {
      lang: "fr",
    },
    script: [
      { src: 'https://js.stripe.com/v3' }
    ],
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Trap One, Trap One Shop",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#f79837", throttle: 200, height: "3px", css: true },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/app.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/plugin.js", mode: "client" }, "~/plugins/vee-validate"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/pwa',
    // 'nuxt-purgecss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxtjs/strapi",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    'nuxt-stripe-module',
    // '@nuxtjs/pwa',
    ['nuxt-vuex-localstorage', {
      localStorage: ['cart', 'user', 'order', 'adress', 'products']
    }],
    '@nuxtjs/recaptcha',
  ],
  bootstrapVue: {
    // Install the `IconsPlugin` plugin (in addition to `BootstrapVue` plugin)
    icons: true
  },
  stripe: {
    publishableKey: 'pk_test_51JSFvUGiJRPLuK6CPyrQaQVCr4qRgXE2oVJRAFBqBss9PJ9vQiaScliPpx1Z0veH7MS4PTQObU4CS5EzKYtCKc3v00SjPAg67p',
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true,
    },

    analyse: false,
    transpile: ["vee-validate/dist/rules"]

  },
  server: {
    port: process.env.PORT || 3000,
  },
  strapi: {},
  axios: {
    // baseURL: " http://localhost:8080/api",
    baseURL: "https://trap-one-api.herokuapp.com/api",
    proxy: false
  },
  auth: {
    // redirect: {
    //   login: "/login",
    //   logout: "/login",
    //   // callback: "/login",
    //   // home: "/my-account",
    // },
    strategies: {
      local: false,
      cookie: {
        token: {
          property: "token",
          required: true,
          type: "Bearer",
        },
        user: {
          property: "user",
          // property: false
        },
        endpoints: {
          login: {
            url: "/auth/login",
            method: "post",
            // propertyName: 'token'
          },
          user: { url: '/user/me', method: 'get' },
          // user: false,
          logout: false,

        },
      },
    },
  },
  pwa: {
    icon: {
      /* icon options */
      fileName: 'ball_trap.jpg',
      purpose: 'any'
    },
    manifest: {
      name: 'Exo-Trap',
      lang: 'fr',
      useWebmanifestExtension: false,
      background_color: '#ffffff'
    }
  },
  recaptcha: {
    /* reCAPTCHA options */
    hideBadge: false, // Hide badge element (v3 & v2 via size=invisible)
    // language: fr,   // Recaptcha language (v2)
    siteKey: '6Le0-00eAAAAAL4skgRDMB6y_F04__ymqVOlCd12',    // Site key for requests
    version: 2,     // Version
    size: 'compact',        // Size: 'compact', 'normal', 'invisible' (v2)

  },
};
