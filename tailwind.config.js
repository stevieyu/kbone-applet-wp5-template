let config = require('tailwindcss/defaultConfig');

config = Object.assign(config, {
  mode: 'jit',
  content: [
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
});

module.exports = config;
