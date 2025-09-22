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
			dist: ['dist'],
			libs: ['app/assets/libs', ],
			src: ['src'],
			bower: ['src', 'lodash', 'bootstrap'],
			node: ['node_modules', 'app/assets/js/*'],
			dev: ['app/assets/libs', 'node_modules', 'bower_components', 'lodash', 'bootstrap', 'src', 'app/assets/js/*']
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

		mochaTest: {
			test: {
				options: {
					reporter: 'spec',
					require: function() {
						require('./test/setup.js');
					},
					clearRequireCache: true,
					clearCacheFilter: (key) => key.indexOf('node_modules') === -1
				},
				src: ['app/modules/**/*-test.js']
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

					'app/modules/componentes/*Module.js',
					'app/modules/componentes/*Route.js',
					'app/modules/componentes/*Ctrl.js',
					'app/modules/componentes/*Service.js',

					'app/modules/home/*Module.js',
					'app/modules/home/*Route.js',
					'app/modules/home/*Ctrl.js',
					'app/modules/home/*Service.js',

					'app/modules/componentes-nuevos/*Module.js',
					'app/modules/componentes-nuevos/*Config.js',
					'app/modules/componentes-nuevos/*Ctrl.js',
					'app/modules/componentes-nuevos/*Service.js',

					'app/modules/dashboard-dataset/*Module.js',
					'app/modules/dashboard-dataset/*Config.js',
					'app/modules/dashboard-dataset/*Ctrl.js',
					'app/modules/dashboard-dataset/*Service.js',

					'app/modules/contacts/contactsModule.js',
					'app/modules/contacts/contactsRoute.js',
					'app/modules/contacts/contactsCtrl.js',
					'app/modules/contacts/contactsService.js',
					'app/modules/contacts/breadcrumbService.js',

					'app/modules/servicios/*Module.js',
					'app/modules/servicios/*Route.js',
					'app/modules/servicios/*Ctrl.js',
					'app/modules/servicios/*Service.js',

					'app/modules/calendario/*Module.js',
					'app/modules/calendario/*Route.js',
					'app/modules/calendario/*Ctrl.js',
					'app/modules/calendario/*Service.js',

					'app/modules/modal/*Module.js',
					'app/modules/modal/*Route.js',
					'app/modules/modal/*Ctrl.js',
					'app/modules/modal/*Service.js',

					'app/modules/shared/services/*.js',
					'app/modules/shared/modelos/*.js',

					'app/modules/shared/front/**/*.js',
					'app/modules/shared/front/**/**/*.js'
					
						
							
				],
				dest: 'app/assets/js/<%= pkg.name %>-appbundle.js'
			},
			build: {
				src: [
					'app/assets/libs/moment/*.js',
					'app/assets/libs/json3/*.js',
					'app/assets/libs/es5-shim/*.js',
					//'app/assets/libs/lodash/lodash.js',
					'src/bower_components/lodash/lodash.js',
					'app/assets/libs/jquery/jquery.js',
					'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
					'node_modules/d3/dist/d3.min.js',
					'node_modules/crossfilter2/crossfilter.min.js',
					'node_modules/dc/dist/dc.min.js',
					'node_modules/echarts/dist/echarts.min.js',
					// Angular Project Dependencies,
					'app/assets/libs/angular/angular.js',
					'app/assets/libs/angular-resource/angular-resource.js',
					//'app/assets/libs/angular-material*/*.js',
					'app/assets/libs/angular-cookies/*.js',
					'app/assets/libs/angular-sanitize/*.js',
					'app/assets/libs/angular-ui-router/*.js',
					'app/assets/libs/angular-ui-grid/ui-grid.js',
					'app/assets/libs/angular-aria/*.js',
					'app/assets/libs/angular-animate/*.js',
					'app/assets/libs/angular-file-upload/*.js',
					'app/assets/libs/angular-xeditable/xeditable.js',
					'app/assets/libs/angular-fullcalendar/angular-fullcalendar.js',
					'app/assets/libs/angular-tooltips/angular-tooltips.min.js',
					'app/assets/libs/angular-ui-calendar/calendar.js',
					'app/assets/libs/angularjs-dragula/angularjs-dragula.js',
					'app/assets/libs/ng-dialog/ngDialog.js',
					'app/assets/libs/angular-bootstrap/ui-bootstrap-tpls.js',
					'node_modules/tabulator-tables/dist/js/tabulator.min.js',
					'node_modules/luxon/build/global/luxon.min.js',
					'node_modules/jquery-sparkline/jquery.sparkline.min.js',
					'node_modules/numeral/min/numeral.min.js',
					'node_modules/numeral/min/locales/es-es.min.js'
					
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
				src: [
					'src/bower_components/bootstrap/dist/css/bootstrap.min.css',
					'src/bower_components/dc/dist/style/dc.min.css',
					'node_modules/tabulator-tables/dist/css/tabulator_bootstrap5.min.css',
					'app/assets/css/**/*.css',
					'app/modules/shared/directives/**/assets/css/*.css'
				],
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
						[ ]
						.concat(
						[
						'app/assets/libs/moment/*.js',
						'app/assets/libs/json3/*.js',
						'app/assets/libs/es5-shim/*.js',
						//'app/assets/libs/lodash/lodash.js',
						'src/bower_components/lodash/lodash.js',
						'app/assets/libs/jquery/jquery.js',
						'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
						'node_modules/d3/dist/d3.min.js',
						'node_modules/crossfilter2/crossfilter.min.js',
						'node_modules/dc/dist/dc.min.js',
						'node_modules/echarts/dist/echarts.min.js',
						// Angular Project Dependencies,
						'app/assets/libs/angular/angular.js',
						'app/assets/libs/angular-resource/angular-resource.js',
						//'app/assets/libs/angular-material*/*.js',
						'app/assets/libs/angular-cookies/*.js',
						'app/assets/libs/angular-sanitize/*.js',
						'app/assets/libs/angular-ui-router/*.js',	
						'app/assets/libs/angular-aria/*.js',	
						'app/assets/libs/angular-ui-grid/ui-grid.js',
						'app/assets/libs/angular-animate/*.js',
						'app/assets/libs/angular-file-upload/*.js',

						'app/assets/libs/angular-xeditable/xeditable.js',
						'app/assets/libs/angular-fullcalendar/angular-fullcalendar.js',
						'app/assets/libs/angular-tooltips/angular-tooltips.min.js',
						'app/assets/libs/angular-ui-calendar/calendar.js',
						'app/assets/libs/angularjs-dragula/angularjs-dragula.js',
						'app/assets/libs/ng-dialog/ngDialog.js',
						'app/assets/libs/angular-bootstrap/ui-bootstrap-tpls.js',
						'node_modules/tabulator-tables/dist/js/tabulator.min.js',
						'node_modules/luxon/build/global/luxon.min.js',
						'node_modules/jquery-sparkline/jquery.sparkline.min.js',
						'node_modules/numeral/min/numeral.min.js',
						'node_modules/numeral/min/locales/es-es.min.js',

						
						'app/app.js',
						'app/app.Ctrl.js',
						'app/app.animations.js',
						'app/app.constants.js',
						'app/filter.js',
						'app/app.config.js',

						'app/modules/layouts/**/*.js',

						'app/modules/componentes/*Module.js',
						'app/modules/componentes/*Route.js',
						'app/modules/componentes/*Ctrl.js',
						'app/modules/componentes/*Service.js',

						'app/modules/home/*Module.js',
						'app/modules/home/*Route.js',
						'app/modules/home/*Ctrl.js',
						'app/modules/home/*Service.js',

						'app/modules/componentes-nuevos/*Module.js',
						'app/modules/componentes-nuevos/*Config.js',
						'app/modules/componentes-nuevos/*Ctrl.js',
						'app/modules/componentes-nuevos/*Service.js',

						'app/modules/dashboard-dataset/*Module.js',
						'app/modules/dashboard-dataset/*Config.js',
						'app/modules/dashboard-dataset/*Ctrl.js',
						'app/modules/dashboard-dataset/*Service.js',

						'app/modules/contacts/contactsModule.js',
						'app/modules/contacts/contactsRoute.js',
						'app/modules/contacts/contactsCtrl.js',
						'app/modules/contacts/contactsService.js',
						'app/modules/contacts/breadcrumbService.js',

						'app/modules/servicios/*Module.js',
						'app/modules/servicios/*Route.js',
						'app/modules/servicios/*Ctrl.js',
						'app/modules/servicios/*Service.js',

						'app/modules/calendario/*Module.js',
						'app/modules/calendario/*Route.js',
						'app/modules/calendario/*Ctrl.js',
						'app/modules/calendario/*Service.js',

						'app/modules/modal/*Module.js',
						'app/modules/modal/*Route.js',
						'app/modules/modal/*Ctrl.js',
						'app/modules/modal/*Service.js',

						'app/modules/shared/services/*.js',
						'app/modules/shared/modelos/*.js',

						'app/modules/shared/front/**/*.js',
						'app/modules/shared/front/**/**/*.js',
						
						

						//CSS
						'src/bower_components/bootstrap/dist/css/bootstrap.min.css',
						'src/bower_components/dc/dist/style/dc.min.css',
						'node_modules/tabulator-tables/dist/css/tabulator_bootstrap5.min.css',
						'app/assets/css/**/*.css',
						'app/modules/shared/directives/**/assets/css/*.css'
					]
					)
				}
			},
			production: {
				files: {
					'dist/index.html': [
						'dist/assets/r4-ang1-plugins.min.js',
						'dist/assets/r4-ang1-angscript.min.js',
						'dist/assets/r4-ang1-templates.min.js',
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
	grunt.loadNpmTasks('grunt-mocha-test');

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
		"clean:dist"
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
		"concat:build",
		"ngtemplates",
		"uglify",
		"cssmin",
		"copy",
		"injector:production",
		//"clean:dist"
	]);

	grunt.registerTask('test', ['karma']);
	grunt.registerTask('test:mocha', ['mochaTest']);
	grunt.registerTask('test:all', ['karma', 'mochaTest']);
	grunt.registerTask('limpiar.dist', ['clean:dist']);
	grunt.registerTask('limpiar.libs', ['clean:libs']);
	grunt.registerTask('limpiar.bower', ['clean:bower']);
	grunt.registerTask('limpiar.node', ['clean:node']);
	grunt.registerTask('limpiar.dev', ['clean:dev']);
};
