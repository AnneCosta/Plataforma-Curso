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
        cBlue: {
          default: '#b0d1d6',
          100: '#8bcbd6',
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
