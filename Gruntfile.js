module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      browser: {
        options: {
          alias: ['<%= pkg.main %>:<%= pkg.name %>'],
          // browserifyOptions: {
          //   standalone: 'KevoreeLibrary'
          // }
        },
        src: ['<%= pkg.main %>'],
        dest: 'browser/<%= pkg.name %>.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['browserify']);
};
