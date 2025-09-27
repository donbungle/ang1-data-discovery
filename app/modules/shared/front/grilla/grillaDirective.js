(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:grillaDirective
	* @description
	* # grillaDirective
	* Directive of the app
	*/

	angular
		.module('componentes')
		.directive('grilla', grilla);

		grilla.$inject = ['$rootScope', 'HelperService', '$timeout'];

		function grilla ($rootScope, HelperService, $timeout) {

			var directive = {
				restrict: 'E',
                replace: true,
                transclude: false,
				templateUrl:'app/modules/shared/front/grilla/grilla.html?v='+_.random(1,10000),
				scope: {
					grillaId: '@',
					opcionesGrilla: '=',
					data: '=',
					//columns: '=',
					//removeCallback: '&?',
				},
				controller: 'GrillaCtrl',
				controllerAs: 'vm',
                bindToController: true, // because the scope is isolated
				link: link,	
				
			}

			return directive;

			function link(scope, element, attrs, vm) {
				HelperService.log('link scope', scope);
				HelperService.log('link vm', vm);
				HelperService.log('link attrs', attrs);
				HelperService.log('$link vm.opcionesGrilla', vm.opcionesGrilla);
				$timeout(function(){
					scope.vm.table = new Tabulator("#"+vm.grillaId, vm.opcionesGrilla);
					scope.vm.table.on("rowSelected", function(row){
						const bsOffcanvas = new bootstrap.Offcanvas('#offcanvasNavbar');
						bsOffcanvas.show();
					});
					scope.vm.table.on("rowDeselected", function(row){
						console.log('rowDeselected');
					});
				}, 100);
				
				//$('.sparklines').sparkline('html');
				scope.$watch('vm.data', function(newValue, oldValue){
					HelperService.log('watch data newValue', newValue);
					HelperService.log('watch data oldValue', oldValue);
					HelperService.log('$watch scope', scope);
					HelperService.log('$watch vm', vm);

					$timeout(function(){
						if(!_.isEmpty(newValue)){
							$timeout(function(){
								
							}, 100).then(function(){
								scope.vm.table.setData(newValue);
							});
						}
					}, 100);
				});
			}

		}

})();
