/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#4F4F4F",
        red: "#C10016",
      },
      fontFamily: {
        Roboto: "Roboto, sans-serif",
        Montserrat: "Montserrat, sans-serif",
      },
      boxShadow: {
        container: "0px 0px 10px 0px #00000040",
      },
    },
  },
  plugins: [],
}

