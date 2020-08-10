const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
  context: path.resolve(__dirname,'src'),
  mode: 'development',
  entry: {
    main: './index.js',
    analytics: './analytics.js'
  },
  output:{
    filename:'[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions:['.js']
  },
  plugins:[
    new HTMLWebpackPlugin({
      title: 'TestPage',
      template: './index.html'
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use:['file-loader']
      },
      {
        test: /\.xml$/,
        use: ['file-loader']
      },
      {
        test: /\.csv$/,
        use: ['csv-loader']
      }
    ]
  }  
}