// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

const { defineConfig } = require('@vue/cli-service')
const  path  = require('path');

module.exports = defineConfig({
  transpileDependencies: true,

  // 添加开发服务器配置
  devServer: {
    proxy: {
      // 配置 API 代理
      '/api': {
        target: 'http://localhost:3000', // 后端 API 地址
        changeOrigin: true,             // 允许跨域
        pathRewrite: { '^/api': '' }    // 重写路径，去掉/api前缀
      }
    },
    port: 8080,         // 前端开发端口
    open: true           // 启动后自动打开浏览器
  },

  // 添加 CSS 配置
  css: {
    loaderOptions: {
      scss: {
        // 全局 SCSS 变量注入
        additionalData: `@import "~@/assets/scss/variables.scss";`
      }
    }
  },
  //添加webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
})