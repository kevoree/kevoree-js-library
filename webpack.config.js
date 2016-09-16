'use strict';

var path = require('path');
var webpack = require('webpack');
var pkg = require('./package.json');
var WrapperPlugin = require('wrapper-webpack-plugin');

module.exports = {
  entry: path.resolve(pkg.main),
  output: {
    filename: path.join('browser', pkg.name + '.js'),
    library: 'KevoreeLibrary',
    libraryTarget: 'this'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new WrapperPlugin({
      header: '(function () {',
      footer: '}).call(window||global)'
    })
  ]
};
