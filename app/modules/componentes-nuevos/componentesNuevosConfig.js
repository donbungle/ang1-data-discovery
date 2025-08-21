(function() {
	'use strict';

	angular
		.module('componentesNuevos')
		.config(componentesNuevosConfig);

	componentesNuevosConfig.$inject = ['$stateProvider'];

	function componentesNuevosConfig($stateProvider) {
		$stateProvider
			.state('componentesNuevos', {
				url: '/componentes-nuevos',
				templateUrl: 'app/modules/componentes-nuevos/componentesNuevos.html',
				controller: 'ComponentesNuevosCtrl',
				controllerAs: 'vm'
			});
	}

})();