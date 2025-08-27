(function() {
	'use strict';

	angular
		.module('componentes')
		.directive('bsAccordionItem', bsAccordionItem);

	bsAccordionItem.$inject = [];

	function bsAccordionItem() {
		var directive = {
			restrict: 'E',
			transclude: true,
			replace: true,
			scope: {
				title: '@',
				content: '@?',
				expanded: '=?',
				disabled: '=?',
				targetId: '@?',
				parentId: '@?',
				onShow: '&?',
				onHide: '&?',
				onShown: '&?',
				onHidden: '&?'
			},
			template: function(element, attrs) {
				var targetId = attrs.targetId || 'collapse-' + Math.random().toString(36).substr(2, 9);
				var parentId = attrs.parentId || 'accordion-' + Math.random().toString(36).substr(2, 9);
				
				return '<div class="accordion-item">' +
					'<h2 class="accordion-header">' +
						'<button class="accordion-button" ng-class="{collapsed: !expanded}" type="button" ' +
								'ng-disabled="disabled" data-bs-toggle="collapse" data-bs-target="#' + targetId + '" ' +
								'aria-expanded="{{!!expanded}}" aria-controls="' + targetId + '">' +
							'{{title}}' +
						'</button>' +
					'</h2>' +
					'<div id="' + targetId + '" class="accordion-collapse collapse" ' +
						 'ng-class="{show: expanded}" data-bs-parent="#' + parentId + '">' +
						'<div class="accordion-body">' +
							'<div ng-if="content" ng-bind-html="content"></div>' +
							'<div ng-if="!content" ng-transclude></div>' +
						'</div>' +
					'</div>' +
				'</div>';
			},
			link: link
		};

		return directive;

		function link(scope, element, attrs) {
			// Set default values
			scope.expanded = scope.expanded || false;
			scope.disabled = scope.disabled || false;

			// Generate IDs if not provided
			if (!attrs.targetId) {
				scope.targetId = 'collapse-' + Math.random().toString(36).substr(2, 9);
			}
			if (!attrs.parentId) {
				scope.parentId = 'accordion-' + Math.random().toString(36).substr(2, 9);
			}

			var collapseElement = element[0].querySelector('.accordion-collapse');
			var collapseInstance;

			// Initialize Bootstrap collapse when ready
			scope.$evalAsync(function() {
				if (window.bootstrap && collapseElement) {
					collapseInstance = new bootstrap.Collapse(collapseElement, {
						toggle: false
					});

					// Add event listeners
					collapseElement.addEventListener('show.bs.collapse', function(e) {
						scope.$apply(function() {
							scope.expanded = true;
							if (scope.onShow) scope.onShow({ event: e, target: e.target });
						});
					});

					collapseElement.addEventListener('hide.bs.collapse', function(e) {
						scope.$apply(function() {
							scope.expanded = false;
							if (scope.onHide) scope.onHide({ event: e, target: e.target });
						});
					});

					collapseElement.addEventListener('shown.bs.collapse', function(e) {
						scope.$apply(function() {
							if (scope.onShown) scope.onShown({ event: e, target: e.target });
						});
					});

					collapseElement.addEventListener('hidden.bs.collapse', function(e) {
						scope.$apply(function() {
							if (scope.onHidden) scope.onHidden({ event: e, target: e.target });
						});
					});
				}
			});

			// Watch for programmatic changes to expanded state
			scope.$watch('expanded', function(newValue, oldValue) {
				if (newValue !== oldValue && collapseInstance) {
					if (newValue) {
						collapseInstance.show();
					} else {
						collapseInstance.hide();
					}
				}
			});

			// Expose methods on scope
			scope.show = function() {
				if (collapseInstance) {
					collapseInstance.show();
				}
			};

			scope.hide = function() {
				if (collapseInstance) {
					collapseInstance.hide();
				}
			};

			scope.toggle = function() {
				if (collapseInstance) {
					collapseInstance.toggle();
				}
			};

			// Cleanup on destroy
			scope.$on('$destroy', function() {
				if (collapseInstance && typeof collapseInstance.dispose === 'function') {
					collapseInstance.dispose();
				}
			});
		}
	}

})();