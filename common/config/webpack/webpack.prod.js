const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const prodConfig = require('../../../node_modules/angular2-webpack-starter/config/webpack.prod');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';

module.exports = function (options) {
  return webpackMerge(commonConfig({env: ENV}), prodConfig({env: ENV}), {

  });
};
