const path = require('path');
const baseConfig = require('./webpack.config.js');

module.exports = Object.assign(
    {
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            writeToDisk: true,
        },
    },
    baseConfig
);
