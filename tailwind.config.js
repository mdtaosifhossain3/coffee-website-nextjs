/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // if using App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // if using Pages Router
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xxxs: "150px",
        xxs: "375px",
        xs: "475px",
      },
      fontFamily: {
        syncopate: ["var(--font-syncopate)"],
      },
    },
  },
  plugins: [],
};
