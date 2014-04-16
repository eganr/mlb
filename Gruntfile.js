'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
	jshint: {
	  options: {
		jshintrc: '.jshintrc'
	  },
	  all: [
		'Gruntfile.js',
		'core/**.js',
		'views/**.js',
		'models/**.js',
	  ]
	},
	less: {
	  dist: {
		files: {
		  'assets/css/main.min.css': [
			'assets/less/app.less'
		  ]
		},
		options: {
		  compress: false
		}
	  }
	},
	watch: {
	  less: {
		files: [
		  'assets/less/**/*.less'
		],
		tasks: ['less']
	  },
	  js: {
		files: [
		  '<%= jshint.all %>'
		],
		tasks: ['jshint']
	  },
	},
	clean: {
	  dist: [
		'assets/css/main.min.css'
	  ]
	},
	connect: {
		server: {
			options: {
				hostname: 'localhost',
				port: '4000'
			}
		}
	}
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Register tasks
  grunt.registerTask('default', [
	'clean',
	'less',
  ]);

  grunt.registerTask('dev', [
	'connect',
	'watch'
  ]);

};