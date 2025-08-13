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
		.factory('HelperService', HelperService);
	
		HelperService.$inject = [
			'$rootScope',
			'$q',
		];
		
		function HelperService(
			$rootScope, 
			$q,
		) {
			log('---HelperService');
			var API_URL = $rootScope.app.apiUrl;
            var service = {
				getRandomElement: getRandomElement,
				validarFormulario: validarFormulario,
				log: log,
			};
			return service;

            function getRandomElement(arr) {
				//console.log('getRandom arr', arr);
				if (arr && arr.length) {
					const randomIndex = Math.floor(Math.random() * arr.length);
					return arr[randomIndex];
				}
				return null;
			}     
			
			function validarFormulario(formulario) {
				var defer = $q.defer();
				log('validarFormulario formulario', formulario);
				if (formulario != undefined || formulario != null || formulario != '') {
					defer.resolve({'msg': 'Válido', 'response': true});
				}else{
					defer.reject({'msg': 'No Válido', 'response': false});
				}
				return defer.promise;
			}     

			function log(text, obj=undefined){
				//console.log(text, obj);
			}	
		}
})();
