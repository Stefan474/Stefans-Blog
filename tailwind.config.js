/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				main: ['Teko', 'sans-serif']
			}
		}
	},
	daisyui: {
		themes: [
			{
				mainLight: {
					primary: '#a5f3fc',

					secondary: '#c084fc',

					accent: '#7e21ef',

					neutral: '#211c26',

					'base-100': '#f3e8ff',

					info: '#67e8f9',

					success: '#34d399',

					warning: '#fef08a',

					error: '#ed6868'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
