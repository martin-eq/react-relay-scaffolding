import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackNotifierPlugin from 'webpack-notifier';

const config = {
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            path.resolve('app/index.jsx')
        ]
    },
    output: {
        path: path.resolve('public/assets'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: path.resolve('public/assets')
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {test: /\.js(x)?$/, loaders: ['babel'], exclude: /node_modules/},
            {test: /\.json$/, loaders: ['json']},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')},
            {test: /\.styl$/, loader: ExtractTextPlugin.extract('style', 'css!stylus')},
        ]
    },
    resolve: {
        // Needed so you can require('a') instead of require('a.jsx')
        extensions: ['', '.js', '.jsx', '.json', '.css', '.styl'],

        // Let us do things like require('app/components/App')
        root: __dirname,

        // Whenever someone does import 'react', resolve the one in the node_modules
        // at the top level, just in case a dependency also has react in its node_modules,
        // we don't want to be running to versions of react!!!
        alias: {
            react: path.join(__dirname, 'node_modules/react')
        }
    },
    plugins: [
        new WebpackNotifierPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin({
            template: './app/assets/index.template.html',
            inject: 'body' // Inject all scripts into the body
        })
    ]
};

export default config;