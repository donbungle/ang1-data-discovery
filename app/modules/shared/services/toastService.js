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
		.factory('ToastService', ToastService);
	
		ToastService.$inject = [
			'$mdToast',
			'$rootScope',
			'EVENTS',
			'HelperService'
		];
		
		function ToastService(
			$mdToast,
			$rootScope, 
			EVENTS,
			HelperService
		) {
			HelperService.log('---ToastService');
			var API_URL = $rootScope.app.apiUrl;
            var service = {
				showToast: showToast,
			};
			return service;

            function showToast(texto) {
				HelperService.log('showToast');
				$mdToast.show({
					template:
						'<md-toast>' +
							'<div class="md-toast-content"  md-colors="{backgroundColor: \'accent-800\'}">' +
								texto + 
							'</div>' +
						'</md-toast>',
					hideDelay: 1800,
					position: 'bottom right',
					bindToController: false,
					controllerAs: 'vm',
					locals: {
						message: texto
					}
				});
			}        
	
		}
})();


/*
var pinTo = "bottom right";
$mdToast.show(
	$mdToast.simple()
	.textContent(texto)
	.position(pinTo)
	.hideDelay(3000))
.then(function() {
	$log.log('Toast dismissed.');
}).catch(function() {
	$log.log('Toast failed or was forced to close early by another toast.');
});
*/