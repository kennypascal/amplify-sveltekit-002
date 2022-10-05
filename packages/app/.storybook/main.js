const path = require('path');
const preprocess = require('svelte-preprocess');

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-svelte-csf',
        {
            /**
             * Fix Storybook issue with PostCSS@8
             * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
             */
            name: '@storybook/addon-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss')
                }
            }
        }
    ],
    framework: '@storybook/svelte',
    staticDirs: ['../static'],
    previewHead: head => `
    ${head} <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" />
    `,
    svelteOptions: {
        preprocess: preprocess({
            postcss: true,
            typescript: true,
            sourceMap: true
        })
    },
    core: { builder: '@storybook/builder-vite' },
    async viteFinal(config, { configType }) {
        return {
            ...config,
            resolve: {
                alias: [
                    {
                        find: '@ui',
                        replacement: path.resolve(
                            __dirname,
                            '../src/components/ui'
                        )
                    },
                    {
                        find: '@language',
                        replacement: path.resolve(__dirname, '../src/language')
                    },
                    {
                        find: '@node_modules',
                        replacement: path.resolve(__dirname, '../node_modules')
                    },
                    {
                        find: '@components',
                        replacement: path.resolve(
                            __dirname,
                            '../src/components'
                        )
                    },
                    {
                        find: '@utilities',
                        replacement: path.resolve(__dirname, '../src/utilities')
                    },
                    {
                        find: '@static',
                        replacement: path.resolve(__dirname, '../src/static')
                    },
                    {
                        find: '@stores',
                        replacement: path.resolve(__dirname, '../src/stores')
                    }
                ]
            }
        };
    }
};
