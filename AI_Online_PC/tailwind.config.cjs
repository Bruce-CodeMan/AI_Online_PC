/*
 * @Date: 2023-07-25 09:30:22
 * @Author: Bruce Hsu
 * @Description: 
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        glass: "rgba(255,255,255,0.25)",
        brown: "rgb(30, 30, 17);"
      }
    },
  },
  plugins: [],
}

