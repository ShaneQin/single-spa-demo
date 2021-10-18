module.exports = {
  devServer: {
    proxy: {
      '/spa': {
        target: 'http://localhost:3000',
        changeOrigin: true
      },
    }
  }
}
