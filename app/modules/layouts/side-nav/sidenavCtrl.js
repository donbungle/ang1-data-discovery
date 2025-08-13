(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:SidenavCtrl
	* @description
	* # SidenavCtrl
	* Controller of the app
	*/
	angular
		.module('r4-ang1')
		.controller('SidenavCtrl', SidenavCtrl)
		.controller('SettingsCtrl', SettingsCtrl);

	// Injecting Denpendencies

	SidenavCtrl.$inject = ['$rootScope', '$state', 'MenuService', '$scope',];
	SettingsCtrl.$inject = ['$rootScope'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function SidenavCtrl($rootScope, $state, MenuService, $scope,) {
		/*jshint validthis: true */
		var vm = this;
		vm.lol = "LOL";
		vm.$onInit = onInit;
		vm.toggleSidenav = function (menuId) {

		};
		
		vm.closeSidenav = function() {
			
		};

		// Close menu on small screen after click on menu item.
		// Only use $scope in controllerAs when necessary; for example, publishing and subscribing events using $emit, $broadcast, $on or $watch.
		$scope.$on('$stateChangeSuccess', vm.closeSidenav);
		
		vm.menu = MenuService.listMenu();

		vm.navigateTo = function (target) {
			var page = target;
			$state.go(page);
		};

		function onInit(){
			vm.app_name = $rootScope.app.name;
			vm.app_icon = $rootScope.app.icon;
		}

	}

	function SettingsCtrl($rootScope) {
		/*jshint validthis: true */
		var vm = this;
		vm.app_name = $rootScope.app.name;
		vm.app_icon = $rootScope.app.icon;

		vm.$onInit = onInit;

		function onInit(){
			
		}
	}

})();
