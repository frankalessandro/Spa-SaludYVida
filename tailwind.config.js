const withMT = require("@material-tailwind/react/utils/withMT");
const scrollbarHide = require("tailwind-scrollbar-hide");
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Botones: ("var(--color-button-light)"),
        BotonesHover: ("var(--color-button-light-hover)"),
        textLight: "var(--color-text-light)",
        textDark: "var(--color-text-dark)",
        colorIcon: "var(--color-tittle)",
        textGray: "var(--color-text-gray)",
        underline: "var(--color-underline)",
        background1: "var(--color-bg-1)",
        background2: "var(--color-bg-2)",
      },
    },
  },
  plugins: [scrollbarHide],
});
