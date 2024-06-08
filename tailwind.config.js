/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "antresit-light": "#3d4853",
      "antresit-dark": "#2b2d2f",
      "seperator-gray": "#D9D9D9",
      earthgreen: "#2fb775",
      "earthgreen-dark": "#279f65",
      "moonlight-start": "#1d3e4b",
      "moonlight-end": "#2c5364",
      white: "#ffffff",
    },
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1439px",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        xl: "5rem",
      },
    },
  },
  plugins: [],
};
