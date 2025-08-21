(function() {
	'use strict';

	angular
		.module('componentesNuevos')
		.controller('ComponentesNuevosCtrl', ComponentesNuevosCtrl);

	ComponentesNuevosCtrl.$inject = ['$scope', '$timeout'];

	function ComponentesNuevosCtrl($scope, $timeout) {
		var vm = this;

		// Accordion Example
		vm.accordionOptions = {
			parent: false // Allow multiple panels open
		};

		vm.onAccordionShow = function(event, target) {
			console.log('Accordion panel showing:', target.id);
		};

		vm.onAccordionHide = function(event, target) {
			console.log('Accordion panel hiding:', target.id);
		};

		// Buttons Example
		vm.isLoading = false;
		vm.isDisabled = false;

		vm.handleButtonClick = function(event, button) {
			console.log('Button clicked:', button.textContent);
			vm.isLoading = true;
			
			$timeout(function() {
				vm.isLoading = false;
			}, 2000);
		};

		vm.toggleDisabled = function() {
			vm.isDisabled = !vm.isDisabled;
		};

		// Breadcrumb Example
		vm.breadcrumbItems = [
			{ text: 'Inicio', href: '/' },
			{ text: 'Módulos', href: '/modules' },
			{ text: 'Componentes', href: '/components' },
			{ text: 'Componentes Nuevos' }
		];

		vm.handleBreadcrumbClick = function(item, index, event) {
			console.log('Breadcrumb clicked:', item.text, 'at index:', index);
			event.preventDefault();
			alert('Navegando a: ' + item.text);
		};

		vm.addBreadcrumb = function() {
			var newItem = { text: 'Nueva Sección', href: '/nueva' };
			vm.breadcrumbItems.splice(-1, 0, newItem);
		};

		// Card Example
		vm.cardData = {
			header: 'Ejemplo de Card',
			title: 'Card con Bootstrap 5',
			subtitle: 'Subtitle del card',
			text: 'Este es un ejemplo práctico de cómo usar el directive bs-card con diferentes opciones y configuraciones.',
			footer: 'Footer del card',
			imgSrc: 'https://via.placeholder.com/300x200',
			imgAlt: 'Imagen de ejemplo',
			variant: 'primary'
		};

		vm.handleCardClick = function(event, element) {
			console.log('Card clicked:', element.className);
			alert('Card ' + element.className + ' fue clickeado');
		};

		vm.updateCard = function() {
			vm.cardData.title = 'Título Actualizado - ' + new Date().toLocaleTimeString();
			vm.cardData.text = 'El contenido del card fue actualizado a las ' + new Date().toLocaleString();
		};

		// Tabs Example
		vm.activeTab = '#tab-bootstrap';
		vm.currentTabContent = 'Bootstrap Components';

		vm.handleTabChange = function(event, tab, relatedTarget, activeTab) {
			console.log('Tab changed to:', activeTab);
			switch(activeTab) {
				case '#tab-bootstrap':
					vm.currentTabContent = 'Bootstrap Components';
					break;
				case '#tab-charts':
					vm.currentTabContent = 'DC.js Charts';
					break;
				case '#tab-examples':
					vm.currentTabContent = 'Practical Examples';
					break;
			}
		};

		vm.switchTab = function(tabId) {
			vm.activeTab = tabId;
		};

		// Navbar Example
		vm.navbarBrand = 'Componentes Nuevos Demo';
		vm.navbarCollapsed = false;

		vm.handleNavbarToggle = function(event) {
			vm.navbarCollapsed = !vm.navbarCollapsed;
			console.log('Navbar toggled. Collapsed:', vm.navbarCollapsed);
		};

		vm.handleBrandClick = function(event, brand) {
			console.log('Brand clicked');
			alert('¡Hola desde ' + vm.navbarBrand + '!');
		};

		// DC.js Charts Examples
		vm.chartData = [
			{ month: 'Enero', sales: 1200, region: 'Norte', category: 'Tecnología' },
			{ month: 'Febrero', sales: 1500, region: 'Sur', category: 'Tecnología' },
			{ month: 'Marzo', sales: 800, region: 'Norte', category: 'Salud' },
			{ month: 'Abril', sales: 2000, region: 'Este', category: 'Tecnología' },
			{ month: 'Mayo', sales: 1100, region: 'Sur', category: 'Educación' },
			{ month: 'Junio', sales: 1800, region: 'Norte', category: 'Tecnología' },
			{ month: 'Julio', sales: 1300, region: 'Oeste', category: 'Salud' },
			{ month: 'Agosto', sales: 1600, region: 'Este', category: 'Educación' }
		];

		vm.pieChartData = [
			{ category: 'Tecnología', value: 45, color: '#1f77b4' },
			{ category: 'Salud', value: 25, color: '#ff7f0e' },
			{ category: 'Educación', value: 20, color: '#2ca02c' },
			{ category: 'Otros', value: 10, color: '#d62728' }
		];

		vm.handleChartFilter = function(chart, filter) {
			console.log('Chart filtered:', filter);
		};

		vm.handleChartRender = function(chart) {
			console.log('Chart rendered');
		};

		vm.resetAllFilters = function() {
			if (window.dc) {
				window.dc.filterAll();
				window.dc.redrawAll();
			}
		};

		vm.refreshCharts = function() {
			if (window.dc) {
				window.dc.redrawAll();
			}
		};

		// Utility functions for demonstrations
		vm.showAlert = function(message) {
			alert(message);
		};

		vm.logToConsole = function(message, data) {
			console.log(message, data);
		};

		// Initialize component states
		vm.componentStates = {
			showAccordion: true,
			showButtons: true,
			showBreadcrumb: true,
			showCards: true,
			showTabs: true,
			showNavbar: true,
			showCharts: true
		};

		vm.toggleComponent = function(component) {
			vm.componentStates[component] = !vm.componentStates[component];
		};

		// Sample data for different scenarios
		vm.generateRandomData = function() {
			var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
			var regions = ['Norte', 'Sur', 'Este', 'Oeste'];
			var categories = ['Tecnología', 'Salud', 'Educación', 'Finanzas'];
			
			vm.chartData = [];
			for (var i = 0; i < 20; i++) {
				vm.chartData.push({
					month: months[Math.floor(Math.random() * months.length)],
					sales: Math.floor(Math.random() * 2000) + 500,
					region: regions[Math.floor(Math.random() * regions.length)],
					category: categories[Math.floor(Math.random() * categories.length)]
				});
			}
		};

		console.log('ComponentesNuevosCtrl initialized with practical examples');
	}

})();