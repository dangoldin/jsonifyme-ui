const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname + "/app",

  entry: "./js/app.js",

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
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
            loader: "babel-loader"
          }
        ]
      }
    ]
  },

  plugins: [new HtmlWebpackPlugin()]
};
