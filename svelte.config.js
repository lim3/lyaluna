// import { assets } from '$app/paths';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = "production" === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			prependData: "@import './src/vars.scss';"
		}
	}),

	kit: {
		adapter: adapter({
			pages: "docs",
			assets: "docs",
		}),
		prerender: { default: true},
		vite: {server: {fs: 'allow'}},
		paths: {
			base: dev? "" : "/lyaluna",
		},
	}
};

export default config;