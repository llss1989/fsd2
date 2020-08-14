const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin =  require('mini-css-extract-plugin')
const OptimizeCssAssetWebpackPlugin =require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }
  if(isProd) {
    config.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin()
    ]
  }
  return config
}

module.exports = {
  context: path.resolve(__dirname,'src'),
  mode: 'development',
  entry: {
    main: './index.js',
    analytics: './analytics.js'
  },
  optimization: optimization(),
  devServer:{
    port: 4200,
    hot:isDev
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
      filename: './index.html',
      template: './index.html',
      minify:{
        collapseWhitespace:isProd
      }
    }),
    new HTMLWebpackPlugin({
      filename: './pages/colours.html',
      template: './pages/colours.html'
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
          options: {
            hmr:isDev,
            reloadAll:true
          },
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