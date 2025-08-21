(function() {
	'use strict';

	angular
		.module('componentes')
		.directive('bsBreadcrumb', bsBreadcrumb);

	bsBreadcrumb.$inject = ['$timeout'];

	function bsBreadcrumb($timeout) {
		var directive = {
			restrict: 'E',
			transclude: true,
			scope: {
				items: '=?',
				separator: '@?',
				onItemClick: '&?'
			},
			template: '<nav ng-transclude aria-label="breadcrumb"></nav>',
			link: link
		};

		return directive;

		function link(scope, element, attrs) {
			var breadcrumbElement;

			$timeout(function() {
				initializeBreadcrumb();
			});

			function initializeBreadcrumb() {
				breadcrumbElement = element[0].querySelector('ol') || element[0].querySelector('.breadcrumb');
				
				if (breadcrumbElement) {
					if (!breadcrumbElement.classList.contains('breadcrumb')) {
						breadcrumbElement.classList.add('breadcrumb');
					}
					setupBreadcrumbEvents();
				}

				if (scope.items && scope.items.length > 0) {
					renderBreadcrumb();
				}

				scope.$watchCollection('items', function(newItems) {
					if (newItems && newItems.length > 0) {
						renderBreadcrumb();
					}
				});
			}

			function renderBreadcrumb() {
				if (!breadcrumbElement) {
					breadcrumbElement = document.createElement('ol');
					breadcrumbElement.className = 'breadcrumb';
					element[0].appendChild(breadcrumbElement);
				}

				breadcrumbElement.innerHTML = '';

				scope.items.forEach(function(item, index) {
					var li = document.createElement('li');
					li.className = 'breadcrumb-item';
					
					if (index === scope.items.length - 1) {
						li.classList.add('active');
						li.setAttribute('aria-current', 'page');
						li.textContent = item.text || item.label || item.name || item;
					} else {
						if (item.href || item.url || item.link) {
							var a = document.createElement('a');
							a.href = item.href || item.url || item.link;
							a.textContent = item.text || item.label || item.name || item;
							a.addEventListener('click', function(e) {
								if (scope.onItemClick) {
									e.preventDefault();
									scope.$apply(function() {
										scope.onItemClick({ item: item, index: index, event: e });
									});
								}
							});
							li.appendChild(a);
						} else {
							li.textContent = item.text || item.label || item.name || item;
						}
					}

					breadcrumbElement.appendChild(li);
				});
			}

			function setupBreadcrumbEvents() {
				var breadcrumbItems = breadcrumbElement.querySelectorAll('.breadcrumb-item a');
				
				breadcrumbItems.forEach(function(item, index) {
					item.addEventListener('click', function(e) {
						if (scope.onItemClick) {
							scope.$apply(function() {
								scope.onItemClick({ 
									item: item, 
									index: index, 
									event: e,
									href: item.href,
									text: item.textContent
								});
							});
						}
					});
				});
			}

			scope.addItem = function(item) {
				if (!scope.items) {
					scope.items = [];
				}
				scope.items.push(item);
			};

			scope.removeItem = function(index) {
				if (scope.items && index >= 0 && index < scope.items.length) {
					scope.items.splice(index, 1);
				}
			};

			scope.clearItems = function() {
				scope.items = [];
			};

			scope.updateItem = function(index, newItem) {
				if (scope.items && index >= 0 && index < scope.items.length) {
					scope.items[index] = newItem;
				}
			};
		}
	}

})();