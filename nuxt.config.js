const cache = require('./utils/cache').getInstance();

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
  serverMiddleware:[
    '~/serverMiddlewares/cache.js'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /**
   * Hooks information. Used render here for caching the rendered HTML data. 
   */
  hooks:{
    render:{
      routeDone(url, result, context) {
        console.log(url);
        console.log("render done");
        // console.log(cache);
        cache.setCache(String(url), result.html);
      }
    }
  },
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

