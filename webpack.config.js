const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.bs.js",
  output: {
    path: __dirname + "/dist-webpack",
    filename: "./bundle.js",
  },
  resolve: {
    extensions: [".js", ".json", ".bs.js", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.bs\.js|\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  mode: process.env.NODE_ENV,
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Webpack ReasonML',
      template: 'index-webpack.html',
    }),
  ],
};
