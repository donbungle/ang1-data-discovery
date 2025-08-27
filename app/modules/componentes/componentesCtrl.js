(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:componentesCtrl
	* @description
	* # componentesCtrl
	* Controller of the app
	*/

  	angular
		.module('componentes')
		.controller('ComponentesCtrl', Componentes);

		Componentes.$inject = ['$scope', '$rootScope', '$timeout'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Componentes($scope, $rootScope, $timeout) {
			/*jshint validthis: true */
			var vm = this;

			vm.cont = 1;

			vm.$onInit = onInit;

			function onInit(){
				//console.log('ComponentesCtrl onInit');

				// Sample data for ECharts
				vm.lineChartData = [
					{month: 'Jan', sales: 120, profit: 80},
					{month: 'Feb', sales: 200, profit: 130},
					{month: 'Mar', sales: 150, profit: 90},
					{month: 'Apr', sales: 300, profit: 200},
					{month: 'May', sales: 250, profit: 160},
					{month: 'Jun', sales: 400, profit: 280}
				];

				vm.barChartData = [
					{category: 'Product A', value: 320},
					{category: 'Product B', value: 240},
					{category: 'Product C', value: 180},
					{category: 'Product D', value: 420},
					{category: 'Product E', value: 380}
				];

				vm.pieChartData = [
					{name: 'Desktop', value: 580},
					{name: 'Mobile', value: 484},
					{name: 'Tablet', value: 300}
				];

				$timeout(function(){
					//vm.test();
				}, 500);
				
			}


			
		}

})();
