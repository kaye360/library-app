/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
	theme: {
		extend: {
			colors: {
				primary: {
					50:  'hsl(207deg 19% 95%)',
					100: 'hsl(207deg 19% 90%)',
					150: 'hsl(207deg 19% 85%)',
					200: 'hsl(207deg 19% 80%)',
					300: 'hsl(207deg 19% 70%)',
					400: 'hsl(207deg 19% 60%)',
					500: 'hsl(207deg 19% 50%)',
					600: 'hsl(207deg 19% 40%)',
					700: 'hsl(207deg 19% 30%)',
					800: 'hsl(207deg 19% 20%)',
					900: 'hsl(207deg 19% 10%)',
				}
			},
			fontFamily: {
				'base' : ['Familjen Grotesk', 'system-ui', 'helvetica', 'sans-serif'],
				'theme' : ['Courgette', 'Familjen Grotesk', 'system-ui', 'helvetica', 'sans-serif']
			},
			screens: {
				'xs' : '400px'
			},
			animation: {
				'addBookButton' : 'addBookButton 250ms ease-in-out'
			},
			keyframes: {
				'addBookButton' : {
					'from' : { transform : 'translateX(-50px)', opacity : '0' },
					'to'   : { transform : 'translateX(0px)', opacity : '1' }
				}
			}
		},
	},
	plugins: [],
}

