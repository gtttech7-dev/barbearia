/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0a0a0a',
          gray: '#171717',
          gold: '#d4af37',
          goldHover: '#b5952f',
          light: '#f5f5f5'
        }
      }
    },
  },
  plugins: [],
}