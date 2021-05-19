const path = require( 'path' );

const webpack = require( 'webpack' );

// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

 

module.exports = ( env, options ) => {

                return {

                      entry: './src/index.js',
                      output: {

                        path: path.resolve( __dirname, 'dist' ),

                        filename: 'foo.bundle.js',
                      },
      devtool: 'cheap-eval-source-map',

        optimization: {

            minimizer: [

              new UglifyJsPlugin({

                cache: true,

                parallel: true,

                sourceMap: true // set to true if you want JS source maps

              }),

              new OptimizeCSSAssetsPlugin({})

            ]

          },

              module: {

                        rules: [{

                                  test: /\.jsx$|\.es6$|\.js$/,

                                  use: {

                                  loader: 'babel-loader',

                                  options: {

                                        presets: ['react'],
                                   }

                               },
                      exclude: /(node_modules|bower_components)/
                    },{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },{
                  test: /\.(png|jpg|gif)$/,
                  use: [{
                  loader: 'file-loader',
                  options: {
                      name: '[name].[ext]',
                      outputPath: 'images/'
                  }
                }]
             },
          ],
        },
          plugins: [
    new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './js/index.jsx',
            inject: false
        }),
        new ExtractTextPlugin({filename: '[name].css', allChunks: true}),
  ]
        }

};
// const path = require('path');
// const webpack = require( 'webpack' );
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WebpackMd5Hash = require('webpack-md5-hash');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// module.exports = {
//   entry: { main: './src/index.js' },
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'foo.bundle.js'
//   },
//   module: {
//     rules: [
//       {

//         test: /\.jsx$|\.es6$|\.js$/,
//         use: {
//         loader: 'babel-loader',
//         options: {
//         presets: ['react'],
//       }
//     },
//     exclude: /(node_modules|bower_components)/
//   },
//       {
//         test: /\.css$/,
//         use:  [  'style-loader', 'css-loader', 'postcss-loader']
//       }
//     ]
//   },
//   plugins: [ 
//     new CleanWebpackPlugin('dist', {} ),
//     new MiniCssExtractPlugin({
//       filename: 'style.[contenthash].css',
//     }),
//     new HtmlWebpackPlugin({
//       inject: false,
//       hash: true,
//       template: './src/index.html',
//       filename: 'index.html'
//     }),
//     new WebpackMd5Hash()
//   ]
// };