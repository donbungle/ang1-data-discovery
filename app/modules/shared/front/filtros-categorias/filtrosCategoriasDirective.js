(function() {
	'use strict';

	angular
		.module('componentes')
		.directive('filtrosCategorias', filtrosCategorias);

	filtrosCategorias.$inject = ['$timeout'];

	function filtrosCategorias($timeout) {
		var directive = {
			restrict: 'E',
			transclude: true,
			scope: {
				categorias: '=?',
				lista: '=?',
				onChage: '&?'
			},
			//template: '<div ng-transclude class="card">LOL</div>',
			templateUrl: 'app/modules/shared/front/filtros-categorias/filtrosCategorias.html?v='+_.random(1,10000),
			link: link
		};

		return directive;

		function link(scope, element, attrs) {
			$timeout(function() {
				initializeCard();
			});

			function initializeCard() {
				
			}

			scope.check_opcion = function($event, opcion, color){
				console.log('$event', $event);
				console.log('opcion', opcion);
				if(!opcion.checked){
					scope.lista.push({
						'label': opcion.titulo,
						'id': opcion.id,
						'valor': opcion.value,
						'color': color,
					});
					if(_.size(scope.lista) == 1){
						//$('#accordion_btn').click();
					}
				}else{
					_.forEach(scope.categorias, function(categoria) {
						console.log(categoria);
					});
					//const item = scope.categorias.find(el => el.id === opcion.id);
					//if (item) {
					//	item.checked = false;
					//}
					scope.lista= _.filter(scope.lista, function(elem) {
						return elem.id != opcion.id;
					});
					//scope.categorias
				}
			}
		}
	}

})();