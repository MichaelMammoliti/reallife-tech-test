const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');

const config = require('../../webpack.config.js');

const compiler = webpack(config({
  production: false,
  debug: false,
  NODE_ENV: 'development',
}));

const middleware = webpackDevMiddleware(compiler);

module.exports = middleware;
