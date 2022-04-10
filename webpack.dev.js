const { merge } = require('webpack-merge');
const common = require('./webpack.common.js')

module.exports = merge(common , {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './public',
    contentBase: './public',
    hot: true   // Hot reloading default: true
  }
})