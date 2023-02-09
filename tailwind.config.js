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
          100: '#0A0B1E',
          200: '#16181D',
          300: '#16181D',
          500: '#0F1115',
          700: '#202125',
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
