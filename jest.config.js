let path = require('path');
const APP_ROOT = path.resolve('.');

module.exports = {
  verbose: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  collectCoverage: true,
  collectCoverageFrom: [`src/**/*.{ts,tsx}`],
  mapCoverage: true,
  coverageReporters: ['json', 'lcov', 'text'],
  coverageDirectory: `${APP_ROOT}/test_reports/`,
  coveragePathIgnorePatterns: ['/node_modules/', 'src/StreamState.ts'],
  globals: {
    'ts-jest': {
      tsConfigFile: `${APP_ROOT}/tsconfig.spec.json`,
    },
  },
  rootDir: APP_ROOT,
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {
    '^.+\\.(tsx?)$': `${APP_ROOT}/node_modules/ts-jest/preprocessor.js`,
  },
  testMatch: [`${APP_ROOT}/src/**/*.spec.(ts|js|tsx|jsx)`],
  testEnvironment: 'node',
};
