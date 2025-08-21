(function() {
	'use strict';

	angular
		.module('componentes')
		.directive('bsPopover', bsPopover);

		bsPopover.$inject = ['$rootScope'];

		function bsPopover ($rootScope) {

			var directive = {
				restrict: 'A',
				scope: {
					popoverTitle: '@',
					popoverContent: '@bsPopover',
					placement: '@',
					trigger: '@',
					onShow: '&?',
					onHide: '&?',
					onHidden: '&?'
				},
				link: link
			}

			return directive;

			function link(scope, element, attrs) {
				var popoverInstance;
				var options = {
					title: scope.popoverTitle || '',
					content: scope.popoverContent || '',
					placement: scope.placement || 'top',
					trigger: scope.trigger || 'click'
				};

				// Initialize Bootstrap popover
				if (window.bootstrap && window.bootstrap.Popover) {
					popoverInstance = new bootstrap.Popover(element[0], options);
				}

				// Event listeners
				element[0].addEventListener('show.bs.popover', function() {
					if (scope.onShow) {
						scope.$apply(function() {
							scope.onShow();
						});
					}
				});

				element[0].addEventListener('hide.bs.popover', function() {
					if (scope.onHide) {
						scope.$apply(function() {
							scope.onHide();
						});
					}
				});

				element[0].addEventListener('hidden.bs.popover', function() {
					if (scope.onHidden) {
						scope.$apply(function() {
							scope.onHidden();
						});
					}
				});

				// Watch for content changes
				scope.$watch('popoverContent', function(newValue) {
					if (popoverInstance && newValue) {
						popoverInstance.setContent({
							'.popover-header': scope.popoverTitle || '',
							'.popover-body': newValue
						});
					}
				});

				scope.$watch('popoverTitle', function(newValue) {
					if (popoverInstance) {
						popoverInstance.setContent({
							'.popover-header': newValue || '',
							'.popover-body': scope.popoverContent || ''
						});
					}
				});

				// Cleanup
				scope.$on('$destroy', function() {
					if (popoverInstance) {
						popoverInstance.dispose();
					}
				});
			}
		}

})();