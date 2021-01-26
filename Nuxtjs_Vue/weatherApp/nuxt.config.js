export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtApplication',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, viewport-fit=cover, user-scalable=no' },
      { httpEquiv: 'X-UA-Compatible', content: 'ie=edge' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],

    bodyAttrs: {
        class: "fb"
    },
    script: [
        {
            src: `//dapi.kakao.com/v2/maps/sdk.js?appkey=9ec652bd0d4224b306e150a002233b10&libraries=services,clusterer,drawing`
        }
    ]
  },

  //dev모드에서 자동 새로고침
  watchers: {
	webpack: {
	  aggregateTimeout: 300,
	  poll: 1000
	}
  },

  router: {
    
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
      "@/assets/scss/app.scss"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '~/plugins/vue-session.client.js'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    
  },

  //빌드되는 파일 이름 지정
  buildDir: "dist"
}
