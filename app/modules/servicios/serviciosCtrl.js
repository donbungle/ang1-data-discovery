(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:serviciosCtrl
	* @description
	* # serviciosCtrl
	* Controller of the app
	*/

  	angular
		.module('servicios')
		.controller('ServiciosCtrl', Servicios);

		Servicios.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Servicios() {
			/*jshint validthis: true */
			var vm = this;

		}

})();
