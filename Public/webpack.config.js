module.exports = {
  mode: "production",
  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx"]
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /(node_modules|dist)/,
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
