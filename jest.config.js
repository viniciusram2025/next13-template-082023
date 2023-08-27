// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest');

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest({ dir: './' });

// Any custom config you want to pass to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/.jest/setup-test.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/components/**/*.{ts,tsx}',
    '!src/components/**/*.stories.{ts,tsx}',
    '!src/components/**/styles.{ts,tsx}',
    '!src/components/**/types.{ts,tsx}',
    '!src/types/*.{ts,tsx}',
    '!src/app/*.{ts,tsx}',
    '!src/app/**/*.{ts,tsx}',
    '!src/styles/*.{ts,tsx}'
  ],
  modulePaths: ['<rootDir>/components/', '<rootDir>/.jest']
};

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig);
