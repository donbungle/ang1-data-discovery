(function() {
	'use strict';

	angular
		.module('componentes')
		.directive('bsNavbar', bsNavbar);

	bsNavbar.$inject = ['$timeout'];

	function bsNavbar($timeout) {
		var directive = {
			restrict: 'E',
			transclude: true,
			scope: {
				brand: '@?',
				brandHref: '@?',
				brandImg: '@?',
				brandImgAlt: '@?',
				variant: '@?',
				expand: '@?',
				fixed: '@?',
				sticky: '@?',
				container: '@?',
				onBrandClick: '&?',
				onToggle: '&?',
				onCollapse: '&?',
				onExpand: '&?'
			},
			template: '<nav ng-transclude class="navbar"></nav>',
			link: link
		};

		return directive;

		function link(scope, element, attrs) {
			var navbarElement = element[0].firstElementChild;
			var collapseInstance;

			$timeout(function() {
				initializeNavbar();
			});

			function initializeNavbar() {
				if (!navbarElement.classList.contains('navbar')) {
					navbarElement.classList.add('navbar');
				}

				applyNavbarStyles();
				setupNavbarContent();
				setupCollapseEvents();

				scope.$watch('variant', function(newVal, oldVal) {
					if (oldVal) navbarElement.classList.remove('navbar-' + oldVal);
					if (newVal) navbarElement.classList.add('navbar-' + newVal);
				});

				scope.$watch('expand', function(newVal, oldVal) {
					if (oldVal) navbarElement.classList.remove('navbar-expand-' + oldVal);
					if (newVal) navbarElement.classList.add('navbar-expand-' + newVal);
				});

				scope.$watch('fixed', function(newVal, oldVal) {
					if (oldVal) navbarElement.classList.remove('fixed-' + oldVal);
					if (newVal) navbarElement.classList.add('fixed-' + newVal);
				});

				scope.$watch('sticky', function(newVal, oldVal) {
					if (oldVal) navbarElement.classList.remove('sticky-' + oldVal);
					if (newVal) navbarElement.classList.add('sticky-' + newVal);
				});
			}

			function applyNavbarStyles() {
				var variant = scope.variant || 'light';
				navbarElement.classList.add('navbar-' + variant);

				if (scope.expand) {
					navbarElement.classList.add('navbar-expand-' + scope.expand);
				}

				if (scope.fixed) {
					navbarElement.classList.add('fixed-' + scope.fixed);
				}

				if (scope.sticky) {
					navbarElement.classList.add('sticky-' + scope.sticky);
				}
			}

			function setupNavbarContent() {
				var container = navbarElement.querySelector('.container, .container-fluid');
				if (!container && scope.container !== 'false') {
					container = document.createElement('div');
					container.className = scope.container === 'fluid' ? 'container-fluid' : 'container';
					
					while (navbarElement.firstChild) {
						container.appendChild(navbarElement.firstChild);
					}
					navbarElement.appendChild(container);
				}

				if (scope.brand || scope.brandImg) {
					var existingBrand = navbarElement.querySelector('.navbar-brand');
					if (!existingBrand) {
						var brand = document.createElement(scope.brandHref ? 'a' : 'span');
						brand.className = 'navbar-brand';
						
						if (scope.brandHref) {
							brand.href = scope.brandHref;
						}
						
						if (scope.brandImg) {
							var img = document.createElement('img');
							img.src = scope.brandImg;
							img.alt = scope.brandImgAlt || scope.brand || 'Brand';
							img.className = 'd-inline-block align-text-top';
							img.style.height = '24px';
							brand.appendChild(img);
							
							if (scope.brand) {
								var text = document.createTextNode(' ' + scope.brand);
								brand.appendChild(text);
							}
						} else {
							brand.textContent = scope.brand;
						}

						if (scope.onBrandClick) {
							brand.style.cursor = 'pointer';
							brand.addEventListener('click', function(e) {
								scope.$apply(function() {
									scope.onBrandClick({ event: e, brand: brand });
								});
							});
						}

						var targetContainer = container || navbarElement;
						targetContainer.insertBefore(brand, targetContainer.firstChild);
					}
				}

				var existingToggler = navbarElement.querySelector('.navbar-toggler');
				if (!existingToggler) {
					var collapseTarget = navbarElement.querySelector('.navbar-collapse');
					if (collapseTarget) {
						var togglerButton = document.createElement('button');
						togglerButton.className = 'navbar-toggler';
						togglerButton.type = 'button';
						togglerButton.setAttribute('data-bs-toggle', 'collapse');
						togglerButton.setAttribute('data-bs-target', '#' + (collapseTarget.id || 'navbarCollapse'));
						togglerButton.setAttribute('aria-controls', collapseTarget.id || 'navbarCollapse');
						togglerButton.setAttribute('aria-expanded', 'false');
						togglerButton.setAttribute('aria-label', 'Toggle navigation');

						var togglerIcon = document.createElement('span');
						togglerIcon.className = 'navbar-toggler-icon';
						togglerButton.appendChild(togglerIcon);

						if (!collapseTarget.id) {
							collapseTarget.id = 'navbarCollapse';
						}

						var targetContainer = container || navbarElement;
						var brand = targetContainer.querySelector('.navbar-brand');
						if (brand && brand.nextSibling) {
							targetContainer.insertBefore(togglerButton, brand.nextSibling);
						} else if (brand) {
							targetContainer.appendChild(togglerButton);
						} else {
							targetContainer.insertBefore(togglerButton, targetContainer.firstChild);
						}
					}
				}
			}

			function setupCollapseEvents() {
				var collapseElement = navbarElement.querySelector('.navbar-collapse');
				var togglerButton = navbarElement.querySelector('.navbar-toggler');

				if (collapseElement && window.bootstrap) {
					collapseInstance = new bootstrap.Collapse(collapseElement, {
						toggle: false
					});

					collapseElement.addEventListener('show.bs.collapse', function(e) {
						if (togglerButton) {
							togglerButton.setAttribute('aria-expanded', 'true');
						}
						scope.$apply(function() {
							if (scope.onExpand) scope.onExpand({ event: e });
						});
					});

					collapseElement.addEventListener('hide.bs.collapse', function(e) {
						if (togglerButton) {
							togglerButton.setAttribute('aria-expanded', 'false');
						}
						scope.$apply(function() {
							if (scope.onCollapse) scope.onCollapse({ event: e });
						});
					});

					if (togglerButton) {
						togglerButton.addEventListener('click', function(e) {
							scope.$apply(function() {
								if (scope.onToggle) scope.onToggle({ event: e });
							});
						});
					}
				}
			}

			scope.collapse = function() {
				if (collapseInstance) {
					collapseInstance.hide();
				}
			};

			scope.expand = function() {
				if (collapseInstance) {
					collapseInstance.show();
				}
			};

			scope.toggle = function() {
				if (collapseInstance) {
					collapseInstance.toggle();
				}
			};

			scope.updateBrand = function(newBrand, newHref) {
				scope.brand = newBrand;
				if (newHref) scope.brandHref = newHref;
				
				var brandEl = navbarElement.querySelector('.navbar-brand');
				if (brandEl) {
					brandEl.textContent = newBrand;
					if (newHref) brandEl.href = newHref;
				}
			};

			scope.$on('$destroy', function() {
				if (collapseInstance && typeof collapseInstance.dispose === 'function') {
					collapseInstance.dispose();
				}
			});
		}
	}

})();