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
		'$timeout',
	];

	function Home(
		homeService, 
		$rootScope, 
		$scope, 
		$controller,
		$timeout,
	) {
		var vm = this;
		angular.extend(vm, $controller('AppCtrl', {$scope: $scope}));
		vm.$onInit = onInit;
		vm.app_name = $rootScope.app.name;
		vm.app_icon = $rootScope.app.icon;
		vm.title = "Hello, " + vm.app_name + "!";
		vm.version = "1.0.0";
		vm.table_rentabilidad_data = [];
		vm.filtros_aplicados = [];
		vm.opciones_grilla = homeService.get_opt_grilla();
		
		function onInit(){
			console.log('Home onInit', vm);
			console.log('Home $scope', $scope);

			homeService.get_filtros_menu().then(function(response){
				console.log('get_filtros_menu response', response);
				vm.filtros_menu = response.data;
			}, function(error){
				console.log('error', error);
			});
			
			homeService.get_data().then(function(response){
				console.log('get_data response', response);
				vm.table_rentabilidad_data = response.data;
			}, function(error){
			
			});

			homeService.get_data().then(function(response){
				console.log('get_data response', response);
				vm.table_ratios_data = response.data;
			}, function(error){
			
			});
			
			/*$timeout(function() {
				vm.table_basico = new Tabulator("#grid-basico", homeService.get_opt_grilla());
				vm.table_rentabilidad = new Tabulator("#grid-rentabilidad", homeService.get_opt_grilla());
				vm.table_ratios = new Tabulator("#grid-ratios", homeService.get_opt_grilla());
				vm.table_ranking = new Tabulator("#grid-ranking", homeService.get_opt_grilla());
				vm.table_general = new Tabulator("#grid-general", homeService.get_opt_grilla());
			}, 10000).then(function(){
				homeService.get_data().then(function(response){vm.table_basico.setData(response.data);}, function(error){});
				homeService.get_data().then(function(response){vm.table_rentabilidad.setData(response.data);}, function(error){});
				homeService.get_data().then(function(response){vm.table_ratios.setData(response.data);}, function(error){});
				homeService.get_data().then(function(response){vm.table_ranking.setData(response.data);}, function(error){});
				homeService.get_data().then(function(response){vm.table_general.setData(response.data);}, function(error){});
				
			});*/

			
			
			
			
		}

		






		//MODAL INFO FONDO
		vm.openModal = function() {
			var modalEl = document.getElementById('exampleModal');
			var modal = new bootstrap.Modal(modalEl);
			modal.show();
		};
		//FIN MODAL INFO FONDO


		// FILTROS
		
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
				//delete dst[key];
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

		// FIN FILTROS
	}

})();
