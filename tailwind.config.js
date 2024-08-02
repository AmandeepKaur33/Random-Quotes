/** @type {import('tailwindcss').Config} */
import img from '../quotes-app/src/Components/Images/images (2).jpeg';
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        'quotes': "url('../public/images (2).jpeg')",
      }
    },
  },
  plugins: [],
}

