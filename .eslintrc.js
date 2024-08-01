module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'i18next',
		'react-hooks',
	],
	rules: {
		'linebreak-style': 'off',
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		indent: [2, 'tab'],
		'no-tabs': 0,
		'react/jsx-filename-extension': [
			2,
			{ extensions: ['.js', '.jsx', '.tsx'] },
		],
		'react/jsx-props-no-spreading': [
			{
				html: 'ignore' | 'enforce',
				custom: 'ignore' | 'enforce',
				explicitSpread: 'ignore' | 'enforce',
			},
		],
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'no-unused-vars': 'warn',
		'no-console': 'off',
		'react/require-default-props': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/function-component-definition': 'off',
		'no-shadow': 'off',
		'import/extensions': 'off',
		'import/no-extraneous-dependencies': 'off',
		'no-underscore-dangle': 'off',
		'i18next/no-literal-string': [
			'error',
			{
				markupOnly: true,
				ignoreAttribute: ['data-testid', 'to'],
			},
		],
		'max-len': ['error', { ignoreComments: true, code: 200 }],
		'no-param-reassign': 'off',
		'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
		'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
    'no-undef': 'off'
	},
	globals: {
		Dev: true,
	},
	overrides: [
		{
			files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
			rules: {
				'i18next/no-literal-string': 'off',
			},
		},
	],
};
