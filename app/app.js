(function() {
	'use strict';
	
	
	/**
	* @ngdoc index
	* @name app
	* @description
	* # app
	*
	* Main module of the application.
	*/

	angular.module('r4-ang1', [
		//'ui.bootstrap',
		'ngResource',
		'ngAria',
		'ngCookies',
		'ngAnimate',
		'ngSanitize',
		'ui.router',

		'home',
		'componentes',
		'componentesNuevos',
		'dashboardDataset',
		'contacts', 
		'calendario'
	]);

})();
