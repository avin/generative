/* eslint-disable */
const { paths } = require('react-app-rewired');
const { override, addWebpackAlias, addWebpackPlugin } = require('customize-cra');
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = override(
  addWebpackAlias({
    ['@']: path.resolve(__dirname, `${paths.appSrc}/`),
  }),

  // Для продакшен сборки жмем все файлы gzip-ом
  isProduction && addWebpackPlugin(new CompressionPlugin()),

  (config, env) => {
    // Для дев-режима включем hot-loader
    if (config.mode === 'development') {
      // Подмемяем react-dom на патченый вариант из пакета
      config.resolve.alias['react-dom'] = '@hot-loader/react-dom';

      // Проводим всю остальную настройку пакетом react-app-rewire-hot-loader
      config = rewireReactHotLoader(config, env);
    }

    return config;
  },
);
