(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:calendarioCtrl
	* @description
	* # calendarioCtrl
	* Controller of the app
	*/

  	angular
		.module('calendario')
		.controller('CalendarioCtrl', Calendario);

		Calendario.$inject = ['ModalService', 'CalendarioService', '$rootScope'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Calendario(ModalService, CalendarioService, $rootScope) {
			/*jshint validthis: true */
			var vm = this;
			vm.eventos = CalendarioService.getEventos();
			vm.etiquetas = CalendarioService.getEtiquetas();

			vm.crear_evento = crear_evento;
			vm.editar_evento = editar_evento;
			vm.crear_etiqueta = ModalService.abrirCrearEtiquetaModal;

			vm.uiConfig = {
				calendar:{
					height: 450,
					editable: true,
					events: vm.eventos,
					weekends: false,
					dayClick: function(date, jsEvent, view) {
						crear_evento(date.format());
					},
					eventRender: function(event, element, view) {
						console.log('eventRender event', event);
						var html = '';
						html += '<div style="position:relative;padding:10px;border:1px solid #BBB;margin:0px 5px 5px;padding:3px 5px 15px 5px;background:#EEE;">';
							html += '<span>';
								html += '<p class="panel-title pull-left" style="font-size:12px;">';
									html += event.title;
								html += '</p>';
								html += '<div style="position:absolute;top: -4px;right:3px;">';

								angular.forEach(event.tags, function(tag, i){
									html += '<span style="margin-left:3px;">';
										html += '<i class="fa fa-bookmark" style="color:'+tag.color+';font-size:22px;"></i>';
									html += '</span>';
								});

								html += '</div>';
							html += '</span>';
						html += '</div>';


						return $(html);
					},
					monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
					monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
					dayNames: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
					dayNamesShort: ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'],
					locale: 'es',
					header:{
						left: 'month basicWeek basicDay',
						center: 'title',
						right: 'today prev,next'
					},
					eventClick: function(calEvent, jsEvent, view){
						console.log('eventClick calEvent ', calEvent);
						console.log('eventClick jsEvent ', jsEvent);
						console.log('eventClick view ', view);
						vm.editar_evento(calEvent);
					},
					eventDrop: function(){alert('eventDrop');},
					eventResize: function(){alert('eventResize');},
				}
			  };

			function crear_evento(fecha){
				if(fecha == undefined){
					fecha = moment().format('YYYY-MM-DD');
				}
				ModalService.abrirCrearEventoModal(fecha);
			}

			function editar_evento(evento){
				ModalService.abrirEditarEventoModal(evento);
			}

			$rootScope.$on('evento.guardado', function (event, params) {
				console.log('EVENTO GUARDADO event ', event);
				console.log('EVENTO GUARDADO params ', params);
				vm.eventos = CalendarioService.getEventos();
			});

			$rootScope.$on('etiqueta.guardada', function (event, params) {
				console.log('ETIQUETA GUARDADO event ', event);
				console.log('ETIQUETA GUARDADO params ', params);
				vm.etiquetas = CalendarioService.getEtiquetas();
			});

		}

})();
