module.exports = {
  plugins: ['stylelint-scss', 'stylelint-order', 'stylelint-config-rational-order/plugin'],
  extends: ['stylelint-config-standard', 'stylelint-config-css-modules'],

  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'block-no-empty': null,

    'order/order': [
      'declarations',
      {
        type: 'at-rule',
        name: 'media',
      },
      {
        type: 'rule',
        selector: '^&:\\w',
      },
      {
        type: 'rule',
        selector: '^&_',
      },
    ],
    'order/properties-order': [],
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': false,
        'empty-line-between-groups': false,
      },
    ],
  },
};
