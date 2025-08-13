(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:componentesTest
	 * @description
	 * # componentesTest
	 * Test of the app
	 */

	describe('componentes test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('ComponentesCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
