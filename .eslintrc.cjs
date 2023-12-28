module.exports = {
  root: true,
  env: { browser: true, es2022: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:perfectionist/recommended-natural',
    'plugin:prettier/recommended'
  ],
  globals: { 'JSX': true },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'simple-import-sort'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': 'error',
    'no-shadow': 'off',
    'no-debugger': 'error',
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'prefer-template': 'warn',
    'no-param-reassign': 'error',
    'perfectionist/sort-imports': 'off',
    'perfectionist/sort-named-imports': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react', '^node', '^'],
          ['^@src', '^\\.', '^\\u0000'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error'
  },
}
