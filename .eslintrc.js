module.exports = {
    env: { es6: true, node: true, jest: true, browser: true },
    globals: {
        WindowProxy: 'readonly',
        RequestInit: 'readonly',
        globalThis: 'readonly',
        HeadersInit: 'readonly',
    },
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ],
    rules: {
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/explicit-module-boundary-types': ['error'],
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'warn',
    },
};
