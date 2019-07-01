const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 8080
  },
  plugins: [
    new CleanWebpackPlugin(),
    new SVGSpritemapPlugin('src/images/sprite/**/*.svg', {
      output: {
        filename: 'sprite.svg',
        svgo: true
      },
      sprite: {
        prefix: false,
        gutter: 10,
        generate: {
          symbol: true,
          use: false,
          view: false
        }
      }
    }),
    new HtmlWebpackPlugin({
      inject: false,
      appMountId: 'app',
      template: require('html-webpack-template')
    })
  ],
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]__[hash:base64:5]'
              },
              importLoaders: 1,
              localsConvention: 'camelCase'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('postcss-import')(),
                require('postcss-preset-env')({
                  stage: 1,
                  features: {
                    'nesting-rules': true
                  }
                }),
                require('postcss-functions')({
                  functions: {
                    rem(val) {
                      return `${val / 16}rem`;
                    },
                    max(val) {
                      return `max-width:${val / 16}rem`;
                    },
                    lh(lh, fsz) {
                      return lh / fsz;
                    },
                    ls(val) {
                      return `${val / 1000}rem`;
                    },
                    column(val) {
                      return `${100 / val}%`;
                    },
                    percentage(i, e) {
                      return `${(e * 100) / i}%`;
                    }
                  }
                }),
                require('cssnano')()
              ]
            }
          }
        ]
      }
    ]
  }
};
