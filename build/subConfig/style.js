const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 *
 * @param config {import('webpack-chain').Config}
 */
module.exports = (config) => {
  config.optimization.minimizer('style')
      .use(CssMinimizerPlugin, [{
        test: /\.(css|wxss)$/g,
      }]);
  config.module.rule('style')
      .test(/\.s?[ac]ss$/)
      .use('MiniCssExtractPluginLoader').loader(MiniCssExtractPlugin.loader).end()
      .use('css').loader('css-loader').end()
      .use('sass').loader('sass-loader').end()
      .use('postcss').loader('postcss-loader').end();
  config.plugin('MiniCssExtractPlugin')
      .use(MiniCssExtractPlugin, [{
        filename: '[name].wxss',
      }]);
};
