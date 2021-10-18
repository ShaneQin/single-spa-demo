const StatsPlugin = require('stats-webpack-plugin')

module.exports = {
  publicPath: '//localhost:3000/',
  css: {
    extract: false
  },
  configureWebpack: {
    devtool: 'none',
    output: {
      library: 'singleVue',
      libraryTarget: 'window'
    },
    plugins: [
      new StatsPlugin('manifest.json', {
        chunkModules: false,
        entrypoints: true,
        source: false,
        chunks: false,
        modules: false,
        assets: false,
        children: false,
        exclude: [/node_modules/]
      }),
    ]
  },
  devServer: {
    contentBase: './',
    compress: true
  }
}
