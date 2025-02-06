/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*js",
    "./html/**/*html"
  ],
  theme: {
    extend: {
      colors: {
        'purple-1': '#6226EF',
        'purple-2': '#e0d4fc',
        'green-1': '#00B69B',
        'green-2': '#ccf0eb',
        'red-1': '#EF3826',
        'red-2': '#fcd7d4',
        'yellow-1': '#FFA756',
        'yellow-2': '#ffeddd',
        'blue-1': '#4880FF',
        'blue-2': '#c3d4fc'
      },
      fontFamily: {
        fontFamily: {
          Nunito_Sans: ['Nunito Sans'],
        },
      },
      screens: {
        'md': '992px',
      },
    },
  },
  plugins: [],
}