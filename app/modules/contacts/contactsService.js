(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:ContactsService
	 * @description
	 * # ContactsService
	 * Service in the app.
	 */

	angular
		.module('contacts')
		.service('ContactsService', ContactsService);

	function ContactsService($q) {
		var service = this;
		
		var contacts = [
			{
				id: 1,
				name: 'Francisco Ruiz',
				email: 'fruiz@example.com',
				phone: '+1-555-0123',
				address: {
					street: '123 Main St',
					city: 'New York',
					state: 'NY',
					zip: '10001'
				}
			},
			{
				id: 2,
				name: 'Maria Garcia',
				email: 'mgarcia@example.com',
				phone: '+1-555-0456',
				address: {
					street: '456 Oak Ave',
					city: 'Los Angeles',
					state: 'CA',
					zip: '90210'
				}
			},
			{
				id: 3,
				name: 'John Smith',
				email: 'jsmith@example.com',
				phone: '+1-555-0789',
				address: {
					street: '789 Pine Rd',
					city: 'Chicago',
					state: 'IL',
					zip: '60601'
				}
			}
		];

		service.getContacts = function() {
			return $q.when(contacts);
		};

		service.getContact = function(id) {
			var contact = contacts.find(function(c) { return c.id == id; });
			return $q.when(contact);
		};

		service.updateContact = function(updatedContact) {
			var index = contacts.findIndex(function(c) { return c.id == updatedContact.id; });
			if (index !== -1) {
				contacts[index] = updatedContact;
			}
			return $q.when(updatedContact);
		};
	}

})();