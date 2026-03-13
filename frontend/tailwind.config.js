/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ← habilita o dark mode via classe .dark
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        border: "rgb(var(--border) / <alpha-value>)",
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        "card-foreground": "rgb(var(--card-foreground) / <alpha-value>)"
        // adicione outras cores do tema se quiser
      }
    }
  },
  plugins: [],
}