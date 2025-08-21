(function() {
	'use strict';

	angular
		.module('componentes')
		.directive('bsButtons', bsButtons);

	bsButtons.$inject = ['$timeout'];

	function bsButtons($timeout) {
		var directive = {
			restrict: 'E',
			transclude: true,
			scope: {
				type: '@?',
				variant: '@?',
				size: '@?',
				outline: '=?',
				disabled: '=?',
				loading: '=?',
				loadingText: '@?',
				onClick: '&?'
			},
			template: '<div ng-transclude></div>',
			link: link
		};

		return directive;

		function link(scope, element, attrs) {
			var buttonElements;

			$timeout(function() {
				initializeButtons();
			});

			function initializeButtons() {
				buttonElements = element[0].querySelectorAll('button, .btn');
				
				buttonElements.forEach(function(btn) {
					applyButtonClasses(btn);
					setupButtonEvents(btn);
				});

				scope.$watch('disabled', function(newVal) {
					buttonElements.forEach(function(btn) {
						if (newVal) {
							btn.disabled = true;
							btn.classList.add('disabled');
						} else {
							btn.disabled = false;
							btn.classList.remove('disabled');
						}
					});
				});

				scope.$watch('loading', function(newVal) {
					buttonElements.forEach(function(btn) {
						if (newVal) {
							btn.disabled = true;
							btn.classList.add('disabled');
							if (scope.loadingText) {
								btn.setAttribute('data-original-text', btn.textContent);
								btn.textContent = scope.loadingText;
							}
							var spinner = document.createElement('span');
							spinner.className = 'spinner-border spinner-border-sm me-2';
							spinner.setAttribute('role', 'status');
							spinner.setAttribute('aria-hidden', 'true');
							btn.insertBefore(spinner, btn.firstChild);
						} else {
							btn.disabled = false;
							btn.classList.remove('disabled');
							var spinner = btn.querySelector('.spinner-border');
							if (spinner) {
								spinner.remove();
							}
							var originalText = btn.getAttribute('data-original-text');
							if (originalText) {
								btn.textContent = originalText;
								btn.removeAttribute('data-original-text');
							}
						}
					});
				});
			}

			function applyButtonClasses(btn) {
				if (!btn.classList.contains('btn')) {
					btn.classList.add('btn');
				}

				var variant = scope.variant || 'primary';
				var outline = scope.outline ? 'outline-' : '';
				var size = scope.size ? 'btn-' + scope.size : '';

				btn.classList.add('btn-' + outline + variant);
				
				if (size) {
					btn.classList.add(size);
				}
			}

			function setupButtonEvents(btn) {
				btn.addEventListener('click', function(e) {
					if (scope.onClick) {
						scope.$apply(function() {
							scope.onClick({ event: e, button: btn });
						});
					}
				});
			}

			scope.enable = function() {
				scope.disabled = false;
			};

			scope.disable = function() {
				scope.disabled = true;
			};

			scope.startLoading = function(text) {
				scope.loading = true;
				if (text) scope.loadingText = text;
			};

			scope.stopLoading = function() {
				scope.loading = false;
			};

			scope.toggle = function() {
				scope.disabled = !scope.disabled;
			};
		}
	}

})();