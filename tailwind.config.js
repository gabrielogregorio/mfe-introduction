const defaultConfig = require('./node_modules/example-kit-dev/tailwind.config');

module.exports = {
  content: ['./index.html', './src/**/*.{jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        default: './src/assets/bg1.webp',
      },
      boxShadow: {
        ...defaultConfig.theme.extend.boxShadow,
      },
      animation: {
        ...defaultConfig.theme.extend.animation,
        fadeInDrop: 'fadeInDrop .2s ease-in-out forwards',
        fadeOutDrop: 'fadeOutDrop .2s ease-in-out forwards',
        fadeIn: 'fadeIn .2s ease-in-out',
      },
      keyframes: {
        ...defaultConfig.theme.extend.keyframes,
        fadeInDrop: {
          '0%': { backdropFilter: 'blur(4px);' },
          '100%': { backdropFilter: 'blur(30px);' },
        },
        fadeOutDrop: {
          '0%': { backdropFilter: 'blur(30px);' },
          '100%': { backdropFilter: 'blur(4px);' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      colors: {
        ...defaultConfig.theme.extend.colors,
        'custom-white': '#FFFFFF',
      },
      fontFamily: {
        ...defaultConfig.theme.extend.fontFamily,
        'roboto-Condensed': ['Roboto Condensed', 'sans-serif'],

        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
