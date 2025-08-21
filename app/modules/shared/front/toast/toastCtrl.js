(function() {
	'use strict';

	angular
		.module('componentes')
		.controller('ToastCtrl', ToastCtrl);

		ToastCtrl.$inject = ['$scope'];

		function ToastCtrl($scope) {
			var vm = this;

			// Controller initialization
			vm.init = function() {
				// Set default values
				vm.toastId = vm.toastId || 'defaultToast';
				vm.title = vm.title || 'Toast';
				vm.subtitle = vm.subtitle || '';
				vm.autohide = vm.autohide || 'true';
				vm.delay = vm.delay || '5000';
			};

			// Initialize
			vm.init();
		}

})();