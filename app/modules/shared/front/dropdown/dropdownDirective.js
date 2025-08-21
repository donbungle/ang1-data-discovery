(function() {
	'use strict';

	angular
		.module('componentes')
		.directive('bsDropdown', bsDropdown);

		bsDropdown.$inject = ['$rootScope'];

		function bsDropdown ($rootScope) {

			var directive = {
				restrict: 'E',
                replace: true,
                transclude: true,
				templateUrl:'app/modules/shared/front/dropdown/dropdown.html',
				scope: {
					dropdownId: '@',
					buttonText: '@',
					buttonClass: '@',
					onShow: '&?',
					onHide: '&?',
					onHidden: '&?'
				},
				controller: 'DropdownCtrl',
				controllerAs: 'vm',
                bindToController: true,
				link: link
			}

			return directive;

			function link(scope, element, attrs, vm) {
				var dropdownElement = element[0];
				var dropdownInstance;

				// Initialize Bootstrap dropdown
				if (window.bootstrap && window.bootstrap.Dropdown) {
					dropdownInstance = new bootstrap.Dropdown(dropdownElement);
				}

				// Event listeners
				dropdownElement.addEventListener('show.bs.dropdown', function() {
					if (scope.vm.onShow) {
						scope.$apply(function() {
							scope.vm.onShow();
						});
					}
				});

				dropdownElement.addEventListener('hide.bs.dropdown', function() {
					if (scope.vm.onHide) {
						scope.$apply(function() {
							scope.vm.onHide();
						});
					}
				});

				dropdownElement.addEventListener('hidden.bs.dropdown', function() {
					if (scope.vm.onHidden) {
						scope.$apply(function() {
							scope.vm.onHidden();
						});
					}
				});

				// Expose methods to controller
				scope.vm.show = function() {
					if (dropdownInstance) {
						dropdownInstance.show();
					}
				};

				scope.vm.hide = function() {
					if (dropdownInstance) {
						dropdownInstance.hide();
					}
				};

				scope.vm.toggle = function() {
					if (dropdownInstance) {
						dropdownInstance.toggle();
					}
				};

				// Cleanup
				scope.$on('$destroy', function() {
					if (dropdownInstance) {
						dropdownInstance.dispose();
					}
				});
			}
		}

})();