const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ProvidePlugin } = require('webpack');

const webpackTemplate = require('./client/webpack/template');

module.exports = (options) => {
  const { production, debug, NODE_ENV } = options;

  return {
    mode: NODE_ENV,
    entry: './client/app/index.jsx',
    output: {
      publicPath: '/',
      path: path.resolve(__dirname, 'dist'),
      filename: 'assets/js/bundle.js',
    },
    optimization: {
      minimizer: (production && !debug) ? [new OptimizeCSSAssetsPlugin({})] : [],
    },
    module: {
      rules: [
        {
          test: /.jsx?$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader',
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            ...((production || debug) ? [MiniCssExtractPlugin.loader] : []),
            ...((!production && !debug) ? ['style-loader'] : []),
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: (production && !debug) ? '[hash:base64:5]' : '[local]--[hash:base64:5]',
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  indentWidth: 2,
                  outputStyle: 'expanded',
                  includePaths: [
                    path.resolve(__dirname, 'client/app/styles'),
                  ],
                },
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'assets/images',
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '@components': path.resolve('./client/app/components'),
        '@containers': path.resolve('./client/app/containers'),
        '@routes': path.resolve('./client/app/routes'),
      },
    },
    plugins: [
      new ProvidePlugin({
        fetch: [path.resolve(path.join(__dirname, 'client/app/modules/fetch.js')), 'default'],
      }),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        templateContent: webpackTemplate,
      }),
      ...((production || debug) ? [
        new MiniCssExtractPlugin({
          filename: 'assets/css/[name].min.css',
          chunkFilename: '[id].css',
        }),
      ] : []),
    ],
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          secure: false,
        },
      },
      port: 8080,
      historyApiFallback: true,
      open: true,
    },
  };
};
