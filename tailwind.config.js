/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 🔥 ESSENCIAL
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#6366F1',
          secondary: '#22C55E',
        },
      },
    },
  },
  plugins: [],
}