(function () {
	'use strict';
	angular
		.module('r4-ang1')
		.controller('HomeCtrl', Home);

	Home.$inject = [
		'homeService',
		'$rootScope',
		'$scope',
		'$controller',
	];

	function Home(
		homeService, 
		$rootScope, 
		$scope, 
		$controller,
	) {
		var vm = this;
		angular.extend(vm, $controller('AppCtrl', {$scope: $scope}));
		vm.$onInit = onInit;
		vm.app_name = $rootScope.app.name;
		vm.app_icon = $rootScope.app.icon;
		vm.title = "Hello, " + vm.app_name + "!";
		vm.version = "1.0.0";
		vm.menu = homeService.getMenu();

        console.log('vm.uploader', vm.uploader);

		vm.filtros_aplicados = [];


		vm.filtros_menu = [
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


		function onInit(){
			console.log('Home onInit', vm);
			console.log('Home $scope', $scope);
		}

		vm.openModal = function() {
			var modalEl = document.getElementById('exampleModal');
			var modal = new bootstrap.Modal(modalEl);
			modal.show();
		};

		// Get all checked options from a specific filtro
		vm.getCheckedOptions = function(filtroIndex) {
		return vm.filtros_menu[filtroIndex].opciones.filter(function(opcion) {
			return opcion.checked;
		});
		};

		// Get all checked options from all filtros
		vm.getAllCheckedOptions = function() {
		var result = [];
		vm.filtros_menu.forEach(function(filtro) {
			filtro.opciones.forEach(function(opcion) {
			if (opcion.checked) {
				result.push({
				filtro: filtro.titulo,
				opcion: opcion.titulo,
				value: opcion.value
				});
			}
			});
		});
		return result;
		};

		// Reset all checkboxes
		vm.resetAll = function() {
		vm.filtros_menu.forEach(function(filtro) {
			filtro.opciones.forEach(function(opcion) {
			opcion.checked = false;
			});
		});
		};
		

		$scope.$watch('vm.filtros_menu', function(newVal, oldVal) {
			console.log('Collection changed:');
			console.log('From:', oldVal);
			console.log('To:', newVal);
			vm.filtros_aplicados = [];
			angular.forEach(newVal, function(value, key) {
				delete dst[key];
			});

			

			vm.filtros_aplicados = [
				{
					'label': 'Texto 1',
					'id': 111,
					'valor': 'LOL'
				},{
					'label': 'Texto 2',
					'id': 22,
					'valor': 'LOL'
				},{
					'label': 'Texto 3',
					'id': 333,
					'valor': 'LOL'
				},{
					'label': 'Texto 4',
					'id': 44,
					'valor': 'LOL'
				}
			];
		}, true);
	}

})();
