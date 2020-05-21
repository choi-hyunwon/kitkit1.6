
module.exports = {
  mode: 'universal',
  srcDir: 'client/',
  /*
  ** Headers of the page
  */
  head: {
    title: 'kitkit 1.6',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'},
      { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/js/bundle.js' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/bootstrap.css',
    '~/assets/css/fonts/fontawesome/solid.css',
    '~/assets/css/fontawesome.css',
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-vue/dist/bootstrap-vue.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "@/plugins/prism.js",  ssr: false },
    { src: "@/plugins/bootstrap-vue.js" },
    { src: "@/plugins/fragment.js" },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [

  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extractCSS : true,
    extend (config, ctx) {
    }
  }
}
