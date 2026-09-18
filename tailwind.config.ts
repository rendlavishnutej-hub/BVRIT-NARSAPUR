import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          DEFAULT: '#FFBE91',
          light: '#FFD4B3',
          dark: '#E5A070',
        },
        'soft-peach': {
          DEFAULT: '#FFDDB0',
          light: '#FFE8CC',
          dark: '#E5C490',
        },
        ivory: {
          DEFAULT: '#FFFCE1',
          light: '#FFFEF0',
          dark: '#F5F0D0',
        },
        sky: {
          DEFAULT: '#CFEBFF',
          light: '#E5F4FF',
          dark: '#A8D8F0',
        },
        charcoal: {
          DEFAULT: '#2D2D2D',
          light: '#4A4A4A',
          lighter: '#6B6B6B',
        },
        mastery: {
          secure: '#4CAF50',
          developing: '#FFC107',
          'needs-support': '#FF7043',
          'not-assessed': '#E0E0E0',
        },
      },
      fontFamily: {
        heading: ['Nunito', 'Inter', 'sans-serif'],
        body: ['Inter', 'Nunito', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};
export default config;
