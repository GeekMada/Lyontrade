/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#00C26F',
          blue: '#0066cc',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, rgba(0,194,111,0.9) 0%, rgba(0,102,204,0.9) 100%)',
        'gradient-light': 'linear-gradient(135deg, rgba(0,194,111,0.1) 0%, rgba(0,102,204,0.1) 100%)',
      },
    },
  },
  plugins: [],
};