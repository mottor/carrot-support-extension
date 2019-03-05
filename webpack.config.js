const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    background: './src/background.ts',
    content: './src/content.tsx',
    custom: './src/custom.ts'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', 'scss'],
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader', 'postcss-loader'])
      }
    ]
  },
  plugins: [
    new CheckerPlugin(),
    new ExtractTextPlugin({
      filename: 'styles/carrot.css',
    }),
    new Dotenv({
      path: './.env'
    }),
    new CopyWebpackPlugin([
      { from: 'src/manifest.json', to: 'manifest.json' },
      { from: 'src/images', to: 'images' }
    ])
  ],
  performance: {
    hints: false
  }
}
