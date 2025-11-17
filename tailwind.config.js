/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", 
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        indigo: "0 0 20px rgba(var(--color-indigo-600), 0.5)",
        yellowGlow: "0 0 20px rgba(var(--color-yellow-500), 0.5)",
        whiteglow: "0 0 30px rgba(var(--color-palette-white), 0.5)",
      },
    },
  },
  plugins: [],
};
