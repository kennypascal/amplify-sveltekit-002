module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'plugin:jest-dom/recommended',
        'plugin:testing-library/dom',
        'prettier',
        'plugin:storybook/recommended'
    ],
    plugins: [
        'svelte3',
        '@typescript-eslint',
        'jest',
        'jest-dom',
        'svelte3',
        'vitest',
        'testing-library'
    ],
    ignorePatterns: ['*.cjs'],
    overrides: [
        {
            files: ['*.svelte'],
            processor: 'svelte3/svelte3'
        }
    ],
    settings: {
        'svelte3/typescript': () => require('typescript')
    },
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020
    },
    env: {
        browser: true,
        es2017: true,
        node: true,
        'jest/globals': true
    },
    rules: {
        'testing-library/prefer-user-event': 'error'
    }
};
