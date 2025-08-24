import js from '@eslint/js'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  js.configs.recommended,
  eslintPluginReact.configs.flat.recommended,
  eslintPluginReact.configs.flat['jsx-runtime'],
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    plugins: {
      js,
      react: eslintPluginReact,
      reactHooks: eslintPluginReactHooks,
      reactRefresh: eslintPluginReactRefresh,
    },
    rules: {
      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-key': 'warn',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-no-undef': 'error',
      'reactHooks/rules-of-hooks': 'error',
      'reactHooks/exhaustive-deps': 'warn',
      'no-unused-vars': 'warn',
    },
    languageOptions: {
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
    },
  },
])
