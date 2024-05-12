module.exports = {
  "stories": ["../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/preset-scss',
    "@storybook/addon-webpack5-compiler-babel",
    "@chromatic-com/storybook"
  ],
  "framework": {
    name: "@storybook/react-webpack5",
    options: {}
  },
  webpackFinal(config, {
    configType
  }) {
    if (configType === 'PRODUCTION') {
      config.output.publicPath = '/ui/';
    }
    return config;
  },
  managerWebpack(config, {
    configType
  }) {
    if (configType === 'PRODUCTION') {
      config.output.publicPath = '/ui/';
      config.base = '/ui/';
    }
    return config;
  },
  docs: {
    autodocs: true
  }
};