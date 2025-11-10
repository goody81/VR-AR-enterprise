module.exports = {
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/*.test.js',
    '!src/**/*.spec.js',
  ],
  testMatch: [
    '**/tests/**/*.test.js',
    '**/tests/**/*.spec.js',
  ],
  coverageThreshold: {
    global: {
      branches: 8,
      functions: 30,
      lines: 25,
      statements: 25,
    },
  },
  moduleFileExtensions: ['js', 'json'],
  testTimeout: 10000,
};
