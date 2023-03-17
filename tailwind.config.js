// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/views/**/*',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js',
    './app/javascript/**/*.ts'
  ],
  // theme: {
  //   extend: {
  //     fontFamily: {
  //       sans: ['Inter var', ...defaultTheme.fontFamily.sans],
  //     },
  //   },
  // },
  // plugins: [
  //   require('@tailwindcss/forms'),
  //   require('@tailwindcss/aspect-ratio'),
  //   require('@tailwindcss/typography'),
  // ]
}
