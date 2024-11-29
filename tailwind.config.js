module.exports = {
  darkMode: 'class', // Enable dark mode using the 'class' strategy
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}',
  ],
  theme: {
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
        'heading-green':'#1a5a1a',
        'card-dark':'#252525',

      },
      animation: {
        marquee: 'marquee 28s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
