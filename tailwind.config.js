/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      backgroundColor: {
        smooth: "rgba(0, 0, 0, 0.3)",
      },
      colors: {
        gray: "#4F4F4F",
      },
      fontFamily: {
        Montserrat: "Montserrat, sans-serif",
        Roboto: "Roboto, sans-serif",
      },
      boxShadow: {
        container: "box-shadow: 0px 0px 10px 0px #00000040",
      },
    },
  },
  plugins: [],
}

