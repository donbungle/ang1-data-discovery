// Grunt tasks

module.exports = function (grunt) {
	"use strict";

	// Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		banner: '/*!\n' +
		'* <%= pkg.name %> - v<%= pkg.version %> - MISH LICENSE <%= grunt.template.today("yyyy-mm-dd") %>. \n' +
		'* @author <%= pkg.author %>\n' +
		'*/\n',

		clean: {
			dist: ['dist', 'node_modules', 'bower_components', 'lodash']
		},	

		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			gruntfile: {
				src: 'Gruntfile.js'
			},
			app: {
				src: ['app/modules/**/*.js']
			}
		},

		karma: {
			unit: {
			  configFile: 'karma.conf.js',
			  unit: {
				options: {
				  files: ['app/modules/**/*-test.js']
				}
			  }
			}
		},

		exec: {
			//bowerInstaller: 'bower install --allow-root --config.interactive=false'//'bower-installer'
			bowerInstaller: 'bower-installer'
		},

		concat: {
			options: {
				banner: '<%= banner %>',
				stripBanners: false
			},
			base: {
				src: [
					// Angular Project Dependencies,
					'app/app.js',
						'app/app.Ctrl.js',
						'app/app.animations.js',
						'app/app.constants.js',
						'app/filter.js',
						'app/app.config.js',

						'app/modules/layouts/**/*.js',

						'app/modules/home/*Module.js',
						'app/modules/home/*Route.js',
						'app/modules/home/*Ctrl.js',
						'app/modules/home/*Service.js',

						'app/modules/servicios/*Module.js',
						'app/modules/servicios/*Route.js',
						'app/modules/servicios/*Ctrl.js',
						'app/modules/servicios/*Service.js',

						'app/modules/shared/models/*.js',
						'app/modules/shared/services/*.js',
					
						
							
				],
				dest: 'app/assets/js/<%= pkg.name %>-appbundle.js'
			},
			build: {
				src: [
					'app/assets/libs/chart.js/*.js',
					'app/assets/libs/moment/*.js',
					'app/assets/libs/json3/*.js',
					'app/assets/libs/es5-shim/*.js',
					//'app/assets/libs/lodash/lodash.js',
					'bower_components/lodash/lodash.js',
					'app/assets/libs/jquery/jquery.js',
					// Angular Project Dependencies,
					'app/assets/libs/angular/angular.js',
					'app/assets/libs/angular-resource/angular-resource.js',
					//'app/assets/libs/angular-material*/*.js',
					'app/assets/libs/angular-cookies/*.js',
					'app/assets/libs/angular-sanitize/*.js',
					'app/assets/libs/angular-ui-router/*.js',					
					'app/assets/libs/ng-token-auth/*.js',
					'app/assets/libs/angular-ui-grid/ui-grid.js',
					'app/assets/libs/angular-*/*.js'

				],
				dest: 'app/assets/js/<%= pkg.name %>-angularbundle.js'
			},
		},

		uglify: {
			options: {
				banner: '<%= banner %>',
				report: 'min'
			},
			base: {
				src: ['<%= concat.base.dest %>'],
				//dest: 'app/assets/js/<%= pkg.name %>-angscript.min.js'
				dest: 'dist/assets/<%= pkg.name %>-angscript.min.js'
			},
			basePlugin: {
				src: [ '<%= concat.build.dest %>' ],
				//dest: 'app/assets/js/<%= pkg.name %>-plugins.min.js'
				dest: 'dist/assets/<%= pkg.name %>-plugins.min.js'
			},
			templates: {
				src: [ 'app/assets/js/templates.js' ],
				//dest: 'app/assets/js/<%= pkg.name %>-templates.min.js'
				dest: 'dist/assets/<%= pkg.name %>-templates.min.js'
			}
		},

		cssmin: {
			css: {
				src: 'app/assets/css/**/*.css',
				dest: 'dist/assets/<%= pkg.name %>-style.min.css'
			}
		},

		connect: {
			server: {
				options: {
					keepalive: true,
					port: 8888,
					base: '.',
					hostname: 'localhost',
					debug: false,
					livereload: true,
					open: true
				}
			}
		},
		concurrent: {
			tasks: ['connect', 'watch'],
			options: {
				logConcurrentOutput: true
			}
		},

		watch: {
			karma: {
				files: ['app/modules/**/*-test.js'],
				tasks: ['karma:unit:run'] //NOTE the :run flag
			},
			app: {
				files: '<%= jshint.app.src %>',
				tasks: ['jshint:app'],
				options: {
					livereload: true
				}
			}
		},

		injector: {
			options: {
				relative: true
			},
			dev: {
				files: {
					'index.html': 
						[ '<%= concat.build.dest %>' ]
						.concat(
						[
						//LIBS
						//'app/assets/libs/**/*.js',

						//APP
						//'app/app.js',
						//'app/app.config.js',
						//'app/app.animations.js',
						//'app/app.constants.js',
						//'app/filter.js',
						//'app/**/*Module.js',
						//'app/**/*Route.js',
						//'app/**/*Ctrl.js',
						//'app/**/*Service.js',
						//'app/**/*Store.js',
						//'app/**/*Directive.js',
						//'app/modules/shared/models/*.js',

						'app/assets/libs/chart.js/*.js',
						'app/assets/libs/moment/*.js',
						'app/assets/libs/json3/*.js',
						'app/assets/libs/es5-shim/*.js',
						//'app/assets/libs/lodash/lodash.js',
						'bower_components/lodash/lodash.js',
						'app/assets/libs/jquery/jquery.js',
						// Angular Project Dependencies,
						'app/assets/libs/angular/angular.js',
						'app/assets/libs/angular-resource/angular-resource.js',
						//'app/assets/libs/angular-material*/*.js',
						'app/assets/libs/angular-cookies/*.js',
						'app/assets/libs/angular-sanitize/*.js',
						'app/assets/libs/angular-ui-router/*.js',					
						'app/assets/libs/ng-token-auth/*.js',
						'app/assets/libs/angular-ui-grid/ui-grid.js',
						'app/assets/libs/angular-*/*.js',

						
						'app/app.js',
						'app/app.Ctrl.js',
						'app/app.animations.js',
						'app/app.constants.js',
						'app/filter.js',
						'app/app.config.js',

						'app/modules/layouts/**/*.js',

						'app/modules/home/*Module.js',
						'app/modules/home/*Route.js',
						'app/modules/home/*Ctrl.js',
						'app/modules/home/*Service.js',
						
						

						//CSS
						'app/assets/css/**/*.css',
						'app/modules/shared/directives/**/assets/css/*.css'
					]
					)
				}
			},
			production: {
				files: {
					'dist/index.html': [
						'dist/assets/r4-ang1-templates.min.js',
						'dist/assets/r4-ang1-plugins.min.js',
						'dist/assets/r4-ang1-angscript.min.js',
						'dist/assets/r4-ang1-style.min.css',
						//'app/assets/css/**/*.min.css',
						//'<%= uglify.basePlugin.dest %>',
						//'<%= uglify.base.dest %>',						
						//'<%= uglify.templates.dest %>',
						//'app/assets/js/templates.js',
						//'app/assets/js/*.js'
					]

				}
			}
		},

		ngtemplates: {
			app: {
				src: 'app/modules/**/*.html',
				dest: 'app/assets/js/templates.js',
				options: {
					module: '<%= pkg.name %>',
					root: 'app/',
					standAlone: false
				}
			}
		},

		copy: {
			main: {
				expand: true,
				src: './index.html',
				dest: './dist/',
			},
		},

	});

	require('time-grunt')(grunt); 
	require('load-grunt-tasks')(grunt);

	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Making grunt default to force in order not to break the project if something fail.
	grunt.option('force', true);

	// Register grunt tasks
	grunt.registerTask("build", [
		"jshint",		
		"exec",
		"karma",
		"concat",
		"ngtemplates",
		"injector:production",
		"concurrent",
		"clean"
	]);

	// Development task(s).
	grunt.registerTask('dev', [
		// "exec",
		'injector:dev', 
		//'concurrent'
	]);

	grunt.registerTask("docker", [
		//"jshint",		
		"exec",
		//"karma",
		"concat",
		"ngtemplates",
		"uglify",
		"cssmin",
		"copy",
		"injector:production",
		//"concurrent"
	]);

	grunt.registerTask('test', ['karma']);
	grunt.registerTask('limpiar', ['clean']);
};
