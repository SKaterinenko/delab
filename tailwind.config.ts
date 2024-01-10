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
        black: '#0D0D12',
      },
    },
  },
  plugins: [],
};
export default config;
