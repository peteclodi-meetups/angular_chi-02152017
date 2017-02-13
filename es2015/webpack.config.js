'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const ChunkWebpack = webpack.optimize.CommonsChunkPlugin;
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].css"
});

module.exports = {
    context: path.resolve(__dirname, './src'),
    devServer: {
        contentBase: path.resolve(__dirname, './src'),
        port: 9000
    },
    devtool: 'sourcemap',
    entry: {
        main: './main.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                loader: 'raw-loader',
                test: /\.html$/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    plugins: [
                        "angular2-annotations",
                        "transform-decorators-legacy",
                        "transform-class-properties",
                        "transform-flow-strip-types"
                    ],
                    presets: ['es2015', 'angular2']
                },
                exclude: [/node_modules/]
            },
            {
                test: path.resolve(__dirname, './src/styles.scss'),
                exclude: [/node_modules/],
                use: extractSass.extract({
                    use: 'css-loader!sass-loader'
                })
            },
            {
                test: /\.(sass|scss)$/,
                exclude: [
                    /node_modules/,
                    path.resolve(__dirname, './src/styles.scss')
                ],
                loader: [
                    'raw-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        extractSass,
        new ChunkWebpack({
            filename: 'vendor.bundle.js',
            minChunks: Infinity,
            name: 'vendor'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body',
        })
    ]
};
