/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Google Fonts'dan ulangan shrift
        protest: ['Protest'],
        suse: ['Suse'],
      },
      animation: {
        'pulseSlow': 'spin .3s linear infinite',
      }
    },
  },
  plugins: [],
}

