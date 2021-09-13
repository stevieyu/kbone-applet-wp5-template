let config = require('tailwindcss/defaultConfig');

config = Object.assign(config, {
  mode: 'jit',
  purge: {
    enabled: true,
    content: [
      './src/**/*.vue',
      './src/**/*.jsx',
    ]
  },
  variants: {
    appearance: []
  },
});

module.exports = config;
