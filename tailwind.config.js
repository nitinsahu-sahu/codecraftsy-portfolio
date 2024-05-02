/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    colors: {
      darkgreen: "#114232",
      lightgreen: "#87A922",
      themeyellow: "#FCDC2A",
      skin: "#F7F6BB",
      black:"#000000",
      white:"#ffffff"
    }

  },
  plugins: [
    require('flowbite/plugin')
  ]
}

