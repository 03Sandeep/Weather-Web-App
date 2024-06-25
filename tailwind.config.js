module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",
        secondary: "#9333EA",
        background: "#F3F4F6",
        text: "#1E293B",
        accent: "#FF9900",
        success: "#10B981",
        error: "#EF4444",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      boxShadow: {
        custom: "0 4px 6px rgba(0,0,0,0.1)",
      },
      spacing: {
        96: "24rem",
      },
      screens: {
        "2xl": "1536px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
