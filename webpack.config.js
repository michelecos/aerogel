// webpack.config.js

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/main.js',
        lib: [
            "./lib/dialog-polyfill.js",
            "./lib/hogan-3.0.2.js"
        ],
    },
    output: {
        path: './www',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
         new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"lib", /* filename= */"lib.bundle.js", Infinity)
    ],
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            include: path.join(__dirname, 'src'),
            loader: 'babel-loader',
            query: {
                presets: [ "es2015"  , "react" ],
            }
        }]
    },
    debug: true
};