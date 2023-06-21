/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily:{
          karla:["Karla", "sans-serif"],
          inconsolata:["Inconsolata","monospace"]
        },
        colors:{
          "rose":"#DC0D5B",
          "rosedark":"#a80948",
          "gris":"#6B6B6B"
        }
      },
    },
    plugins: [],
  }