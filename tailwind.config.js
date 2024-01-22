/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          'forest':'#228B22',
          'mint':'#F4FFF8',
          'english':'#4C3B4D',
        }
    },
  },
  plugins: [],
}