import { Config } from 'tailwindcss';

const config: Config = {
  mode: 'jit',
  content: [
    './src/**/*.{js,ts,jsx,tsx,html,mdx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      md: { max: '1050px' },
      sm: { max: '550px' },
    },
    extend: {
      colors: {
        black: { 900: '#090814', '900_01': '#080808', '900_02': '#000000', '900_3f': '#0000003f' },
        blue_gray: { 800: '#3f3d56', 900: '#2f2e41', '900_01': '#2f2e43' },
        deep_orange: { 100: '#ffb6b6' },
        deep_purple: { 600: '#4b38cc', 900: '#2f2087', '600_01': '#4b35cc', '600_02': '#4c38c2' },
        gray: {
          50: '#f9f9f9',
          100: '#f3f3f3',
          200: '#e9e9e9',
          300: '#e6e6e6',
          400: '#cacaca',
          500: '#8f8f8f',
          600: '#a0161a',
          700: '#606060',
          800: '#3a3a3a',
          900: '#1f1f1f',
          '100_01': '#f4f4f4',
          '100_02': '#f7f7f7',
          '100_03': '#f2f2f2',
          '300_01': '#dcdcdc',
          '300_02': '#e2e1e1',
          '300_03': '#dedede',
          '600_01': '#858585',
          '600_02': '#797979',
          '600_03': '#757575',
          '600_04': '#9e616a',
          '700_01': '#666666',
          '700_02': '#555555'
        },
        green: { a700: '#0dcc59' },
        indigo: { 200: '#9c93d4' },
        orange: { 400: '#ffa134' },
        red: { 200: '#ed9da0', 300: '#ff6b6b' },
        white: { a700: '#ffffff' },
      },
      boxShadow: { xs: '0 1px 8px 0 #0000003f' },
      backgroundImage: {
        gradient: 'linear-gradient(180deg, #4b38cc, #2f2087)',
        gradient1: 'linear-gradient(180deg, #3a3a3a,#1f1f1f)'
      },
      fontFamily: { inter: 'Inter', barlow: 'Barlow' },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

export default config;
