/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#A8EB53',
				accent: '#EA985D',
				typodark: '#242424',
				typolight: '#EBEBEB'
			  },
		},
	},
	plugins: [],
}
