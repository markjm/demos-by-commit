const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: {
    main: {
      import: "./main.js",
      dependOn: "lead",
    },
    lead: {
      import: "./lead.js",
    },
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
    hot: false,
  },
  plugins: [new HtmlWebpackPlugin()],
  devtool: false,
};
