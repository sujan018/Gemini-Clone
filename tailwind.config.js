/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        'secondary-gray' : '#1b1f2862',
        'light-gray': '#1b1f28c1',
      }
    },
  },
  plugins: [],
}