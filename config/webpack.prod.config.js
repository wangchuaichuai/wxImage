const BaseConfig = require('./webpack.base.config')
const { merge } = require('webpack-merge')


const webpackConfigProd = {
  mode: 'production',
  devServer: {
    // contentBase: path(__dirname,'../../dist'),舍弃，使用static
    // static: {
    //     directory: path.join(__dirname,'public')
    // },
    port: 8088,
    historyApiFallback: true,
    // contentBase: resolve(__dirname, 'dist'),
    // compress: true,
    // open: true,
  },
  plugins: [
    // new CleanWebpackPlugin({
    //   protectWebpackAssets: true,
    // }), // 热更新插件
    // new HtmlWebpackPlugin({
    //   inject: 'body',
    //   title: 'React APP',
    //   filename: 'index.html',
    //   //   template: path.join(__dirname, '/public/index.html'),
    //   //   template: '/public/index.html',
    // }),
  ],
}

module.exports = merge(webpackConfigProd, BaseConfig)
