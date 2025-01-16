import type { Config } from "tailwindcss";

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
        // primary: {
        //   200: '#e2ecfe',
        //   300: '#B6D1FB',
        //   400: '#88B2F9',
        //   500: '#6099F7',
        //   600: '#387FF5',
        //   700: '#2D66C4',
        //   800: '#224C93',
        // },
        primary: {
          200: '#e4f8e2', // light green
          300: '#bcecb6', // soft green
          400: '#88dc88', // medium green
          500: '#60c960', // standard green
          600: '#38b538', // vibrant green
          700: '#2c8f2c', // deeper green
          800: '#226922', // dark green
        },
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
