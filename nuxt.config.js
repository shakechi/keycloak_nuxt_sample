import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr:false,
  
  target:"static",

  head: {
    titleTemplate: '%s - nuxt-keycloak',
    title: 'nuxt-keycloak',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:3000/'
  },

  auth: {
    localStorage: false,
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/callback',
      home: '/',
    },
    strategies: {
      keycloak: {
        scheme: 'oauth2',
        endpoints:{
          authorization: 
            'http://localhost:8080/auth/realms/test/protocol/openid-connect/auth',
          token:
            'http://localhost:8080/auth/realms/test/protocol/openid-connect/token',
          logout:
            'http://localhost:8080/auth/realms/test/protocol/openid-connect/logout',
        },
        logoutRedirectUri:'http://localhost:3000/',
        //userinfo_endpoint: false,
        //access_type: 'offline',
        resopnse_type: 'id_token token',
        //token_type: 'Bearer',
        //token_key: 'access_token',
        clientId: 'account',
        scope: ['openid'],
        redirect_uri:'/admins/page'
      },

      // local: {
      //   endpoints: {
      //     login: {
      //       url:'/auth/sign_in',
      //       method:'post',
      //       propertyName: false
      //     },
      //     logout: false,
      //     user: false
      //   }
      //}

    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  router: {
    middleware: ['sample'],
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  // vue: {
  //   devtools: true
  // },
}
