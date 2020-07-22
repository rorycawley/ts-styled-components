/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: ['/.*.test.[jt]sx?$', '/node_modules'],
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom-sixteen',
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
    'components/(.*)': '<rootDir>/src/components/$1',
    'tests/(.*)': '<rootDir>/tests/$1'
  }
}
