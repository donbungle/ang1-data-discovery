(function() {
	'use strict';

	angular
		.module('dashboardDataset')
		.config(dashboardDatasetConfig);

	dashboardDatasetConfig.$inject = ['$stateProvider'];

	function dashboardDatasetConfig($stateProvider) {
		$stateProvider
			.state('dashboard-dataset', {
				url: '/dashboard-dataset',
				templateUrl: 'app/modules/dashboard-dataset/dashboard-dataset.html',
				controller: 'DashboardDatasetCtrl',
				controllerAs: 'vm',
				data: {
					pageTitle: 'Dashboard Dataset - Financial Analysis'
				}
			});
	}

})();