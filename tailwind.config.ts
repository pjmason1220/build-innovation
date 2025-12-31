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
        primary: {
          DEFAULT: "#1F4E78",
          dark: "#163A5C",
          light: "#2A5F8C",
        },
        secondary: {
          DEFAULT: "#2E75B5",
          dark: "#245D92",
          light: "#3D8DD8",
        },
        gold: {
          DEFAULT: "#D4AF37",
          dark: "#B8972F",
          light: "#E0C356",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
