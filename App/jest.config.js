/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'react-native',
    testEnvironment: 'node',
    transform: {
        '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx)?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
