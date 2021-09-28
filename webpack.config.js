const path = require("path");

const HTMLWebpackPlugin = require("html-webpack-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader", exclude: /node-modules/ }],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      title: "Snake Game",
    }),
  ],
  resolve: {
    extentions: [".ts", ".js"],
  },
};
