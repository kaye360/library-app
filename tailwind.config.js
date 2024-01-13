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
				},
				secondary: {
					50:  'hsl(302deg 88% 95%)',
					100: 'hsl(302deg 88% 90%)',
					150: 'hsl(302deg 88% 85%)',
					200: 'hsl(302deg 88% 80%)',
					300: 'hsl(302deg 88% 70%)',
					400: 'hsl(302deg 88% 60%)',
					500: 'hsl(302deg 88% 50%)',
					600: 'hsl(302deg 88% 40%)',
					700: 'hsl(302deg 88% 30%)',
					800: 'hsl(302deg 88% 20%)',
					900: 'hsl(302deg 88% 10%)',
				}
			},
			fontFamily: {
				'base' : ['Familjen Grotesk', 'system-ui', 'helvetica', 'sans-serif'],
				'theme' : ['Amiri', 'Courgette', 'Familjen Grotesk', 'system-ui', 'helvetica', 'sans-serif']
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
			},
			transitionTimingFunction : {
				'easeOutQuart' : 'cubic-bezier(cubic-bezier(0.25, 1, 0.5, 1))'
			}
		},
	},
	plugins: [],
}

