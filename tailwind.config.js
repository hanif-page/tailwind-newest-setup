module.exports = {
  // the most important thing
  mode: 'jit',

  purge: ['**/*.html'],
  // (the thing is, it's the path of the file that you want to purge)

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
