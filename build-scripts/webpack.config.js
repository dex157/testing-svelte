const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const finder = require('find-package-json')

const ROOT_PATH = finder()
  .next()
  .filename.replace('/package.json', '')

const htmlWebpackPluginConfig = {
  inject: true,
  template: path.resolve(ROOT_PATH, 'public/index.html')
}

const devServerConfig = {
  contentBase: [path.join(ROOT_PATH, 'public'), path.join(ROOT_PATH, 'src')],
  port: 9000,
  compress: true,
  clientLogLevel: 'none',
  watchContentBase: true,
  hot: true,
  publicPath: '/',
  quiet: true,
  overlay: {
    errors: true,
    warnings: true
  }
}

const webpackConfig = {
  mode: 'development',
  entry: path.resolve(ROOT_PATH, 'src/index.js'),
  bail: false,
  devtool: 'source-map',
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(svelte)$/,
        exclude: /node_modules/,
        use: 'svelte-loader'
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      }
    ]
  },
  resolve: {
    mainFields: ['svelte', 'browser', 'module', 'main']
  },
  devServer: devServerConfig,
  plugins: [new HtmlWebpackPlugin(htmlWebpackPluginConfig)]
}

module.exports = webpackConfig
