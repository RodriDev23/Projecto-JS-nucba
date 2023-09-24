
/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  enabled: process.env.NODE_ENV === "production",
}