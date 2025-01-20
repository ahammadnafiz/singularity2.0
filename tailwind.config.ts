/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "noto-serif-bengali": ["var(--font-noto-serif-bengali)"],
        "jetbrains-mono": ["var(--font-jetbrains-mono)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}