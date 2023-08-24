/** @type {import('tailwindcss').Config} */

const defaultTheme = require( 'tailwindcss/defaultTheme' );

export default {
  darkMode: true,

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],

  plugins: [],

  theme: {

    screens: {
      '3xs': '300px',
      '2xs': '360px',
      'xs': '400px',
      ...defaultTheme.screens,
    },

    extend: {

      scale: {
        '25': '0.25'
      },

      animation: {
        'cw': 'cw 10s linear infinite',
        'ccw': 'ccw 10s linear infinite',
        'gradience': 'slide 5s ease infinite'
      },

      keyframes: {

        'cw': {
          '0%': { 'transform': 'rotate(0deg)' },
          '100%': { 'transform': 'rotate(360deg)' }
        },

        'ccw': {
          '0%': { 'transform': 'rotate(0deg)' },
          '100%': { 'transform': 'rotate(-360deg)' }
        },

        'slide': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },

      },

    },
  },
}