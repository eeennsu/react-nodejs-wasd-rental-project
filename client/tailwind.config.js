/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1700px'
      },
      backgroundColor: {
        '01': '#3F5D7D',
        '02': '#A6B1C0',
        '03': '#D5E1F2',
        '04': '#F2F4F7',
        '01-hover': '#5f80a3',
        '01-active': '#334961',
        '02-hover': '#bac6d6',
        '02-active': '#939ead',
      },
      textColor: {
        '01': '#3F5D7D',
        '02': '#A6B1C0',
        '03': '#D5E1F2',
        '04': '#F2F4F7',
      },
      minWidth: {
        '7xl': '1280px'
      },
      borderRadius: {
        'sm2': '4px',
        '2lg': '10px'
      },
      boxShadow: {
        'left': '-6px 4px 4px 0 rgba(0, 0, 0, 0.25)'
      },
      borderColor: {
        '01': '#3F5D7D',
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('daisyui')],
}

