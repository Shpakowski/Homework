'use strict'

const NODE_ENV = process.env.NODE_ENV || 'develop';
const webpack = require('webpack');

module.exports = {
    context: __dirname + '/app',
    entry: './app',

    output: {
        path: __dirname + '/dist',
        publicPath: '/dist/',
        filename: '[name].js',
        library: '[name]'
    },

    watch: NODE_ENV == 'develop',
    watchOptions: {
        aggregateTime: 100
    },

    devtool: NODE_ENV == 'develop' ? 'inline-source-map' : null,

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })/*,
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: 2
        }) add common js file */
    ],
    module: {
        loaders: [
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel?presets[]=es2015,plugins[]=transform-es2015-modules-commonjs',
              /*query: {
                presets: ['es2015']
              }*/
            }
        ]
    }
}