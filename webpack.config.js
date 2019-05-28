/* s6 lect 57 webpack devServer */
/* global module, __dirname, require */

const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// on exporte une fonction plutot qu'un objet, ce qui nous permet 
// de passer des arguments
module.exports = (env) => {
  const isProduction = env === 'production'
  console.log('env', env)
  return {
    entry: './src/app.js',
    // entry: './src/playground/redux-expensify.js',
    mode: 'development',
    // mode: 'production',
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
    // 'source map' crée un bundle séparé, utilisé seulement si l'usager
    // ouvre chrome development tool
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    },
    plugins: [new BundleAnalyzerPlugin()]

  }
}