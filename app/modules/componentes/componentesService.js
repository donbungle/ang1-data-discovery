(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:componentesService
	 * @description
	 * # componentesService
	 * Service of the app
	 */

  	angular
		.module('componentes')
		.factory('ComponentesService', Componentes);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Componentes.$inject = ['$http'];

		function Componentes ($http) {

		}

})();
