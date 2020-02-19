const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/index.tsx',
  context: __dirname,

  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new webpack.ProvidePlugin({
       'React': 'react',
    }),
    new CopyPlugin([
      { from: 'assets', to: 'assets' },
    ]),
  ],

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    plugins: [
      new TsconfigPathsPlugin()
    ]
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        use: ['style-loader', 'css-loader', 'sass-loader'],
        test: /\.(s?)css$/
      },
      {
        test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
        loader: 'file'
      }
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
    publicPath: '/'
  }
};
