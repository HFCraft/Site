module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'MinecraftTen': 'Minecraft Ten',
      'MinecraftFiveBold': 'Minecraft Five Bold',
    },
    fontSize: {
      '1vw': '1vw',
      '1.5vw': '1.5vw',
      '2vw': '2vw',
      '2.5vw': '2.5vw',
      '3vw': '3vw',
      '3.5vw': '3.5vw',
      '4vw': '4vw',
      '4.5vw': '4.5vw',
      '5vw': '5vw',
      '5.5vw': '5.5vw',
      '6vw': '6vw',
      '6.5vw': '6.5vw',
      '7vw': '7vw',
      '7.5vw': '7.5vw',
      '8vw': '8vw',
      '8.5vw': '8.5vw',
      '9vw': '9vw',
      '9.5vw': '9.5vw',
      '10vw': '10vw',
    },
    animation: {
      'text-start':
        'text-start 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both',
      start: 'start 1.25s cubic-bezier(0.470, 0.000, 0.745, 0.715) both',
    },
    keyframes: {
      start: {
        '0%': {
          filter: 'blur(3.5px)',
        },
        '100%': {
          filter: 'blur(0px)',
        },
      },
      'text-start': {
        '0%': {
          'letter-spacing': '-0.5em',
          opacity: 0,
        },
        '40%': {
          opacity: 0.6,
        },
        '100%': {
          opacity: 1,
        },
      },
    },
  },
  plugins: [],
}
