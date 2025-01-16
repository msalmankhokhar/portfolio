import type { Config } from "tailwindcss";
import { COLOR_PALLETES } from "./data/colors";

export default {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: COLOR_PALLETES.orange,
        secondary: {
          100: '#F5F7FA',
          200: '#ECEEF4',
          300: '#D2D5E2',
          400: '#B6BCCD',
          500: '#9EA5BD',
          600: '#79829F',
          700: '#626981',
          800: '#4B5162',
          900: '#343844',
          1000: '#1C1F25',
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
