var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config.dev');

var host = 'localhost';
var port = 3001;

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(port, host, function (err) {
    if (err) {
        console.log(err);
    }

    console.log('Dev server listening at http://%s:%s', host, port);
});