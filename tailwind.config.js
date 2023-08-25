/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        cornflowerblue: "#0272cc",
        dimgray: {
          "100": "#646464",
          "200": "#555",
        },
        black: "#000",
        gainsboro: "rgba(217, 217, 217, 0)",
        royalblue: "#0042ab",
        gray: "rgba(255, 255, 255, 0.6)",
      },
      fontFamily: {
        roboto: "Roboto",
      },
    },
    fontSize: {
      "21xl": "40px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
