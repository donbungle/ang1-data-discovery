(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:HomeCtrl
	* @description
	* # HomeCtrl
	* Controller of the app
	*/

	angular
		.module('r4-ang1')
		.controller('HomeCtrl', Home);

	Home.$inject = [
		'homeService',
		'$rootScope',
		'$scope',
		'$controller',
	];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Home(
		homeService, 
		$rootScope, 
		$scope, 
		$controller,
	) {
		/*jshint validthis: true */
		var vm = this;
		angular.extend(vm, $controller('AppCtrl', {$scope: $scope}));
		vm.$onInit = onInit;
		vm.app_name = $rootScope.app.name;
		vm.app_icon = $rootScope.app.icon;
		vm.title = "Hello, " + vm.app_name + "!";
		vm.version = "1.0.0";
		vm.menu = homeService.getMenu();

        console.log('vm.uploader', vm.uploader);


		vm.myData = [
			{
				firstName: "Cox",
				lastName: "Carney",
				company: "Enormo",
				employed: true
			},
			{
				firstName: "Lorraine",
				lastName: "Wise",
				company: "Comveyer",
				employed: false
			},
			{
				firstName: "Nancy",
				lastName: "Waters",
				company: "Fuelton",
				employed: false
			}
		  ];
		;


		function onInit(){
			console.log('Home onInit', vm);
			console.log('Home $scope', $scope);
		}

		vm.openModal = function() {
			var modalEl = document.getElementById('exampleModal');
			var modal = new bootstrap.Modal(modalEl);
			modal.show();
		};

		vm.openModal2 = function() {
			var wrapperScope = angular.element(document.getElementById('myModal')).scope();
			if (wrapperScope && wrapperScope.show) {
				wrapperScope.show();
			}

		};
		
	}

})();
