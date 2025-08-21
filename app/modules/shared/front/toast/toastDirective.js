(function() {
	'use strict';

	angular
		.module('componentes')
		.directive('bsToast', bsToast);

		bsToast.$inject = ['$rootScope'];

		function bsToast ($rootScope) {

			var directive = {
				restrict: 'E',
                replace: true,
                transclude: true,
				templateUrl:'app/modules/shared/front/toast/toast.html',
				scope: {
					toastId: '@',
					title: '@',
					subtitle: '@',
					autohide: '@',
					delay: '@',
					onShow: '&?',
					onHide: '&?',
					onHidden: '&?'
				},
				controller: 'ToastCtrl',
				controllerAs: 'vm',
                bindToController: true,
				link: link
			}

			return directive;

			function link(scope, element, attrs, vm) {
				var toastElement = element[0];
				var toastInstance;

				// Initialize Bootstrap toast
				if (window.bootstrap && window.bootstrap.Toast) {
					var options = {
						autohide: scope.vm.autohide !== 'false',
						delay: parseInt(scope.vm.delay) || 5000
					};
					toastInstance = new bootstrap.Toast(toastElement, options);
				}

				// Event listeners
				toastElement.addEventListener('show.bs.toast', function() {
					if (scope.vm.onShow) {
						scope.$apply(function() {
							scope.vm.onShow();
						});
					}
				});

				toastElement.addEventListener('hide.bs.toast', function() {
					if (scope.vm.onHide) {
						scope.$apply(function() {
							scope.vm.onHide();
						});
					}
				});

				toastElement.addEventListener('hidden.bs.toast', function() {
					if (scope.vm.onHidden) {
						scope.$apply(function() {
							scope.vm.onHidden();
						});
					}
				});

				// Expose methods to controller
				scope.vm.show = function() {
					if (toastInstance) {
						toastInstance.show();
					}
				};

				scope.vm.hide = function() {
					if (toastInstance) {
						toastInstance.hide();
					}
				};

				// Cleanup
				scope.$on('$destroy', function() {
					if (toastInstance) {
						toastInstance.dispose();
					}
				});
			}
		}

})();