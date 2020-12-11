const path = require('path');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

module.exports = async ({ config }) => {
  return {
    ...config,
    plugins: [
      ...config.plugins,
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
      })
    ],
    resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      extensions: ['.js', '.jsx', '.css']
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
            'postcss-loader'
          ]
        },
        {
          test: /\.md$/,
          use: [
            {
              loader: 'html-loader'
            },
            {
              loader: 'markdown-loader'
            }
          ]
        }
      ]
    }
  };
};
