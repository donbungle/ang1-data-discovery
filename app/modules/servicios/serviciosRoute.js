'use strict';

/**
 * @ngdoc function
 * @name app.route:serviciosRoute
 * @description
 * # serviciosRoute
 * Route of the app
 */

angular.module('servicios')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
		.state('home.servicios', {
			url:'/servicios',
			templateUrl: 'app/modules/servicios/servicios.html',
			controller: 'ServiciosCtrl',
			controllerAs: 'vm'
		});
	
	}]);
