/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        void: "#0B0714",
        "void-alt": "#150F24",
        "void-card": "#1B1330",
        lavender: "#EDE9F7",
        violet: "#8B5CF6",
        fuchsia: "#D946EF",
        mist: "#6B5B8A",
      },
      backgroundImage: {
        "grad-primary": "linear-gradient(135deg, #7C3AED 0%, #D946EF 100%)",
        "grad-radial": "radial-gradient(circle at 20% 20%, rgba(139,92,246,0.18), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(139,92,246,0.45)",
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
        sans: ["'Sora'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
