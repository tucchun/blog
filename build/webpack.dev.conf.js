const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf.js')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(baseConfig, {
  entry: './src/vue-router.js',
  output: {
    filename: 'ver-router.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../src/vue-router.template.html')
    })
  ],
  devServer: {
    port: 9000,
    // host: '192.168.1.51',
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    publicPath: '/',
    // contentBase: path.join(__dirname, './dist'),
    hot: true
  }
})
