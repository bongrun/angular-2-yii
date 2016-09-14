const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const devConfig = require('../../../common/config/webpack/webpack.dev');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';

module.exports = function (options) {
  return webpackMerge(commonConfig({env: ENV}), devConfig({env: ENV}), {

  });
};
