const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tirobangla: ["Tiro Bangla", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
      },

      colors: {
        primary: "#00897B",
        primaryWhite: "#f1f1f1",
      },
    },
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "1320px",
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
});
