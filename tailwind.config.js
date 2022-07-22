/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    textColor: {
      white: "#fff"
    },
    colors: {
      bgColor: '#1D201F',
      bgBlue: '#79AFB8'
    },
    extend: {},
  },
  plugins: [],
}
