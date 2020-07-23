module.exports = {
  env: {
      es2020: true,
      node: true,
      jest: true,
      browser: true,
      es6: true
  },
  extends: [
      'plugin:react/recommended',
      'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaFeatures: {
          jsx: true
      },
      ecmaVersion: 11,
      sourceType: 'module'
  },
  plugins: [
      'react',
      '@typescript-eslint'
  ],
  rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error'
  }
}
