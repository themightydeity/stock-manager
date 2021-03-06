const path = require('path');
const PATHS = {
    app: path.resolve(__dirname, 'app'),
    build: path.resolve(__dirname, 'build')
};

module.exports = {
    entry: {
        app: PATHS.app + '/index.js'
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.js?/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader? limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    devServer: {
        host: '127.0.0.1',
        port: 4444,
    },
    resolve: {
        alias: {
            'react-easy-chart': path.join(__dirname, '/node_modules/react-easy-chart/', 'modules')
        }
    },
};