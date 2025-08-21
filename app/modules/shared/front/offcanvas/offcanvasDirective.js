(function() {
	'use strict';

	angular
		.module('componentes')
		.directive('bsOffcanvas', bsOffcanvas);

		bsOffcanvas.$inject = ['$rootScope'];

		function bsOffcanvas ($rootScope) {

			var directive = {
				restrict: 'E',
                replace: true,
                transclude: true,
				templateUrl:'app/modules/shared/front/offcanvas/offcanvas.html',
				scope: {
					offcanvasId: '@',
					title: '@',
					placement: '@',
					backdrop: '@',
					keyboard: '@',
					onShow: '&?',
					onHide: '&?',
					onHidden: '&?'
				},
				controller: 'OffcanvasCtrl',
				controllerAs: 'vm',
                bindToController: true,
				link: link
			}

			return directive;

			function link(scope, element, attrs, vm) {
				var offcanvasElement = element[0];
				var offcanvasInstance;

				// Initialize Bootstrap offcanvas
				if (window.bootstrap && window.bootstrap.Offcanvas) {
					var options = {
						backdrop: scope.vm.backdrop !== 'false',
						keyboard: scope.vm.keyboard !== 'false'
					};
					offcanvasInstance = new bootstrap.Offcanvas(offcanvasElement, options);
				}

				// Event listeners
				offcanvasElement.addEventListener('show.bs.offcanvas', function() {
					if (scope.vm.onShow) {
						scope.$apply(function() {
							scope.vm.onShow();
						});
					}
				});

				offcanvasElement.addEventListener('hide.bs.offcanvas', function() {
					if (scope.vm.onHide) {
						scope.$apply(function() {
							scope.vm.onHide();
						});
					}
				});

				offcanvasElement.addEventListener('hidden.bs.offcanvas', function() {
					if (scope.vm.onHidden) {
						scope.$apply(function() {
							scope.vm.onHidden();
						});
					}
				});

				// Expose methods to controller
				scope.vm.show = function() {
					if (offcanvasInstance) {
						offcanvasInstance.show();
					}
				};

				scope.vm.hide = function() {
					if (offcanvasInstance) {
						offcanvasInstance.hide();
					}
				};

				scope.vm.toggle = function() {
					if (offcanvasInstance) {
						offcanvasInstance.toggle();
					}
				};

				// Cleanup
				scope.$on('$destroy', function() {
					if (offcanvasInstance) {
						offcanvasInstance.dispose();
					}
				});
			}
		}

})();