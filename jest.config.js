'use strict';

module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: {
        jsx: 'react',
      },
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.tsx',
  },
  preset: 'ts-jest',
  restoreMocks: true,
  setupFilesAfterEnv: [
    '<rootDir>/src/test/error.setup.tsx',
    '<rootDir>/src/test/react-testing-library.setup.tsx',
    '<rootDir>/src/test/react.setup.tsx',
    '<rootDir>/src/test/server.setup.tsx',
  ],
  testPathIgnorePatterns: ['<rootDir>/\\.next/', '<rootDir>/node_modules/'],
};
