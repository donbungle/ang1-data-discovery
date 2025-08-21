(function() {
	'use strict';

	angular
		.module('componentes')
		.controller('CollapseCtrl', CollapseCtrl);

		CollapseCtrl.$inject = ['$scope'];

		function CollapseCtrl($scope) {
			var vm = this;

			// Controller initialization
			vm.init = function() {
				// Set default values
				vm.collapseId = vm.collapseId || 'defaultCollapse';
				vm.targetId = vm.targetId || vm.collapseId + 'Content';
				vm.buttonText = vm.buttonText || 'Toggle';
				vm.buttonClass = vm.buttonClass || 'btn-primary';
			};

			// Initialize
			vm.init();
		}

})();