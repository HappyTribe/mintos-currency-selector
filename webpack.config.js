const path = require('path')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const SRC_DIR = path.resolve(__dirname, './src')
const DIST_DIR = path.resolve(__dirname, './dist')

module.exports = function() {
    return {
        mode: 'development',
        context: SRC_DIR,
        entry: {
            app: `${SRC_DIR}/entry.js`,
        },
        output: {
            filename: '[name].js',
            path: DIST_DIR,
            publicPath: '/',
        },
        resolve: {
            extensions: ['*', '.js', '.scss'],
            alias: {
                src: SRC_DIR,
            },
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.scss$/,
                    include: [SRC_DIR, /node_modules/],
                    loaders: ['style-loader', 'css-loader', 'sass-loader'],
                },
            ],
        },
        devtool: 'cheap-module-source-map',
        devServer: {
            hot: true,
            port: 5000,
            publicPath: '/',
            contentBase: DIST_DIR,
            historyApiFallback: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Mintos Currency Selector',
                template: `${SRC_DIR}/index.html`,
                mobile: true,
                minify: { collapseWhitespace: false },
                links: [
                    {
                        rel: 'stylesheet',
                        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,600',
                    },
                ],
            }),
            new webpack.HotModuleReplacementPlugin(),
        ],
    }
}
