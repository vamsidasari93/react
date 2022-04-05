module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: "./public",
  },
  devServer: {
    inline: true,
    contentBase: "./public",
    port: 3000,
  },
  // module:{

  // }
};
