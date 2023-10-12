/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "clash-display": "Clash Display",
        "satoshi": "Satoshi",
      },
      colors: {
        "bg-color": "rgba(249, 249, 249, 0.15)",
      },
      lineHeight: {
        "140%":"140%"
      },
      width: {
        '55%': '55%',
        '45%': '45%'
      }
    },
  },
  plugins: [],
};
