(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:homeService
	* @description
	* # homeService
	* Service of the app
	*/

	angular.module('r4-ang1')
		.factory('homeService', homeService);

	homeService.$inject = ['$http'];

	function homeService($http) {

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
				link: 'dashboard',
				name: 'Inicio',
				icon: 'home'
			},
			{
				link: 'atlas',
				name: 'Fuentes de datos',
				icon: 'cloud_upload'
			},
			{
				link: 'agenda',
				name: 'Gráficos',
				icon: 'assessment'
			},			    
		  ];

		return {
			getMenu: getMenu
		};

		function getMenu() {
			return menu;
		}

	}

})();
