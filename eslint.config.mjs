// eslint.config.mjs
import js from '@eslint/js'

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module', // for require() support
      globals: {
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
        process: 'readonly',
	console: 'readonly',      
      },
    },
    rules: {
      // add custom rules here
    },
  },
]
;
