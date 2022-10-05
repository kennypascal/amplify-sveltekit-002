import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './test/setup.ts',
        coverage: {
            reporter: ['text', 'html'],
            exclude: ['node_modules/']
        }
    },

    resolve: {
        alias: {
            './runtimeConfig': './runtimeConfig.browser'
        }
    }
};

export default config;
