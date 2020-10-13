'use strict';

const path = require('path');

const resolve = require('resolve');

exports.interfaceVersion = 2;

exports.resolve = function eslintImportResolver(source, file, config) {
  return source.startsWith('.')
    ? resolveRelativeModule(source, file, config)
    : resolveInternalModule(source, file, config);
};

function resolveRelativeModule(source, file, config) {
  try {
    return {
      found: true,
      path: resolve.sync(path.resolve(path.dirname(file), source), {
        extensions: getExtensions(config),
      }),
    };
  } catch {
    return { found: false };
  }
}

function resolveInternalModule(source, file, config) {
  try {
    return {
      found: true,
      path: resolve.sync(path.resolve('src', source), { extensions: getExtensions(config) }),
    };
  } catch {
    return { found: false };
  }
}

function getExtensions(config) {
  if (!config || !config.extensions) {
    return ['.js', '.jsx', '.ts', '.tsx'];
  }
  return config.extensions;
}
