/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // if using App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // if using Pages Router
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        syncopate: ["var(--font-syncopate)"],
      },
    },
  },
  plugins: [],
};
