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
		'grillaService',
	];

	function Home(
		homeService, 
		$rootScope, 
		$scope, 
		$controller,
		$timeout,
		grillaService
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
		vm.opciones_grilla = grillaService.get_opt_grilla();
		vm.opciones_grilla_basico = grillaService.get_opt_grilla("basico");
		vm.opciones_grilla_rentabilidad = grillaService.get_opt_grilla("rentabilidad");
		vm.opciones_grilla_ratios = grillaService.get_opt_grilla("ratios");
		vm.opciones_grilla_ranking = grillaService.get_opt_grilla("ranking");
		vm.opciones_grilla_general = grillaService.get_opt_grilla("general");
		vm.nro = 0;
		
		function onInit(){
			console.log('Home onInit', vm);
			console.log('Home $scope', $scope);
			getDataGrillas();
			$timeout(function(){
				setTabs();
				setPopover();
				setTooltip();
				//autoAnimate(document.getElementsByClassName('#accordionFiltrosAplicados .accordion-body'));
			}, 1000);
			homeService.get_filtros_menu().then(function(response){
				console.log('get_filtros_menu response', response);
				vm.filtros_menu = response.data;
			}, function(error){
				console.log('error', error);
			});
		}

		vm.ver_detalle = function(){
			console.log("ver_detalle");
		};

		function getDataGrillas(){
			homeService.getData("basico").then(response => { vm.table_basico_data = response.data;});
			homeService.getData("rentabilidad").then(response => { vm.table_rentabilidad_data = response.data;});
			homeService.getData("ratios").then(response => { vm.table_ratios_data = response.data;});
			homeService.getData("ranking").then(response => { vm.table_ranking_data = response.data;});
			homeService.getData("general").then(response => { vm.table_general_data = response.data;});
		}

		function setPopover(){
			$timeout(function() {
				// initialize Bootstrap popovers after Angular digest cycle
				const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
				popoverTriggerList.map(function (el) {
					return new bootstrap.Popover(el, {
						//container: '#nav-tabContent'
					});
				});
			},1000);
		}

		function setTooltip(){
			$timeout(function() {
				const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
				const tooltipList = [...tooltipTriggerList].map(function(tooltipTriggerEl){
					new bootstrap.Tooltip(tooltipTriggerEl, {
						container: 'body'
					});
					
					}
				);

				
				$timeout(function () {
					const verDetalleList = document.querySelectorAll('.fondo-detalle');
					const tooltipList = [...verDetalleList].map(function(verDetalleEl){
						verDetalleEl.addEventListener('click', function () {
							console.log('Clicked after render '+ vm.nro++);
						});
					});
				}, 100);

				
			},1000);
		}

		function setTabs(){
			const tabEl = document.querySelector('#nav-tab');
			const loader = document.getElementById('tabLoader');

			tabEl.addEventListener('show.bs.tab', () => {
				setTooltip();
				loader.classList.add('show');   // show overlay
			});

			tabEl.addEventListener('shown.bs.tab', () => {
				// simulate async loading
				setTimeout(() => loader.classList.remove('show'), 500);
			});
		}

		function getCheckedOpciones(filtros_menu) {
			return filtros_menu
				.flatMap(item => item.opciones)
				.filter(opcion => opcion.checked === true);
		}

		vm.quitar_filtro = function() {
			var filtros = vm.filtros_menu
				.flatMap(item => item.opciones)
				.filter(opcion => opcion.checked === true);
			console.log('quitar_filtro filtros:', filtros);
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
			//console.log('Collection changed:');
			//console.log('From:', oldVal);
			//console.log('To:', newVal);
			//vm.filtros_aplicados = [];
			//vm.filtros_aplicados = _.map(getCheckedOpciones(newVal), function(filtro){
			//	return {
			//		'label': filtro.titulo,
			//		'id': filtro.id,
			//		'valor': filtro.value,
			//		'color': filtro.color,
			//	};
			//});
			console.log('vm.filtros_aplicados', vm.filtros_aplicados);
		}, true);

		// FIN FILTROS
	}

})();
