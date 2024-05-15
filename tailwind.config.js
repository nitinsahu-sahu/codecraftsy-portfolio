/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
    colors: {
      darkgreen: "#114232",
      lightgreen: "#87A922",
      themeyellow: "#FCDC2A",
      skin: "#F7F6BB",
      black: "#000000",
      white: "#ffffff"
    },
    boxShadow: {
      'random-shadow': "rgba(100, 100, 111, 0.2) 1px 1px 9px 7px",
      'contact-shadow': "2px 3px 14px black",
      'skill-shadow': "6px 5px 12px 1px #471069"
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

