/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f5f7fa',
          100: '#eaeef4',
          200: '#d1dbe6',
          300: '#a9bcd2',
          400: '#7a97b9',
          500: '#5676a1',
          600: '#405c87',
          700: '#34496d',
          800: '#2d3e5c',
          900: '#28354d',
        },
      },
    },
  },
  plugins: [],
};