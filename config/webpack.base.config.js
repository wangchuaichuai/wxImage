const path = require('path')

const webpackBaseConfig = {
  entry: path.join(__dirname, '../src/index.tsx'),
  output: {
    path: path.join(__dirname, '../dist'),
    // 输出文件设置为名称+hash
    filename: '[name].[fullhase:4].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      components: path.join(__dirname, '../src/components'),
      pages: path.join(__dirname, '../src/pages'),
      assets: path.join(__dirname, '../src/assets'),
      store: path.join(__dirname, '../src/store'),
      api: path.join(__dirname, '../src/api'),
    },
    modules: ['node_modules'],
    fallback: path.join(__dirname, 'node_modules'),
  },
  devServer: {
    port: 3000,
    host: '0.0.0.0',
    open: true,
    inline: true,
    hot: true,
    disableHostCheck: true,
    // proxy: {
    //   '/': {
    //     target: 'https://www.shijuepi.com', //服务地址
    //     ws: false,
    //     changeOrigin: true,
    //     pathRewrite: { '^/': '' },
    //   },
    // },
  },
  resolveLoader: { root: path.join(__dirname, 'node_modules') },
  module: {
    rules: [
      //   {
      //     test: /\.js[x]/,
      //     use: 'babel-loader',
      //   },
      //   {
      //     test: /\.(sc|c)ss/,
      //     use: 'style-loader',
      //   },
    ],
  },
}

module.exports = webpackBaseConfig
