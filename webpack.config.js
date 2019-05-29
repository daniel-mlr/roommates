/* s6 lect 57 webpack devServer */
/* global module, __dirname, require */

// because we are in node (and not in react) we don't have
// access to import, so we use require
const path = require('path')
// const ExtractTextPlugin =require('extract-text-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// uglify et optimize, voir note plus bas
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

// on exporte une fonction plutot qu'un objet, ce qui nous permet 
// de passer des arguments
module.exports = (env) => {
  const isProduction = env === 'production'
  console.log('env', env)
  // styles.css sera le conteneur de nos styles
  // const CSSExtract = new ExtractTextPlugin('styles.css')
  return {
    // L'optimisation empêche la génération des fichiers map, et
    // n'optimise pas grand chose, à vrai dire!
    // optimization: {
    //   minimizer: [
    //     new UglifyJsPlugin({
    //       cache: true,
    //       parallel: true,
    //       sourceMap: false
    //     }),
    //     new OptimizeCSSAssetsPlugin({})
    //   ]
    // },
    entry: './src/app.js',
    // entry: './src/playground/redux-expensify.js',
    mode: isProduction ? 'production' : 'development',
    // mode: 'development',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',   // quel loader utiliser
        test: /\.js$/,  // sur quels fichier le loader doit-il s'exécuter
        exclude: /node_modules/,  // exceptions: tout le répertoire des modules
      }, {
        test: /\.s?css$/,
        // use: [
        //   'style-loader',
        //   'css-loader',
        //   'sass-loader'
        // ]
        // const MiniCssExtractPlugin = require("mini-css-extract-plugin");juse: CSSExtract.extract({
        //   use: [ 'css-loader', 'sass-loader' ]
        // })i
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          { 
            loader: 'css-loader',
            options: { sourceMap: true }
          }, { 
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      }]
    },
    plugins: [ 
      // new BundleAnalyzerPlugin(),  // cause probleme avec MiniCssExtractPlugin
      new MiniCssExtractPlugin({ filename: 'styles.css', })
    ],
    // 'source map' crée un bundle séparé, utilisé seulement si l'usager
    // ouvre chrome development tool
    // devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  }
}