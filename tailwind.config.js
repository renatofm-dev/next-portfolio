/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      'kaushan': ['Kaushan Script', ],
      'Comfort': ['Comfortaa'],
      'Tenor': ['Tenor Sans']
    },
    extend: {
      colors: {
        green: {
          DEFAULT: '#00f260',
        }
      }
    },
  },
  plugins: [],
}
