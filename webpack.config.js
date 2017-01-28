const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, '/src'),
  target: 'electron',
  entry: {
    app: './app.js',
  },
  output: {
    path: path.join(__dirname, '/assets'),
    filename: 'bundle.js',
    publicPath: '/assets',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015'],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, '/src'),
  },
};
