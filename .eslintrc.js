module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'google',
  ],
  rules: {
    'no-console': process.env.NODE_ENV !== 'development' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV !== 'development' ? 'error' : 'off',
    'max-len': 0,
    'no-prototype-builtins': 0,
    'vue/no-deprecated-slot-attribute': 0,
    'valid-jsdoc': 0,
    'vue/multi-word-component-names': 0,
  },
  globals: {
    wx: true,
    getCurrentPages: true,
    $ref: true,
    $shallowRef: true,
    $computed: true,
  },
};
