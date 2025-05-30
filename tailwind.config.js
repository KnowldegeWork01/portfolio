/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        hexagon: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
      },
      boxShadow: {
        'hex-shadow': '0 4px 10px rgba(0,0,0,0.3)',
      },
      borderColor: {
        'purple-custom': '#7f5af0',
      }
    },
  },
  plugins: [
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.clip-hexagon': {
          clipPath: theme('clipPath.hexagon'),
        },
      }
      addUtilities(newUtilities, ['responsive'])
    }
  ],
}
