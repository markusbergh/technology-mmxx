const path = require('path');

const WebpackNodeExternals = require('webpack-node-externals');

const config = {
  // Target environment for bundling
  target: 'node',

  name: 'server',
  mode: 'development',

  // Let `__dirname` and `__filename` behave normally in a Node.js environment
  node: {
    __dirname: false,
    __filename: false,
  },

  // Entry file location for server side code bundling
  entry: './src/server.js',

  output: {
    path: path.resolve('build'),
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[name]__[local]--[hash:base64:5]',
            exportOnlyLocals: true,
          },
        },
      },
    ],
  },

  // We do not need dependencies in bundle so exclude them
  externals: [
    WebpackNodeExternals()
  ],
};

module.exports = config;
