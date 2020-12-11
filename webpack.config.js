const webpack = require('webpack');
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// noinspection JSAnnotator
module.exports = {
  mode: 'production',
  entry: {
    entry: ['@babel/polyfill', 'index.js']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'main.js',
    library: '',
    libraryTarget: 'commonjs'
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom'
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.css', '.md']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, './src')],
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        exclude: /\.module\.css$/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      cleanOnceBeforeBuildPatterns: [path.join(process.cwd(), 'dist')]
    }),
    new webpack.ProgressPlugin(),
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
    new MiniCssExtractPlugin({
      filename: 'base.css'
    }),
    new CopyPlugin(
      [
        {
          context: 'src/styles/modules/',
          from: '*.module.css',
          to: 'styles/'
        }
      ],
      {
        copyUnmodified: true
      }
    )
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({ cache: true, parallel: true })]
  }
};
