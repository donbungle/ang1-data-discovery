(function() {
	'use strict';

	angular
		.module('componentes')
		.directive('bsCollapse', bsCollapse);

		bsCollapse.$inject = ['$rootScope'];

		function bsCollapse ($rootScope) {

			var directive = {
				restrict: 'E',
                replace: true,
                transclude: true,
				templateUrl:'app/modules/shared/front/collapse/collapse.html',
				scope: {
					collapseId: '@',
					targetId: '@',
					buttonText: '@',
					buttonClass: '@',
					onShow: '&?',
					onHide: '&?',
					onHidden: '&?'
				},
				controller: 'CollapseCtrl',
				controllerAs: 'vm',
                bindToController: true,
				link: link
			}

			return directive;

			function link(scope, element, attrs, vm) {
				var collapseElement = element[0].querySelector('.collapse');
				var collapseInstance;

				// Initialize Bootstrap collapse
				if (window.bootstrap && window.bootstrap.Collapse && collapseElement) {
					collapseInstance = new bootstrap.Collapse(collapseElement, {
						toggle: false
					});
				}

				// Event listeners
				if (collapseElement) {
					collapseElement.addEventListener('show.bs.collapse', function() {
						if (scope.vm.onShow) {
							scope.$apply(function() {
								scope.vm.onShow();
							});
						}
					});

					collapseElement.addEventListener('hide.bs.collapse', function() {
						if (scope.vm.onHide) {
							scope.$apply(function() {
								scope.vm.onHide();
							});
						}
					});

					collapseElement.addEventListener('hidden.bs.collapse', function() {
						if (scope.vm.onHidden) {
							scope.$apply(function() {
								scope.vm.onHidden();
							});
						}
					});
				}

				// Expose methods to controller
				scope.vm.show = function() {
					if (collapseInstance) {
						collapseInstance.show();
					}
				};

				scope.vm.hide = function() {
					if (collapseInstance) {
						collapseInstance.hide();
					}
				};

				scope.vm.toggle = function() {
					if (collapseInstance) {
						collapseInstance.toggle();
					}
				};

				// Cleanup
				scope.$on('$destroy', function() {
					if (collapseInstance) {
						collapseInstance.dispose();
					}
				});
			}
		}

})();