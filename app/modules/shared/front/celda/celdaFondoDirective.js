(function() {
	'use strict';

	angular
		.module('componentes')
		.directive('celdaFondo', celdaFondo);

	celdaFondo.$inject = ['$timeout'];

	function celdaFondo($timeout) {
		var directive = {
			restrict: 'E',
			transclude: false,
			replace: true,
			scope: {
				texto: '@?',
				imgTop: '=?',
				onFooterClick: '&?'
			},
			templateUrl:'app/modules/shared/front/celda/celdaFondo.html?'+_.random(1,1000),
			//template: '<div>' +
			//				'<button class="btn btn-link text-renta4-alt" data-bs-toggle="popover" data-bs-content="value">' +
			//					'{{vm.texto}}' +
			//				'</button>' +
			//			'</div>', 
			//bindToController: true,
			link: link
		};

		return directive;

		function link(scope, element, attrs) {
			console.log('celdaFondo link scope', scope);
			console.log('celdaFondo link element', element);
			console.log('celdaFondo link attrs', attrs);

			$timeout(function() {
				initializeCard();
			},1);

			function initializeCard() {
				
			}

			
		}
	}

})();