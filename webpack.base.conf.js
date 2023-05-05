const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash:6].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
      {
        test: /\.svg/,
        type: 'asset/inline',
        generator: {
          filename: 'assets/icon/[name][ext]',
        },
      },
      {
        test: /\.json/,
        type: 'asset/source',
        generator: {
          filename: 'assets/json/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack 5 練習',
      template: path.resolve(__dirname, './src/template/index.html'),
      filename: 'index.html',
      favicon: './src/assets/images/favicon-32x32.png',
    }),
    new CleanWebpackPlugin(),
  ],
};
