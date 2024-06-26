/** @type {import('tailwindcss').Config} */
export default {
 content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
 theme: {
  colors: {
   primary: '#153E5E',
   secound: '#F5AF4F',
   white: '#FFFFFF',
   gray: '#4D4D4D',
   neutralGray: '#909090'
  },
  extend: {
   fontSize: {
    xxs: '0.53rem'
   }
  }
 },
 plugins: []
};
