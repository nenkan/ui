import globals from 'globals';
import os from 'node:os';
import pluginJs from '@eslint/js';
import pluginReact from "eslint-plugin-react";
import tseslint from 'typescript-eslint';

export default tseslint.config(
  pluginJs.configs.recommended,
  pluginReact.configs.flat['jsx-runtime'], // Add this if you are using React 17+
  pluginReact.configs.flat.recommended, // This is not a plugin object, but a shareable config object
  tseslint.configs.recommended,
  {
    languageOptions: {
      'globals': {
        ...globals.browser,
        ...globals.es2021
      },
    },
    files: [
      'src/**/*.js',
      'src/**/*.jsx',
      'src/**/*.ts',
      'src/**/*.tsx',
    ],
    'rules': {
      '@typescript-eslint/no-unused-expressions': [
        'warn'
      ],
      'indent': [
          'error',
          2
      ],
      'linebreak-style': [
        'error',
        os.EOL === '\r\n' ? 'windows' : 'unix'
      ],
      'quotes': [
        'error',
        'single'
      ],
      "react/prop-types": [
        0
      ],
      'semi': [
        'error',
        'always'
      ]
    },
  }
);
