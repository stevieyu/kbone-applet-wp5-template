const Config = require('webpack-chain');

const config = new Config();

const args = {
  base: {},
  eslint: {},
  style: {},
  js: {},
  vue: {},
  mp: {},
};

for (const v of Object.keys(args)) {
  const fun = require(`./subConfig/${v}.js`);
  fun(config, args[v]);
}

// console.log(config.toString());

module.exports = config.toConfig();
