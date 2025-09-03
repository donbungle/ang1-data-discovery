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
		vm.myData = [];
		vm.filtros_aplicados = [];
		
		//vm.filtros_menu = homeService.get_filtros_menu();

		/*
		borrowing structure

		*/


		function onInit(){
			console.log('Home onInit', vm);
			console.log('Home $scope', $scope);

			homeService.get_filtros_menu().then(function(response){
				console.log('get_filtros_menu response', response);
				vm.filtros_menu = response.data;
			}, function(error){
				console.log('error', error);
			});
			
			console.log('luxon', luxon);
			$timeout(function() {
				vm.table = new Tabulator("#grid-rentabilidad", {
					height:"500px",
					layout:"fitColumns",
					//ajaxURL:"/exampledata/ajaxprogressive",
					progressiveLoad:"scroll",
					paginationSize:20,
					placeholder:"No Data Set",
					dependencies:{
						DateTime:luxon.DateTime,
					},
					columns:[
						{title:"Nombre", field:"firstName", sorter:"string", width:200},
						{title:"Apellido", field:"lastName", sorter:"string", width:200},
						{title:"Gender", field:"gender", sorter:"string"},
						{title:"Rating", field:"rating", formatter:"star", hozAlign:"center", width:100},
						{title:"Empresa", field:"company", sorter:"string"},
						{title:"Fecha ingreso", field:"creation_date", formatter:"datetime", hozAlign:"center", formatterParams:{
							inputFormat:"yyyy-MM-dd",
							outputFormat:"dd/MM/yyyy",
							invalidPlaceholder:"(fecha no válida)",
							timezone:"America/Santiago",
						}},
						{title:"Empleado", field:"employed", formatter:"tickCross", sorter:"boolean"},
					],
				});
			}, 1000).then(function(){
				homeService.get_data().then(function(response){
					console.log('get_data response', response);
					vm.myData = response.data;
					$timeout(function(){
						vm.table.setData(vm.myData);
					}, 1000);
					console.log('homeService', vm.myData);
				}, function(error){
					console.log('error', error);
				});
				console.log('LOL', vm.myData);
			});
			
			
			
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
