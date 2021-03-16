const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        init: './src/init.js',
        index: './src/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: false,
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            // This is to force webpack to move storage.js to a separate chunk,
            // will happen automatically if dependency size between two chunks is higher than default size
            minSize: 0,
        },
    },
};
