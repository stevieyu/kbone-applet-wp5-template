// const {ESBuildMinifyPlugin} = require('esbuild-loader')
const TerserPlugin = require("terser-webpack-plugin");

/**
 *
 * @param config {import('webpack-chain').Config}
 */
module.exports = (config) => {
    config.optimization.minimizer('js')
        .use(TerserPlugin, [{
        }])

    // NOTE: 上传会出问题
    // config.optimization.minimizer('js')
    //     .use(ESBuildMinifyPlugin, [{
    //     }])
    config.module.rule('js')
        .test(/\.js$/)
        .exclude.add(/node_modules/).end()
        .use('esbuild').loader('esbuild-loader').options({
            loader: 'jsx',
        }).end()

    /*
    "@babel/core": "^7.15.5",
    "@babel/preset-env": "^7.15.6",
    "babel-loader": "^8.2.2",
     */
    // config.module.rule('js')
    //     .test(/\.js$/)
    //     .exclude.add(/node_modules/).end()
    //     .use('babel').loader('babel-loader').options({
    //         cacheDirectory: true,
    //         presets: [
    //             ['@babel/preset-env',{ targets: "defaults" }]
    //         ],
    //     }).end()
}