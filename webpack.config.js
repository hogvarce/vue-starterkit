const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');
const merge = require('webpack-merge');
const config = require('./config').dev;

const common = {
  entry: [
    'bootstrap/dist/css/bootstrap.css',
    'babel-polyfill',
    './src/main.js',
  ],
  plugins: [
    new webpack.ProvidePlugin({
      fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
    new HappyPack({
      id: 'happybabel',
      loaders: [{
        loader: 'babel-loader',
        options: { babelrc: true, cacheDirectory: true },
      }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        use: ['happypack/loader?id=happybabel'],
        include: [
          path.join(__dirname, 'src'),
        ],
        test: /\.js$/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules',
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  }
};

const start = {
  devtool: 'cheap-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: config.publicPath,
  },
  devServer: {
    hot: true,
    publicPath: config.publicPath,
    port: 8080,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://api.staging.itv.restr.im:8081',
      '/images': 'http://api.staging.itv.restr.im:8001',
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].js',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      filename: '[name].js',
      minChunks: Infinity,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        DISCOVER_PATH: '"/"',
      },
    }),
  ],
};

module.exports = merge(common, start);
