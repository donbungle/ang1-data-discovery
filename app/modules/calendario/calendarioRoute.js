'use strict';

/**
 * @ngdoc function
 * @name app.route:calendarioRoute
 * @description
 * # calendarioRoute
 * Route of the app
 */

angular.module('calendario')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('calendario', {
				url:'/calendario',
				templateUrl: 'app/modules/calendario/calendario.html?' + _.random(1,345678),
				controller: 'CalendarioCtrl',
				controllerAs: 'vm'
			});
		
	}]);
