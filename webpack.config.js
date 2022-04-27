const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/, 
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-modeule-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};
//.css dollar sign tells you to target files ending in .css
//use allows you to specify an array of loaders
//loader sass - loader converts scss to css
//question mark after the s tells you including the s is optional