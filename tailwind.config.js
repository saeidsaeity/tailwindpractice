/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        customGrey:'#656565'
      },
      height: {
        '90vh': '90vh',
      },
    },
  },
  plugins: [],
}

