(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:modalModule
	 * @description
	 * # modalModule
	 * Module of the app
	 */

	  angular.module('modal', ['ngDialog', 'calendario', 'xeditable', 'ui.bootstrap']);
	  
	  angular.module('modal')
	  .config(['$uibTooltipProvider', function($uibTooltipProvider){
		  $uibTooltipProvider.setTriggers({'click': 'click'});
	  }])
	  .run(['editableOptions', function(editableOptions) {
		editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs4', 'bs2', 'default'
	  }]);

})();
