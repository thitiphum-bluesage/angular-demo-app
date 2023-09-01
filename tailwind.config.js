/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    screens: {
      xs: "0px",
      sm: "500px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    container: {
      center: true,
      padding: "15px",
      screens: {
        sm: "97%",
        md: "95%",
        lg: "95%",
        xl: "95%",
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
