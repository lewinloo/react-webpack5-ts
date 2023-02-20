const path = require('path')
const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.common')

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'hidden-source-map',
  stats: 'normal',
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].[contenthash:8].bundle.js",
    publicPath: '/',
    clean: true
  },
  optimization: {

  }
})
