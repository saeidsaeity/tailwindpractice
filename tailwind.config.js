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
        '7/100':'7vh',
        '1/40':'2.5vh',
        '1/30':'3.3vh'
      },
    },
  },
  plugins: [],
}

