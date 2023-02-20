const path = require('path')
const { merge } = require('webpack-merge')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const commonConfig = require('./webpack.common')

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  stats: 'errors-only',
  devServer: {
    hot: true,
    open: true,
    host: 'localhost',
    port: 8888,
    static: path.resolve(__dirname, '../public')
  },
  plugins: [
    new ReactRefreshWebpackPlugin(), // 添加热更新插件
  ]
})
