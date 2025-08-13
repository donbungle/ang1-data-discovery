(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:serviciosTest
	 * @description
	 * # serviciosTest
	 * Test of the app
	 */

	describe('servicios test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('ServiciosCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
