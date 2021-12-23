const {VueLoaderPlugin} = require('vue-loader');

/**
 *
 * @param config {import('webpack-chain').Config}
 */
module.exports = (config) => {
  config.module.rule('vue')
      .test(/\.vue$/)
      .use('vue').loader('vue-loader').options({
        refSugar: true,
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('wx-') || tag.startsWith('mp-'),
        },
      });

  // config.resolve.alias.set('vue', 'vue/dist/vue.esm-browser.prod.js')
  config.resolve.alias.set('vue', 'vue/dist/vue.runtime.esm-browser.prod.js'); // NOTE: mini
  // config.resolve.alias.set('vue', 'vue/dist/vue.runtime.esm-bundler.js'); // NOTE: default error

  config.plugin('VueLoaderPlugin')
      .use(VueLoaderPlugin, [{
      }]);
};
