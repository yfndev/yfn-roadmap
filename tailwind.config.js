/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Readex Pro", "sans-serif"],
    },
    extend: {
      extend: {
        colors: {
          dark: {
            900: "#121212", // very dark gray for backgrounds
            800: "#1D1D1D", // for back panels or cards
            700: "#2A2A2A", // for secondary containers or sidebars
            600: "#383838", // for hover states or selected items
            500: "#4D4D4D", // for borders and lines
            400: "#626262", // for icons or secondary text
            300: "#9E9E9E", // for placeholder text or disabled states
            200: "#B3B3B3", // for input fields backgrounds
            100: "#D4D4D4", // for text
          },
          yfn: "#ffed00",

          borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
          },
          keyframes: {
            "accordion-down": {
              from: { height: 0 },
              to: { height: "var(--radix-accordion-content-height)" },
            },
            "accordion-up": {
              from: { height: "var(--radix-accordion-content-height)" },
              to: { height: 0 },
            },
          },
          animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
          },
        },
      },
    },
  },
  plugins: [],
};
