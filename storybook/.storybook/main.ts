import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-vitest"
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: {
        viteConfigPath: undefined // Use Storybook's built-in Vite config
      }
    },
  },

  // Configure manager for subpath deployment
  managerHead: (head, { configType }) => {
    const base = '/ui/';
    if (configType === 'PRODUCTION') {
      return `${head}<script>window.PREVIEW_URL = '${base}iframe.html'</script>`;
    }
    return head;
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },

  viteFinal: async (config, { configType }) => {
    // Configure base path for iframe (stories) in production
    if (configType === 'PRODUCTION') {
      config.base = '/ui/';
      config.build = config.build || {};
      config.build.outDir = '../storybook-static';
    }
    
    // React 19 optimizations
    config.resolve = config.resolve || {};
    config.resolve.dedupe = config.resolve.dedupe || [];
    config.resolve.dedupe.push('react', 'react-dom');
    
    // Optimize for React 19 features and include commonly used dependencies
    if (config.optimizeDeps) {
      config.optimizeDeps.include = config.optimizeDeps.include || [];
      config.optimizeDeps.include.push('react', 'react-dom', 'classnames');
    }
    
    return config;
  }
};
export default config;
