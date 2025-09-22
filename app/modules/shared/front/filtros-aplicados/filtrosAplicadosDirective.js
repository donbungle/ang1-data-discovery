(function() {
	'use strict';

	angular
		.module('componentes')
		.directive('filtrosAplicados', filtrosAplicados);

	filtrosAplicados.$inject = ['$timeout'];

	function filtrosAplicados($timeout) {
		var directive = {
			restrict: 'E',
			transclude: true,
			scope: {
				lista: '=?',
				onDelete: '&?'
			},
			//template: '<div ng-transclude class="card">LOL</div>',
			templateUrl: 'app/modules/shared/front/filtros-aplicados/filtrosAplicados.html?v='+_.random(1,10000),
			link: link
		};

		return directive;

		function link(scope, element, attrs) {
			$timeout(function() {
				initializeCard();
			});

			function initializeCard() {
				
			}

			scope.quitar_filtro = function($event, filtro) {
				scope.lista = _.remove(scope.lista, function(elem) {
					return elem.id != filtro.id;
				});
				console.log('scope.onDelete', scope.onDelete);
				console.log('!_.isEmpty(scope.onDelete)', !_.isSet(scope.onDelete));
				if(!_.isSet(scope.onDelete)){
					scope.onDelete();
				}
				
				if(_.size(scope.lista) == 0){
					//$('#accordion_btn').click();
				}
			};
		}
	}

})();