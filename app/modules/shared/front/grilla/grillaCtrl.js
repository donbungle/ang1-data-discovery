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
		.controller('GrillaCtrl', GrillaCtrl );

		GrillaCtrl.$inject = ['HelperService', '$scope', 'grillaService'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function GrillaCtrl(HelperService, $scope, grillaService ) {
			/*jshint validthis: true */
			var vm = this;
			//vm.columns = [];
			//vm.data = [];
			

			

			//$scope.$watch('vm.columns', function(newValue, oldValue){
			//	HelperService.log('watch columns newValue', newValue);
			//	HelperService.log('watch columns oldValue', oldValue);
			//	vm.columns = newValue;
			//});

		}

})();
