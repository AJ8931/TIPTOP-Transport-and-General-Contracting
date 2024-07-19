/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#3CB371  ',
        'secondary': '#3C668F',
        'Green': '#577563',
        'Dark_Green': '#3d5e45',
        'Light_Green': '#578461',
        'white': '#f2f1f1'
      }
    },
  },
  plugins: [],
}