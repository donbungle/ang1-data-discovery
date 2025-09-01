(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:modalService
	 * @description
	 * # modalService
	 * Service of the app
	 */

  	angular
		.module('modal')
		.factory('ModalService', Modal);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Modal.$inject = ['ngDialog'];

		function Modal (ngDialog) {
			var modal_crear_evento = null;
			var modal_crear_etiqueta = null;
			var modal_editar_evento = null;
			var service = {
				abrirCrearEventoModal: abrirCrearEventoModal,
				abrirCrearEtiquetaModal: abrirCrearEtiquetaModal,
				abrirEditarEventoModal: abrirEditarEventoModal,
			};

			return service;

			function abrirEditarEventoModal(evento){
				console.info('abrirEditarEventoModal',evento)
				modal_editar_evento = ngDialog.open({ 
					template: '<mod-card1 id="'+evento.id+'" title="'+evento.title+'" start="'+evento.start+'"></mod-card1>',
					plain: true,
					className: 'ngdialog-theme-default' 
				});

				
			}	

			function abrirCrearEventoModal(fecha){
				console.log('abrirCrearEventoModal fecha',fecha);
				modal_crear_evento = ngDialog.open({ 
					template: '<mod-card1 id="0" title="Nuevo Evento" start="'+fecha+'"></mod-card1>',
					plain: true,
					className: 'ngdialog-theme-default' 
				});

				console.info('modal_crear_evento',modal_crear_evento)
			}	
			
			function abrirCrearEtiquetaModal(){
				modal_crear_etiqueta = ngDialog.open({ 
					//scope: $scope,
					template: '<tag-form titulo="Etiqueta" color="red"></tag-form>',
					plain: true,
					className: 'ngdialog-theme-default' 
				});

			}	


		}

})();
