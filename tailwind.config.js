// tailwind.config.js
module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		backgroundColor: (theme) => ({
			primary: '#111111',
			secondary: '#ffffff',
			brand: '#E50914',
		}),
	},
	variants: {
		extend: {},
	},
	plugins: [require('tailwind-scrollbar-hide')],
};
