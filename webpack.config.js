const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const basePath = path.resolve(__dirname);
const projectPath = `${basePath}/src`;

module.exports = {
  entry: `${basePath}/src/index.jsx`,
  output: {
    filename: "app.js?v=[hash]",
    path: `${basePath}/dist`
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
       }
    ]
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: `${projectPath}/index.html`
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};