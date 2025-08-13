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
		'FileUploader',
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
		FileUploader,
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

		vm.uploader = new FileUploader({
            url: 'upload.php'
            ,timeout: 2000
        });

		vm.uploader.filters.push({
            name: 'syncFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                console.log('syncFilter');
                return this.queue.length < 10;
            }
        });

		vm.uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
            console.log('onWhenAddingFileFailed', item, filter, options);
        };
        vm.uploader.onAfterAddingFile = function(fileItem) {
            console.log('onAfterAddingFile', fileItem);
        };
        vm.uploader.onAfterAddingAll = function(addedFileItems) {
            console.log('onAfterAddingAll', addedFileItems);
        };
        vm.uploader.onBeforeUploadItem = function(item) {
            console.log('onBeforeUploadItem', item);
        };
        vm.uploader.onProgressItem = function(fileItem, progress) {
            console.log('onProgressItem', fileItem, progress);
        };
        vm.uploader.onProgressAll = function(progress) {
            console.log('onProgressAll', progress);
        };
        vm.uploader.onSuccessItem = function(fileItem, response, status, headers) {
            console.log('onSuccessItem', fileItem, response, status, headers);
        };
        vm.uploader.onErrorItem = function(fileItem, response, status, headers) {
            console.log('onErrorItem', fileItem, response, status, headers);
        };
        vm.uploader.onCancelItem = function(fileItem, response, status, headers) {
            console.log('onCancelItem', fileItem, response, status, headers);
        };
        vm.uploader.onCompleteItem = function(fileItem, response, status, headers) {
            console.log('onCompleteItem', fileItem, response, status, headers);
        };

        vm.uploader.onTimeoutItem = function(fileItem) {
            console.log('onTimeoutItem', fileItem);
        };

        vm.uploader.onCompleteAll = function() {
            console.log('onCompleteAll');
        };

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

		vm.desserts = [
			'Apple Pie',
			'Donut',
			'Fudge',
			'Cupcake',
			'Ice Cream',
			'Tiramisu',
		];
	}

})();
