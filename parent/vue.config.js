module.exports = {
  devServer: {
    proxy: {
      '/spa': {
        target: 'localhost:3000',
        changeOrigin: true,
        pathRewrite:{
          '^/spa':''
        }
      }
    }
  }
}
