const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const BASE_CONFIG = require('./webpack.base.config');

const CLIENT_PROD_CONFIG = {
    name: 'webpack-prod-client-config',
    target: 'web',
    mode: 'production',
    stats: 'errors-only',
    entry: {
        app: path.resolve(__dirname, '../src/client/client.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'static/js/[name].[chunkhash].js',
        chunkFilename: 'static/js/[name].[chunkhash].js'
    },
    optimization: {
        splitChunks: {
            name: false,
            cacheGroups: {
                commons: {
                    name: 'vendor',
                    chunks: 'initial'
                }
            }
        },
        runtimeChunk: 'single'
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: 'true'
        }),
        new HTMLWebPackPlugin({
            template: `!!raw-loader!${path.resolve(__dirname, '../src/views/index.ejs')}`,
            filename: './views/index.ejs',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
                xhtml: true
            }
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '../public'),
                    to: path.resolve(__dirname, '../dist/static')
                }
            ]
        })
    ]
};

module.exports = [merge(BASE_CONFIG, CLIENT_PROD_CONFIG)];
