'use strict';

const assert = require('assert');

module.exports = {
  webpack: (config) => {
    addSvgRule(config);
    return config;
  },
};

const moduleTest = String.raw`/\.(tsx|ts|js|mjs|jsx)$/`;

function addSvgRule(config) {
  const moduleRule = config.module.rules.find((rule) => String(rule.test) === moduleTest);
  assert.notEqual(
    moduleRule,
    undefined,
    'Could not find the main module rule (check the regular expression)',
  );

  const moduleLoaders = Array.isArray(moduleRule.use) ? moduleRule.use : [moduleRule.use];

  config.module.rules.push({
    test: /\.svg$/,
    use: [
      ...moduleLoaders,
      {
        loader: 'react-svg-loader',
        options: {
          jsx: true,
          svgo: {
            floatPrecision: 2,
            multipass: true,
            plugins: [
              {
                convertPathData: {
                  makeArcs: false,
                },
              },
              { removeViewBox: false },
              { sortAttrs: true },
            ],
          },
        },
      },
    ],
  });
}
