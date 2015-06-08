module.exports = {
  options: {
    livereload: true,
  },
  scripts: {
    files: ['doc_assets/*.js'],
    tasks: ['hologram'],
    options: {
      spawn: false,
    }
  },
  scss: {
    files: ['assets/scss/*.scss', 'assets/scss/**/*.scss'],
    tasks: ['sass', 'hologram'],
    options: {
      spawn: false,
    }
  },
  css: {
    files: ['doc_assets/*.css'],
    tasks: ['hologram'],
    options: {
      spawn: false,
    }
  },
  // images: {
  //   files: ['images/**/*.{png,jpg,gif}', 'images/*.{png,jpg,gif}'],
  //   tasks: ['imagemin'],
  //   options: {
  //     spawn: false,
  //   }
  // },
  html:{
    files: ['doc_assets/*.html'],
    tasks: ['hologram'],
    options: {
      spawn: false
    }
  },
  livereload: {
      // Here we watch the files the sass task will compile to
      // These files are sent to the live reload server after sass compiles to them
      options: { livereload: true },
      files: ['brand-guide/**/*'],
  }
}

// Use "Ctrl + C" to quit the watch process in the command prompt window.