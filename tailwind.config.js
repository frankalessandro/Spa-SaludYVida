import { transform } from "lodash";

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
        indigo: "var(--color-indigo)", // #6366f1
        bgGreenLight: "var(--color-bg-green-light)", // rgba(209, 250, 229, 0.5)
        fillGreenDark: "var(--color-fill-green-dark)", // #167364
        initBackgroundButtonViewsGradient: "var(--init-gradiant-button-views)", //fondo plano para botones paginas secundaria
        endBackgroundButtonViewsGradient: "var(--end-gradiant-button-views)", //fondo plano para botones paginas secundaria
        textWhite: "var(--color-text-white)"
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        fly: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'slide-in-bottom-left': {
          '0%': {
            transform: 'translate(-100%, 100%) rotate(75deg)',
            opacity: '0'
          },
          '30%': {
            transform: 'translate(-60%, 60%) rotate(45deg)',
            opacity: '0.3'
          },
          '100%': {
            transform: 'translate(0, 0) rotate(15deg)',
            opacity: '1'
          }
        },
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
        },
        waves: {
          '0%': { transform: 'rotate(180deg) translateY(-10px)' }, // Rotación inicial
          '50%': { transform: 'rotate(180deg) translateY(-5px)' }, // Altura máxima
          '100%': { transform: 'rotate(180deg) translateY(-10px)' }, // Rotación final
        },
        ocultar: {
          '0%': {
            transform: 'translateX(0)', // El elemento empieza en su lugar
          },
          '50%': {
            transform: 'translateX(-100%)', // Se mueve fuera de la pantalla
          },
          '100%': {
            transform: 'translateX(-100%)', // Sigue fuera de la pantalla
            opacity: '0', // Se desvanece
          },
        },
      },
      animation: {
        fly: 'fly 10s linear infinite',
        'float-rotate-left': 'float-rotate-left 6s ease-in-out infinite',
        'float-rotate-right': 'float-rotate-right 6s ease-in-out infinite',
        'slide-in-bottom-left': 'slide-in-bottom-left 1.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards', //animacion de hoja en el home
        'waves': 'waves 3s ease-in-out infinite', // Ciclo infinito
        'ocultar': 'ocultar 2s forwards', // Definimos la animación llamada 'ocultar'
        shine: 'shine 3s infinite linear',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(90deg, #ffcc33, #ff9900, #ffcc33)',
      },
      textShadow: {
        gold: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 5px rgba(255, 204, 0, 0.6)',
      },
    },
  },
  plugins: [scrollbarHide, require('daisyui'),
    require('tailwindcss-textshadow'), //
  ],

});
