const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: false
  },
  entry: './main.js',
  output: {
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: 'favicon.ico'
    })
  ]
}
