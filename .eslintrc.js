'use strict';

const path = require('path');

module.exports = {
  root: true,
  extends: ['fatfisz'],
  settings: {
    'import/resolver': {
      [path.resolve('./eslint-import-resolver')]: true,
    },
  },
  rules: {
    'import/extensions': [
      'warn',
      'always',
      {
        ignorePackages: true,
        pattern: {
          tsx: 'never',
        },
      },
    ],
  },
  overrides: [
    {
      files: '**/*.js',
      env: {
        node: true,
      },
    },
    {
      files: ['__mocks__/**', 'pages/**'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
};
