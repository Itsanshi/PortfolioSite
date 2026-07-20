import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0C10",
          soft: "#0D1017",
        },
        surface: {
          DEFAULT: "#12151C",
          raised: "#171B24",
        },
        border: {
          DEFAULT: "#232838",
          soft: "#1A1E2A",
        },
        ash: {
          DEFAULT: "#E7E9EE",
          muted: "#9098AC",
          faint: "#5C6478",
        },
        accent: {
          blue: "#6C8EFF",
          purple: "#9B7EF0",
          blueDim: "rgba(108,142,255,0.10)",
          purpleDim: "rgba(155,126,240,0.10)",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-plus-jakarta)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(60% 50% at 50% 0%, rgba(108,142,255,0.14) 0%, rgba(10,12,16,0) 70%)",
      },
      backgroundSize: {
        grid: "44px 44px",
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
        float: "float 7s ease-in-out infinite",
        "float-slow": "float 11s ease-in-out infinite",
        "spin-slow": "spin 26s linear infinite",
        marquee: "marquee 34s linear infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-18px,0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(108,142,255,0.15), 0 8px 30px -10px rgba(108,142,255,0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
