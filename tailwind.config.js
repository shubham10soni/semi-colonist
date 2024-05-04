module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      colors: {
        background: "#faeede",
        title: "#665F54",
        otherblack: "#020201",
        beige: "#FCF6F5FF",
        other: "#89ABE3FF",
        color1: "#02AABD",
        color2: "#00CDAC",
      },
      animation: {
        pop: "pop 0.6s ease-out",
        sway: "sway 1.5s cubic-bezier(0.4, 0, 0.2, 1) ",
        spinslow: "spin 5s linear infinite",
      },
      keyframes: {
        sway: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(15deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
        pop: {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.1)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100ch",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
