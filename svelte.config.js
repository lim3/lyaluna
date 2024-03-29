import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import sveltePreprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		preprocess: sveltePreprocess(),
		scss: {
			prependData: "@import './src/vars.scss';"
		}
	}),
	kit: {
		adapter: adapter({
			pages: "docs",
			assets: "docs",
		}),
		prerender: {
			default: true
		},
		vite: {
			server: {
				fs: 'allow',
			},
		},
		paths: {
			base: "",
		},
	},
	compilerOptions: {
		cssHash: ({name}) => `luna-${name}`,
		enableSourcemap: true,
	}
};

export default config;