/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#2157b0",
          100: "#e1e9fa",
        },
        dark: {
          100: "#212734",
          200: "#151821",
          300: "#0F1117",
          400: "#101012",
          500: "#000000",
        },
        light: {
          100: "#FFFFFF",
          200: "#FDFDFD",
          300: "#F4F6F8",
          400: "#DCE3F1",
          500: "#858EAD",
          600: "#7B8EC8",
        },
        "accent-blue": "#1DA1F2",
      },
    },
  },
  plugins: [],
};
