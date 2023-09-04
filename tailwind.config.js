const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#29979E",
    },
    screens: {
      xs: "300px",
      sm: "600px",
      md: "840px",
      lg: "1280px",
      xl: "1920px",
    },
    extend: {
      spacing: {
        large: "1200px",
      },
      width: {
        mobile: "300px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
