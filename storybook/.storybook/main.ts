import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/react-vite",

  // Configure for subpath deployment
  managerHead: (head, { configType }) => {
    const base = '/ui/';
    if (configType === 'PRODUCTION') {
      return `${head}<script>window.PREVIEW_URL = '${base}iframe.html'</script>`;
    }
    return head;
  },

  viteFinal: async (config, { configType }) => {
    // Configure base path for iframe (stories) in production
    if (configType === 'PRODUCTION') {
      config.base = '/ui/';
    }
    return config;
  },

  // Configure manager webpack for main frame assets
  managerWebpack: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.output = config.output || {};
      config.output.publicPath = '/ui/';
    }
    return config;
  }
};
export default config;