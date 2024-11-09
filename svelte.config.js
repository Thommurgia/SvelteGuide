import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		scss: {
			prependData: '@use "src/styles/functions"; @use "@unsass/breakpoint";'
		}
	}),
	"enable-ts-plugin": true,
	kit: {
		adapter: adapter(),
		alias: {
			"$components": "src/lib",
			"$assets": "src/assets"
		}
	}
};

export default config;
