const path = require('path');

const config = {
  // Target environment for bundling
  target: 'web',

  name: 'client',
  mode: 'development',

  // Entry file location for client code bundling
  entry: ['./src/client.js'],

  output: {
    path: path.resolve('public'),
    publicPath: '/',
    filename: 'client.js',
  },

  devtool: 'eval-cheap-source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};

module.exports = config;
