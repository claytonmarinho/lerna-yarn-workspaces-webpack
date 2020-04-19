const path = require("path");
const nodeExternals = require("webpack-node-externals");

const { NODE_ENV = "production" } = process.env;

module.exports = {
  mode: NODE_ENV,
  watch: NODE_ENV === "development",
  devtool: NODE_ENV === "development" ? "inline-source-map" : false,
  target: "node",
  externals: [
    nodeExternals({
      modulesDir: path.resolve(__dirname, "../../node_modules"),
    }),
  ],
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    libraryTarget: "commonjs2",
    path: path.resolve(__dirname, "dist"),
  },
};
