const path = require('path')

// your app's webpack.config.js
const custom = require('../webpack.config.js')

module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  addons: [
    '@storybook/preset-typescript',
    'storybook-addon-styled-component-theme/dist/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
    '@storybook/addon-storysource/register',
    '@storybook/addon-a11y/register',
  ],
  webpackFinal: config => {
    config.module.rules.push({
      test: /\.stories\.tsx?$/,
      loaders: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: { parser: 'typescript' },
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
      enforce: 'pre',
    })

    return { ...config, module: { ...config.module, rules: custom.module.rules } }
  },
}
