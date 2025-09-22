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
		.module('r4-ang1')
		.controller('AppCtrl', AppCtrl);

		AppCtrl.$inject = ['$scope', '$rootScope', '$window'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function AppCtrl($scope, $rootScope, $window) {
			/*jshint validthis: true */
			var vm = this;
			console.log('AppCtrl', $scope);
			vm.$onInit = onInit;
			vm.tema_actual = $rootScope.tema_actual;
			vm.logout = logout;
			vm.fnGlobal = fnGlobal;

			function fnGlobal(params="") {
				
			}

			function logout() {
				
			}

			function onInit() {

			}
			
			//$rootScope.$watch(function(){ 
			//	return $window.height();
			//},function onHeightChange(newValue, oldValue){
			//	alert(newValue);
			//});

		}

})();
