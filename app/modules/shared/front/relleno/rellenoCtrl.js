(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:rellenoCtrl
	* @description
	* # rellenoCtrl
	* Controller of the app
	*/

	angular
		.module('componentes')
		.controller('RellenoCtrl', Relleno );

		Relleno.$inject = ['ColorService'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Relleno(ColorService) {
			/*jshint validthis: true */
			var vm = this;

		}

})();
