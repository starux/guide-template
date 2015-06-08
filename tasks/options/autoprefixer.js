module.exports = {
  options: {
    browsers: ['last 2 version']
  },
  multiple_files: {
    expand: true,
    flatten: true,
    src: 'build/css/*.css',
    dest: 'build/css/prefixed/'
  }
}