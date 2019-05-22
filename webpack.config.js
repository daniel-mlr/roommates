/* s6 lect 57 webpack devServer */
/* global module, __dirname, require */

const path = require('path')

module.exports = {
  entry: './src/app.js',
  // entry: './src/playground/redux-expensify.js',
  // mode: 'development',
  mode: 'development',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',   // quel loader utiliser
      test: /\.js$/,  // sur quels fichier le loader doit-il s'exécuter
      exclude: /node_modules/,  // exceptions: tout le répertoire des modules
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  // enlever devtool en production
  devtool:'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
}
