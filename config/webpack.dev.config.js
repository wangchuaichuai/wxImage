const path = require('path')
const BaseConfig = require('./webpack.base.config')
const { merge } = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfigDev = {
    mode:'development',
    devServer: {
        contentBase: path(__dirname,'../dist'),
        port: 8080,
        historyApiFallback:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),// 热更新插件
        new HtmlWebpackPlugin({
            inject:'body',
            title:'React APP',
            filename:'index.html',
            template:path.join(__dirname,'../src/index.html')
        }),
    ],

}


module.exports = merge(webpackConfigDev,BaseConfig)
