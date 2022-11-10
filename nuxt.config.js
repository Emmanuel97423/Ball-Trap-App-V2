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
    title: "Exo-Trap",
    titleTemplate: "%s - Exo-Trap vente d'article de sport",
    htmlAttrs: {
      lang: "fr",
    },
    // script: [
    //   { hid: 'stripe', src: 'https://js.stripe.com/v3/', defer: true },
    // ],
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Exo-Trap, Exo-Trap Shop",
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
    '@nuxtjs/dayjs'
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
    // Enable breakpoints
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    },
    babel: {
      compact: true,
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-private-methods',
      ],
    },
    terser: {
      terserOptions: {
        compress: {
          drop_console: false
        }
      }
    },

    analyse: false,
    transpile: ["vee-validate/dist/rules", 'vee-validate/dist/locale/fr']

  },
  server: {
    port: process.env.PORT || 3000,
  },
  strapi: {},
  axios: {
    // baseURL: " http://localhost:8080/api",
    // baseURL: "https://trap-one-api.herokuapp.com/api",
    // baseURL: "https://exo-trap-api.onrender.com/api",
    baseURL: "https://exo-trap-api.osc-fr1.scalingo.io/api",
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

  //Days Js options
  dayjs: {
    locales: ['fr'],
    defaultLocale: 'fr',
    defaultTimeZone: 'Indian/Reunion',
    plugins: [
      'utc', // import 'dayjs/plugin/utc'
      'timezone' // import 'dayjs/plugin/timezone'
    ] // Your Day.js plugin
  },
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  }
  // ...

};
