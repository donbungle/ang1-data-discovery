(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:modalDirective
	* @description
	* # modalDirective
	* Bootstrap 5 Modal wrapper directive
	*/

	angular
		.module('componentes')
		.directive('bsModal', bsModal);

		bsModal.$inject = ['$rootScope'];

		function bsModal ($rootScope) {

			var directive = {
				restrict: 'E',
                replace: true,
                transclude: true,
				templateUrl:'app/modules/shared/front/modal/modal.html',
				scope: {
					modalId: '@',
					title: '@',
					size: '@',
					//backdrop: '@',
					//keyboard: '@',
					onShow: '&?',
					onHide: '&?',
					onHidden: '&?'
				},
				controller: 'ModalCtrl',
				controllerAs: 'vm',
                bindToController: true,
				link: link
			}

			return directive;

			function link(scope, element, attrs, vm) {
				var modalElement = element[0];
				var modalInstance;

				// Initialize Bootstrap modal
				if (window.bootstrap && window.bootstrap.Modal) {
					var options = {
						backdrop: scope.vm.backdrop || 'true',
						keyboard: scope.vm.keyboard !== 'false'
					};
					modalInstance = new bootstrap.Modal(modalElement, options);
				}

				// Event listeners
				modalElement.addEventListener('show.bs.modal', function() {
					if (scope.vm.onShow) {
						scope.$apply(function() {
							scope.vm.onShow();
						});
					}
				});

				modalElement.addEventListener('hide.bs.modal', function() {
					if (scope.vm.onHide) {
						scope.$apply(function() {
							scope.vm.onHide();
						});
					}
				});

				modalElement.addEventListener('hidden.bs.modal', function() {
					if (scope.vm.onHidden) {
						scope.$apply(function() {
							scope.vm.onHidden();
						});
					}
				});

				// Expose methods to controller
				scope.vm.show = function() {
					if (modalInstance) {
						modalInstance.show();
					}
				};

				scope.vm.hide = function() {
					if (modalInstance) {
						modalInstance.hide();
					}
				};

				scope.vm.toggle = function() {
					if (modalInstance) {
						modalInstance.toggle();
					}
				};

				// Cleanup
				scope.$on('$destroy', function() {
					if (modalInstance) {
						modalInstance.dispose();
					}
				});
			}
		}

})();