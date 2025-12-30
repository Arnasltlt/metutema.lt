import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Celestial calendar palette
        navy: {
          DEFAULT: "#0a0e27",
          light: "#1a1f3a",
        },
        amber: {
          DEFAULT: "#d4a574",
          light: "#e8c9a0",
          dark: "#b8935f",
        },
        cream: "#f5f1e8",
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;

