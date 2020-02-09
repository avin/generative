/* eslint-disable */
const { paths } = require('react-app-rewired');
const override = require('./config-overrides');
const config = require(paths.scriptVersion + '/config/webpack.config');

module.exports = env => {
  return override(config(env), env);
};
