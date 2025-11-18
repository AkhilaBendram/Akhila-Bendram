/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        //ink: "#0A0A0A",
        umber: "#E6D7C9",
        rose: "#E7B3A3",
        cyan: "#89E3FF",
      },
      boxShadow: {
        chrome: "0 0 0 1px rgba(255,255,255,.05), 0 10px 30px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.08)",
      },
      keyframes: {
        "sweep": {
          "0%":   { transform: "translate3d(-20%, -10%, 0) rotate(0deg)" },
          "50%":  { transform: "translate3d(10%,  5%,  0) rotate(1deg)" },
          "100%": { transform: "translate3d(-20%, -10%, 0) rotate(0deg)" },
        },
        "breath": {
          "0%,100%": { opacity:.5, filter:"saturate(105%)" },
          "50%":     { opacity:.65, filter:"saturate(115%)" }
        }
      },
      animation: {
        sweep: "sweep 14s ease-in-out infinite",
        breath: "breath 6s ease-in-out infinite",
      },
      fontFamily: {
        // wide "Charlie's Angels" vibe without importing weird packs
        wide: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      }
    },
  },
  plugins: [],
};

