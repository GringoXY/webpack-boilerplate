const path = require('path');
const { merge } = require('webpack-merge');
const config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  target: 'web',

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
    compress: true,
    open: true,
    port: 9000,
    hot: true,
  },
});