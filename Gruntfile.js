module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		browserify: {
			main: {
                options: {
                    browserifyOptions: {
                        standalone: 'KevoreeModel'
                    }
                },
				src: ['<%= pkg.main %>'],
				dest: 'browser/<%= pkg.name %>.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-browserify');

	grunt.registerTask('browser', ['browserify']);
};