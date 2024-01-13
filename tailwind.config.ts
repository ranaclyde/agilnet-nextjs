import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'blaze-orange': {
          50: '#fff6ed',
          100: '#feebd6',
          200: '#fcd4ac',
          300: '#f9b578',
          400: '#f68c41',
          500: '#f36f21', // <--- brand color
          600: '#e45212',
          700: '#bd3c11',
          800: '#963116',
          900: '#792a15',
          950: '#411309',
        },
        'venice-blue': {
          50: '#eff8ff',
          100: '#def1ff',
          200: '#b6e4ff',
          300: '#76cfff',
          400: '#2db8ff',
          500: '#02a0f5',
          600: '#007ed2',
          700: '#0065aa',
          800: '#005992', // <--- brand color
          900: '#074773',
          950: '#042d4d',
      },
      },
    },
  },
  plugins: [],
};

export default config;
