const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const webpackBaseConfig = {
  entry: './src/index.tsx',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['node_modules'],
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
        test: /\.css$/,
        use: [
            {
                loader:'style-loader'
            },
            {
                loader: 'css-loader'
            }
        ],
      },
      {
          test: /\.less$/,
          use: [
            'less-loader', 'style-loader', 'css-loader'
          ]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.(png|svg|jepg|jfif)$/,
        use: 'url-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: 'body',
      template: './public/index.html',
    }),
  ],
}

module.exports = webpackBaseConfig
