var path = require('path');

module.exports = {
    entry: ['./assets/index'],
    output: {
        path: path.join(__dirname, 'assets'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel?stage=0'],
            exclude: /node_modules/
        }]
    }
};