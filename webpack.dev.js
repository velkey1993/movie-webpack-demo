const path = require("path");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

console.log('Configuration', 'development');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000
    }
});
