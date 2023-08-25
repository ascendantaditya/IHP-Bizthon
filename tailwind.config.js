/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dimgray: {
          "100": "#6a6a6a",
          "200": "#646464",
        },
        black: "#000",
        gainsboro: "rgba(217, 217, 217, 0)",
        white: "#fff",
        royalblue: "#0042ab",
        gray: "rgba(255, 255, 255, 0.6)",
      },
      fontFamily: {
        roboto: "Roboto",
      },
    },
    fontSize: {
      "18xl": "37px",
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
