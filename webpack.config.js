const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

/**
 * Available place holders in Webpack
 * [hash]
 * [chunkhash]
 * [name]
 * [id]
 * [query]
 * [contenthash]
 */

// Config for webpack
module.exports = {
  mode: "development", // options: ["development", "production"]
  entry: {
    myfile: "./src/engine.js",
  }, // default: "./src/index.js"
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/[name].build.js", //  { "default": "main.js", "preferred": "js/[name].[contenthash].build.js" }
    publicPath: "/assets/", // This helps in resolving the path where dependencies were customized to store
    libraryTarget: "umd", // { "default": "var", "options": ["var", "amd", "commonjs", "umd"] } // "umd: universal module definition"
    library: "myfirstlibrary",
  },
  devServer: {
    // Writes it to the ram rather than disk
    port: 7777,
    compress: true,
    hot: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
    // devMiddleware: {
    //   writeToDisk: true, // Better to omit in the point of performance
    // },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "dist/template.html",
      filename: "../dist/index.html",
      //   inject: "body",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
