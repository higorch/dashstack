/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*js",
    "./html/**/*html"
  ],
  theme: {
    extend: {
      fontFamily: {
        fontFamily: {
          Nunito_Sans: ['Nunito Sans'],
        },
      },
    },
  },
  plugins: [],
}