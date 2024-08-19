/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        gloria: ['Gloria Hallelujah', 'cursive'],
        newamsterdam: ['New Amsterdam', 'serif'],
        roboto: ['Roboto', 'sans-serif'], // Add Roboto here
      },
    },
  },
  plugins: [],
}
