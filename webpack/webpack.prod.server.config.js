const BASE_CONFIG = require('./webpack.base.config');
const path = require('path');
const webpack = require('webpack');
const webpackNodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');

const SERVER_PROD_CONFIG = {
    name: 'webpack-prod-server-config',
    target: 'node',
    mode: 'production',
    stats: 'errors-only',
    node: {
        __dirname: false,
        __filename: false
    },
    entry: {
        server: path.resolve(__dirname, '../src/server/server.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'server.js'
    },
    optimization: {
        minimize: false
    },
    externals: [webpackNodeExternals()],
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        })
    ]
};

module.exports = [merge(BASE_CONFIG, SERVER_PROD_CONFIG)];
