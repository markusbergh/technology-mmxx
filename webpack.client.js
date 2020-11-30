const path = require('path');

const config = {
  // Target environment for bundling
  target: 'web',

  name: 'client',
  mode: 'development',

  // Entry file location for client code bundling
  entry: ['./src/client.js'],

  output: {
    filename: 'client.js',
    path: path.resolve('public'),
    publicPath: '/',
  },

  devtool: 'eval-cheap-source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

module.exports = config;
