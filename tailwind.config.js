/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'serif',]
      },
      scrollBehavior: {
        DEFAULT: 'smooth',
      },
    },
  },
  plugins: [
  // eslint-disable-next-line no-undef
  require('@tailwindcss/line-clamp'),
],
}

