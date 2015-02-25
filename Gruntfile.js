module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		browserify: {
			standalone: {
                options: {
                    browserifyOptions: {
                        standalone: 'KevoreeModel'
                    }
                },
				src: ['<%= pkg.main %>'],
				dest: 'browser/<%= pkg.name %>.js'
			},
            require: {
                options: {
                    alias: [ '<%= pkg.main %>:<%= pkg.name %>' ]
                },
                src: [],
                dest: 'browser/<%= pkg.name %>.require.js'
            }
		}
	});

	grunt.loadNpmTasks('grunt-browserify');

	grunt.registerTask('browser', ['browserify']);
};