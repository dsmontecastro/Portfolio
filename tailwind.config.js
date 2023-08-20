/** @type {import('tailwindcss').Config} */

export default {
  darkMode: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {

      animation: {
        gradience: 'slide 5s ease infinite',
      },

      keyframes: {
        slide: {
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
  plugins: [],
}