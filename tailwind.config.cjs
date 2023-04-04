/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',	
			lg: '976px',
			xl: '1440px',
			mlg: '1045px'
		},
		extend: {
			colors: {
				'dark-green': '#111418',
				'bright-green': '#3EC997',
				'dark-gray': '#6B757D',
				'text-gray': '#4C4D4D',
				'light-gray': '#EDF0F1',
			},
			backgroundImage:{
				'hero-image': "url('/hero_image.jpg')"
			},
			width: {
				'a': '50%',
				'b': '55%',
				'c': '60%',
				'd': '65%',
				'e': '70%',
				'f': '75%',
				'g': '80%',
				'h': '85%',
			},
			keyframes: {
				'btn-transform': {
					'0%': {
						backgroundColor: 'transparent',
						color: '#3EC997',
					},
					'100%': {
						backgroundColor: '#3EC997',
						color: 'white',
					}
				},
				'blink-arrow': {
					'0%': {
						opacity: 0,
						transform: 'translateY(-20px)'
					},
					'50%': {
						opacity: 0.5,
					},
					'100%': {
						opacity: 1,
					}
				},
			},
			animation: {
				'btn-transform': 'btn-transform 0.5s forwards',
				'blink-arrow': 'blink-arrow 1s ease-in-out infinite alternate',
			}
		},
	},
	plugins: [],
}
