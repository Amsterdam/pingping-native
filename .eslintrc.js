module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:react/recommended'],
  env: {
    jest: true,
    'react-native/react-native': true,
  },
  plugins: ['import', 'react-native'],
  rules: {
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/first': 'error',
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-single-element-style-arrays': 2,
    'eslint-comments/no-unlimited-disable': 0,
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'sibling', 'parent', 'index'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
  },
};
