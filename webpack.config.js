const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  devtool: 'eval-source-map',
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  // output: {
  //   filename: '[name].[chunkhash].js',
  //   path: path.resolve(__dirname, 'build')
  // },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'tests')
        ]
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 25000
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    historyApiFallback: true
  }
}
