/** @type {import('tailwindcss').Config} */
export default {
 content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
 theme: {
  colors: {
   primary: '#153E5E',
   secound: '#F5AF4F',
   white: '#FFFFFF',
   gray: '#4D4D4D',
   neutralGray: '#C9C9C9'
  },
  extend: {
   fontSize: {
    xxs: '0.62rem',
    xxs2: '0.54rem',
    md2: '0.80rem'
   }
  }
 },
 plugins: []
};
