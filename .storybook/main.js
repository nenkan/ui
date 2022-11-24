module.exports = {
  core: {
    builder: 'webpack5'
  },
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/preset-scss'
  ],
  "framework": "@storybook/react",
  webpackFinal(config, { configType }) {
    if (configType === 'PRODUCTION') {
      config.output.publicPath = '/ui/'
    }
    return config;
  },
  managerWebpack(config, { configType }) {
    if (configType === 'PRODUCTION') {
      config.output.publicPath = '/ui/'
    }
    return config;
  }
}