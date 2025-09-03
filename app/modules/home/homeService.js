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

	homeService.$inject = ['$http', '$q'];

	function homeService($http, $q) {
		var datos = [
			{
				firstName: "Cox",
				lastName: "Carney",
				company: "Enormo",
				employed: true,
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Lorraine",
				lastName: "Wise",
				company: "Comveyer",
				employed: false,
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Nancy",
				lastName: "Waters",
				company: "Fuelton",
				employed: false,
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Cox",
				lastName: "Carney",
				company: "Enormo",
				employed: true,
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Lorraine",
				lastName: "Wise",
				company: "Comveyer",
				employed: false,
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Nancy",
				lastName: "Waters",
				company: "Fuelton",
				employed: false,
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Cox",
				lastName: "Carney",
				company: "Enormo",
				employed: true,
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Lorraine",
				lastName: "Wise",
				company: "Comveyer",
				employed: false,
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Nancy",
				lastName: "Waters",
				company: "Fuelton",
				employed: false,
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Cox",
				lastName: "Carney",
				company: "Enormo",
				employed: true,
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Lorraine",
				lastName: "Wise",
				company: "Comveyer",
				employed: false,
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Nancy",
				lastName: "Waters",
				company: "Fuelton",
				employed: false,
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Cox",
				lastName: "Carney",
				company: "Enormo",
				employed: true,
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Lorraine",
				lastName: "Wise",
				company: "Comveyer",
				employed: false,
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Nancy",
				lastName: "Waters",
				company: "Fuelton",
				employed: false,
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Cox",
				lastName: "Carney",
				company: "Enormo",
				employed: true,
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Lorraine",
				lastName: "Wise",
				company: "Comveyer",
				employed: false,
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Nancy",
				lastName: "Waters",
				company: "Fuelton",
				employed: false,
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Cox",
				lastName: "Carney",
				company: "Enormo",
				employed: true,
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Lorraine",
				lastName: "Wise",
				company: "Comveyer",
				employed: false,
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Nancy",
				lastName: "Waters",
				company: "Fuelton",
				employed: false,
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Cox",
				lastName: "Carney",
				company: "Enormo",
				employed: true,
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Lorraine",
				lastName: "Wise",
				company: "Comveyer",
				employed: false,
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Nancy",
				lastName: "Waters",
				company: "Fuelton",
				employed: false,
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Cox",
				lastName: "Carney",
				company: "Enormo",
				employed: true,
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Lorraine",
				lastName: "Wise",
				company: "Comveyer",
				employed: false,
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Nancy",
				lastName: "Waters",
				company: "Fuelton",
				employed: false,
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			}
		];

		var filtros_menu = [
			{
				titulo: "GESTORA",
				icono: "list-round",
				collapsed: true,
				opciones: [
					{
						titulo: "Opcion 1",
						checked: false,
						value: ""
					},{
						titulo: "Opcion 2",
						checked: false,
						value: ""
					},{
						titulo: "Opcion 3",
						checked: false,
						value: ""
					},{
						titulo: "Opcion 4",
						checked: false,
						value: ""
					}
				]
			},
			{
				titulo: "ÁREA GEOGRÁFICA",
				icono: "list-round",
				collapsed: true,
				opciones: [
					{
						titulo: "Opcion 1",
						checked: false,
						value: ""
					}
				]
			},
			{
				titulo: "CATEGORÍA",
				icono: "list-round",
				collapsed: true,
				opciones: [
					{
						titulo: "Opcion 1",
						checked: false,
						value: ""
					}
				]
			},
			{
				titulo: "DIVISA",
				icono: "list-round",
				collapsed: true,
				opciones: [
					{
						titulo: "Opcion 1",
						checked: false,
						value: ""
					}
				]
			},
			{
				titulo: "RATING",
				icono: "list-round",
				collapsed: true,
				opciones: [
					{
						titulo: "Opcion 1",
						checked: false,
						value: ""
					}
				]
			},
			{
				titulo: "RENTABILIDAD",
				icono: "list-round",
				collapsed: true,
				opciones: [
					{
						titulo: "Opcion 1",
						checked: false,
						value: ""
					}
				]
			},
			{
				titulo: "RATIOS",
				icono: "list-round",
				collapsed: true,
				opciones: [
					{
						titulo: "Opcion 1",
						checked: false,
						value: ""
					}
				]
			},
			{
				titulo: "CARACTERÍSTICAS",
				icono: "list-round",
				collapsed: true,
				opciones: [
					{
						titulo: "Opcion 1",
						checked: false,
						value: ""
					}
				]
			}

		];

		var service = {
            get_data: get_data,
			get_filtros_menu: get_filtros_menu,
        };
        return service;

		function get_data(success = true) {
			var respuesta = {};
			var deferred = $q.defer();
			var data = datos;
			
			if (success) {
				respuesta = {
					'data': data,
					'status': 200,
					'mensaje': "✅ Task finished successfully!"
				};
				deferred.resolve(respuesta);
			} else {
				respuesta = {
					'data': [],
					'status': 500,
					'mensaje': "❌ Task failed!"
				};
				deferred.reject(respuesta);
			}

			return deferred.promise;
		}

		function get_filtros_menu() {
			var respuesta = {};
			var deferred = $q.defer();
			var data = filtros_menu;
			
			if (data.length > 0) {
				respuesta = {
					'data': data,
					'status': 200,
					'mensaje': "✅ Task finished successfully!"
				};
				deferred.resolve(respuesta);
			} else {
				respuesta = {
					'data': [],
					'status': 500,
					'mensaje': "❌ Task failed!"
				};
				deferred.reject(respuesta);
			}

			return deferred.promise;
		}

	}

})();
