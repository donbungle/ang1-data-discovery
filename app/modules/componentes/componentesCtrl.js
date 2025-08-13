(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:componentesCtrl
	* @description
	* # componentesCtrl
	* Controller of the app
	*/

  	angular
		.module('componentes')
		.controller('ComponentesCtrl', Componentes);

		Componentes.$inject = ['$scope', '$rootScope', '$mdTheming', 'ColorService', '$timeout'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Componentes($scope, $rootScope, $mdTheming, ColorService, $timeout) {
			/*jshint validthis: true */
			var vm = this;

			vm.cont = 1;

			vm.$onInit = onInit;

			function onInit(){
				//console.log('ComponentesCtrl onInit');
				var COLORS = ColorService.getColoresDisponibles();
				//COLORS[Math.floor(Math.random() * COLORS.length)];
				vm.primary_obj = COLORS[Math.floor(Math.random() * COLORS.length)];
				vm.warn_obj = COLORS[Math.floor(Math.random() * COLORS.length)];
				vm.accent_obj = COLORS[Math.floor(Math.random() * COLORS.length)];
				vm.primary_h1_obj = '300';
				vm.warn_h1_obj = '300';
				vm.accent_h1_obj = '300';
				vm.primary_h2_obj = '900';
				vm.warn_h2_obj = '900';
				vm.accent_h2_obj = '900';
				vm.primary_h3_obj = 'A700';
				vm.warn_h3_obj = 'A700';
				vm.accent_h3_obj = 'A700';
				vm.default_obj = '900';
				vm.dark_obj = true;
				$timeout(function(){
					//vm.test();
				}, 500);
				
			}


			


			console.log('ComponentesCtrl vm', vm);
			vm.test = function(){
				//console.log('test', $mdTheming.THEMES);
				$mdTheming.defineTheme('myTheme'+vm.cont, {
					primary: vm.primary_obj,
					primaryHues: {
						'default': vm.default_obj,
						'hue-1': vm.primary_h1_obj,
						'hue-2': vm.primary_h2_obj,
						'hue-3': vm.primary_h3_obj,
					},
					accent: vm.warn_obj,
					accentHues: {
						'default': vm.default_obj,
						'hue-1': vm.accent_h1_obj,
						'hue-2': vm.accent_h2_obj,
						'hue-3': vm.accent_h3_obj,
					},
					warn: vm.accent_obj,
					// It's not necessary to specify all hues in the object.
					warnHues: {
						'default': vm.default_obj,
					    'hue-1': vm.warn_h1_obj,
						'hue-2': vm.warn_h2_obj,
						'hue-3': vm.warn_h3_obj,
					},
					// It's not necessary to specify custom hues at all.
					background: vm.background_obj,
					backgroundHues:{
						'default': vm.default_obj,
					    'hue-1': vm.warn_h1_obj,
						'hue-2': vm.warn_h2_obj,
						'hue-3': vm.warn_h3_obj,
					},
					dark: vm.dark_obj,
				  });
				  //console.log('test', $mdTheming.THEMES);
				  //$mdTheming.generateTheme('myTheme'+vm.cont);
				  //console.log('ComponentesCtrl $scope', $scope);
				  //console.log('ComponentesCtrl rootScope', $rootScope);
				  $rootScope.tema_actual = "myTheme"+vm.cont;
				  vm.tema_actual = $rootScope.tema_actual;
				  vm.cont++;
			}
		}

})();
