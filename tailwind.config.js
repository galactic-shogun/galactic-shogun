/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Orbitron', 'sans-serif'],
			serif: ['Montserrat', 'serif'],
		},
		colors: {
			...colors,
			primary: {
				light: 'rgb(var(--color-primary-light) / <alpha-value>)',
				DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
				dark: 'rgb(var(--color-primary-dark) / <alpha-value>)',
			},
			secondary: {
				light: 'rgb(var(--color-secondary-light) / <alpha-value>)',
				DEFAULT: 'rgb(var(--color-secondary) / <alpha-value>)',
				dark: 'rgb(var(--color-secondary-dark) / <alpha-value>)',
			},
			tertiary: {
				light: 'rgb(var(--color-tertiary-light) / <alpha-value>)',
				DEFAULT: 'rgb(var(--color-tertiary) / <alpha-value>)',
				dark: 'rgb(var(--color-tertiary-dark) / <alpha-value>)',
			},
			background: 'rgb(var(--color-background) / <alpha-value>)',
		},
		extend: {},
	},
	plugins: [],
};
