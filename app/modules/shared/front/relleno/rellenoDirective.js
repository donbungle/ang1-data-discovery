(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:rellenoDirective
	* @description
	* # rellenoDirective
	* Directive of the app
	*/

	angular
		.module('componentes')
		.directive('relleno', relleno);

		relleno.$inject = ['$rootScope', 'ColorService'];

		function relleno ($rootScope, ColorService) {

			var directive = {
				restrict: 'E',
                replace: true,
                transclude: false,
				templateUrl:'app/modules/shared/directives/front/relleno/relleno.html',
				scope: {
					color: '@?',
					//removeCallback: '&?',
				},
				controller: 'RellenoCtrl',
				controllerAs: 'vm',
                bindToController: false, // because the scope is isolated
				link: link,	
				
			}

			return directive;

			function link(scope, element, attrs, vm) {
				if(scope.color == undefined){
					scope.vm.color = ColorService.getRandomColor();
				}else{
					scope.vm.color = scope.color;
				}
			}

		}

})();
