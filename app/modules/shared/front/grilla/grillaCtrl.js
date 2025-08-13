(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:grillaCtrl
	* @description
	* # grillaCtrl
	* Controller of the app
	*/

	angular
		.module('componentes')
		.controller('GrillaCtrl', Grilla );

		Grilla.$inject = ['HelperService', '$scope', 'ColorService'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Grilla(HelperService, $scope, ColorService) {
			/*jshint validthis: true */
			var vm = this;
			vm.columns = [];
			vm.data = [];
			vm.gridOptions = {
				enableSorting: true,
				//columnDefs: vm.columns,
				data: vm.data,
				onRegisterApi: function( gridApi ) { 
					vm.gridApi = gridApi;
					//var cellTemplate = 'ui-grid/selectionRowHeader';   // you could use your own template here
					//vm.gridApi.core.addRowHeaderColumn( { name: 'rowHeaderCol', displayName: '', width: 30, cellTemplate: cellTemplate} );
				}
			};

			var svc_colores = ColorService.getColoresPaletaThemeActual();
			vm.colores = [ 
				svc_colores[0][0],//'#803690',
				svc_colores[0][5],//'#00ADF9',
				//svc_colores[0][10],//'#DCDCDC',
				svc_colores[1][0],//'#46BFBD',
				svc_colores[1][5],//'#FDB45C',
				//svc_colores[1][10],//'#949FB1',
				svc_colores[2][0],//'#4D5360'
				svc_colores[2][5],//'#4D5360'
				svc_colores[2][10],//'#4D5360'
			]
			console.log('colores', svc_colores);

			vm.celda_style = '.ui-grid-cell, .ui-grid { color: '+svc_colores[2][13]+' !important; background: '+svc_colores[2][3]+' !important; }';
			vm.celda_style2 = '.ui-grid-header-cell { color: '+svc_colores[0][5]+' !important; background: '+svc_colores[2][1]+' !important; }';
			$scope.$watch('vm.data', function(newValue, oldValue){
				HelperService.log('watch data newValue', newValue);
				HelperService.log('watch data oldValue', oldValue);
				vm.data = newValue;
				HelperService.log('watch data vm.data[0]', vm.data[0]);
				vm.columns = _.map(_.keysIn(vm.data[0]), function(o){
					return { name: o, field: o.replace('_', ' ').toUpperCase(), cellClass:'celda_style' };
				});
				HelperService.log('watch data vm.columns', vm.columns);
				vm.gridOptions = {
					enableSorting: true,
					//columnDefs: vm.columns,
					data: vm.data,
					onRegisterApi: function( gridApi ) { 
						vm.gridApi = gridApi;
						//var cellTemplate = 'ui-grid/selectionRowHeader';   // you could use your own template here
						//vm.gridApi.core.addRowHeaderColumn( { name: 'rowHeaderCol', displayName: '', width: 30, cellTemplate: cellTemplate} );
					}
				};
			});

			//$scope.$watch('vm.columns', function(newValue, oldValue){
			//	HelperService.log('watch columns newValue', newValue);
			//	HelperService.log('watch columns oldValue', oldValue);
			//	vm.columns = newValue;
			//});

		}

})();
