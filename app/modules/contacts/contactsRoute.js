'use strict';

/**
* @ngdoc function
* @name app.route:ContactsRoute
* @description
* # ContactsRoute
* Route of the app
*/

angular.module('contacts')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			
			.state('contacts', {
				url: '/contacts',
				abstract: true,
				templateUrl: 'app/modules/home/home.html',
				controller: 'ContactsCtrl',
				controllerAs: 'vm',
				resolve: {
					contacts: function(ContactsService) {
						return ContactsService.getContacts();
					}
				},
				data: {
					breadcrumbs: [
						{ text: 'Home', href: '/' }
					]
				}
			})
			.state('contacts.list', {
				url: '',
				templateUrl: 'app/modules/contacts/contacts-list.html',
				controller: 'ContactsListCtrl',
				controllerAs: 'vm',
				data: {
					breadcrumbs: [
						{ text: 'Home', href: '/' },
						{ text: 'Contacts' }
					]
				}
			})
			.state('contacts.detail', {
				url: '/{contactId}',
				templateUrl: 'app/modules/contacts/contacts-detail.html',
				controller: 'ContactsDetailCtrl',
				controllerAs: 'vm',
				resolve: {
					contact: function($stateParams, ContactsService) {
						return ContactsService.getContact($stateParams.contactId);
					}
				},
				data: {
					breadcrumbs: [
						{ text: 'Home', href: '/' },
						{ text: 'Contacts', href: '/contacts' },
						{ text: '{{contact.name}}' }
					]
				}
			})
			.state('contacts.detail.edit', {
				url: '/edit',
				templateUrl: 'app/modules/contacts/contacts-edit.html',
				controller: 'ContactsEditCtrl',
				controllerAs: 'vm',
				data: {
					breadcrumbs: [
						{ text: 'Home', href: '/' },
						{ text: 'Contacts', href: '/contacts' },
						{ text: '{{contact.name}}', href: '/contacts/{{contact.id}}' },
						{ text: 'Edit' }
					]
				}
			});
			
	}]);