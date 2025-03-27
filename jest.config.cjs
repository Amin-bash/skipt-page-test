// jest.config.cjs (CommonJS) or jest.config.js (ESM-compatible syntax)
// If you're using CommonJS:
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: 'tsconfig.json'
    }]
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json' // or a custom tsconfig file
    }
  }
};
