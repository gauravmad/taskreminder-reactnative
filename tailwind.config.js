// tailwind.config.js

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        0.5: "0.5px",
        1: "1px",
        3: "3px",
        5: "5px",
        7: "7px",
      },
    },
  },
  plugins: [],
}