import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import 'dotenv/config';

export default defineConfig({
	plugins: [
		sveltekit({
			preprocess: vitePreprocess(),
			adapter: adapter({
				strict: true
			}),
			paths: {
				base: (process.env.VITE_BASE_URL as `/${string}` | undefined) ?? ''
			}
		})
	],
	server: {
		fs: {
			allow: ['.']
		}
	}
});
