import type { Config } from "tailwindcss";

const colors = require('tailwindcss/colors')
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'academy-sky': '#1E40AF',
        'academy-sky-hover': '#173aad',
      },
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        blue: colors.blue
      },
      borderColor: {
        'academy-sky': '#1E40AF',
        'academy-sky-hover': '#173aad',
        'error-input': '#E53E3E',
      },
    },
    screens: {
      phone: '320px',
      tablet: '820px',
      laptop: '1024px',
      desktop: '1440px',
    },
  },
  plugins: [],
};
export default config;
