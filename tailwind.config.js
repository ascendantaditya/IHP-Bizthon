/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        cornflowerblue: {
          "100": "#0272cc",
          "200": "rgba(35, 138, 228, 0.41)",
        },
        black: "#000",
        dimgray: "#696969",
        gray: "rgba(255, 255, 255, 0.6)",
      },
      fontFamily: {
        roboto: "Roboto",
      },
      borderRadius: {
        "sm-1": "13.1px",
      },
    },
    fontSize: {
      "9xl": "28px",
      "15xl-8": "34.8px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
