(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:ModalCtrl
	* @description
	* # ModalCtrl
	* Controller for Bootstrap 5 Modal directive
	*/

	angular
		.module('componentes')
		.controller('ModalCtrl', ModalCtrl);

		ModalCtrl.$inject = ['$scope'];

		function ModalCtrl($scope) {
			var vm = this;

			// Controller initialization
			vm.init = function() {
				// Set default values
				vm.modalId = vm.modalId || 'defaultModal';
				vm.size = vm.size || '';
				vm.backdrop = vm.backdrop || 'true';
				vm.keyboard = vm.keyboard !== 'false';
			};

			// Initialize
			vm.init();
		}

})();