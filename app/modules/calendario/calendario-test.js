(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:calendarioTest
	 * @description
	 * # calendarioTest
	 * Test of the app
	 */

	describe('calendario test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('gema2');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('CalendarioCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
