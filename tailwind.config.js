/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bgColor: '#1D201F',
        bgBlue: '#79AFB8',
        linkBlue: '#148B98',
        linkHover: '#35828f',
        cGray: {
          100: '#2D3130',
        },
        cBlue: {
          default: '#b0d1d6',
          100: '#8bcbd6',
          101: '#71A2AA',
          102: '#a4d5de',
          200: '#79AFB8',
          300: '#6a99a1',
          301: '#148B98',
          400: '#127c87',
          500: '#47666b',
          600: '#0d5961',
        }
      },
    },
  },
  plugins: [],
}
