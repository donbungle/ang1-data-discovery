(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:modalTest
	 * @description
	 * # modalTest
	 * Test of the app
	 */

	describe('modal test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('gema2');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('ModalCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
