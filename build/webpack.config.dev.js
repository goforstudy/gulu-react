const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = Object.assign({}, base, {
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'GR',
            template: 'index.html'
        })
    ],
})