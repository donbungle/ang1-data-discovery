(function() {
	'use strict';

	angular
		.module('componentes')
		.directive('bsWrapper', bsWrapper);

	bsWrapper.$inject = ['$timeout', '$compile'];

	function bsWrapper($timeout, $compile) {
		var directive = {
			restrict: 'E',
			transclude: true,
			scope: {
				component: '@',
				options: '=?',
				onInit: '&?',
				onShow: '&?',
				onHide: '&?',
				onToggle: '&?'
			},
			template: '<div ng-transclude></div>',
			link: link
		};

		return directive;

		function link(scope, element, attrs) {
			var componentInstance;
			var componentElement = element[0].firstElementChild;

			if (!componentElement) {
				console.error('bs-wrapper: No child element found');
				return;
			}

			$timeout(function() {
				initializeComponent();
			});

			function initializeComponent() {
				var componentType = scope.component;
				var options = scope.options || {};

				if (!window.bootstrap) {
					console.error('Bootstrap 5 is not loaded');
					return;
				}

				switch (componentType) {
					case 'modal':
						initModal(options);
						break;
					case 'dropdown':
						initDropdown(options);
						break;
					case 'collapse':
						initCollapse(options);
						break;
					case 'tab':
						initTab(options);
						break;
					case 'tooltip':
						initTooltip(options);
						break;
					case 'popover':
						initPopover(options);
						break;
					case 'carousel':
						initCarousel(options);
						break;
					case 'offcanvas':
						initOffcanvas(options);
						break;
					case 'toast':
						initToast(options);
						break;
					case 'alert':
						initAlert(options);
						break;
					case 'scrollspy':
						initScrollSpy(options);
						break;
					default:
						console.warn('Unknown Bootstrap component:', componentType);
				}

				if (scope.onInit) {
					scope.onInit({ instance: componentInstance });
				}
			}

			function initModal(options) {
				componentInstance = new bootstrap.Modal(componentElement, options);
				addEventListeners('show.bs.modal', 'hide.bs.modal', 'hidden.bs.modal', 'shown.bs.modal');
				
				scope.show = function() { componentInstance.show(); };
				scope.hide = function() { componentInstance.hide(); };
				scope.toggle = function() { componentInstance.toggle(); };
			}

			function initDropdown(options) {
				componentInstance = new bootstrap.Dropdown(componentElement, options);
				addEventListeners('show.bs.dropdown', 'hide.bs.dropdown', 'hidden.bs.dropdown', 'shown.bs.dropdown');
				
				scope.show = function() { componentInstance.show(); };
				scope.hide = function() { componentInstance.hide(); };
				scope.toggle = function() { componentInstance.toggle(); };
			}

			function initCollapse(options) {
				componentInstance = new bootstrap.Collapse(componentElement, options);
				addEventListeners('show.bs.collapse', 'hide.bs.collapse', 'hidden.bs.collapse', 'shown.bs.collapse');
				
				scope.show = function() { componentInstance.show(); };
				scope.hide = function() { componentInstance.hide(); };
				scope.toggle = function() { componentInstance.toggle(); };
			}

			function initTab(options) {
				componentInstance = new bootstrap.Tab(componentElement, options);
				addEventListeners('show.bs.tab', 'hide.bs.tab', 'hidden.bs.tab', 'shown.bs.tab');
				
				scope.show = function() { componentInstance.show(); };
			}

			function initTooltip(options) {
				componentInstance = new bootstrap.Tooltip(componentElement, options);
				addEventListeners('show.bs.tooltip', 'hide.bs.tooltip', 'hidden.bs.tooltip', 'shown.bs.tooltip');
				
				scope.show = function() { componentInstance.show(); };
				scope.hide = function() { componentInstance.hide(); };
				scope.toggle = function() { componentInstance.toggle(); };
			}

			function initPopover(options) {
				componentInstance = new bootstrap.Popover(componentElement, options);
				addEventListeners('show.bs.popover', 'hide.bs.popover', 'hidden.bs.popover', 'shown.bs.popover');
				
				scope.show = function() { componentInstance.show(); };
				scope.hide = function() { componentInstance.hide(); };
				scope.toggle = function() { componentInstance.toggle(); };
			}

			function initCarousel(options) {
				componentInstance = new bootstrap.Carousel(componentElement, options);
				addEventListeners('slide.bs.carousel', 'slid.bs.carousel');
				
				scope.next = function() { componentInstance.next(); };
				scope.prev = function() { componentInstance.prev(); };
				scope.to = function(index) { componentInstance.to(index); };
				scope.cycle = function() { componentInstance.cycle(); };
				scope.pause = function() { componentInstance.pause(); };
			}

			function initOffcanvas(options) {
				componentInstance = new bootstrap.Offcanvas(componentElement, options);
				addEventListeners('show.bs.offcanvas', 'hide.bs.offcanvas', 'hidden.bs.offcanvas', 'shown.bs.offcanvas');
				
				scope.show = function() { componentInstance.show(); };
				scope.hide = function() { componentInstance.hide(); };
				scope.toggle = function() { componentInstance.toggle(); };
			}

			function initToast(options) {
				componentInstance = new bootstrap.Toast(componentElement, options);
				addEventListeners('show.bs.toast', 'hide.bs.toast', 'hidden.bs.toast', 'shown.bs.toast');
				
				scope.show = function() { componentInstance.show(); };
				scope.hide = function() { componentInstance.hide(); };
			}

			function initAlert(options) {
				componentInstance = new bootstrap.Alert(componentElement, options);
				addEventListeners('close.bs.alert', 'closed.bs.alert');
				
				scope.close = function() { componentInstance.close(); };
			}

			function initScrollSpy(options) {
				componentInstance = new bootstrap.ScrollSpy(document.body, options);
				addEventListeners('activate.bs.scrollspy');
				
				scope.refresh = function() { componentInstance.refresh(); };
			}

			function addEventListeners() {
				var events = Array.prototype.slice.call(arguments);
				
				events.forEach(function(eventName) {
					componentElement.addEventListener(eventName, function(e) {
						scope.$apply(function() {
							var eventType = eventName.split('.')[0];
							
							switch(eventType) {
								case 'show':
								case 'shown':
									if (scope.onShow) scope.onShow({ event: e });
									break;
								case 'hide':
								case 'hidden':
									if (scope.onHide) scope.onHide({ event: e });
									break;
								case 'toggle':
									if (scope.onToggle) scope.onToggle({ event: e });
									break;
							}
						});
					});
				});
			}

			scope.$on('$destroy', function() {
				if (componentInstance && typeof componentInstance.dispose === 'function') {
					componentInstance.dispose();
				}
			});
		}
	}

})();