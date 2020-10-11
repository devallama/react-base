const aliases = require('../webpack/aliases');

module.exports = {
    stories: ['../src/**/*.stories.@(js|mdx)'],
    // Addons
    addons: [
        {
            name: '@storybook/addon-docs',
            options: {
              configureJSX: true,
              babelOptions: {},
              sourceLoaderOptions: null,
            }
        },
        '@storybook/addon-knobs',
        '@storybook/addon-viewport',
        '@storybook/addon-backgrounds',
        '@storybook/addon-a11y',
        '@storybook/addon-storysource'
    ],
    webpackFinal: async config => {
        config.resolve.alias = {
            ...config.resolve.alias,
            ...aliases
        };
    
        // Return the altered config
        return config;
    }
}