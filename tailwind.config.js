/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px 8px rgba(99, 102, 241, 0.35)",
      },
      backgroundImage: {
        'grid': "linear-gradient(to right, rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': "24px 24px",
      }
    },
  },
  plugins: [],
}
