'use strict';

module.exports = {
  root: true,
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'no-useless-rename': 'warn',
    'object-shorthand': 'warn',
    strict: 'warn',

    'prettier/prettier': [
      'warn',
      {
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],

    'react/prop-types': 'off', // We're using TS for prop validation
    'react/react-in-jsx-scope': 'off', // Next.js injects React so we don't have to check that

    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
  overrides: [
    {
      files: ['**/*.js'],
      parserOptions: {
        sourceType: 'script',
      },
      env: {
        node: true,
      },
      rules: {
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
