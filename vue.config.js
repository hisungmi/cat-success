const { defineConfig } = require("@vue/cli-service");


module.exports = {
  chainWebpack: config => {
      config.module.rules.delete('eslint');
      // config.performance
      // .maxEntrypointSize(400000)
      // .maxAssetSize(400000)
  },
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/hi.sungmi/'
  //   : '/',

  devServer: {
    // 프록시 설정
    proxy: {
      "/api": {
        target: "http://3.37.9.131:4000/",
        changeOrigin: true,
        "secure": false, 
        "ws": false
      },
    },
  },

  transpileDependencies: [
    'vuetify'
  ]
};
// http://3.37.9.131:3000/
