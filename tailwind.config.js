/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitesmoke: "#f5f5f5",
        black: "#000",
        darkgray: "#a7a1a1",
        gray: {
          "100": "#011a1e",
          "200": "#121212",
          "300": "rgba(18, 18, 18, 0.8)",
          "400": "rgba(0, 0, 0, 0.6)",
          "500": "rgba(0, 0, 0, 0.8)",
          "600": "rgba(255, 255, 255, 0.3)",
        },
        gainsboro: "rgba(217, 217, 217, 0.3)",
        silver: "#c4c4c4",
        pink: "#f8c5c5",
        lavenderblush: "#fdecec",
      },
      fontFamily: {
        lato: "Lato",
      },
      borderRadius: {
        "3xs": "10px",
        "31xl": "50px",
        "8xs": "5px",
        xl: "20px",
        "5xs-5": "7.5px",
      },
    },
    fontSize: {
      xl: "1.25rem",
      sm: "0.88rem",
      base: "1rem",
      "21xl": "2.5rem",
      "29xl": "3rem",
      xs: "0.75rem",
      lg: "1.13rem",
      mini: "0.94rem",
      "13xl": "2rem",
      "11xl": "1.88rem",
      "5xl": "1.5rem",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
