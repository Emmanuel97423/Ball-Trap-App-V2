export default {
  target: "static",
  router: {
    base: "/Ball-Trap-App-V2/",
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Trap One",
    titleTemplate: "%s - Trap One vente d'article de sport",
    htmlAttrs: {
      lang: "fr",
    },
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
  plugins: [{ src: "~/plugins/plugin.js", mode: "client" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxtjs/strapi",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true,
    },
  },
  server: {
    port: 8000,
  },
  strapi: {},
  axios: {
    baseURL: "https://trap-one-api.herokuapp.com/api",
  },
  auth: {
    redirect: {
      login: "/admin",
      //logout: "/admin",
      //callback: false,
      //home: "/addProduct",
    },

    strategies: {
      local: {
        token: {
          property: "token",

          global: true,
          // required: true,
          // type: 'Bearer'
        },

        user: {
          property: "user",
          // autoFetch: true
        },
        endpoints: {
          login: {
            url: "/auth/login",
            method: "post",
          },
          logout: { url: "/auth/logout", method: "post" },
          user: false,
        },
      },
    },
  },
};
