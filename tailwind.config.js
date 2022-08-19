module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: "'Lato', sans-serif",
      },
      animation: {
        'bounce-slow': 'bounce 3s ease-in-out infinite',
      },
    },
  },
  /* plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')], */
};
