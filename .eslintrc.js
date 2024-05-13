const os = require('os');

module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  'ignorePatterns': [
    '.eslintrc.js',
    'babel.config.js',
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
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
  settings: {
    react: {
      version: 'detect',
    },
  },
};
