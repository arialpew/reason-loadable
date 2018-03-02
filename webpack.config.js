const HTMLWebpackPlugin = require("html-webpack-plugin");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const WebpackManifestPlugin = require("webpack-manifest-plugin");
const WebpackNullPlugin = require("webpack-null-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const isDev = () => process.env.NODE_ENV === "development";
const isProd = () => process.env.NODE_ENV === "production";
const only = (predicate, plugin) => (predicate() ? plugin() : new WebpackNullPlugin());

module.exports = {
  entry: "./src/index.bs.js",
  output: {
    path: `${__dirname}/dist-webpack`,
    filename: isDev() ? "[name].js" : "[name].[chunkhash:8].js",
    publicPath: "/",
  },
  devtool: isDev() ? "cheap-eval-source-map" : false,
  resolve: {
    extensions: [".js", ".bs.js", ".json", ".css"],
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    publicPath: "/",
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
        use: ExtractTextWebpackPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: { importLoaders: 1, minimize: isProd() },
            },
            "postcss-loader",
          ],
        }),
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "Webpack ReasonML",
      template: "index-webpack.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
      },
    }),
    new ExtractTextWebpackPlugin({
      filename: isDev() ? "[name].css" : "[name].[hash].css",
      disable: isDev(),
    }),
    only(isProd, () => new WebpackManifestPlugin()),
    only(isProd, () => new CleanWebpackPlugin(["dist-webpack"])),
    // only(isProd, new BundleAnalyzerPlugin()),
  ],
};
