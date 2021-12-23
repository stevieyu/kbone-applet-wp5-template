const MpPlugin = require('mp-webpack-plugin');
const miniprogramConfig = require('../miniprogram.config.js');
const {resolve} = require('path');

/**
 *
 * @param config {import('webpack-chain').Config}
 */
module.exports = (config) => {
  config
      .entry('index')
      .add(resolve('src/bootstrap/entry.js'));

  config.plugin('MpPlugin')
      .use(MpPlugin, [miniprogramConfig]);
};
