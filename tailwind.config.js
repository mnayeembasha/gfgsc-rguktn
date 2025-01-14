module.exports = {
  darkMode: 'class', // Enable dark mode using the 'class' strategy
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}',
  ],
  theme: {
    container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
    extend: {
      colors:{
        home:{
          light:'#DCF5DC',
          dark:'#1a1c1f'
        },
        primary:{
          light:'#E6F0E9',
          dark:'#1b1c1f',
        },
        navitem:{
          hover:{
            light:'#4CAF50',
            dark:'#86efac'
          }
        },
        'heading-green':'#1a5a1a',
        'card-dark':'#252525',

      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				}
      },
    },
  },
  plugins: [],
}
