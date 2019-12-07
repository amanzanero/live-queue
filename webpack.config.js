const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var ManifestPlugin = require("webpack-manifest-plugin");

module.exports = {
  entry: "./src/app/app.tsx",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./template/index.html",
      favicon: "./template/favicon.ico"
    }),
    new ManifestPlugin()
  ],
  output: {
    path: __dirname + "/public",
    filename: "build/[name].[contenthash].js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  devServer: {
    contentBase: __dirname + "/public",
    compress: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.webpack.json"
        }
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/i,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  }
};
