(function() {
	'use strict';

	angular
		.module('componentes')
		.directive('bsNavsTabs', bsNavsTabs);

	bsNavsTabs.$inject = ['$timeout'];

	function bsNavsTabs($timeout) {
		var directive = {
			restrict: 'E',
			transclude: true,
			scope: {
				type: '@?',
				variant: '@?',
				fill: '=?',
				justified: '=?',
				vertical: '=?',
				activeTab: '=?',
				onTabChange: '&?',
				onTabShow: '&?',
				onTabHide: '&?'
			},
			template: '<div ng-transclude></div>',
			link: link
		};

		return directive;

		function link(scope, element, attrs) {
			var navElement;
			var tabContentElement;
			var tabInstances = [];

			$timeout(function() {
				initializeNavsTabs();
			});

			function initializeNavsTabs() {
				if (!window.bootstrap) {
					console.error('Bootstrap 5 is not loaded');
					return;
				}

				navElement = element[0].querySelector('ul.nav, .nav');
				tabContentElement = element[0].querySelector('.tab-content');

				if (navElement) {
					setupNavClasses();
					setupTabEvents();
				}

				scope.$watch('activeTab', function(newTab) {
					if (newTab) {
						activateTab(newTab);
					}
				});

				scope.$watch('type', function(newType, oldType) {
					if (navElement) {
						if (oldType) navElement.classList.remove('nav-' + oldType);
						if (newType) navElement.classList.add('nav-' + newType);
					}
				});

				scope.$watch('fill', function(newVal) {
					if (navElement) {
						if (newVal) {
							navElement.classList.add('nav-fill');
						} else {
							navElement.classList.remove('nav-fill');
						}
					}
				});

				scope.$watch('justified', function(newVal) {
					if (navElement) {
						if (newVal) {
							navElement.classList.add('nav-justified');
						} else {
							navElement.classList.remove('nav-justified');
						}
					}
				});

				scope.$watch('vertical', function(newVal) {
					if (navElement) {
						if (newVal) {
							navElement.classList.add('flex-column');
						} else {
							navElement.classList.remove('flex-column');
						}
					}
				});
			}

			function setupNavClasses() {
				if (!navElement.classList.contains('nav')) {
					navElement.classList.add('nav');
				}

				var type = scope.type || 'tabs';
				navElement.classList.add('nav-' + type);

				if (scope.variant) {
					navElement.classList.add('nav-' + scope.variant);
				}

				if (scope.fill) {
					navElement.classList.add('nav-fill');
				}

				if (scope.justified) {
					navElement.classList.add('nav-justified');
				}

				if (scope.vertical) {
					navElement.classList.add('flex-column');
				}
			}

			function setupTabEvents() {
				var tabTriggers = navElement.querySelectorAll('[data-bs-toggle="tab"], [data-bs-toggle="pill"]');
				
				tabTriggers.forEach(function(trigger) {
					var tab = new bootstrap.Tab(trigger);
					tabInstances.push(tab);

					trigger.addEventListener('show.bs.tab', function(e) {
						scope.$apply(function() {
							if (scope.onTabShow) {
								scope.onTabShow({ 
									event: e, 
									tab: e.target, 
									relatedTarget: e.relatedTarget 
								});
							}
						});
					});

					trigger.addEventListener('shown.bs.tab', function(e) {
						scope.$apply(function() {
							scope.activeTab = e.target.getAttribute('data-bs-target') || e.target.getAttribute('href');
							if (scope.onTabChange) {
								scope.onTabChange({ 
									event: e, 
									tab: e.target, 
									relatedTarget: e.relatedTarget,
									activeTab: scope.activeTab
								});
							}
						});
					});

					trigger.addEventListener('hide.bs.tab', function(e) {
						scope.$apply(function() {
							if (scope.onTabHide) {
								scope.onTabHide({ 
									event: e, 
									tab: e.target, 
									relatedTarget: e.relatedTarget 
								});
							}
						});
					});
				});
			}

			function activateTab(tabId) {
				var tabTrigger = navElement.querySelector('[data-bs-target="' + tabId + '"], [href="' + tabId + '"]');
				if (tabTrigger) {
					var tabInstance = bootstrap.Tab.getInstance(tabTrigger);
					if (tabInstance) {
						tabInstance.show();
					}
				}
			}

			scope.showTab = function(tabId) {
				activateTab(tabId);
			};

			scope.getActiveTab = function() {
				var activeTab = navElement.querySelector('.nav-link.active');
				if (activeTab) {
					return activeTab.getAttribute('data-bs-target') || activeTab.getAttribute('href');
				}
				return null;
			};

			scope.enableTab = function(tabId) {
				var tabTrigger = navElement.querySelector('[data-bs-target="' + tabId + '"], [href="' + tabId + '"]');
				if (tabTrigger) {
					tabTrigger.classList.remove('disabled');
					tabTrigger.removeAttribute('tabindex');
					tabTrigger.removeAttribute('aria-disabled');
				}
			};

			scope.disableTab = function(tabId) {
				var tabTrigger = navElement.querySelector('[data-bs-target="' + tabId + '"], [href="' + tabId + '"]');
				if (tabTrigger) {
					tabTrigger.classList.add('disabled');
					tabTrigger.setAttribute('tabindex', '-1');
					tabTrigger.setAttribute('aria-disabled', 'true');
				}
			};

			scope.$on('$destroy', function() {
				tabInstances.forEach(function(instance) {
					if (instance && typeof instance.dispose === 'function') {
						instance.dispose();
					}
				});
			});
		}
	}

})();