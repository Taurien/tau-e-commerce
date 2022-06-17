module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'mobile': {'max': '769px'},
      'desktop': '768px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
