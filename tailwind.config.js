/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      base: "300px",
      320: "320px",
      mobile: "425px",
      sm: "640px",
      md: "768px",
      tablet: "860px",
      lg: "1024px",
      xl: "1280px",
      1380: "1380px",
      "2xl": "1540px",
    },

    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          default: "1400px",
        },
      },
      colors: {
        "primary-bg": "rgba(var(--color-primary), 0.05)",
        primary: "rgba(var(--color-primary))",
        secondary: "rgba(var(--secondary))",
        yellow: "rgba(var(--yellow))",
        green: "rgba(var(--green))",
        bkg: "rgba(var(--color-bkg))",
        border: "rgba(var(--color-border))",
        "black-white": "rgba(var(--color-black-white))",
        "white-black": "rgba(var(--color-white-black))",
        "color-blue": "rgba(var(--color-blue))",
        "color-text": "rgba(var(--color-text))",
        "color-light": "rgba(var(--color-light))",
        "color-dark": "rgba(var(--color-dark))",
      },
      fontFamily: {
        inter: ["'Inter', Arial, sans-serif"],
        montserrat: ["'Montserrat', sans-serif"],
        sfPro: ["var(--font-sf-pro)"],
      },
    },
  },
  plugins: [],
};
