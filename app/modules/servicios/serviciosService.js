(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:serviciosService
	 * @description
	 * # serviciosService
	 * Service of the app
	 */

  	angular
		.module('servicios')
		.factory('ServiciosService', Servicios);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Servicios.$inject = ['$http'];

		function Servicios ($http) {

		}

})();
