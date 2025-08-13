'use strict';

/**
 * @ngdoc function
 * @name app.route:componentesRoute
 * @description
 * # componentesRoute
 * Route of the app
 */

angular.module('componentes')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.componentes', {
				url:'/componentes',
				templateUrl: 'app/modules/componentes/componentes.html',
				controller: 'ComponentesCtrl',
				controllerAs: 'vm'
			});
		
	}]);
