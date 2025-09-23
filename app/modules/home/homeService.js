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
		var filtros_menu = [
			{
				titulo: "GESTORA",
				icono: "grid-plus-fill",
				color: '#965562',
				id_categoria: 1,
				collapsed: true,
				opciones: [
					{id: 1111, titulo: "AXA", checked: false, value: ""},
					{id: 1112, titulo: "BLACKROCK", checked: false, value: ""},
					{id: 1113, titulo: "BNP PARIBAS", checked: false, value: ""},
					{id: 1114, titulo: "CREDIT SUISSE", checked: false, value: ""},
					{id: 1115, titulo: "FRANKLIN TEMPLETON", checked: false, value: ""},
					{id: 1116, titulo: "GOLDMAN SACHS", checked: false, value: ""},
					{id: 1117, titulo: "HSBC", checked: false, value: ""},
					{id: 1118, titulo: "INVESCO", checked: false, value: ""},
					{id: 1119, titulo: "JP MORGAN", checked: false, value: ""},
					{id: 11110, titulo: "MFS", checked: false, value: ""},
					{id: 11111, titulo: "MORGAN STANLEY", checked: false, value: ""},
					{id: 11112, titulo: "MULTICONCEPT", checked: false, value: ""},
					{id: 11113, titulo: "NORDEA", checked: false, value: ""},
					{id: 11114, titulo: "OLD MUTUAL", checked: false, value: ""},
					{id: 11115, titulo: "PICTET", checked: false, value: ""},
					{id: 11116, titulo: "PIMCO", checked: false, value: ""},
					{id: 11117, titulo: "RENTA 4 GESTORA", checked: false, value: ""},
					{id: 11118, titulo: "RENTA 4 LUXEMBOURG", checked: false, value: ""},
					{id: 11119, titulo: "ROBECO", checked: false, value: ""},
					{id: 11120, titulo: "SCHRODER", checked: false, value: ""},
					{id: 11121, titulo: "SWISS GLOBAL", checked: false, value: ""},
					{id: 11122, titulo: "THREADNEEDLE", checked: false, value: ""},
					{id: 11123, titulo: "T. ROWE PRICE", checked: false, value: ""},
					{id: 11124, titulo: "UBS", checked: false, value: ""},
				]
			},
			{
				titulo: "ÁREA GEOGRÁFICA",
				icono: "grid-plus-fill",
				color: '#5c7ba0',
				id_categoria: 2,
				collapsed: true,
				opciones: [
					{id: 2221, titulo: "Africa/Oriente Medio", checked: false, value: ""},
					{id: 2222, titulo: "Asia ", checked: false, value: ""},
					{id: 2223, titulo: "BRIC", checked: false, value: ""},
					{id: 2224, titulo: "Europa", checked: false, value: ""},
					{id: 2225, titulo: "Europa del Este", checked: false, value: ""},
					{id: 2226, titulo: "Global", checked: false, value: ""},
					{id: 2227, titulo: "Global Emergentes", checked: false, value: ""},
					{id: 2228, titulo: "Latinoamérica", checked: false, value: ""},
					{id: 2229, titulo: "Norteamérica", checked: false, value: ""},
				]
			},
			{
				titulo: "CATEGORÍA",
				icono: "grid-plus-fill",
				color: '#CAA102',
				id_categoria: 3,
				collapsed: true,
				opciones: [
					{id: 3331, titulo: "Monetario", checked: false, value: ""},
					{id: 3332, titulo: "Renta Fija", checked: false, value: ""},
					{id: 3333, titulo: "Retorno Absoluto", checked: false, value: ""},
					{id: 3334, titulo: "Mixto", checked: false, value: ""},
					{id: 3335, titulo: "Renta Variable", checked: false, value: ""},
					{id: 3336, titulo: "Inversión Alternativa", checked: false, value: ""},
					{id: 3337, titulo: "Activos Digitales", checked: false, value: ""},
					{id: 3338, titulo: "Otros", checked: false, value: ""},
				]
			},
			{
				titulo: "CATEGORÍA Morningstar",
				icono: "grid-plus-fill",
				collapsed: true,
				color: 'rgba(216, 101, 101, 0.5)',
				id_categoria: 4,
				opciones: [
					{id: 4441, titulo: "Monetario", checked: false, value: ""},
					{id: 4442, titulo: "Renta Fija", checked: false, value: ""},
					{id: 4443, titulo: "Retorno Absoluto", checked: false, value: ""},
					{id: 4444, titulo: "Mixto", checked: false, value: ""},
					{id: 4445, titulo: "Renta Variable", checked: false, value: ""},
					{id: 4446, titulo: "Inversión Alternativa", checked: false, value: ""},
					{id: 4447, titulo: "Activos Digitales", checked: false, value: ""},
					{id: 4448, titulo: "Otros", checked: false, value: ""},
				]
			},
			{
				titulo: "DIVISA",
				icono: "grid-plus-fill",
				color: '#999999',
				id_categoria: 5,
				collapsed: true,
				opciones: [
					{id: 5551, titulo: "EUR", checked: false, value: ""},
					{id: 5552, titulo: "GBP", checked: false, value: ""},
					{id: 5553, titulo: "USD", checked: false, value: ""},
					{id: 5554, titulo: "AUD", checked: false, value: ""},
					{id: 5555, titulo: "CAD", checked: false, value: ""},
					{id: 5556, titulo: "CHF", checked: false, value: ""},
					{id: 5557, titulo: "DKK", checked: false, value: ""},
					{id: 5558, titulo: "HKD", checked: false, value: ""},
					{id: 5559, titulo: "JPY", checked: false, value: ""},
					{id: 55510, titulo: "NOK", checked: false, value: ""},
					{id: 55511, titulo: "SEK", checked: false, value: ""},
					{id: 55512, titulo: "SGD", checked: false, value: ""},
				]
			},
			{
				titulo: "RENTABILIDAD",
				icono: "grid-plus-fill",
				color: '#364a63',
				id_categoria: 6,
				collapsed: true,
				opciones: [
					{
						id: 9,
						titulo: "Opcion 1",
						checked: false,
						value: ""
					}
				]
			},
			{
				titulo: "RATIOS",
				icono: "grid-plus-fill",
				color: '#93dd8f',
				id_categoria: 7,
				collapsed: true,
				opciones: [
					{
						id: 10,
						titulo: "Opcion 1",
						checked: false,
						value: ""
					}
				]
			},
			{
				titulo: "CARACTERÍSTICAS",
				icono: "grid-plus-fill",
				color: 'rgba(109, 53, 75, 0.5)',
				id_categoria: 8,
				collapsed: true,
				opciones: [
					{
						id: 11,
						titulo: "Opcion 1",
						checked: false,
						value: ""
					}
				]
			}

		];

		var _getDataGrillaBasico = function () {
			return $http({
				url: '/app/assets/json/grilla_basico.json',
				method: "GET",
				params: { }
			});
		};

		var _getDataGrillaRentabilidad = function () {
			return $http({
				url: 'app/assets/json/grilla_rentabilidad.json',
				method: "GET",
				params: { }
			});
		};

		var _getDataGrillaRatios = function () {
			return $http({
				url: '/app/assets/json/grilla_ratios.json',
				method: "GET",
				params: { }
			});
		};

		var _getDataGrillaRanking = function () {
			return $http({
				url: '/app/assets/json/grilla_ranking.json',
				method: "GET",
				params: { }
			});
		};

		var _getDataGrillaGeneral = function () {
			return $http({
				url: '/app/assets/json/grilla_general.json',
				method: "GET",
				params: { }
			});
		};

		function _getData(id_grilla=""){
			var fn;
			switch (id_grilla) {
				case "basico":
					fn = _getDataGrillaBasico();
					break;
				case "rentabilidad":
					fn = _getDataGrillaRentabilidad();
					break;
				case "ratios":
					fn = _getDataGrillaRatios();
					break;
				case "ranking":
					fn = _getDataGrillaRanking();
					break;
				case "general":
					fn = _getDataGrillaGeneral();
					break;
				default:
					break;
			}
			return fn;
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

		var service = {
			get_filtros_menu: get_filtros_menu,
			getData: _getData,
        };
        return service;

	}

})();
