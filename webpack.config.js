const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin =  require('mini-css-extract-plugin')

module.exports = {
  context: path.resolve(__dirname,'src'),
  mode: 'development',
  entry: {
    main: './index.js',
    analytics: './analytics.js'
  },
  optimization:{
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer:{
    port: 4200
  },
  output:{
    filename:'[name].[contenthash].js',
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
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {from: path.resolve(__dirname, 'src/assets/favicon.ico'),
         to: path.resolve(__dirname, 'dist/assets') }
      ]
    }),
    new MiniCssExtractPlugin({
      filename:'[name].[contenthash].css',
    })
  ],
    
  
  module: {
    rules: [
      {
        test: /\.css$/,
        use:[{
          loader: MiniCssExtractPlugin.loader,
          options: {},
        },'css-loader']
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