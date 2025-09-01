(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:calendarioService
	 * @description
	 * # calendarioService
	 * Service of the app
	 */

  	angular
		.module('calendario')
		.factory('CalendarioService', Calendario);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Calendario.$inject = ['$http', '$rootScope'];

		function Calendario ($http, $rootScope) {
			var etiquetas = [
				{
					titulo: 'Etiqueta 1',
					color: 'red'
				},{
					titulo: 'Etiqueta 2',
					color: 'blue'
				},{
					titulo: 'Etiqueta 3',
					color: 'purple'
				},{
					titulo: 'Etiqueta 4',
					color: 'salmon'
				}
			];
			var eventos = [
				{
					id: 1111,
					title  : 'event1',
					start  : '2020-06-29', 
					tags: [etiquetas[0]]
				  },{
					id: 22222,
					title  : 'event1',
					start  : '2020-06-01',
					tags: [etiquetas[0],etiquetas[2]]
				  },
				  {
					id: 33,
					title  : 'event2',
					start  : '2020-06-05',
					tags: [etiquetas[1]]
				  }
			];

			var service = {
				guardarEvento: guardarEvento,
				getEventos: getEventos,
				getEtiquetas: getEtiquetas,
				guardarEtiqueta: guardarEtiqueta,
				getEvento: getEvento,
			};

			return service;

			function guardarEvento(evento) {
				console.log('CalendarioService Calendario guardarEvento', evento);
				console.log('****************************************************');
				var e_t = {
					id: evento.id == '0' ? _.random(234,23423423) : evento.id,
					title  : evento.title,
					start  : evento.start,
					tags: evento.tags,
				};

				

				eventos.push(e_t);
				$rootScope.$broadcast('evento.guardado', {
					evento: e_t,
					eventos: eventos,
				});
			}

			function eliminarEvento(id) {
				
			}

			function getEventos() {
				return eventos;
			}

			function getEvento(id) {
				console.log('CalendarioService getEvento', id);
				console.log('CalendarioService eventos', eventos);
				return _.find(eventos, ['id', id*1]);
			}


			function getEtiquetas() {
				return etiquetas;
			}

			function guardarEtiqueta(etiqueta) {
				console.log('CalendarioService Calendario guardarEtiqueta', etiqueta);
				var e_t = {
					titulo: etiqueta.titulo,
					color:etiqueta.color
				};
				etiquetas.push(e_t);
				$rootScope.$broadcast('etiqueta.guardada', {
					etiqueta: e_t,
					etiquetas: etiquetas,
				});
			}

		}

})();
