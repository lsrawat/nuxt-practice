module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Todo App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Practice project for nuxt tutorial' },
      { }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'canonical', href:'http://www.sitename.com'}
    ]
  },
  css:[
    '~/css/main.css'
  ],
  /*
  ** Customize the progress bar color
  */
  modules:[
    '@nuxtjs/component-cache'
  ],
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

