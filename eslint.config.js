import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';

export default {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  files: ['**/*.{js,jsx}'],
  ignores: ['dist'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    'react-hooks': reactHooks,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
