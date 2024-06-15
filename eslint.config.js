import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylisticTs from '@stylistic/eslint-plugin-ts';

export default [
  {
    plugins: {
      '@stylistic/ts': stylisticTs
    },
    rules: {
      '@stylistic/ts/indent': ['error', 2],
      '@stylistic/ts/quotes': ['error', 'single', { 'avoidEscape': true }],
      '@stylistic/ts/block-spacing': ['error', 'never'],
      '@typescript-eslint/ban-ts-comment': 0,
      '@typescript-eslint/ts-expect-error': 0,
    }
  },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended
];