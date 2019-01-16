const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    mode: 'development',
    devServer: {
      contentBase: './dist'
    },
    plugins: [
        new UglifyJsPlugin({sourceMap: true}),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'Tamagatchi',
            inject: 'head'})
        ],
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          {
            test: /\.js$/,
            exclude: [/node_modules/, /spec/],
            loader: 'eslint-loader'
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
          }
        ]
      }
    };
