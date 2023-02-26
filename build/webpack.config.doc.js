const base = require('./webpack.config')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = Object.assign({}, base, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../doc'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
})