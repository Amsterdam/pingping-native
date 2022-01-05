module.exports = {
	root: true,
	extends: [
		'@react-native-community',
		'plugin:react/recommended',
	],
	env: {
		jest: true,
		'react-native/react-native': true,
	},
	plugins: ['import', 'react-native'],
	rules: {
		'array-bracket-spacing': 'error',
		'comma-dangle': ['error', 'always-multiline'],
		'comma-spacing': 0,
		'no-multi-spaces': 'warn',
		'object-curly-spacing': ['error', 'always'],
		quotes: ['error', 'single'],
		'react/jsx-max-props-per-line': [
			'error',
			{ maximum: 3, when: 'always' },
		],
		'react/jsx-closing-bracket-location': [
			'error',
			'line-aligned',
		],
		'react/react-in-jsx-scope': 0,
		'react/prop-types': 0,
		semi: 0,
		'computed-property-spacing': 'error',
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',
		'import/no-unused-modules': 'error',
		eqeqeq: ['error', 'always'],
		'no-console': [
			'error',
			{ allow: ['warn', 'error', 'info'] },
		],
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
				groups: [
					'builtin',
					'external',
					'sibling',
					'parent',
					'index',
				],
				pathGroups: [
					{
						pattern: 'react',
						group: 'external',
						position: 'before',
					},
				],
				pathGroupsExcludedImportTypes: [
					'builtin',
				],
			},
		],
	},
};
