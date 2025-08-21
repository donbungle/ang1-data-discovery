(function() {
	'use strict';

	angular
		.module('componentes')
		.directive('bsTooltip', bsTooltip);

		bsTooltip.$inject = ['$rootScope'];

		function bsTooltip ($rootScope) {

			var directive = {
				restrict: 'A',
				scope: {
					tooltipText: '@bsTooltip',
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
				var tooltipInstance;
				var options = {
					title: scope.tooltipText || attrs.title || '',
					placement: scope.placement || 'top',
					trigger: scope.trigger || 'hover focus'
				};

				// Initialize Bootstrap tooltip
				if (window.bootstrap && window.bootstrap.Tooltip) {
					tooltipInstance = new bootstrap.Tooltip(element[0], options);
				}

				// Event listeners
				element[0].addEventListener('show.bs.tooltip', function() {
					if (scope.onShow) {
						scope.$apply(function() {
							scope.onShow();
						});
					}
				});

				element[0].addEventListener('hide.bs.tooltip', function() {
					if (scope.onHide) {
						scope.$apply(function() {
							scope.onHide();
						});
					}
				});

				element[0].addEventListener('hidden.bs.tooltip', function() {
					if (scope.onHidden) {
						scope.$apply(function() {
							scope.onHidden();
						});
					}
				});

				// Watch for title changes
				scope.$watch('tooltipText', function(newValue) {
					if (tooltipInstance && newValue) {
						tooltipInstance.setContent({
							'.tooltip-inner': newValue
						});
					}
				});

				// Cleanup
				scope.$on('$destroy', function() {
					if (tooltipInstance) {
						tooltipInstance.dispose();
					}
				});
			}
		}

})();