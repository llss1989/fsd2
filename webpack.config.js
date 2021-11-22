const webpack = require("webpack");
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);
const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };
  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin(),
    ];
  }
  return config;
};
const cssLoaders = (extra) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev,
        reloadAll: true,
      },
    },
    'css-loader',
  ];
  if (extra) {
    loaders.push(extra);
  }
  return loaders;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: ['@babel/polyfill', './index.js'],
  },
  optimization: optimization(),
  devServer: {
    port: 8082,
    hot: isDev,
    index: './pages/UI_kit/cards/cards.html',
    // openPage:['/different/page1', '../dist/']
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    // alias: {
    // Img: path.join(__dirname, './src/assets/img/')
    // },
    alias: {
      jquery: 'jquery/src/jquery',
    },
    extensions: ['.js'],
  },

  plugins: [
    new HTMLWebpackPlugin({
      filename: './index.html',
      template: './index.pug',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: './pages/UI_kit/coloursAndType/colours.html',
      template: './pages//UI_kit/coloursAndType/colours.pug',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: './pages/UI_kit/form-elements/form-elements.html',
      template: './pages//UI_kit/form-elements/form-elements.pug',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: './pages/UI_kit/cards/cards.html',
      template: './pages//UI_kit/cards/cards.pug',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HtmlWebpackPugPlugin(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/img'),
          to: path.resolve(__dirname, 'dist/assets/img'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      // {
      //   test: /\.(png|jpg|gif|svg)$/,
      //   use: ['file-loader'],
      //   exclude: /fonts/,
      // },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: './assets/img/[name].[ext]',
            exclude: /fonts/,
          },
        }],
      },
      {
        test: /\.(ttf|woff|woff2|eot|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: './assets/fonts/[name].[ext]',
          },
        }],
      },
      {
        test: /\.xml$/,
        use: ['file-loader'],
      },
      {
        test: /\.csv$/,
        use: ['csv-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders('sass-loader'),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
          ],
        },
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              pretty: true,
              root: path.join(__dirname, 'src'),
            },
          },
        ],

      },
    ],
  },
};
