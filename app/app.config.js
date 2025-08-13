(function () {
	'use strict';

	/**
	 * @ngdoc configuration file
	 * @name app.config:config
	 * @description
	 * # Config and run block
	 * Configutation of the app
	 */


	angular
		.module('r4-ang1')
		.config(configure)
		.run(runBlock);

	configure.$inject = [
		'$urlRouterProvider',
		'$httpProvider',
	];

	function configure(
		$urlRouterProvider,
		$httpProvider,
	) {
		// This is required for Browser Sync to work poperly
		//delete $httpProvider.defaults.headers.post["If-Modified-Since"];
		//delete $httpProvider.defaults.headers.get["If-Modified-Since"];
		//$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
		//$httpProvider.defaults.useXDomain = true;
		//delete $httpProvider.defaults.headers.common['X-Requested-With'];

	
		$urlRouterProvider
			.otherwise('/dashboard');

	}

	runBlock.$inject = ['$rootScope', '$http'];

	function runBlock($rootScope, $http) {
		'use strict';

		$http.defaults.xsrfHeaderName = 'X-CSRFToken';
  		$http.defaults.xsrfCookieName = 'csrftoken';

		$rootScope.url_indicadores = 'https://www.indecon.online/';
		$rootScope.tema_actual = "renta4";

		var _baseUrl, _apiUrl;
		
		if(location.host == "localhost:2222"){
			_baseUrl = 'http://localhost:2222/#!';
			_apiUrl = 'http://localhost:5502';
		}else{
			_baseUrl = 'http://146.190.142.235/#!';
			_apiUrl = 'http://146.190.142.235:5502';
		}
		// blur_on border_style bubble_chart format_shapes insert_chart cloud_done cloud_circle 
		// developer_dashboard device_hub cast_connected memory security toys add_to_photos blur_circular
		// camera broken_image filter_vintage flare flash_on gradient grain grid_off grid_on hdr_weak 
		// store_mall_directory all_inclusive casino spa
		// 
		$rootScope.app = {
			baseUrl: _baseUrl,
			name: 'iManager',	
			icon: 'logo2',
			apiUrl: _apiUrl,
		};
		$rootScope.session = {};

	}


})();
