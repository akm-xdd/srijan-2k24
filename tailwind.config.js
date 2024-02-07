/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest': '#228B22',
        'mint': '#F4FFF8',
        'english': '#4C3B4D',
        'soothing_black': "#212121",
        'main_primary': "#7cb342",
        'primary': "#1E0B37",
        'gray': "#868888",
        'footer': "#1B1B1B",

      },
      fontFamily: {
        'dreamland': 'Dreamland',
      },
      animation: {
        'slide': 'slide 3s linear infinite',
        'playstate': 'running'
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(20%)' },
          '100%': { transform: 'translateX(-20%)' }
        }
      }
    },
  },
  plugins: [],
}