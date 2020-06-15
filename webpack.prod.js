const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

console.log('Configuration', 'production');

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [new UglifyJsPlugin()]
    }
});