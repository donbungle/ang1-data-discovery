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
				
				/*{
					link: 'indicadores',
					name: 'Indicadores',
					icon: 'timer_off'
				},
				{
					link: 'componentes',
					name: 'Componentes',
					icon: 'now_widgets'
				},
				{
					link: 'ktlog',
					name: 'Panel Contenido',
					icon: 'aspect_ratio'
				},*/
				{
					link: 'builder',
					name: 'Form Builder',
					icon: 'developer_dashboard'
				},
				{
					link: 'agenda',
					name: 'Agenda',
					icon: 'view_module'
				},			    
		  	];

			return {
				listMenu: function () {
					return menu;
				}
		  	};

		}

})();
