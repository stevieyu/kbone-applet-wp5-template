const ESLintPlugin = require('eslint-webpack-plugin');
const {resolve} = require("path");
/**
 *
 * @param config {import('webpack-chain').Config}
 */
module.exports = (config) => {
    config.plugin('ESLintPlugin')
        .use(ESLintPlugin, [{
            fix: true,
            formatter: 'friendly',
            extensions: ['.js', '.jsx', '.vue']
        }])
}