const HTMLWebpackPlugin = require("html-webpack-plugin");
const WebpackManifestPlugin = require("webpack-manifest-plugin");
const WebpackNullPlugin = require("webpack-null-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const isDev = () => process.env.NODE_ENV === "development";
const isProd = () => process.env.NODE_ENV === "production";
const only = (predicate, plugin) => (predicate() ? plugin() : new WebpackNullPlugin());

const css = () => [
  {
    loader: "css-loader",
    options: { importLoaders: 1 },
  },
  "postcss-loader",
];

const cssDev = () => [
  "style-loader",  
  ...css(),
];

const cssProd = () => [
  MiniCssExtractPlugin.loader,
  ...css(),
];

module.exports = {
  entry: "./src/index.bs.js",
  output: {
    path: `${__dirname}/dist`,
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
        use: isDev() ? cssDev() : cssProd(),
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "Webpack ReasonML",
      template: "index.html",
      minify: isProd() ? {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
      } : false,
    }),
    new MiniCssExtractPlugin({
      filename: isDev() ? "[name].css" : "[name].[chunkhash:8].css",
      chunkFilename: isDev() ? "[id].css" : "[id].[chunkhash:8].css",
    }),
    only(isProd, () => new WebpackManifestPlugin()),
    only(isProd, () => new CleanWebpackPlugin()),
    // only(isProd, () => new BundleAnalyzerPlugin()),
  ],
};
