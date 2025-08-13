/*!
* r4-ang1 - v0.0.1 - MISH LICENSE 2025-08-13. 
* @author R4 dev team
*/
(function() {
	'use strict';

	/**
	* @ngdoc index
	* @name app
	* @description
	* # app
	*
	* Main module of the application.
	*/

	angular.module('r4-ang1', [
		'ui.bootstrap',
		'ngResource',
		'ngAria',
		'ngCookies',
		'ngAnimate',
		'ngSanitize',
		'ui.router',
		'ui.grid',
		'angularFileUpload',

		'chart.js',

		'home',
		'componentes'
	]);

})();

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:componentesCtrl
	* @description
	* # componentesCtrl
	* Controller of the app
	*/

  	angular
		.module('r4-ang1')
		.controller('AppCtrl', AppCtrl);

		AppCtrl.$inject = ['$scope', '$rootScope'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function AppCtrl($scope, $rootScope) {
			/*jshint validthis: true */
			var vm = this;
			console.log('AppCtrl', $scope);
			vm.$onInit = onInit;
			vm.tema_actual = $rootScope.tema_actual;
			vm.logout = logout;
			vm.fnGlobal = fnGlobal;

			function fnGlobal(params="") {
				
			}

			function logout() {
				
			}

			function onInit() {
				
			}
	

		}

})();

(function () {
	'use strict';

	/**
	 * @ngdoc configuration file
	 * @name app.constant:constant
	 * @description
	 * # App Constants
	 * Configutation of the app
	 */


	angular
		.module('r4-ang1')
		.constant('EVENTS',{

			'APP': {
				'LOGIN': {
					'SUCCESS': 'Login exitoso!',
					'ERROR': 'Login fallido!',
				},
				'LOGOUT': {
					'SUCCESS': 'Logout exitoso!',
					'ERROR': 'Logout fallido!',
				},
				'REGISTER': {
					'SUCCESS': 'Registro exitoso!',
					'ERROR': 'Registro fallido!',
				},
			},
			'BUILDER': {
				'FORMULARIO': {
					'LISTA_CARGADA': 'Carga de la lista de formularios',
					'CARGADO': 'Formulario eliminado',
					'ELIMINADO': 'Formulario eliminado',
					'CREADO': 'Formulario creado',
				},
				'PANEL': {
					'LISTA_CARGADA': 'Carga de la lista de paneles',
					'CARGADO': 'Panel eliminado',
					'ELIMINADO': 'Panel eliminado',
					'CREADO': 'Panel creado',
				},
				'CONTROL': {
					'LISTA_CARGADA': 'Carga de la lista de controles',
					'CARGADO': 'Control eliminado',
					'ELIMINADO': 'Control eliminado',
					'CREADO': 'Control creado',
					'ACTUALIZADO': 'Control actualizado',
				}
			},
		})
		.constant('ERRORS',{
			'ERROR_ACTUALIZANDO_LISTA_PANELES': 'Error al actualizar la lista de paneles',
			'ERROR_ELIMINAR_PANEL': 'Error al eliminar panel',
			'ERRO_CREAR_PANEL': 'Error al crear panel',

			'ERROR_ACTUALIZANDO_LISTA_CONTROLES': 'Error al actualizar la lista de controles',
			'ERROR_ELIMINAR_CONTROL': 'Error al eliminar control',
			'ERRO_CREAR_CONTROL': 'Error al crear control',
		})
		.constant('SVG',{
			'R4_LOGO_BLANCO': '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><path fill="#FFFFFF" d="M0,300.5h300.499V0H0V300.5z M99.065,114.546v129.005H57.098V111.439c0-29.579,23.593-53.637,52.994-54.392c0.465-0.009,0.932-0.009,1.406-0.009h56.25l-19.868,41.965H114.21C105.813,99.229,99.065,106.096,99.065,114.546 M228.066,168.947c0.132,0,0.271,0,0.4,0.009c4.904,0.122,9.241,2.515,12.008,6.161c0.102,0.148,0.213,0.299,0.324,0.447c0.186,0.279,0.371,0.559,0.551,0.848c1.441,2.354,2.26,5.117,2.26,8.078v59.063H201.65v-38.848h-49.815c-1.219,0-2.411-0.141-3.545-0.411c-6.878-1.608-11.997-7.771-11.997-15.132c0-2.374,0.531-4.627,1.488-6.637l0.54-1.146l7.363-15.542h0.008l51.506-108.8h46.422l-52.859,111.91H228.066z"/></svg>',
			'DATABASE': '<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="m6,6c-3.421,0-6,1.72-6,4v10.25c0,2.173,2.523,3.75,6,3.75s6-1.577,6-3.75v-10.25c0-2.28-2.579-4-6-4Zm3,8.988c-.09.284-1.132,1.012-3,1.012-1.879,0-2.923-.737-3-1v-1.502c.872.321,1.892.502,3,.502s2.128-.181,3-.502v1.49Zm-3-5.988c1.843,0,2.881.708,2.996,1-.115.292-1.153,1-2.996,1-1.868,0-2.91-.728-3-.978v-.01c.09-.284,1.132-1.012,3-1.012Zm0,12c-1.725,0-2.783-.563-3-.838v-1.664c.872.321,1.892.502,3,.502s2.128-.181,3-.502v1.664c-.217.275-1.275.838-3,.838Zm7.889-12c-.35-1.695-1.571-3.113-3.348-4h6.958c.828,0,1.5.672,1.5,1.5v1c0,.828-.672,1.5-1.5,1.5h-3.611Zm10.111-3.5v13c0,3.033-2.468,5.5-5.5,5.5h-3.5c-.828,0-1.5-.671-1.5-1.5s.672-1.5,1.5-1.5h3.5c1.379,0,2.5-1.122,2.5-2.5V5.5c0-1.378-1.121-2.5-2.5-2.5h-9c-.909,0-1.747.494-2.188,1.29-.401.725-1.314.986-2.039.585-.725-.401-.986-1.314-.584-2.039.969-1.749,2.812-2.835,4.812-2.835h9c3.032,0,5.5,2.467,5.5,5.5Zm-5,7c0,.829-.672,1.5-1.5,1.5h-1c-.828,0-1.5-.671-1.5-1.5s.672-1.5,1.5-1.5h1c.828,0,1.5.671,1.5,1.5Zm0,5c0,.829-.672,1.5-1.5,1.5h-1c-.828,0-1.5-.671-1.5-1.5s.672-1.5,1.5-1.5h1c.828,0,1.5.671,1.5,1.5Z"/></svg>',
			'LOGO2': '<?xml version="1.0" encoding="iso-8859-1"?><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve"><path style="fill:#A0EBFF;" d="M134.047,194.408H15.118c-6.096,0-11.595-3.661-13.947-9.285c-2.351-5.624-1.097-12.11,3.184-16.449	L124.795,46.56c2.841-2.881,6.718-4.502,10.764-4.502h59.464c5.238,0,10.103,2.711,12.858,7.167	c2.755,4.455,3.007,10.018,0.667,14.705l-60.976,122.114C145.013,191.17,139.776,194.408,134.047,194.408z"/><path style="fill:#73C8F0;" d="M496.881,194.408H377.952c-5.73,0-10.966-3.238-13.526-8.364L303.45,63.93	c-2.34-4.687-2.087-10.25,0.667-14.705s7.621-7.167,12.858-7.167h59.464c4.046,0,7.923,1.622,10.764,4.502l120.441,122.114	c4.28,4.34,5.535,10.827,3.184,16.449C508.476,190.748,502.977,194.408,496.881,194.408z"/><path style="fill:#D2F0FF;" d="M117.142,178.897l77.881-136.839h121.953l77.642,136.839H117.142z"/><path style="fill:#0073AA;" d="M361.594,178.897L242.175,448.703c-3.025,6.832-0.604,14.85,5.698,18.866	c2.505,1.596,5.323,2.371,8.119,2.371c4.239,0,8.426-1.779,11.389-5.168L508.262,189.24c2.546-2.912,3.818-6.619,3.722-10.344	H361.594V178.897z"/><path style="fill:#41B4E6;" d="M150.405,178.897H0.014c-0.096,3.724,1.176,7.432,3.722,10.344l240.881,275.532	c2.963,3.389,7.151,5.168,11.389,5.168c2.796,0,5.615-0.774,8.119-2.371c6.3-4.016,8.722-12.034,5.698-18.866L150.405,178.897z"/><path style="fill:#A0EBFF;" d="M117.142,178.897l125.034,282.044c2.421,5.471,7.841,8.999,13.824,8.999s11.403-3.528,13.824-8.999	l124.795-282.044H117.142z"/><polygon style="fill:#41B4E6;" points="255.88,178.897 394.618,178.897 316.975,42.058 255.88,42.058 "/><path style="fill:#73C8F0;" d="M256,469.94c5.983,0,11.403-3.528,13.824-8.999l124.794-282.044H256V469.94z"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
			'LOGO1': '<?xml version="1.0" ?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 242.5 239.46"><defs><style>.cls-1,.cls-6{fill:none;}.cls-2{clip-path:url(#clip-path);}.cls-3{fill:#33c6f4;}.cls-4{fill:#1b447e;}.cls-5{fill:#fff;}.cls-6{stroke:#221e1f;stroke-miterlimit:10;stroke-width:7.16px;}</style><clipPath id="clip-path" transform="translate(1.72)"><circle class="cls-1" cx="119.73" cy="119.73" r="116.15"/></clipPath></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1" data-name="Layer 1"><g class="cls-2"><circle class="cls-3" cx="121.45" cy="119.73" r="116.15"/><path class="cls-4" d="M239.32,167.79c-53.41-24-108.37-91.46-113-94.55s-10.84.77-10.84.77c-3.87-6.19-10.06.77-10.06.77C76.77,123.55.14,170.11.14,170.11S36.94,237.79,122,237.79C208.48,237.79,239.32,167.79,239.32,167.79Z" transform="translate(1.72)"/><path class="cls-5" d="M67.48,116.58s15.48-7,12.38,4.65-15.48,28.64-11.61,29.41S83,140.58,86.06,142.12s5.42.78,3.87,6.2-3.1,9.29,0,9.29,5.42-7,9.29-13.94,10.06-3.87,12.38-1.55,9.29,15.49,14.71,13.94,8.51-8.52,6.19-24,1.55-20.12,1.55-20.12,4.64-2.32,13.16,8.51,24,27.09,26.31,26.32-10.83-17.8-7.74-19.35,15.48,2.32,21.68,7.74c0,0,2.12,8.87,2.12.36L126.31,73.24,115.47,74l-10.06.77S80.64,111.94,67.48,116.58Z" transform="translate(1.72)"/><path class="cls-6" d="M239.32,170.11c-53.41-24-108.37-93.78-113-96.87s-10.84.77-10.84.77c-3.87-6.19-10.06.77-10.06.77C76.77,123.55.14,170.11.14,170.11" transform="translate(1.72)"/></g><circle class="cls-6" cx="121.45" cy="119.73" r="116.15"/></g></g></svg>',
			'XLS': '<?xml version="1.0" ?><svg class="bi bi-filetype-xls" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM6.472 15.29a1.176 1.176 0 0 1-.111-.449h.765a.578.578 0 0 0 .254.384c.07.049.154.087.25.114.095.028.202.041.319.041.164 0 .302-.023.413-.07a.559.559 0 0 0 .255-.193.507.507 0 0 0 .085-.29.387.387 0 0 0-.153-.326c-.101-.08-.255-.144-.462-.193l-.619-.143a1.72 1.72 0 0 1-.539-.214 1.001 1.001 0 0 1-.351-.367 1.068 1.068 0 0 1-.123-.524c0-.244.063-.457.19-.639.127-.181.303-.322.527-.422.225-.1.484-.149.777-.149.305 0 .564.05.78.152.216.102.383.239.5.41.12.17.186.359.2.566h-.75a.56.56 0 0 0-.12-.258.625.625 0 0 0-.247-.181.923.923 0 0 0-.369-.068c-.217 0-.388.05-.513.152a.472.472 0 0 0-.184.384c0 .121.048.22.143.3a.97.97 0 0 0 .405.175l.62.143c.217.05.406.12.566.211a1 1 0 0 1 .375.358c.09.148.135.335.135.56 0 .247-.063.466-.188.656a1.216 1.216 0 0 1-.539.439c-.234.105-.52.158-.858.158-.254 0-.476-.03-.665-.09a1.404 1.404 0 0 1-.478-.252 1.13 1.13 0 0 1-.29-.375Zm-2.945-3.358h-.893L1.81 13.37h-.036l-.832-1.438h-.93l1.227 1.983L0 15.931h.861l.853-1.415h.035l.85 1.415h.908L2.253 13.94l1.274-2.007Zm2.727 3.325H4.557v-3.325h-.79v4h2.487v-.675Z" fill-rule="evenodd"/></svg>',
			'XLSX': '<?xml version="1.0" ?><svg class="bi bi-filetype-xlsx" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM7.86 14.841a1.13 1.13 0 0 0 .401.823c.13.108.29.192.479.252.19.061.411.091.665.091.338 0 .624-.053.858-.158.237-.105.416-.252.54-.44a1.17 1.17 0 0 0 .187-.656c0-.224-.045-.41-.135-.56a1.002 1.002 0 0 0-.375-.357 2.028 2.028 0 0 0-.565-.21l-.621-.144a.97.97 0 0 1-.405-.176.37.37 0 0 1-.143-.299c0-.156.061-.284.184-.384.125-.101.296-.152.513-.152.143 0 .266.023.37.068a.624.624 0 0 1 .245.181.56.56 0 0 1 .12.258h.75a1.093 1.093 0 0 0-.199-.566 1.21 1.21 0 0 0-.5-.41 1.813 1.813 0 0 0-.78-.152c-.293 0-.552.05-.777.15-.224.099-.4.24-.527.421-.127.182-.19.395-.19.639 0 .201.04.376.123.524.082.149.199.27.351.367.153.095.332.167.54.213l.618.144c.207.049.36.113.462.193a.387.387 0 0 1 .153.326.512.512 0 0 1-.085.29.558.558 0 0 1-.255.193c-.111.047-.25.07-.413.07-.117 0-.224-.013-.32-.04a.837.837 0 0 1-.249-.115.578.578 0 0 1-.255-.384h-.764Zm-3.726-2.909h.893l-1.274 2.007 1.254 1.992h-.908l-.85-1.415h-.035l-.853 1.415H1.5l1.24-2.016-1.228-1.983h.931l.832 1.438h.036l.823-1.438Zm1.923 3.325h1.697v.674H5.266v-3.999h.791v3.325Zm7.636-3.325h.893l-1.274 2.007 1.254 1.992h-.908l-.85-1.415h-.035l-.853 1.415h-.861l1.24-2.016-1.228-1.983h.931l.832 1.438h.036l.823-1.438Z" fill-rule="evenodd"/></svg>',
			'TXT': '<?xml version="1.0" ?><svg class="bi bi-filetype-txt" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.5V14a2 2 0 0 1-2 2h-2v-1h2a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.928 15.849v-3.337h1.136v-.662H0v.662h1.134v3.337h.794Zm4.689-3.999h-.894L4.9 13.289h-.035l-.832-1.439h-.932l1.228 1.983-1.24 2.016h.862l.853-1.415h.035l.85 1.415h.907l-1.253-1.992 1.274-2.007Zm1.93.662v3.337h-.794v-3.337H6.619v-.662h3.064v.662H8.546Z" fill-rule="evenodd"/></svg>',
			'HTML': '<?xml version="1.0" ?><svg class="bi bi-filetype-html" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5Zm-9.736 7.35v3.999h-.791v-1.714H1.79v1.714H1V11.85h.791v1.626h1.682V11.85h.79Zm2.251.662v3.337h-.794v-3.337H4.588v-.662h3.064v.662H6.515Zm2.176 3.337v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H9.93L8.79 11.85h-.805v3.999h.706Zm4.71-.674h1.696v.674H12.61V11.85h.79v3.325Z" fill-rule="evenodd"/></svg>',
			'CSV': '<?xml version="1.0" ?><svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="Outline"><g data-name="Outline" id="Outline-2"><path d="M45,29H15a3,3,0,0,0-3,3V54a3,3,0,0,0,3,3H45a3,3,0,0,0,3-3V32A3,3,0,0,0,45,29Zm1,3v5H39V31h6A1,1,0,0,1,46,32ZM21,49V45H37v4Zm16,2v4H21V51Zm0-12v4H21V39ZM21,37V31H37v6Zm-2,6H14V39h5Zm0,2v4H14V45Zm20,0h7v4H39Zm0-2V39h7v4ZM15,31h4v6H14V32A1,1,0,0,1,15,31ZM14,54V51h5v4H15A1,1,0,0,1,14,54Zm31,1H39V51h7v3A1,1,0,0,1,45,55Z"/><path d="M16,22h2a1,1,0,0,0,0-2H16a3,3,0,0,1-3-3V15a3,3,0,0,1,3-3h2a1,1,0,0,0,0-2H16a5,5,0,0,0-5,5v2A5,5,0,0,0,16,22Z"/><path d="M25.5,20H24a1,1,0,0,1-1-1,1,1,0,0,0-2,0,3,3,0,0,0,3,3h1.5a3.5,3.5,0,0,0,0-7h-1a1.5,1.5,0,0,1,0-3H26a1,1,0,0,1,1,1,1,1,0,0,0,2,0,3,3,0,0,0-3-3H24.5a3.5,3.5,0,0,0,0,7h1a1.5,1.5,0,0,1,0,3Z"/><path d="M34.14,21.51a1,1,0,0,0,1.72,0l3-5A1,1,0,0,0,39,16V11a1,1,0,0,0-2,0v4.72l-2,3.34-2-3.34V11a1,1,0,0,0-2,0v5a1,1,0,0,0,.14.51Z"/><circle cx="53" cy="43" r="1"/><path d="M57,2H11a1,1,0,0,0-1,1V6H7A1,1,0,0,0,6,7V61a1,1,0,0,0,1,1H53a1,1,0,0,0,1-1V58h3a1,1,0,0,0,1-1V3A1,1,0,0,0,57,2ZM42,8v7a3,3,0,0,0,3,3h7v6H8V8Zm2,1.41L50.59,16H45a1,1,0,0,1-1-1ZM56,56H54V47a1,1,0,0,0-2,0V60H8V26H52V39a1,1,0,0,0,2,0V17a1,1,0,0,0-.29-.71l-10-10A1,1,0,0,0,43,6H12V4H56Z"/></g></g></svg>',
			'PDF': '<?xml version="1.0" ?><svg class="bi bi-filetype-pdf" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z" fill-rule="evenodd"/></svg>',
			'JSON': '<?xml version="1.0" ?><svg class="bi bi-filetype-json" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM4.151 15.29a1.176 1.176 0 0 1-.111-.449h.764a.578.578 0 0 0 .255.384c.07.049.154.087.25.114.095.028.201.041.319.041.164 0 .301-.023.413-.07a.559.559 0 0 0 .255-.193.507.507 0 0 0 .084-.29.387.387 0 0 0-.152-.326c-.101-.08-.256-.144-.463-.193l-.618-.143a1.72 1.72 0 0 1-.539-.214 1.001 1.001 0 0 1-.352-.367 1.068 1.068 0 0 1-.123-.524c0-.244.064-.457.19-.639.128-.181.304-.322.528-.422.225-.1.484-.149.777-.149.304 0 .564.05.779.152.217.102.384.239.5.41.12.17.186.359.2.566h-.75a.56.56 0 0 0-.12-.258.624.624 0 0 0-.246-.181.923.923 0 0 0-.37-.068c-.216 0-.387.05-.512.152a.472.472 0 0 0-.185.384c0 .121.048.22.144.3a.97.97 0 0 0 .404.175l.621.143c.217.05.406.12.566.211a1 1 0 0 1 .375.358c.09.148.135.335.135.56 0 .247-.063.466-.188.656a1.216 1.216 0 0 1-.539.439c-.234.105-.52.158-.858.158-.254 0-.476-.03-.665-.09a1.404 1.404 0 0 1-.478-.252 1.13 1.13 0 0 1-.29-.375Zm-3.104-.033a1.32 1.32 0 0 1-.082-.466h.764a.576.576 0 0 0 .074.27.499.499 0 0 0 .454.246c.19 0 .33-.055.422-.164.091-.11.137-.265.137-.466v-2.745h.791v2.725c0 .44-.119.774-.357 1.005-.237.23-.565.345-.985.345a1.59 1.59 0 0 1-.568-.094 1.145 1.145 0 0 1-.407-.266 1.14 1.14 0 0 1-.243-.39Zm9.091-1.585v.522c0 .256-.039.47-.117.641a.862.862 0 0 1-.322.387.877.877 0 0 1-.47.126.883.883 0 0 1-.47-.126.87.87 0 0 1-.32-.387 1.55 1.55 0 0 1-.117-.641v-.522c0-.258.039-.471.117-.641a.87.87 0 0 1 .32-.387.868.868 0 0 1 .47-.129c.177 0 .333.043.47.129a.862.862 0 0 1 .322.387c.078.17.117.383.117.641Zm.803.519v-.513c0-.377-.069-.701-.205-.973a1.46 1.46 0 0 0-.59-.63c-.253-.146-.559-.22-.916-.22-.356 0-.662.074-.92.22a1.441 1.441 0 0 0-.589.628c-.137.271-.205.596-.205.975v.513c0 .375.068.699.205.973.137.271.333.48.589.626.258.145.564.217.92.217.357 0 .663-.072.917-.217.256-.146.452-.355.589-.626.136-.274.205-.598.205-.973Zm1.29-.935v2.675h-.746v-3.999h.662l1.752 2.66h.032v-2.66h.75v4h-.656l-1.761-2.676h-.032Z" fill-rule="evenodd"/></svg>',
			'XML': '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-filetype-xml" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.527 11.85h-.893l-.823 1.439h-.036L.943 11.85H.012l1.227 1.983L0 15.85h.861l.853-1.415h.035l.85 1.415h.908l-1.254-1.992zm.954 3.999v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596h-.025L4.58 11.85h-.806v3.999zm4.71-.674h1.696v.674H8.4V11.85h.791z"/></svg>',
		})
		.constant('FILETYPE_UPLOADER',{
			'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'XLSX',
			'text/xml': 'XML',
			'text/json': 'JSON',
			'application/vnd.ms-excel': 'XLS',
			//'': 'TXT',
			//'': 'HTML',
			'text/csv': 'CSV',
			//'': 'PDF',
		})
		.constant('FIELDTYPES_DEF',{
			'CharField': 'A string field, for small- to medium-sized strings.',
			'TextField': 'A large text field, for large text or textual data.',
			'IntegerField': 'An integer field.',
			'BigIntegerField': 'A larger integer field.',
			'SmallIntegerField': 'A smaller integer field.',
			'PositiveIntegerField': 'An integer field that only allows positive values.',
			'PositiveSmallIntegerField': 'A smaller version of PositiveIntegerField.',
			'FloatField': 'A floating point number field.',
			'DecimalField': 'A fixed-precision decimal number field.',
			'BooleanField': 'A true/false field.',
			'NullBooleanField': 'A true/false field that also accepts NULL as a value.',
			'DateTimeField': 'A date and time field.',
			'DateField': 'A date field.',
			'TimeField': 'A time field.',
			'DurationField': 'A field for storing periods of time.',
			'FileField': 'A file-upload field.',
			'ImageField': 'An image-upload field; works like FileField, but also validates that the uploaded object is a valid image.',
			'EmailField': 'A string field for storing email addresses.',
			'URLField': 'A string field for storing URLs.',
			'SlugField': 'A short string for URLs, usually derived from a title.',
			'UUIDField': 'A field for storing universally unique identifiers.',
			'BinaryField': 'A field for storing raw binary data.',
			'IPAddressField': 'A field for storing IPv4 or IPv6 addresses.',
			'GenericIPAddressField': 'A field for storing IPv4 or IPv6 addresses; normalizes to IPv4Address or IPv6Address.',
			'ForeignKey': 'A many-to-one relationship.',
			'OneToOneField': 'A one-to-one relationship.',
			'ManyToManyField': 'A many-to-many relationship.',
			'ChoiceField': 'A field for selecting choices. Typically used with a list of tuples defining the available choices.',
		})
		.constant('FIELDTYPES_ICONS',{
			'CharField': 'format_size',
			'TextField': 'format_size',
			'IntegerField': 'filter_9_plus',
			'BigIntegerField': 'filter_9_plus',
			'SmallIntegerField': 'filter_9_plus',
			'PositiveIntegerField': 'filter_9_plus',
			'PositiveSmallIntegerField': 'filter_9_plus',
			'FloatField': 'filter_9_plus',
			'DecimalField': 'filter_9_plus',
			'BooleanField': 'help',
			'NullBooleanField': 'help',
			'DateTimeField': 'date_range',
			'DateField': 'date_range',
			'TimeField': 'alarm',
			'DurationField': 'alarm',
			'FileField': 'attach_file',
			'ImageField': 'insert_photo',
			'EmailField': 'mail',
			'URLField': 'language',
			'SlugField': 'info_outline',
			'UUIDField': 'info_outline',
			'BinaryField': 'info_outline',
			'IPAddressField': 'info_outline',
			'GenericIPAddressField': 'info_outline',
			'ForeignKey': 'call_made',
			'OneToOneField': 'call_split',
			'ManyToManyField': 'import_export',
			'ChoiceField': 'thumb_up',
		});

	


})();

(function () {
    'use strict';
    angular
		.module('r4-ang1')
        .filter('count_keys_obj', function () { 
            return function (obj_input) {
                return Object.keys(obj_input).length;
            } ;
        })
        .filter('filetype_def', ['FIELDTYPES_DEF', function (FIELDTYPES_DEF) { 
            return function (input) {
                var type = FIELDTYPES_DEF[input];
                return type === undefined ? "info_outline" : type.toLowerCase();
            } ;
        }])
        .filter('filetype_icon', ['FIELDTYPES_ICONS', function (FIELDTYPES_ICONS) { 
            return function (input) {
                var type = FIELDTYPES_ICONS[input];
                return type === undefined ? "info_outline" : type.toLowerCase();
            } ;
        }])
        .filter('filetype', ['FILETYPE_UPLOADER', function (FILETYPE_UPLOADER) { 
            return function (input) {
                var type = FILETYPE_UPLOADER[input];
                return type === undefined ? "info_outline" : type.toLowerCase();
            } ;
        }])
        .filter('fecha_temp', function () { 
            return function (input) {
                return moment.unix(input).format('DD-MM-YYYY');
            } ;
        })
        .filter('iif', function () {
            return function (input, trueValue, falseValue) {
                return input ? trueValue : falseValue;
            };
        })
        .filter('unixms_to_date', function () { 
            return function (input) {
                return moment(input).format('DD/MM/YYYY HH:mm');
            } ;
        })
        .filter('iif', function () {
            return function (input, trueValue, falseValue) {
                return input ? trueValue : falseValue;
            };
        })
        .filter('decimales', function () {
            return function (value, cant) {
                if (empty(cant)) {
                    cant = 0;
                }
                if (isNumber(value)) {
                    return $.number(value, cant, ',', '.');
                } else {
                    return $.number(0, cant, ',', '.');
                }
            };
        })
        .filter('porcentaje', function () {
            return function (value, cant) {
                if (empty(cant)) {
                    cant = 0;
                }
                if (isNumber(value)) {
                    return $.number(value * 100, cant, ',', '.') + '%';
                } else {
                    return $.number(0, cant, ',', '.') + '%';
                }
            };
        })
        .filter('fecha_formato', function () {
            return function (value, format_in, format_out) {
                if (!value) {
                    value = moment();
                }
    
                return moment(value, format_in).format(format_out);
            };
        })
        .filter('fecha_formato_2', function () {
            return function (value, format_out) {
                if (!value) {
                    value = moment();
                }
    
                return moment(value).format(format_out);
            };
        })
        .filter('fecha_hora', function () {
            return function (value) {
                return moment(value).format('DD-MM-YYYY HH:mm');
            };
        })
        .filter('fecha', function () {
            return function (value) {
                return moment(value).format('DD-MM-YYYY');
            };
        })
        .filter('fecha_hora_normal', function () {
            return function (value) {
                return moment(value).format('DD MMM YYYY HH:mm')
            };
        })
        .filter('fecha_normal', function () {
            return function (value) {
                return moment(value).format('DD MMM YYYY')
            };
        })
        .filter('hora_normal', function () {
            return function (value) {
                return moment(value).format('HH:mm')
            };
        })
        .filter('texto_option', function () {
            return function (value) {
                return replaceAll(value, ' ', '_');
            };
        })
        .filter("trust", ['$sce', function ($sce) {
            return function (htmlCode) {
                return $sce.trustAsHtml(htmlCode);
            }
        } ])
    
        .filter('fecha_replace', function () {
    
            return function (value) {
                if (value) {
                    var d = new Date(parseInt(value.replace('/Date(', '')));
                    return moment(d).year() <= 1900 ? '----' : moment(d).format('DD-MM-YYYY');
                } else {
                    return '----';
                }
            };
        })
        .filter('fecha_art85', function () {
            return function (value) {
                if (value) {
                    if (value.length >= 7) {
                        return moment(value, 'DDMMMYY', 'en', true).format('DD-MM-YYYY');
                    } else {
                        return value;
                    }
                } else {
                    return '----';
                }
            };
        })
        .filter('pesos', function () {
            return function (value) {
                return '$' + value;
            };
        })
        .filter('fecha_desde', function () {
            return function (x) {
                //console.log('x',x);
                var d = new Date(parseInt(x.replace('/Date(', '')));
                return moment(d).fromNow();
            };
        })
        .filter('primera_letra', function () {
            return function (x) {
                //console.log('x',x);
                return x.substring(0, 1);
            };
        })
        .filter('json_parse', function () {
            return function (value) {
                return JSON.parse(value);
            };
        })
        .filter('rut', function () {
            return function (rut) {
                var result = rut.slice(-4, -1) + '-' + rut.substr(rut.length - 1)
                for (var i = 4; i < rut.length; i += 3) {
                    result = rut.slice(-3 - i, -i) + '.' + result
                }
    
                return result
            };
        })
        .filter('removerAcentos', function () {
            return function (value) {
                var str = value;
                var defaultDiacriticsRemovalMap = [
                { 'base': 'A', 'letters': /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g },
                { 'base': 'AA', 'letters': /[\uA732]/g },
                { 'base': 'AE', 'letters': /[\u00C6\u01FC\u01E2]/g },
                { 'base': 'AO', 'letters': /[\uA734]/g },
                { 'base': 'AU', 'letters': /[\uA736]/g },
                { 'base': 'AV', 'letters': /[\uA738\uA73A]/g },
                { 'base': 'AY', 'letters': /[\uA73C]/g },
                { 'base': 'B', 'letters': /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g },
                { 'base': 'C', 'letters': /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g },
                { 'base': 'D', 'letters': /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g },
                { 'base': 'DZ', 'letters': /[\u01F1\u01C4]/g },
                { 'base': 'Dz', 'letters': /[\u01F2\u01C5]/g },
                { 'base': 'E', 'letters': /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g },
                { 'base': 'F', 'letters': /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g },
                { 'base': 'G', 'letters': /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g },
                { 'base': 'H', 'letters': /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g },
                { 'base': 'I', 'letters': /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g },
                { 'base': 'J', 'letters': /[\u004A\u24BF\uFF2A\u0134\u0248]/g },
                { 'base': 'K', 'letters': /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g },
                { 'base': 'L', 'letters': /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g },
                { 'base': 'LJ', 'letters': /[\u01C7]/g },
                { 'base': 'Lj', 'letters': /[\u01C8]/g },
                { 'base': 'M', 'letters': /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g },
                { 'base': 'N', 'letters': /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g },
                { 'base': 'NJ', 'letters': /[\u01CA]/g },
                { 'base': 'Nj', 'letters': /[\u01CB]/g },
                { 'base': 'O', 'letters': /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g },
                { 'base': 'OI', 'letters': /[\u01A2]/g },
                { 'base': 'OO', 'letters': /[\uA74E]/g },
                { 'base': 'OU', 'letters': /[\u0222]/g },
                { 'base': 'P', 'letters': /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g },
                { 'base': 'Q', 'letters': /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g },
                { 'base': 'R', 'letters': /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g },
                { 'base': 'S', 'letters': /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g },
                { 'base': 'T', 'letters': /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g },
                { 'base': 'TZ', 'letters': /[\uA728]/g },
                { 'base': 'U', 'letters': /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g },
                { 'base': 'V', 'letters': /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g },
                { 'base': 'VY', 'letters': /[\uA760]/g },
                { 'base': 'W', 'letters': /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g },
                { 'base': 'X', 'letters': /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g },
                { 'base': 'Y', 'letters': /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g },
                { 'base': 'Z', 'letters': /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g },
                { 'base': 'a', 'letters': /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g },
                { 'base': 'aa', 'letters': /[\uA733]/g },
                { 'base': 'ae', 'letters': /[\u00E6\u01FD\u01E3]/g },
                { 'base': 'ao', 'letters': /[\uA735]/g },
                { 'base': 'au', 'letters': /[\uA737]/g },
                { 'base': 'av', 'letters': /[\uA739\uA73B]/g },
                { 'base': 'ay', 'letters': /[\uA73D]/g },
                { 'base': 'b', 'letters': /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g },
                { 'base': 'c', 'letters': /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g },
                { 'base': 'd', 'letters': /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g },
                { 'base': 'dz', 'letters': /[\u01F3\u01C6]/g },
                { 'base': 'e', 'letters': /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g },
                { 'base': 'f', 'letters': /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g },
                { 'base': 'g', 'letters': /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g },
                { 'base': 'h', 'letters': /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g },
                { 'base': 'hv', 'letters': /[\u0195]/g },
                { 'base': 'i', 'letters': /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g },
                { 'base': 'j', 'letters': /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g },
                { 'base': 'k', 'letters': /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g },
                { 'base': 'l', 'letters': /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g },
                { 'base': 'lj', 'letters': /[\u01C9]/g },
                { 'base': 'm', 'letters': /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g },
                { 'base': 'n', 'letters': /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g },
                { 'base': 'nj', 'letters': /[\u01CC]/g },
                { 'base': 'o', 'letters': /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g },
                { 'base': 'oi', 'letters': /[\u01A3]/g },
                { 'base': 'ou', 'letters': /[\u0223]/g },
                { 'base': 'oo', 'letters': /[\uA74F]/g },
                { 'base': 'p', 'letters': /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g },
                { 'base': 'q', 'letters': /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g },
                { 'base': 'r', 'letters': /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g },
                { 'base': 's', 'letters': /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g },
                { 'base': 't', 'letters': /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g },
                { 'base': 'tz', 'letters': /[\uA729]/g },
                { 'base': 'u', 'letters': /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g },
                { 'base': 'v', 'letters': /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g },
                { 'base': 'vy', 'letters': /[\uA761]/g },
                { 'base': 'w', 'letters': /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g },
                { 'base': 'x', 'letters': /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g },
                { 'base': 'y', 'letters': /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g },
                { 'base': 'z', 'letters': /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g }
              ];
    
                for (var i = 0; i < defaultDiacriticsRemovalMap.length; i++) {
                    str = str.replace(defaultDiacriticsRemovalMap[i].letters, defaultDiacriticsRemovalMap[i].base);
                }
    
                return str;
            };
        })
        .filter('fecha_web_service', function () {
            return function (value, format_out) {
                if (!value) {
                    value = moment();
                }
    
                if (!format_out) {
                    format_out = 'DD-MM-YYYY HH:mm:ss';
                }
    
                return moment(value, 'MM/DD/YYYY hh:mm:ss A').format(format_out);
            };
        })
        .filter('prettyJSON', function () {
            function prettyPrintJson(json) {
              return JSON ? JSON.stringify(json, null, '  ') : 'your browser doesnt support JSON so cant pretty print';
            }
            return prettyPrintJson;
        });

})();




(function () {
	'use strict';

	/**
	 * @ngdoc configuration file
	 * @name app.config:config
	 * @description
	 * # Config and run block
	 * Configutation of the app
	 */


	angular
		.module('r4-ang1')
		.config(configure)
		.run(runBlock);

	configure.$inject = [
		'$urlRouterProvider',
		'$httpProvider',
	];

	function configure(
		$urlRouterProvider,
		$httpProvider,
	) {
		// This is required for Browser Sync to work poperly
		//delete $httpProvider.defaults.headers.post["If-Modified-Since"];
		//delete $httpProvider.defaults.headers.get["If-Modified-Since"];
		//$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
		//$httpProvider.defaults.useXDomain = true;
		//delete $httpProvider.defaults.headers.common['X-Requested-With'];

	
		$urlRouterProvider
			.otherwise('/dashboard');

	}

	runBlock.$inject = ['$rootScope', '$http'];

	function runBlock($rootScope, $http) {
		'use strict';

		$http.defaults.xsrfHeaderName = 'X-CSRFToken';
  		$http.defaults.xsrfCookieName = 'csrftoken';

		$rootScope.url_indicadores = 'https://www.indecon.online/';
		$rootScope.tema_actual = "renta4";

		var _baseUrl, _apiUrl;
		
		if(location.host == "localhost:2222"){
			_baseUrl = 'http://localhost:2222/#!';
			_apiUrl = 'http://localhost:5502';
		}else{
			_baseUrl = 'http://146.190.142.235/#!';
			_apiUrl = 'http://146.190.142.235:5502';
		}
		// blur_on border_style bubble_chart format_shapes insert_chart cloud_done cloud_circle 
		// developer_dashboard device_hub cast_connected memory security toys add_to_photos blur_circular
		// camera broken_image filter_vintage flare flash_on gradient grain grid_off grid_on hdr_weak 
		// store_mall_directory all_inclusive casino spa
		// 
		$rootScope.app = {
			baseUrl: _baseUrl,
			name: 'iManager',	
			icon: 'logo2',
			apiUrl: _apiUrl,
		};
		$rootScope.session = {};

	}


})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:LayoutCtrl
	* @description
	* # LayoutCtrl
	* Controller of the app
	*/

	angular
		.module('r4-ang1')
		.controller('LayoutCtrl', Layout);

	Layout.$inject = ['$rootScope', '$mdSidenav', '$cookies', '$state', '$mdToast', '$mdDialog'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Layout($rootScope, $mdSidenav, $cookies, $state, $mdToast, $mdDialog ) {
		/*jshint validthis: true */
		var vm = this;


		vm.$onInit = onInit;

		function onInit(){
			vm.app_name = $rootScope.app.name;
			vm.app_icon = $rootScope.app.icon;
		}

		vm.toggleSidenav = function (menuId) {
			$mdSidenav(menuId).toggle();
		};

		vm.changePassword = function () {
			$mdToast.show(
				$mdToast.simple()
				.content('Password clicked!')
				.position('top right')
				.hideDelay(2000)
			);
		};

		vm.changeProfile = function (ev) {
			$mdDialog.show({
				controller: DialogController,
				templateUrl: 'tabDialog.tmpl.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose:true
			})
			.then(function(answer) {
				$mdToast.show(
					$mdToast.simple()
					.content('You said the information was "' + answer + '".')
					.position('top right')
					.hideDelay(2000)
				);

			}, function() {
				$mdToast.show(
					$mdToast.simple()
					.content('You cancelled the dialog.')
					.position('top right')
					.hideDelay(2000)
				);
			});

			function DialogController($scope, $mdDialog) {
				$scope.hide = function() {
					$mdDialog.hide();
				};

				$scope.cancel = function() {
					$mdDialog.cancel();
				};

				$scope.answer = function(answer) {
					$mdDialog.hide(answer);
				};
			}
		};


		vm.logOut = function () {

			alert('Implement your Function Here');
			// $cookies.put('dev_appserver_login', ' ');
			//$state.go('out', {}, {reload: true});

		};

		var originatorEv;
		vm.openMenu = function ($mdOpenMenu, ev) {
			originatorEv = ev;
			$mdOpenMenu(ev);
		};

	}

})();

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:menuService
	 * @description
	 * # menuService
	 * Service of the app
	 */

  	angular
		.module('r4-ang1')
		.factory('MenuService', Menu);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Menu.$inject = ['$http'];

		function Menu ($http) {

			var menu = [
				
					{
						link: 'componentes',
						name: 'Componentes'
					},
			    
					{
						link: 'builder',
						name: 'Atlas'
					},
			    
		  	];

			return {
				listMenu: function () {
					return menu;
				}
		  	}

		}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:SidenavCtrl
	* @description
	* # SidenavCtrl
	* Controller of the app
	*/
	angular
		.module('r4-ang1')
		.controller('SidenavCtrl', SidenavCtrl)
		.controller('SettingsCtrl', SettingsCtrl);

	// Injecting Denpendencies

	SidenavCtrl.$inject = ['$rootScope', '$state', 'MenuService', '$scope',];
	SettingsCtrl.$inject = ['$rootScope'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function SidenavCtrl($rootScope, $state, MenuService, $scope,) {
		/*jshint validthis: true */
		var vm = this;
		vm.lol = "LOL";
		vm.$onInit = onInit;
		vm.toggleSidenav = function (menuId) {

		};
		
		vm.closeSidenav = function() {
			
		};

		// Close menu on small screen after click on menu item.
		// Only use $scope in controllerAs when necessary; for example, publishing and subscribing events using $emit, $broadcast, $on or $watch.
		$scope.$on('$stateChangeSuccess', vm.closeSidenav);
		
		vm.menu = MenuService.listMenu();

		vm.navigateTo = function (target) {
			var page = target;
			$state.go(page);
		};

		function onInit(){
			vm.app_name = $rootScope.app.name;
			vm.app_icon = $rootScope.app.icon;
		}

	}

	function SettingsCtrl($rootScope) {
		/*jshint validthis: true */
		var vm = this;
		vm.app_name = $rootScope.app.name;
		vm.app_icon = $rootScope.app.icon;

		vm.$onInit = onInit;

		function onInit(){
			
		}
	}

})();

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:menuService
	 * @description
	 * # menuService
	 * Service of the app
	 */

  	angular
		.module('r4-ang1')
		.factory('MenuService', Menu);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Menu.$inject = ['$http'];

		function Menu ($http) {

			var menu = [
				
				/*{
					link: 'indicadores',
					name: 'Indicadores',
					icon: 'timer_off'
				},
				{
					link: 'componentes',
					name: 'Componentes',
					icon: 'now_widgets'
				},
				{
					link: 'ktlog',
					name: 'Panel Contenido',
					icon: 'aspect_ratio'
				},*/
				{
					link: 'builder',
					name: 'Form Builder',
					icon: 'developer_dashboard'
				},
				{
					link: 'agenda',
					name: 'Agenda',
					icon: 'view_module'
				},			    
		  	];

			return {
				listMenu: function () {
					return menu;
				}
		  	};

		}

})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:componentesModule
	 * @description
	 * # componentesModule
	 * Module of the app
	 */

  	angular.module('componentes', [
		'ngResource',
		'ngAria',
		'ui.bootstrap',
		'ngCookies',
		'ngAnimate',
		'ngSanitize',
		'ui.router',
	  ]);

})();

'use strict';

/**
 * @ngdoc function
 * @name app.route:componentesRoute
 * @description
 * # componentesRoute
 * Route of the app
 */

angular.module('componentes')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.componentes', {
				url:'/componentes',
				templateUrl: 'app/modules/componentes/componentes.html',
				controller: 'ComponentesCtrl',
				controllerAs: 'vm'
			});
		
	}]);

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:componentesCtrl
	* @description
	* # componentesCtrl
	* Controller of the app
	*/

  	angular
		.module('componentes')
		.controller('ComponentesCtrl', Componentes);

		Componentes.$inject = ['$scope', '$rootScope', '$mdTheming', 'ColorService', '$timeout'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Componentes($scope, $rootScope, $mdTheming, ColorService, $timeout) {
			/*jshint validthis: true */
			var vm = this;

			vm.cont = 1;

			vm.$onInit = onInit;

			function onInit(){
				//console.log('ComponentesCtrl onInit');
				var COLORS = ColorService.getColoresDisponibles();
				//COLORS[Math.floor(Math.random() * COLORS.length)];
				vm.primary_obj = COLORS[Math.floor(Math.random() * COLORS.length)];
				vm.warn_obj = COLORS[Math.floor(Math.random() * COLORS.length)];
				vm.accent_obj = COLORS[Math.floor(Math.random() * COLORS.length)];
				vm.primary_h1_obj = '300';
				vm.warn_h1_obj = '300';
				vm.accent_h1_obj = '300';
				vm.primary_h2_obj = '900';
				vm.warn_h2_obj = '900';
				vm.accent_h2_obj = '900';
				vm.primary_h3_obj = 'A700';
				vm.warn_h3_obj = 'A700';
				vm.accent_h3_obj = 'A700';
				vm.default_obj = '900';
				vm.dark_obj = true;
				$timeout(function(){
					//vm.test();
				}, 500);
				
			}


			


			console.log('ComponentesCtrl vm', vm);
			vm.test = function(){
				//console.log('test', $mdTheming.THEMES);
				$mdTheming.defineTheme('myTheme'+vm.cont, {
					primary: vm.primary_obj,
					primaryHues: {
						'default': vm.default_obj,
						'hue-1': vm.primary_h1_obj,
						'hue-2': vm.primary_h2_obj,
						'hue-3': vm.primary_h3_obj,
					},
					accent: vm.warn_obj,
					accentHues: {
						'default': vm.default_obj,
						'hue-1': vm.accent_h1_obj,
						'hue-2': vm.accent_h2_obj,
						'hue-3': vm.accent_h3_obj,
					},
					warn: vm.accent_obj,
					// It's not necessary to specify all hues in the object.
					warnHues: {
						'default': vm.default_obj,
					    'hue-1': vm.warn_h1_obj,
						'hue-2': vm.warn_h2_obj,
						'hue-3': vm.warn_h3_obj,
					},
					// It's not necessary to specify custom hues at all.
					background: vm.background_obj,
					backgroundHues:{
						'default': vm.default_obj,
					    'hue-1': vm.warn_h1_obj,
						'hue-2': vm.warn_h2_obj,
						'hue-3': vm.warn_h3_obj,
					},
					dark: vm.dark_obj,
				  });
				  //console.log('test', $mdTheming.THEMES);
				  //$mdTheming.generateTheme('myTheme'+vm.cont);
				  //console.log('ComponentesCtrl $scope', $scope);
				  //console.log('ComponentesCtrl rootScope', $rootScope);
				  $rootScope.tema_actual = "myTheme"+vm.cont;
				  vm.tema_actual = $rootScope.tema_actual;
				  vm.cont++;
			}
		}

})();

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:componentesService
	 * @description
	 * # componentesService
	 * Service of the app
	 */

  	angular
		.module('componentes')
		.factory('ComponentesService', Componentes);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Componentes.$inject = ['$http'];

		function Componentes ($http) {

		}

})();

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.module:homeModule
	* @description
	* # homeModule
	* Module of the app
	*/

	angular.module('home', []);
})();

'use strict';

	/**
	* @ngdoc function
	* @name app.route:HomeRoute
	* @description
	* # HomeRoute
	* Route of the app
	*/

angular.module('r4-ang1')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			
			.state('home', {
				url: '',
				abstract: true,
				templateUrl: 'app/modules/home/home.html',
				controller: 'HomeCtrl',
				controllerAs: 'vm',
			})
			.state('home.dashboard', {
				url:'/dashboard',
				templateUrl: 'app/modules/home/inicio.html',
			});
			
	}]);

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:HomeCtrl
	* @description
	* # HomeCtrl
	* Controller of the app
	*/

	angular
		.module('r4-ang1')
		.controller('HomeCtrl', Home);

	Home.$inject = [
		'homeService',
		'$rootScope',
		'$scope',
		'$controller',
		'FileUploader',
	];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Home(
		homeService, 
		$rootScope, 
		$scope, 
		$controller, 
		FileUploader,
	) {
		/*jshint validthis: true */
		var vm = this;
		angular.extend(vm, $controller('AppCtrl', {$scope: $scope}));
		vm.$onInit = onInit;
		vm.app_name = $rootScope.app.name;
		vm.app_icon = $rootScope.app.icon;
		vm.title = "Hello, " + vm.app_name + "!";
		vm.version = "1.0.0";
		vm.menu = homeService.getMenu();

		vm.uploader = new FileUploader({
            url: 'upload.php'
            ,timeout: 2000
        });

		vm.uploader.filters.push({
            name: 'syncFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                console.log('syncFilter');
                return this.queue.length < 10;
            }
        });

		vm.uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
            console.log('onWhenAddingFileFailed', item, filter, options);
        };
        vm.uploader.onAfterAddingFile = function(fileItem) {
            console.log('onAfterAddingFile', fileItem);
        };
        vm.uploader.onAfterAddingAll = function(addedFileItems) {
            console.log('onAfterAddingAll', addedFileItems);
        };
        vm.uploader.onBeforeUploadItem = function(item) {
            console.log('onBeforeUploadItem', item);
        };
        vm.uploader.onProgressItem = function(fileItem, progress) {
            console.log('onProgressItem', fileItem, progress);
        };
        vm.uploader.onProgressAll = function(progress) {
            console.log('onProgressAll', progress);
        };
        vm.uploader.onSuccessItem = function(fileItem, response, status, headers) {
            console.log('onSuccessItem', fileItem, response, status, headers);
        };
        vm.uploader.onErrorItem = function(fileItem, response, status, headers) {
            console.log('onErrorItem', fileItem, response, status, headers);
        };
        vm.uploader.onCancelItem = function(fileItem, response, status, headers) {
            console.log('onCancelItem', fileItem, response, status, headers);
        };
        vm.uploader.onCompleteItem = function(fileItem, response, status, headers) {
            console.log('onCompleteItem', fileItem, response, status, headers);
        };

        vm.uploader.onTimeoutItem = function(fileItem) {
            console.log('onTimeoutItem', fileItem);
        };

        vm.uploader.onCompleteAll = function() {
            console.log('onCompleteAll');
        };

        console.log('vm.uploader', vm.uploader);


		vm.myData = [
			{
				firstName: "Cox",
				lastName: "Carney",
				company: "Enormo",
				employed: true
			},
			{
				firstName: "Lorraine",
				lastName: "Wise",
				company: "Comveyer",
				employed: false
			},
			{
				firstName: "Nancy",
				lastName: "Waters",
				company: "Fuelton",
				employed: false
			}
		  ];
		;


		function onInit(){
			console.log('Home onInit', vm);
			console.log('Home $scope', $scope);
		}

		vm.desserts = [
			'Apple Pie',
			'Donut',
			'Fudge',
			'Cupcake',
			'Ice Cream',
			'Tiramisu',
		];
	}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:homeService
	* @description
	* # homeService
	* Service of the app
	*/

	angular.module('r4-ang1')
		.factory('homeService', homeService);

	homeService.$inject = ['$http'];

	function homeService($http) {

		var menu = [
				
			/*{
				link: 'indicadores',
				name: 'Indicadores',
				icon: 'timer_off'
			},
			{
				link: 'componentes',
				name: 'Componentes',
				icon: 'now_widgets'
			},
			{
				link: 'ktlog',
				name: 'Panel Contenido',
				icon: 'aspect_ratio'
			},*/
			{
				link: 'dashboard',
				name: 'Inicio',
				icon: 'home'
			},
			{
				link: 'atlas',
				name: 'Fuentes de datos',
				icon: 'cloud_upload'
			},
			{
				link: 'agenda',
				name: 'Gráficos',
				icon: 'assessment'
			},			    
		  ];

		return {
			getMenu: getMenu
		};

		function getMenu() {
			return menu;
		}

	}

})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:serviciosModule
	 * @description
	 * # serviciosModule
	 * Module of the app
	 */

  	angular.module('servicios', []);

})();

'use strict';

/**
 * @ngdoc function
 * @name app.route:serviciosRoute
 * @description
 * # serviciosRoute
 * Route of the app
 */

angular.module('servicios')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
		.state('home.servicios', {
			url:'/servicios',
			templateUrl: 'app/modules/servicios/servicios.html',
			controller: 'ServiciosCtrl',
			controllerAs: 'vm'
		});
	
	}]);

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:serviciosCtrl
	* @description
	* # serviciosCtrl
	* Controller of the app
	*/

  	angular
		.module('servicios')
		.controller('ServiciosCtrl', Servicios);

		Servicios.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Servicios() {
			/*jshint validthis: true */
			var vm = this;

		}

})();

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:serviciosService
	 * @description
	 * # serviciosService
	 * Service of the app
	 */

  	angular
		.module('servicios')
		.factory('ServiciosService', Servicios);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Servicios.$inject = ['$http'];

		function Servicios ($http) {

		}

})();

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:colorService
	 * @description
	 * # servicioService
	 * Service of the app
	 */

		angular
		.module('componentes')
		.factory('ColorService', ColorService);
	
		ColorService.$inject = ['$mdTheming','$rootScope'];
		
		function ColorService($mdTheming,$rootScope) {
			//console.log('---ColorService');
            var colores_disponibles = [
                'red',
                'pink',
                'purple',
                'deep-purple',
                'indigo',
                'blue',
                'light-blue',
                'cyan',
                'teal',
                'green',
                'light-green',
                'lime',
                'yellow',
                'amber',
                'orange',
                'deep-orange',
                'brown',
                'grey',
                'blue-grey',
            ];

            var variantes_color = [
                '50',
                '100',
                '200',
                '300',
                '400',
                '500',
                '600',
                '700',
                '800',
                '900',
                'A100',
                'A200',
                'A400',
                'A700',
            ];
			
			var service = {
				getThemeActual: getThemeActual,
				setThemeActual: setThemeActual,
				getPaletasTheme: getPaletasTheme,
				getColoresPaleta: getColoresPaleta,
				getPaletaPrimary: getPaletaPrimary,
				getPaletaAccent: getPaletaAccent,
				getPaletaWarn: getPaletaWarn,
				getColoresThemeActual: getColoresThemeActual,
				getColoresPaletaThemeActual: getColoresPaletaThemeActual,

                getColoresDisponibles: getColoresDisponibles,
				getRandomColor: getRandomColor,
                getVariantesColor: getVariantesColor,
			};
			return service;

            function getVariantesColor(){
				return variantes_color;
			}

			function getRandomColor() {
				return colores_disponibles[Math.floor(Math.random() * colores_disponibles.length)];
			}

            function getColoresDisponibles(){
				return colores_disponibles;
			}
			
			function getColoresPaleta(paleta){
				return _.map($mdTheming.PALETTES[paleta], function(p){return p.hex;});
			}

			function getThemeActual(){
				//console.log('getThemeActual');
				return $rootScope.tema_actual;
			}

			function setThemeActual(tema){
				//console.log('getThemeActual');
				return $rootScope.tema_actual = tema; // && $rootScope.$apply();
			}
			
			function getPaletaPrimary(theme_name){
				if(theme_name == undefined){
					theme_name = getThemeActual();
				}
				return getPaletasTheme(theme_name)[0];
			}

			function getPaletaAccent(theme_name){
				if(theme_name == undefined){
					theme_name = getThemeActual();
				}
				return getPaletasTheme(theme_name)[1];
			}

			function getPaletaWarn(theme_name){
				if(theme_name == undefined){
					theme_name = getThemeActual();
				}
				return getPaletasTheme(theme_name)[2];
			}

			function getPaletasTheme(theme_name){
				if(theme_name == undefined){
					theme_name = getThemeActual();
				}
				return _.uniq(_.map($mdTheming.THEMES[theme_name].colors, function(c){return c.name;}));
			}

			function getColoresThemeActual(theme_name){
				var colores_tema = [];
				if(theme_name == undefined){
					theme_name = getThemeActual();
				}
				var paletas = getPaletasTheme(theme_name);
				angular.forEach(paletas, function(paleta, i){
					var colores = getColoresPaleta(paleta);
					//console.log('colores', colores);
					angular.forEach(colores, function(color, i){
						colores_tema.push(color);
					});
				});
				return colores_tema;
			}

			function getColoresPaletaThemeActual(theme_name){
				var colores_tema = [];
				if(theme_name == undefined){
					theme_name = getThemeActual();
				}
				var paletas = getPaletasTheme(theme_name);
				angular.forEach(paletas.slice(0, 3), function(paleta, i){
					var colores = getColoresPaleta(paleta);
					colores_tema.push(colores.sort());
				});
				return colores_tema;
			}




	
		}
})();

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:colorService
	 * @description
	 * # servicioService
	 * Service of the app
	 */

		angular
		.module('componentes')
		.factory('HelperService', HelperService);
	
		HelperService.$inject = [
			'$rootScope',
			'$q',
		];
		
		function HelperService(
			$rootScope, 
			$q,
		) {
			log('---HelperService');
			var API_URL = $rootScope.app.apiUrl;
            var service = {
				getRandomElement: getRandomElement,
				validarFormulario: validarFormulario,
				log: log,
			};
			return service;

            function getRandomElement(arr) {
				//console.log('getRandom arr', arr);
				if (arr && arr.length) {
					const randomIndex = Math.floor(Math.random() * arr.length);
					return arr[randomIndex];
				}
				return null;
			}     
			
			function validarFormulario(formulario) {
				var defer = $q.defer();
				log('validarFormulario formulario', formulario);
				if (formulario != undefined || formulario != null || formulario != '') {
					defer.resolve({'msg': 'Válido', 'response': true});
				}else{
					defer.reject({'msg': 'No Válido', 'response': false});
				}
				return defer.promise;
			}     

			function log(text, obj=undefined){
				//console.log(text, obj);
			}	
		}
})();

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:colorService
	 * @description
	 * # servicioService
	 * Service of the app
	 */

		angular
		.module('componentes')
		.factory('TipoCampoService', TipoCampoService);
	
		TipoCampoService.$inject = [
			'$http',
			'$rootScope',
			'EVENTS',
			'ERRORS'
		];
		
		function TipoCampoService(
			$http,
			$rootScope, 
			EVENTS,
			ERRORS
		) {
			console.log('---TipoCampoService');
			var API_URL = $rootScope.app.apiUrl;
            var service = {
				getTiposCampo: getTiposCampo,
			};
			return service;

            function getTiposCampo() {
				console.log('getTiposCampo');
				return $http({
					url: API_URL + '/dbuilder/tipos-dato/',   
					method: "GET",
				});
			}        
	
		}
})();

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:colorService
	 * @description
	 * # servicioService
	 * Service of the app
	 */

		angular
		.module('componentes')
		.factory('ToastService', ToastService);
	
		ToastService.$inject = [
			'$mdToast',
			'$rootScope',
			'EVENTS',
			'HelperService'
		];
		
		function ToastService(
			$mdToast,
			$rootScope, 
			EVENTS,
			HelperService
		) {
			HelperService.log('---ToastService');
			var API_URL = $rootScope.app.apiUrl;
            var service = {
				showToast: showToast,
			};
			return service;

            function showToast(texto) {
				HelperService.log('showToast');
				$mdToast.show({
					template:
						'<md-toast>' +
							'<div class="md-toast-content"  md-colors="{backgroundColor: \'accent-800\'}">' +
								texto + 
							'</div>' +
						'</md-toast>',
					hideDelay: 1800,
					position: 'bottom right',
					bindToController: false,
					controllerAs: 'vm',
					locals: {
						message: texto
					}
				});
			}        
	
		}
})();


/*
var pinTo = "bottom right";
$mdToast.show(
	$mdToast.simple()
	.textContent(texto)
	.position(pinTo)
	.hideDelay(3000))
.then(function() {
	$log.log('Toast dismissed.');
}).catch(function() {
	$log.log('Toast failed or was forced to close early by another toast.');
});
*/