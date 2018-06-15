/**
 * Created by mohwa on 2018. 2. 14..
 */

const path = require('path');

const webpack = require('webpack');

const {Config, environment} = require('webpack-config');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const envConfig = environment.get('config');

const rootPath = path.join(__dirname, '..');

const srcPath = path.join(rootPath, 'src');
const buildPath = path.join(rootPath, 'dist');

const entry = path.join(srcPath, 'emoji-joiner');

const config = {
    entry: {
        "emoji-joiner": entry,
        "emoji-joiner.min": entry
    },
    plugins: [
        new UglifyJsPlugin({
            include: /\.min\.js$/
        })
    ]
};

module.exports = new Config().extend(path.join(__dirname, 'webpack.base.config.js')).merge(config);