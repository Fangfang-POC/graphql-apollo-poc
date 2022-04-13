const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const packageJson = require('./package.json');

module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    target: 'web',
    // cache: false,
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                // options: {
                //     presets: ['react'],
                // },
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s([ac])ss/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],  //resolve these extensions in order
    },
    devtool: 'source-map',
    optimization: {
        minimize: false,
    },
    output: {
        filename: '[name].[contenthash:8].js',
        path: path.resolve(__dirname, './dist'),
        chunkFilename: '[name].[contenthash:8].chunk.js',
        libraryTarget: 'var',
        library: 'GraphqlApolloPOC',
        publicPath: '/',
    },
    devServer: {
        liveReload: true,
        open: true,
        port: 6060, //make this port the same as styleguidist port to reload the page when changes are made.
        progress: true,
        hot: true,
        injectClient: true,
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(__dirname, './public/index.html'),
        inject: 'head',
        chunks: 'all',
        hash: true,
    })]
};