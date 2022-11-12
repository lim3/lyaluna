import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/kit/vite';
import type { Config } from '@sveltejs/kit';

const config: Config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: "docs",
			assets: "docs",
			fallback: "index.html",
		}),
		paths: {
			base: "",
		},
	},
};

export default config;