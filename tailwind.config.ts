import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mjs}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B1F44",
        secondary: "#BFA86F",
        accent: "#D4AF37",
        background: "#FFFFFF",
        surface: "#F7F3EB",
        footer: "#081423",
        text: "#0F172A",
        "text-secondary": "#7F7A68",
      },
      boxShadow: {
        soft: "0 28px 90px rgba(15, 23, 42, 0.08)",
        card: "0 20px 50px rgba(15, 23, 42, 0.06)",
      },
      borderRadius: {
        button: "14px",
        card: "20px",
        image: "24px",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          lg: "2rem",
        },
        screens: {
          xl: "1280px",
        },
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out both",
      },
      screens: {
        "2xl": "1600px",
      },
    },
  },
  plugins: [],
};

export default config;
