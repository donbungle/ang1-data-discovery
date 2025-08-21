(function() {
	'use strict';

	angular
		.module('componentes')
		.directive('bsAccordion', bsAccordion);

	bsAccordion.$inject = ['$timeout'];

	function bsAccordion($timeout) {
		var directive = {
			restrict: 'E',
			transclude: true,
			scope: {
				options: '=?',
				onShow: '&?',
				onHide: '&?',
				onShown: '&?',
				onHidden: '&?'
			},
			template: '<div ng-transclude class="accordion"></div>',
			link: link
		};

		return directive;

		function link(scope, element, attrs) {
			var accordionElement = element[0].firstElementChild;
			var collapseInstances = [];

			$timeout(function() {
				initializeAccordion();
			});

			function initializeAccordion() {
				if (!window.bootstrap) {
					console.error('Bootstrap 5 is not loaded');
					return;
				}

				var collapseElements = accordionElement.querySelectorAll('.collapse');
				var options = scope.options || {};

				collapseElements.forEach(function(collapseEl) {
					var instance = new bootstrap.Collapse(collapseEl, options);
					collapseInstances.push(instance);

					collapseEl.addEventListener('show.bs.collapse', function(e) {
						scope.$apply(function() {
							if (scope.onShow) scope.onShow({ event: e, target: e.target });
						});
					});

					collapseEl.addEventListener('hide.bs.collapse', function(e) {
						scope.$apply(function() {
							if (scope.onHide) scope.onHide({ event: e, target: e.target });
						});
					});

					collapseEl.addEventListener('shown.bs.collapse', function(e) {
						scope.$apply(function() {
							if (scope.onShown) scope.onShown({ event: e, target: e.target });
						});
					});

					collapseEl.addEventListener('hidden.bs.collapse', function(e) {
						scope.$apply(function() {
							if (scope.onHidden) scope.onHidden({ event: e, target: e.target });
						});
					});
				});

				scope.show = function(target) {
					var targetEl = typeof target === 'string' ? document.querySelector(target) : target;
					if (targetEl) {
						var instance = bootstrap.Collapse.getInstance(targetEl);
						if (instance) instance.show();
					}
				};

				scope.hide = function(target) {
					var targetEl = typeof target === 'string' ? document.querySelector(target) : target;
					if (targetEl) {
						var instance = bootstrap.Collapse.getInstance(targetEl);
						if (instance) instance.hide();
					}
				};

				scope.toggle = function(target) {
					var targetEl = typeof target === 'string' ? document.querySelector(target) : target;
					if (targetEl) {
						var instance = bootstrap.Collapse.getInstance(targetEl);
						if (instance) instance.toggle();
					}
				};
			}

			scope.$on('$destroy', function() {
				collapseInstances.forEach(function(instance) {
					if (instance && typeof instance.dispose === 'function') {
						instance.dispose();
					}
				});
			});
		}
	}

})();