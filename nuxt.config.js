if (process.env.NODE_ENV !== 'production') require('dotenv').config()

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "nuxt-axios-sheets-test",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "//fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,700,400italic|Material+Icons"
      }
    ]
  },
  css: ["~/assets/theme.scss", "vue-material/dist/vue-material.min.css"],

  plugins: ["~/plugins/vue-material.js"],
  env: {
    TEACHERS: process.env.TEACHERS    
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
 modules: [
  // Simple usage
  '@nuxtjs/dotenv',
 ],
  build: {
    vendor: ["axios", "vue-material"],
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      config.node = {
        fs: 'empty'
      };
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
