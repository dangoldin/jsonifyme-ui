const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname + '/app',

  entry: './js/app.jsx',

  output: {
    filename: 'app.js',
    path: __dirname + '/dist',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'react-hot-loader',
          },
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ],
  },

  plugins: [new HtmlWebpackPlugin({
    template: 'index.html',
  })],
};
