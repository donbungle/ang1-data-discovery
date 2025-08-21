(function() {
	'use strict';

	angular
		.module('componentes')
		.controller('CarouselCtrl', CarouselCtrl);

		CarouselCtrl.$inject = ['$scope'];

		function CarouselCtrl($scope) {
			var vm = this;

			// Controller initialization
			vm.init = function() {
				// Set default values
				vm.carouselId = vm.carouselId || 'defaultCarousel';
				vm.interval = vm.interval || '5000';
				vm.ride = vm.ride || 'carousel';
				vm.indicators = vm.indicators !== false;
				vm.controls = vm.controls !== false;
			};

			// Initialize
			vm.init();
		}

})();