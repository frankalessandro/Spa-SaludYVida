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
  keyframes: {
    'float-rotate-left': {
      '0%, 100%': {
        transform: 'translateY(-50%) translateX(0) rotate(0deg)',
      },
      '25%': {
        transform: 'translateY(-60%) translateX(10px) rotate(-5deg)',
      },
      '50%': {
        transform: 'translateY(-50%) translateX(0) rotate(0deg)',
      },
      '75%': {
        transform: 'translateY(-40%) translateX(10px) rotate(5deg)',
      }
    },
    'float-rotate-right': {
      '0%, 100%': {
        transform: 'translateY(-50%) translateX(0) rotate(0deg)',
      },
      '25%': {
        transform: 'translateY(-60%) translateX(-10px) rotate(5deg)',
      },
      '50%': {
        transform: 'translateY(-50%) translateX(0) rotate(0deg)',
      },
      '75%': {
        transform: 'translateY(-40%) translateX(-10px) rotate(-5deg)',
      }
    }
  },
  animation: {
    'float-rotate-left': 'float-rotate-left 6s ease-in-out infinite',
    'float-rotate-right': 'float-rotate-right 6s ease-in-out infinite'
  }
});
