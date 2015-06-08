module.exports = {
  dist: {
    options: {
      // cssmin will minify later
      style: 'expanded'
    },
    files: {
      'build/css/theme.css': 'assets/scss/theme.scss'
    }
  }
}