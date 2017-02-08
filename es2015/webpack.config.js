'use strict';

const HtmlWebpack = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const ChunkWebpack = webpack.optimize.CommonsChunkPlugin;
const CoreJsPlugin = require('core-js-webpack-plugin');

const rootDir = path.resolve(__dirname, '.');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    devServer: {
        contentBase: path.resolve(rootDir, 'dist'),
        port: 9000
    },
    devtool: 'eval-source-map',
    entry: {
        app: [ path.resolve(rootDir, 'src', 'main') ],
        vendor: [ path.resolve(rootDir, 'src', 'vendor') ]
    },
    module: {
        loaders: [
            { loader: 'raw', test: /\.(css|html)$/ },
            { loader: 'babel-loader', exclude: /(node_modules)/, test: /\.js$/,
                query: { presets: ['es2015'] }
            },
            { loader: 'sass-loader', exclude: /(node_modules)/, test: /\.scss$/ }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(rootDir, 'dist')
    },
    plugins: [
        new CoreJsPlugin({
            modules: ['es6', 'core.dict'], // modules / namespaces
            blacklist: ['es6.reflect'],    // blacklist of modules / namespaces, by default - empty list
            library: false,                // flag for build without global namespace pollution, by default - false
            umd: true                      // use UMD wrapper for export `core` object, by default - true
        }),
        new ChunkWebpack({
            filename: 'vendor.bundle.js',
            minChunks: Infinity,
            name: 'vendor'
        }),
        new HtmlWebpack({
            filename: 'index.html',
            inject: 'body',
            template: path.resolve(rootDir, 'src', 'app', 'index.html')
        })
    ],
    resolve: {
        extensions: ['.js']
    }
};
