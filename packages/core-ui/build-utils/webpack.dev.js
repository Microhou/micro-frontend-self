const path = require("path");
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { getDevRemoteEntryUrl } = require("./webpack.utils");

module.exports = {
  mode: "development",
  plugins: [
    new DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("development"),
      }
    }),
    new HtmlWebpackPlugin({
      title: "Building Scalable and Modular Web Applications with React, Micro Frontends and Webpack Module Federation",
      template: path.resolve(__dirname, "..", "./src/index.html"),
      app1RemoteEntry: getDevRemoteEntryUrl(3001), // change this according you're needs
      app2RemoteEntry: getDevRemoteEntryUrl(3002), // change this according you're needs
    })
  ],
  devtool: "eval-source-map",
};