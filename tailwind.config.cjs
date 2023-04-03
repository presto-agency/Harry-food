/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,cjs,scss,css}"],
  theme: {
    extend: {},
    container: {
      screens: {
        xl: "144rem",
      },
      center: true,
      padding: "3.2rem"
    },
    fontSize: {
      base: "10px"
    }
  },
  plugins: [],
}
