const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

/*Configuration settings */
module.exports = {
  mode: "development",
  entry: {
    app: ["babel-polyfill", "./app/index.js"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    chunkFilename: `vendors.js`,
    filename: `app.js`
  },
  devtool: "cheap-module-eval-source-map",
  resolve: {
    alias: {
      jquery: "jquery/src/jquery"
    },
    modules: [path.resolve("./"), path.resolve("./node_modules")]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./app/index.html"
    }),
    new ExtractCssChunks({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: `app.css`,
      chunkFilename: `vendors.css`
    }),
    new CopyWebpackPlugin([
      {
        from: "./app/**/*.html",
        to: `[1]/[name].[ext]`,
        test: /app\/(.*)\/(.*).html/,
        ignore: "index.html"
      }
    ])
  ],
  module: {
    strictExportPresence: true,
    rules: [
      // Load raw HTML files for templates
      { test: /\.(html)$/, loader: "raw-loader" },
      // Load js files through Babel
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(scss|css)$/,
        use: [ExtractCssChunks.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: `fonts/[name].[ext]`
            }
          }
        ]
      }
    ]
  },
  devServer: {
    port: 8080,
    compress: true,
    contentBase: path.join(__dirname, "app")
  }
};
