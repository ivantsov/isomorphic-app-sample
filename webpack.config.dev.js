var path = require('path');
var webpack = require('webpack');

var host = 'http://localhost:3001';

module.exports = {
    entry: [
        'webpack-dev-server/client?' + host,
        'webpack/hot/only-dev-server',
        './client'
    ],
    output: {
        path: path.join(__dirname, '/'),
        filename: 'bundle.js',
        publicPath: host + '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel?stage=0'],
            exclude: /node_modules/
        }]
    }
};