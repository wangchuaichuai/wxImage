const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

const webpackBaseConfig = {
  entry: path.join(__dirname, '../src/index.tsx'),
  output: {
    // 输出文件设置为名称+hash
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      components: path.join(__dirname, '../src/components'),
      pages: path.join(__dirname, '../src/pages'),
      assets: path.join(__dirname, '../src/assets'),
      store: path.join(__dirname, '../src/store'),
      api: path.join(__dirname, '../src/api'),
    },
    // modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    modules: ['node_modules'],
    // fallback: path.resolve(__dirname, 'node_modules'),
    // resolveLoader: { root: path.resolve(__dirname, 'node_modules') },
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

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // {
      //     test: /\.js$/,
      //     use: 'babel-loader',
      //     exclude: [
      //         path.join(__dirname, '../node_modules')
      //     ]
      // }
      // {
      //   test: /\.(sc|c)ss/,
      //   use: 'style-loader',
      // },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
}

module.exports = webpackBaseConfig
