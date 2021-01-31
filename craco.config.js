const path = require('path');
const { loaderByName, addBeforeLoader, addPlugins } = require('@craco/craco');
const CompressionPlugin = require('compression-webpack-plugin');
const _ = require('lodash');

module.exports = {
  eslint: {
    enable: false,
  },
  webpack: {
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
};
