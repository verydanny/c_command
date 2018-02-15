const path = require('path');
const webpack = require('webpack');
const helper = require('./node.helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    polyfills: helper.root('src/polyfills.ts'),
    vendor: helper.root('src/vendor.ts'),
    app: helper.root('src/main.ts')
  },
  output: {
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: helper.root('tsconfig.json')
            }
          },
          'angular2-template-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.scss$/,
        loaders: [
          'raw-loader',
          'fast-sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(@angular|esm5)/,
      helper.root('src/')
    ),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: helper.root('src/index.html')
    })
  ]
};