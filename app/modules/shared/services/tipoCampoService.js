(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:colorService
	 * @description
	 * # servicioService
	 * Service of the app
	 */

		angular
		.module('componentes')
		.factory('TipoCampoService', TipoCampoService);
	
		TipoCampoService.$inject = [
			'$http',
			'$rootScope',
			'EVENTS',
			'ERRORS'
		];
		
		function TipoCampoService(
			$http,
			$rootScope, 
			EVENTS,
			ERRORS
		) {
			console.log('---TipoCampoService');
			var API_URL = $rootScope.app.apiUrl;
            var service = {
				getTiposCampo: getTiposCampo,
			};
			return service;

            function getTiposCampo() {
				console.log('getTiposCampo');
				return $http({
					url: API_URL + '/dbuilder/tipos-dato/',   
					method: "GET",
				});
			}        
	
		}
})();
