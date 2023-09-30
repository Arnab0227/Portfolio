/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '10': '10px',
      '12': '12px',
      '14': '14px',
      '16': '16px',
      '18': '18px',
      '20': '20px'
    },
    transitionDuration: {
      '500': '500ms',
      '1000': '1000ms',
      '1500': '1500ms',
      '2000': '2000ms',
    }
  },
  plugins: [require('tailwindcss-elevation'),],
}