module.exports = {
    testEnvironment: 'node',
    roots: ['<rootDir>'],
    testMatch: ['**/__tests__/**/*.+(ts|tsx|js)'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    collectCoverage: true,
    collectCoverageFrom: ['app/**/*.ts'], // Specify the files to include in coverage
    coverageDirectory: 'coverage', // Output directory for coverage reports
    coverageReporters: ['lcov', 'text-summary'],
};
