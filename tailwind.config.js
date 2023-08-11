/*
 * @Date: 2023-07-25 09:30:22
 * @Author: Bruce Hsu
 * @Description: 
 */
const plugin = require("tailwindcss/plugin")
const colors = require("tailwindcss/colors")
const { parseColor } = require("tailwindcss/lib/util/color")

// Convert HEX color to RGB
const toRGB = (value) => {
  return parseColor(value).color.join(" ");
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        glass: "rgba(255,255,255,0.25)",
        brown: "rgb(30, 30, 17);",
        primary: "rgb(var(--color-primary))"
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addBase }) {
      addBase({
        // Default colors
        ":root": {
          "--color-primary": toRGB(colors.blue["800"])
        }
      })
    })
  ],
}

