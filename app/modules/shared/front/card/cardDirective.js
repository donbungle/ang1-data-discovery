(function() {
	'use strict';

	angular
		.module('componentes')
		.directive('bsCard', bsCard);

	bsCard.$inject = ['$timeout'];

	function bsCard($timeout) {
		var directive = {
			restrict: 'E',
			transclude: true,
			scope: {
				header: '@?',
				title: '@?',
				subtitle: '@?',
				text: '@?',
				footer: '@?',
				imgSrc: '@?',
				imgAlt: '@?',
				imgTop: '=?',
				variant: '@?',
				border: '@?',
				textAlign: '@?',
				onHeaderClick: '&?',
				onBodyClick: '&?',
				onFooterClick: '&?'
			},
			template: '<div ng-transclude class="card"></div>',
			link: link
		};

		return directive;

		function link(scope, element, attrs) {
			var cardElement = element[0].firstElementChild;

			$timeout(function() {
				initializeCard();
			});

			function initializeCard() {
				if (!cardElement.classList.contains('card')) {
					cardElement.classList.add('card');
				}

				applyCardStyles();
				setupCardContent();
				setupCardEvents();

				scope.$watch('variant', function(newVal, oldVal) {
					if (oldVal) cardElement.classList.remove('text-bg-' + oldVal);
					if (newVal) cardElement.classList.add('text-bg-' + newVal);
				});

				scope.$watch('border', function(newVal, oldVal) {
					if (oldVal) cardElement.classList.remove('border-' + oldVal);
					if (newVal) cardElement.classList.add('border-' + newVal);
				});

				scope.$watch('textAlign', function(newVal, oldVal) {
					if (oldVal) cardElement.classList.remove('text-' + oldVal);
					if (newVal) cardElement.classList.add('text-' + newVal);
				});
			}

			function applyCardStyles() {
				if (scope.variant) {
					cardElement.classList.add('text-bg-' + scope.variant);
				}
				
				if (scope.border) {
					cardElement.classList.add('border-' + scope.border);
				}
				
				if (scope.textAlign) {
					cardElement.classList.add('text-' + scope.textAlign);
				}
			}

			function setupCardContent() {
				if (scope.imgSrc && scope.imgTop !== false) {
					var img = document.createElement('img');
					img.src = scope.imgSrc;
					img.alt = scope.imgAlt || '';
					img.className = 'card-img-top';
					cardElement.insertBefore(img, cardElement.firstChild);
				}

				if (scope.header) {
					var header = document.createElement('div');
					header.className = 'card-header';
					header.textContent = scope.header;
					if (scope.imgSrc && scope.imgTop !== false) {
						cardElement.insertBefore(header, cardElement.children[1]);
					} else {
						cardElement.insertBefore(header, cardElement.firstChild);
					}
				}

				if (scope.title || scope.subtitle || scope.text) {
					var existingBody = cardElement.querySelector('.card-body');
					if (!existingBody) {
						var body = document.createElement('div');
						body.className = 'card-body';
						
						if (scope.title) {
							var title = document.createElement('h5');
							title.className = 'card-title';
							title.textContent = scope.title;
							body.appendChild(title);
						}
						
						if (scope.subtitle) {
							var subtitle = document.createElement('h6');
							subtitle.className = 'card-subtitle mb-2 text-body-secondary';
							subtitle.textContent = scope.subtitle;
							body.appendChild(subtitle);
						}
						
						if (scope.text) {
							var text = document.createElement('p');
							text.className = 'card-text';
							text.textContent = scope.text;
							body.appendChild(text);
						}
						
						cardElement.appendChild(body);
					}
				}

				if (scope.footer) {
					var footer = document.createElement('div');
					footer.className = 'card-footer';
					footer.textContent = scope.footer;
					cardElement.appendChild(footer);
				}

				if (scope.imgSrc && scope.imgTop === false) {
					var img = document.createElement('img');
					img.src = scope.imgSrc;
					img.alt = scope.imgAlt || '';
					img.className = 'card-img-bottom';
					cardElement.appendChild(img);
				}
			}

			function setupCardEvents() {
				var header = cardElement.querySelector('.card-header');
				var body = cardElement.querySelector('.card-body');
				var footer = cardElement.querySelector('.card-footer');

				if (header && scope.onHeaderClick) {
					header.style.cursor = 'pointer';
					header.addEventListener('click', function(e) {
						scope.$apply(function() {
							scope.onHeaderClick({ event: e, element: header });
						});
					});
				}

				if (body && scope.onBodyClick) {
					body.style.cursor = 'pointer';
					body.addEventListener('click', function(e) {
						scope.$apply(function() {
							scope.onBodyClick({ event: e, element: body });
						});
					});
				}

				if (footer && scope.onFooterClick) {
					footer.style.cursor = 'pointer';
					footer.addEventListener('click', function(e) {
						scope.$apply(function() {
							scope.onFooterClick({ event: e, element: footer });
						});
					});
				}
			}

			scope.updateTitle = function(newTitle) {
				scope.title = newTitle;
				var titleEl = cardElement.querySelector('.card-title');
				if (titleEl) titleEl.textContent = newTitle;
			};

			scope.updateText = function(newText) {
				scope.text = newText;
				var textEl = cardElement.querySelector('.card-text');
				if (textEl) textEl.textContent = newText;
			};

			scope.updateImage = function(newSrc, newAlt) {
				scope.imgSrc = newSrc;
				if (newAlt) scope.imgAlt = newAlt;
				var imgEl = cardElement.querySelector('.card-img-top, .card-img-bottom');
				if (imgEl) {
					imgEl.src = newSrc;
					if (newAlt) imgEl.alt = newAlt;
				}
			};
		}
	}

})();