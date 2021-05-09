const path = require('path');
const { loaderByName, addBeforeLoader, addPlugins } = require('@craco/craco');
const CompressionPlugin = require('compression-webpack-plugin');
const _ = require('lodash');
const fs = require('fs');
const CracoEsbuildPlugin = require('craco-esbuild');

module.exports = {
  plugins: [{ plugin: CracoEsbuildPlugin }],
  eslint: {
    enable: false,
  },
  webpack: {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
    },
    configure: (webpackConfig, { env, paths }) => {
      // console.log(webpackConfig);
      // process.exit(0);

      //
      // GLSL Rule
      //
      const rawLoader = {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        use: ['raw-loader', 'glslify-loader'],
      };
      addBeforeLoader(webpackConfig, loaderByName('file-loader'), rawLoader);

      //
      // Alias
      //
      _.set(webpackConfig, ['resolve', 'alias', '@'], path.resolve(__dirname, `${paths.appSrc}/`));

      //
      // Gz static
      //
      if (env === 'production') {
        addPlugins(webpackConfig, [new CompressionPlugin()]);
      }

      return webpackConfig;
    },
  },
  devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => {
    devServerConfig.https = {
      key: fs.readFileSync('./node_modules/localhost-certs/files/server.key', 'utf8'),
      cert: fs.readFileSync('./node_modules/localhost-certs/files/server.crt', 'utf8'),
    };
    return devServerConfig;
  },
};
