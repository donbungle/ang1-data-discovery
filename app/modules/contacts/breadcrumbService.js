(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:BreadcrumbService
	 * @description
	 * # BreadcrumbService
	 * Service for managing breadcrumbs in the contacts module.
	 */

	angular
		.module('contacts')
		.service('BreadcrumbService', BreadcrumbService);

	BreadcrumbService.$inject = ['$state'];

	function BreadcrumbService($state) {
		var service = this;
		
		var breadcrumbConfigs = {
			'contacts': [
				{ text: 'Home', href: '/' }
			],
			'contacts.list': [
				{ text: 'Home', href: '/' },
				{ text: 'Contacts' }
			],
			'contacts.detail': [
				{ text: 'Home', href: '/' },
				{ text: 'Contacts', href: '/contacts' },
				{ text: '', dynamic: 'contact.name' }
			],
			'contacts.detail.edit': [
				{ text: 'Home', href: '/' },
				{ text: 'Contacts', href: '/contacts' },
				{ text: '', dynamic: 'contact.name', href: '' },
				{ text: 'Edit' }
			]
		};

		service.getBreadcrumbs = function(stateName, data) {
			var config = breadcrumbConfigs[stateName];
			if (!config) {
				return [];
			}

			return config.map(function(item) {
				var breadcrumb = angular.copy(item);
				
				if (item.dynamic && data) {
					var keys = item.dynamic.split('.');
					var value = data;
					for (var i = 0; i < keys.length; i++) {
						if (value && value[keys[i]]) {
							value = value[keys[i]];
						} else {
							value = '';
							break;
						}
					}
					breadcrumb.text = value;
					
					// Generate href for contact detail breadcrumb
					if (item.dynamic === 'contact.name' && data.contact && stateName === 'contacts.detail.edit') {
						breadcrumb.href = '/contacts/' + data.contact.id;
					}
				}
				
				return breadcrumb;
			});
		};

		service.navigateTo = function(item, event) {
			if (event) {
				event.preventDefault();
			}
			
			if (item.href && item.href !== '') {
				if (item.href === '/') {
					$state.go('home.dashboard');
				} else if (item.href === '/contacts') {
					$state.go('contacts.list');
				} else if (item.href.startsWith('/contacts/')) {
					var contactId = item.href.split('/')[2];
					$state.go('contacts.detail', { contactId: contactId });
				}
			}
		};
	}

})();