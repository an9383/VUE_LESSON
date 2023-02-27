module.exports = {
  /*
    https://feynubrick.github.io/2019/05/20/eslint-prettier.html
    ESLint 규칙:
      https://eslint.org/docs/rules/
      https://eslint.org/docs/user-guide/configuring/
    Prettier 옵션:
      https://prettier.io/docs/en/options.html
  */
  root: true,
  env: {
    node: true,

    browser: true,
    commonjs: true,
    es6: true,
    es2021: true,
    jest: true,
    mocha: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  plugins: ['prettier'],
  ignorePatterns: ['node_modules/'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
