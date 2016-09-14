const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const devConfig = require('../../../node_modules/angular2-webpack-starter/config/webpack.dev');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';

module.exports = function (options) {
  return webpackMerge(commonConfig({env: ENV}), devConfig({env: ENV}), {

  });
};
