import { createJsWithTsPreset } from 'ts-jest'

/** @type {import('ts-jest').JsWithTsPreset} */
const presetConfig = createJsWithTsPreset()

/** @type {import('jest').Config} */
const jestConfig = {
  ...presetConfig,
  moduleFileExtensions: ['js', 'json', 'ts'],
  testRegex: ['(/__specs__/.*|(\\.|/)(test|spec))\\.[jt]s$'],
  testEnvironment: 'node',
  /** coverage settings */
  collectCoverageFrom: ['<rootDir>/src/**/*.?(c|m)[jt]s'],
  coverageDirectory: '<rootDir>/coverage',
  coverageProvider: 'babel',
  coverageReporters: ['text', 'lcov'],
  // coverageThreshold: {
  //   global: {
  //     branches: 100,
  //     functions: 100,
  //     lines: 100,
  //     statements: 100,
  //   },
  // },
  // passWithNoTests: true,
}

export default jestConfig
