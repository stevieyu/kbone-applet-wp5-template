const {resolve} = require('path');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

require('dotenv-defaults').config();

/**
 *
 * @param config {import('webpack-chain').Config}
 */
module.exports = (config) => {
  config.mode(process.env.NODE_ENV);
  config.cache({type: 'filesystem'});
  config.output
      .publicPath('../../common/')
      .path(resolve('dist/mp/common'))
      .library('createApp') // 必需字段，不能修改
      .libraryExport('default') // 必需字段，不能修改
      .libraryTarget('window') // 必需字段，不能修改
  ;
  config.target('web'); // 必需字段，不能修改
  config.optimization.runtimeChunk(false) // 必需字段，不能修改
      .splitChunks({
        chunks: 'all',
        minSize: 0,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 100,
        maxInitialRequests: 100,
        automaticNameDelimiter: '~',
        name: false,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      });
  config.module.rule('assert')
      .test(/\.(png|jpg|gif|svg)$/)
      .use('file').loader('file-loader').options({
        name: '[name].[ext]?[contenthash]',
      });
  config.resolve.extensions
      .add('*')
      .add('.js')
      .add('.vue')
      .add('.json');
  config.resolve.alias
      .set('@', 'src')
      .set('src', 'src');
  config.plugin('DefinePlugin')
      .use(webpack.DefinePlugin, [{
        'process.env.isMiniprogram': true, // 注入环境变量，用于业务代码判断
        '__VUE_PROD_DEVTOOLS__': false,
        '__VUE_OPTIONS_API__': true,
      }]);
  config.plugin('dotenv')
      .use(Dotenv, [{
        expand: true,
        defaults: true,
      }]);
  config.devtool(false);
};
