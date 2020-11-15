const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: ['./src/js/index.js', './src/scss/index.scss'],
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/'),
  },

  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        loader: 'file-loader',
        options: {
          name: '[hash].[ext]',
          outputPath: 'images',
          publicPath: 'images',
          omitFile: true,
          esModule: false,
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[hash].[ext]',
            outputPath: 'fonts',
            publicPath: 'fonts',
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index'],
    }),
    new CleanWebpackPlugin(),
  ],
};