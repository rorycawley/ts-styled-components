module.exports = {
  moduleDirectories: ['node_modules', 'src'],

  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['/.*.test.tsx?$', '/dist', '/node_modules'],
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom-sixteen',
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
    'components/(.*)': '<rootDir>/src/components/$1',
    'tests/(.*)': '<rootDir>/tests/$1',
  },
}
