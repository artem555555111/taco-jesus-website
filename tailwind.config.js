/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mexican-red': '#E53E3E',
        'mexican-yellow': '#F6E05E',
        'mexican-green': '#38A169',
        'mexican-orange': '#ED8936',
        'mexican-purple': '#805AD5',
        'mexican-pink': '#D53F8C',
      },
      fontFamily: {
        'lobster': ['Lobster', 'cursive'],
        'chewy': ['Chewy', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}

