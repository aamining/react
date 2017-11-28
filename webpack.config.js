// const webpack = require("webpack");
const path = require('path');

module.exports ={
  // context: path.join(__dirname, 'app'),
  entry: { app: './src/index.js' },
  output: {
    path: path.resolve(__dirname),
    filename: '[name]-bundle.js'
  },

  module: {

    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: ['babel-loader']
      }
    ]
  }
};
