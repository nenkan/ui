module.exports = {
  "stories": ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", '@storybook/preset-scss', "@storybook/addon-mdx-gfm"],
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
    }
    return config;
  },
  docs: {
    autodocs: true
  }
};