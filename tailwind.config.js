/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {

    fontFamily: {
      'kaushan': ['Kaushan Script', ],
      'Comfort': ['Comfortaa'],
      'Tenor': ['Tenor Sans']
    },

    boxShadow:{
      'custom-light': "0 0 10px #313131",
      'custom-dark': "5px 5px 10px #0a0c0e, -5px -5px 10px #14161c"
    },
    extend: {
      colors: {
        green: {
          DEFAULT: '#00f260',
        },
        dark: {
          DEFAULT: '#010101',
          100: '#0A0B0E',
          200: '#16181D',
          300: '#16181D',
          500: '#0F1115',
          700: '#202125',
        },
        redplanet: {
          DEFAULT: '#400A0A',
          100: '#D92323',
          200: '#8C0B0B',
          300: '#F2AF88',
          400: '#F2E8D5',

        },
        asiacolor: {
          DEFAULT: '#591C1C',
          100: '#8C1B1B',
          200: '#F25835',
          300: '#F2994B',
          400: '#F2BC57',
        },
        purpledream: {
          DEFAULT: '#1E1540',
          100: '#3E2F73',
          200: '#151826',
          300: '#5865B0',
          400: '#E9EEF7',
        }
      }
    },
  },
  variants: {
    extends: {
      boxShadow: ["dark"]
    },
  },
  plugins: [],
}
