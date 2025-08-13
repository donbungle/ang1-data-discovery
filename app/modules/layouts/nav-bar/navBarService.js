(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:menuService
	 * @description
	 * # menuService
	 * Service of the app
	 */

  	angular
		.module('r4-ang1')
		.factory('MenuService', Menu);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Menu.$inject = ['$http'];

		function Menu ($http) {

			var menu = [
				
					{
						link: 'componentes',
						name: 'Componentes'
					},
			    
					{
						link: 'builder',
						name: 'Atlas'
					},
			    
		  	];

			return {
				listMenu: function () {
					return menu;
				}
		  	}

		}

})();
