const path = require('path');

module.exports = {
  entry: [
    
    './src/js/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
          test: /\.css$/,
          loader: ['css-loader', 'style-loader']
      }
    ]
  },
};