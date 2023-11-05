/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        '01': '#3F5D7D',
        '02': '#A6B1C0',
        '03': '#D5E1F2',
        '04': '#F2F4F7',
      },
      minWidth: {
        '7xl': '1280px'
      },
      borderRadius: {
        '2lg': '10px'
      }    
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('daisyui')],
}

