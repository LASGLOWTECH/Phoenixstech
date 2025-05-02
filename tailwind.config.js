



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        Primarycolor: '#321C94',
        Primarycolor1: '#372D70',
        Primarycolor2: '#1A1433',
        Secondarycolor: '#DD5945',
        Secondarycolor1: '#FFAF5E'

        ,
        greyBlack: '#181B38',
        grey: '#fafafa',



      }
    },

  },
  plugins: [],
}