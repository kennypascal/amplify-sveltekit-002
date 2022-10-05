import adapter from '@sveltejs/adapter-static';
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess({
        postcss: {
            plugins: [autoprefixer]
        }
    }),

    kit: {
        adapter: adapter(),
        alias: {
            '@ui': resolve('./src/components/ui'),
            '@utilities': resolve('./src/utilities'),
            '@components': resolve('./src/components'),
            '@node_modules': resolve('./node_modules'),
            '@language': resolve('./src/language'),
            '@static': resolve('./src/static'),
            '@stores': resolve('./src/stores')
        },
        prerender: { default: true }
    }
};

export default config;
