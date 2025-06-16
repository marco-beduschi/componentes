/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs"
  ],
  "framework": '@storybook/web-components-vite',
  "core": {
    "builder": '@storybook/builder-vite',
  },
};
export default config;