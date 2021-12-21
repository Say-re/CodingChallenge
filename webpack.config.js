const path = require('path');

module.exports = {

  entry: ['@babel/polyfill/noConflict', './src/index.js'],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  }

  ,
  mode: 'development',
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\js$/,
      exclude: /node_modules/
    }

      ,
    {
      test: /\.scss$/,
      use: ['style-loader',
        'css-loader',
        'sass-loader'
      ]
    }

    ]
  }

  ,
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    }

    ,
    compress: true,
    port: 9090
  }
}