import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			flex: {
				'2': '2 2 0%',
				'4': '4 4 0%',
				'1,0,0': '1 0 0%',
			}
		}
	},

	plugins: []
} satisfies Config;
