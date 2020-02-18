const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: "./src/index.tsx",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    plugins: [
      new TsconfigPathsPlugin()
    ]
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        use: ["style-loader", "css-loader", "sass-loader"],
        test: /\.(s?)css$/
      },
      {
        test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
        loader: "file"
      }
    ]
  },
  output: {
    path: __dirname + "/dist",
    filename: "index.js"
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};
