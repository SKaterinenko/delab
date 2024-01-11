import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#41A4DF',
        deepBlue: '#297EE2',
        lightBlue: '#297EE21F',
        black: '#0D0D12',
        grey: '#FFFFFF99',
      },
    },
  },
  plugins: [],
};
export default config;
