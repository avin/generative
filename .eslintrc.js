module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'no-underscore-dangle': 0,

    'spaced-comment': ['warn', 'always', { markers: ['/'] }],
    curly: ['error', 'all'],
    'no-unused-vars': [1, { args: 'none', ignoreRestSiblings: true }],
    'prefer-destructuring': 0,
    'no-console': ['warn', { allow: ['warn', 'error', 'info', 'dir'] }],
    'no-param-reassign': 0,
    'no-void': 0,
    'consistent-return': 0,
    'no-shadow': 0,
    'no-continue': 0,
    'no-await-in-loop': 0,
    'no-new': 0,
    camelcase: 0,
    'arrow-body-style': 0,
    'import/order': 0,
    'no-bitwise': 0,
    'no-restricted-syntax': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.ts', '**/*.fixture.tsx', './scripts/**'],
      },
    ],
  },
};
