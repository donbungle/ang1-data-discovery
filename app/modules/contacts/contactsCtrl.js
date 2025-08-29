(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:ContactsCtrl
	 * @description
	 * # ContactsCtrl
	 * Controller of the app
	 */

	angular
		.module('contacts')
		.controller('ContactsCtrl', ContactsCtrl)
		.controller('ContactsListCtrl', ContactsListCtrl)
		.controller('ContactsDetailCtrl', ContactsDetailCtrl)
		.controller('ContactsEditCtrl', ContactsEditCtrl);

	ContactsCtrl.$inject = ['contacts', 'BreadcrumbService'];
	ContactsListCtrl.$inject = ['$scope', '$state', 'BreadcrumbService'];
	ContactsDetailCtrl.$inject = ['$scope', 'contact', '$state', 'BreadcrumbService'];
	ContactsEditCtrl.$inject = ['$scope', '$state', 'ContactsService', 'BreadcrumbService'];

	function ContactsCtrl(contacts, BreadcrumbService) {
		var vm = this;
		vm.contacts = contacts;
		vm.breadcrumbs = BreadcrumbService.getBreadcrumbs('contacts');
		
		vm.handleBreadcrumbClick = function(item, index, event) {
			BreadcrumbService.navigateTo(item, event);
		};
	}

	function ContactsListCtrl($scope, $state, BreadcrumbService) {
		var vm = this;
		vm.contacts = $scope.vm.contacts;
		vm.breadcrumbs = BreadcrumbService.getBreadcrumbs('contacts.list');
		
		vm.handleBreadcrumbClick = function(item, index, event) {
			BreadcrumbService.navigateTo(item, event);
		};
	}

	function ContactsDetailCtrl($scope, contact, $state, BreadcrumbService) {
		var vm = this;
		vm.contact = contact;
		vm.contacts = $scope.vm.contacts;
		vm.breadcrumbs = BreadcrumbService.getBreadcrumbs('contacts.detail', { contact: contact });
		
		vm.editContact = function() {
			$state.go('contacts.detail.edit');
		};
		
		vm.handleBreadcrumbClick = function(item, index, event) {
			BreadcrumbService.navigateTo(item, event);
		};
	}

	function ContactsEditCtrl($scope, $state, ContactsService, BreadcrumbService) {
		var vm = this;
		vm.contact = angular.copy($scope.vm.contact);
		vm.breadcrumbs = BreadcrumbService.getBreadcrumbs('contacts.detail.edit', { contact: vm.contact });
		
		vm.save = function() {
			ContactsService.updateContact(vm.contact);
			$state.go('contacts.detail', { contactId: vm.contact.id });
		};
		
		vm.cancel = function() {
			$state.go('contacts.detail', { contactId: vm.contact.id });
		};
		
		vm.handleBreadcrumbClick = function(item, index, event) {
			BreadcrumbService.navigateTo(item, event);
		};
	}

})();