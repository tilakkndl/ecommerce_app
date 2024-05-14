

/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./src/**/*.{js,jsx,html, ts, tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'satoshi': ['Satoshi', 'sans-serif'],
        'integer': ['Integer CF', 'sans-serif'],
      },
      colors: {
        'light-grey': '#9A9A9A',
        'dark-grey': '#F2F0F1',
        "footer-color": "#F0F0F0",
      },
      gridTemplateColumns: {
        'custom': '407px 684px 684px 407px',
      },
      gridTemplateRows: {
        'custom': 'auto auto',
      }
    },
  },
  plugins: [],
}

