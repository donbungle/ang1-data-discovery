(function() {
	'use strict';

	angular
		.module('componentes')
		.directive('bsCarousel', bsCarousel);

		bsCarousel.$inject = ['$rootScope'];

		function bsCarousel ($rootScope) {

			var directive = {
				restrict: 'E',
                replace: true,
                transclude: true,
				templateUrl:'app/modules/shared/front/carousel/carousel.html',
				scope: {
					carouselId: '@',
					interval: '@',
					ride: '@',
					indicators: '=?',
					controls: '=?',
					onSlide: '&?',
					onSlid: '&?'
				},
				controller: 'CarouselCtrl',
				controllerAs: 'vm',
                bindToController: true,
				link: link
			}

			return directive;

			function link(scope, element, attrs, vm) {
				var carouselElement = element[0];
				var carouselInstance;

				// Initialize Bootstrap carousel
				if (window.bootstrap && window.bootstrap.Carousel) {
					var options = {
						interval: parseInt(scope.vm.interval) || 5000,
						ride: scope.vm.ride || false
					};
					carouselInstance = new bootstrap.Carousel(carouselElement, options);
				}

				// Event listeners
				carouselElement.addEventListener('slide.bs.carousel', function(event) {
					if (scope.vm.onSlide) {
						scope.$apply(function() {
							scope.vm.onSlide({event: event});
						});
					}
				});

				carouselElement.addEventListener('slid.bs.carousel', function(event) {
					if (scope.vm.onSlid) {
						scope.$apply(function() {
							scope.vm.onSlid({event: event});
						});
					}
				});

				// Expose methods to controller
				scope.vm.next = function() {
					if (carouselInstance) {
						carouselInstance.next();
					}
				};

				scope.vm.prev = function() {
					if (carouselInstance) {
						carouselInstance.prev();
					}
				};

				scope.vm.to = function(index) {
					if (carouselInstance) {
						carouselInstance.to(index);
					}
				};

				scope.vm.cycle = function() {
					if (carouselInstance) {
						carouselInstance.cycle();
					}
				};

				scope.vm.pause = function() {
					if (carouselInstance) {
						carouselInstance.pause();
					}
				};

				// Cleanup
				scope.$on('$destroy', function() {
					if (carouselInstance) {
						carouselInstance.dispose();
					}
				});
			}
		}

})();