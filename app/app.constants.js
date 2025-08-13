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
