/** @type {import('$fresh/plugins/twind').Options} */
export default {
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        "slate": {
          900: "#0f172a",
        },
        "emerald": {
          200: "#a7f3d0bf",
          600: "#059669",
        },
        "sky": {
          500: "#0ea5e9",
          700: "#0369a1",
        },
        transparent: "transparent",
      },
      fontFamily: {
        sans: ["Helvetica Neue", "sans-serif"],
        serif: ["Helvetica Two"],
      },
    },
  },
};
