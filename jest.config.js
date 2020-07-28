'use strict';

module.exports = {
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.tsx',
  },
  preset: 'ts-jest',
  restoreMocks: true,
  setupFilesAfterEnv: ['./jest.setup.tsx'],
  testPathIgnorePatterns: ['<rootDir>/\\.next/', '<rootDir>/node_modules/'],
};
