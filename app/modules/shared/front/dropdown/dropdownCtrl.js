(function() {
	'use strict';

	angular
		.module('componentes')
		.controller('DropdownCtrl', DropdownCtrl);

		DropdownCtrl.$inject = ['$scope'];

		function DropdownCtrl($scope) {
			var vm = this;

			// Controller initialization
			vm.init = function() {
				// Set default values
				vm.dropdownId = vm.dropdownId || 'defaultDropdown';
				vm.buttonText = vm.buttonText || 'Dropdown';
				vm.buttonClass = vm.buttonClass || 'btn-secondary';
			};

			// Initialize
			vm.init();
		}

})();