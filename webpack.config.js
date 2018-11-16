const path = require('path');

module.exports = {
  entry: [
    '@babel/polyfill',
    'whatwg-fetch',
    './js/main.js'
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      }
    ]
  },
};