const webpackMerge = require('webpack-merge');
const commonConfig = require('../../../common/config/webpack/webpack.common');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';

module.exports = function (options) {
  return webpackMerge(commonConfig({env: ENV}), {

  });
};
