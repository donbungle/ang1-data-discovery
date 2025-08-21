(function() {
	'use strict';

	angular
		.module('componentes')
		.controller('OffcanvasCtrl', OffcanvasCtrl);

		OffcanvasCtrl.$inject = ['$scope'];

		function OffcanvasCtrl($scope) {
			var vm = this;

			// Controller initialization
			vm.init = function() {
				// Set default values
				vm.offcanvasId = vm.offcanvasId || 'defaultOffcanvas';
				vm.title = vm.title || 'Offcanvas';
				vm.placement = vm.placement || 'start';
				vm.backdrop = vm.backdrop || 'true';
				vm.keyboard = vm.keyboard || 'true';
			};

			// Initialize
			vm.init();
		}

})();