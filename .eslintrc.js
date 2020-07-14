module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "no-underscore-dangle": 0,
    "camelcase": 0,
    "no-param-reassign": 0,
    "no-prototype-builtins": 0,
    "no-multi-assign": 1,
    "no-await-in-loop": 1,
    "no-continue": 1,
    "global-require": 0,
    "max-len":0
  },
};
