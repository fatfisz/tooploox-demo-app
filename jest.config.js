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
  setupFilesAfterEnv: ['./jest.setup.tsx'],
  testPathIgnorePatterns: ['<rootDir>/\\.next/', '<rootDir>/node_modules/'],
  timers: 'fake',
};
