(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:grillaDirective
	* @description
	* # grillaDirective
	* Directive of the app
	*/

	angular
		.module('componentes')
		.directive('grilla', grilla);

		grilla.$inject = ['$rootScope', 'HelperService'];

		function grilla ($rootScope, HelperService) {

			var directive = {
				restrict: 'E',
                replace: true,
                transclude: false,
				templateUrl:'app/modules/shared/directives/front/grilla/grilla.html',
				scope: {
					data: '=',
					columns: '=',
					//removeCallback: '&?',
				},
				controller: 'GrillaCtrl',
				controllerAs: 'vm',
                bindToController: true, // because the scope is isolated
				link: link,	
				
			}

			return directive;

			function link(scope, element, attrs, vm) {
				HelperService.log('link', scope, vm, attrs)
				if(scope.data == undefined){
					scope.vm.data = [];
				}else{
					scope.columns = _.map(scope.data[0], function(reg){
						//{ name:'firstName', field: 'first-name' },
						HelperService.log('reg', reg);
						return { name:'firstName', field: 'first-name' };					
					});
					scope.vm.data = scope.data;
				}

				//if(scope.columns == undefined){
				//	scope.vm.columns = [];
				//}else{
				//	scope.vm.columns = scope.columns;
				//}
			}

		}

})();
