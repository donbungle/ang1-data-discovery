(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:grillaService
	* @description
	* # grillaService
	* Service of the app
	*/

	angular.module('componentes')
	.factory('grillaService', grillaService);

	grillaService.$inject = ['$http', '$q'];

	function grillaService($http, $q) {
		var sparklineFormatter = function(cell, formatterParams, onRendered){
			var content = document.createElement("span");
			var values = cell.getValue();

			//invert values if needed
			if(formatterParams.invert){
				values = values.map(val => val * -1);
			}

			//add values to chart and style
			content.classList.add(formatterParams.type);
			content.innerHTML = values.join(",");

			//setup chart options
			var options = {
				width: 145,
			}

			if(formatterParams.fill){
				options.fill = formatterParams.fill
			}

			//instantiate piety chart after the cell element has been aded to the DOM
			onRendered(function(){

				var line_opt = {
					type: 'line', 
					fillColor: '#DDD',//'#89A3C1', 
					lineColor: '#333',//'#364a63',
					barColor: '#89A3C1',
					spotRadius: 3,
					highlightSpotColor: '#900E27',
					minSpotColor: '#e85347', 
					maxSpotColor: '#65b32e', 
					lineWidth: 1, 
					composite: false,
					//defaultPixelsPerValue:15, 
					//width: 500,
					height: '30px',
					
					tooltipOffsetX: -30,
					tooltipFormatter: function (sp, options, fields) {
					    var color = options.userOptions.lineColor;
					    return '<span style="font-size:16px;">' + numeral(fields.y).format('0,0')+"</span>";
					}
				};
				
				//$(cell.getElement()).sparkline(_.map(values, function(value){return value*2.2;}), bar_opt);
				$(cell.getElement()).sparkline(values, line_opt);
			});

			return content;
		};

		var opt_base = {
			//height:"500px",
			//rowHeight:40,
			layout:"fitDataFill",
			locale: "es-es",
			langs: {
				"es-es":{ 
					"pagination":{
						"first":"Primera",
						"first_title":"Primaera página",
						"last":"Última",
						"last_title":"Última página",
						"prev":"Anterior",
						"prev_title":"Página Anterior",
						"next":"Siguiente",
						"next_title":"Página Siguiente",
						"all":"Todos",
						"counter":{
							"showing": "Mostrando",
							"of": "de",
							"rows": "registros",
							"pages": "páginas",
						},
						"groups":{ //copy for the auto generated item count in group header
							"item":"cosa", //the singular  for item
							"items":"cosas", //the plural for items
						},
						"data":{
							"loading":"Cargando", //data loader text
							"error":"Error", //data error text
						},
					},
				},
			},
			headerVisible:true,
			//progressiveLoad:"scroll",
			pagination:true,
			paginationSize:10,
			//paginationSizeSelector:[3, 6, 8, 10],
			movableColumns:true,
			paginationCounter:"rows",
			placeholder:"Sin datos",
			//selectableRows:true,
			resizableRows:false,
			resizableRowGuide:false,
			resizableColumnGuide:false,
			columnDefaults:{
				resizable:false,
			},
			dependencies:{
				DateTime:luxon.DateTime,
			},
			rowHeader:{
				//width:40,
				headerSort:false, 
				resizable: false, 
				frozen:false, 
				headerHozAlign:"center", 
				hozAlign:"center", 
				formatter:"rowSelection", 
				titleFormatter:"rowSelection", 
				cellClick:function(e, cell){
					cell.getRow().toggleSelect();
				}
			},
		};

		var opt_grilla = {};

		var opt_grilla_basico = {
			columns:[
				{
					title:"Fondo", 
					field:"nombre_fondo", 
					sorter:"string",
					width:200,
					frozen:true,
					formatter:function(cell, formatterParams){
						var value = cell.getValue();
						var celda = '<div>'+
										'<button class="btn btn-link text-renta4-alt fondo-detalle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Ver detalle" style="font-size: 12px;padding:0px 0px 0px 0px; text-decoration:none;">'+
											value +
											' <i class="icon ni ni-info-fill ms-1 text-renta4-alt fs-6"></i>'+
										'</button>'+
										'<span class="position-absolute top-0 end-0 translate-middle badge bg-'+_.first(_.shuffle(["rojo", "amarillo", "verde"]))+' rounded-2 rounded-top-0" style="margin-top:8px;margin-right:-6px;padding:3px;border-bottom-right-radius: 0 !important;">'+
											'R'+
										'</span>'+
									'</div>';
						return celda;
					}
				},
				{title:"V.Liq.", field:"valor_liq", width:60, sorter:"number", hozAlign:"right", formatter:"money", formatterParams: {decimal:",", thousand:".", negativeSign:true}},
				{title:"Divisa.", field:"divisa", width:60, sorter:"string", hozAlign:"center"},
				{title:"Activo", field:"mostrar", width:60, sorter:"string", hozAlign:"center"},
				{title:"Susc.", field:"fecha_cont_susc", width:60, sorter:"number", hozAlign:"center", formatter:"money", formatterParams: {decimal:",", thousand:".", negativeSign:true}},
				{title:"Reemb.", field:"fecha_cont_reem", width:60, sorter:"number", hozAlign:"center", formatter:"money", formatterParams: {decimal:",", thousand:".", negativeSign:true}},
				{title:"Gestión", field:"comis_gestion", width:60, sorter:"number", hozAlign:"right", formatter:"money", formatterParams: {decimal:",", thousand:".", negativeSign:true}},
				{title:"TER/OGC", field:"comis_ter", width:60, sorter:"number", hozAlign:"right", formatter:"money", formatterParams: {decimal:",", thousand:".", negativeSign:true}},
				{title:"Suscr.", field:"comis_suscripcion", width:60, sorter:"number", hozAlign:"right", formatter:"money", formatterParams: {decimal:",", thousand:".", negativeSign:true}},
				{title:"Reemb.", field:"comis_reembolso", width:60, sorter:"number", hozAlign:"right", formatter:"money", formatterParams: {decimal:",", thousand:".", negativeSign:true}},
				{title:"Inv. Min.", field:"inversion_min", width:60, sorter:"number", hozAlign:"right", formatter:"money", formatterParams: {decimal:",", thousand:".", negativeSign:true}},
				{title:"Ranking", field:"categ_r4_desc", width:60, sorter:"number", hozAlign:"center", formatter:"money", formatterParams: {decimal:",", thousand:".", negativeSign:true}},
				{
					title:" ", 
					field:"sec_id", 
					headerSort:false,
					width:40,
					frozen:true,
					hozAlign:"center",
					formatter:function(cell, formatterParams){
						var value = cell.getValue();
						var celda = '<div>'+
										'<button class="btn btn-link text-renta4-alt fondo-comprar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Contratar fondo" style="font-size: 12px;padding:0px 0px 0px 0px; text-decoration:none;">'+
											' <img src="app/assets/img_css/compra.svg" alt="Contratar fondo" width="16" height="16">'+
										'</button>'+
									'</div>';
						return celda;
					}
				},
			],
		};

		var opt_grilla_rentabilidad = {
			columns:[
				{
					title:"Fondo", 
					field:"nombre_fondo", 
					sorter:"string",
					width:200,
					frozen:true,
					formatter:function(cell, formatterParams){
						var value = cell.getValue();
						var celda = '<div>'+
										'<button class="btn btn-link text-renta4-alt fondo-detalle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Ver detalle" style="font-size: 12px;padding:0px 0px 0px 0px; text-decoration:none;">'+
											value +
											' <i class="icon ni ni-info-fill ms-1 text-renta4-alt fs-6"></i>'+
										'</button>'+
										'<span class="position-absolute top-0 end-0 translate-middle badge bg-'+_.first(_.shuffle(["rojo", "amarillo", "verde"]))+' rounded-2 rounded-top-0" style="margin-top:8px;margin-right:-6px;padding:3px;border-bottom-right-radius: 0 !important;">'+
											'R'+
										'</span>'+
									'</div>';
						//var celda = '<celda-fondo texto="'+value+'"></celda-fondo>';
						return celda;
					}
				},
				//{title:"Line Chart", field:"line", cssClass: 'sparkline', width:200, formatter:sparklineFormatter, formatterParams:{type:"line"}},
				{title: "ini_anno_acum", field: "rentab_ini_anno_acum", sorter: "number", hozAlign:"right", formatter:"money", formatterParams: {decimal:",", thousand:".", negativeSign:true}},
				{title: "1m_acum", field: "rentab_1m_acum", sorter: "number", hozAlign:"right", formatter:"money", formatterParams: {decimal:",", thousand:".", negativeSign:true}},
				{title: "3m_acum", field: "rentab_3m_acum", sorter: "number", hozAlign:"right", formatter:"money", formatterParams: {decimal:",", thousand:".", negativeSign:true}},
				{title: "6m_acum", field: "rentab_6m_acum", sorter: "number", hozAlign:"right", formatter:"money", formatterParams: {decimal:",", thousand:".", negativeSign:true}},
				{title: "1a_acum", field: "rentab_1a_acum", sorter: "number", hozAlign:"right", formatter:"money", formatterParams: {decimal:",", thousand:".", negativeSign:true}},
				{title: "3a_anual", field: "rentab_3a_anual", sorter: "number", hozAlign:"right", formatter:"money", formatterParams: {decimal:",", thousand:".", negativeSign:true}},
				{title: "5a_anual", field: "rentab_5a_anual", sorter: "number", hozAlign:"right", formatter:"money", formatterParams: {decimal:",", thousand:".", negativeSign:true}},
				{
					title:" ", 
					field:"sec_id", 
					headerSort:false,
					width:50,
					hozAlign:"center",
					formatter:function(cell, formatterParams){
						var value = cell.getValue();
						var celda = '<div>'+
										'<button class="btn btn-link text-renta4-alt fondo-comprar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Contratar fondo" style="font-size: 12px;padding:0px 0px 0px 0px; text-decoration:none;">'+
											' <img src="app/assets/img_css/compra.svg" alt="Contratar fondo" width="16" height="16">'+
										'</button>'+
									'</div>';
						return celda;
					}
				},
			],
		};

		var opt_grilla_ratios = {
			columns:[
				{
					title:"Fondo", 
					field:"nombre_fondo", 
					sorter:"string",
					width:200,
					frozen:true,
					formatter:function(cell, formatterParams){
						var value = cell.getValue();
						var celda = '<div>'+
										'<button class="btn btn-link text-renta4-alt fondo-detalle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Ver detalle" style="font-size: 12px;padding:0px 0px 0px 0px; text-decoration:none;">'+
											value +
											' <i class="icon ni ni-info-fill ms-1 text-renta4-alt fs-6"></i>'+
										'</button>'+
										'<span class="position-absolute top-0 end-0 translate-middle badge bg-'+_.first(_.shuffle(["rojo", "amarillo", "verde"]))+' rounded-2 rounded-top-0" style="margin-top:8px;margin-right:-6px;padding:3px;border-bottom-right-radius: 0 !important;">'+
											'R'+
										'</span>'+
									'</div>';
						//var celda = '<celda-fondo texto="'+value+'"></celda-fondo>';
						return celda;
					}
				},
				{title: "Volatilidad", field: "volat_1a", sorter: "number", hozAlign:"right", formatter:"money", formatterParams: {decimal:",", thousand:".", negativeSign:true}},
				{title: "Sharpe", field: "rsharpe_1a", sorter: "number", hozAlign:"right", formatter:"money", formatterParams: {decimal:",", thousand:".", negativeSign:true}},
				{title: "R2", field: "rsquare_1a", sorter: "number", hozAlign:"right", formatter:"money", formatterParams: {decimal:",", thousand:".", negativeSign:true}},
				{title: "Alpha", field: "alpha_1a", sorter: "number", hozAlign:"right", formatter:"money", formatterParams: {decimal:",", thousand:".", negativeSign:true}},
				{title: "Beta", field: "beta_1a", sorter: "number", hozAlign:"right", formatter:"money", formatterParams: {decimal:",", thousand:".", negativeSign:true}},
				{title: "Info ratio", field: "info_ratio_1a", sorter: "number", hozAlign:"right", formatter:"money", formatterParams: {decimal:",", thousand:".", negativeSign:true}},
				{title: "Tracking Error", field: "trackerror_1a", sorter: "number", hozAlign:"right", formatter:"money", formatterParams: {decimal:",", thousand:".", negativeSign:true}},
				{
					title:" ", 
					field:"sec_id", 
					headerSort:false,
					width:50,
					hozAlign:"center",
					formatter:function(cell, formatterParams){
						var value = cell.getValue();
						var celda = '<div>'+
										'<button class="btn btn-link text-renta4-alt fondo-comprar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Contratar fondo" style="font-size: 12px;padding:0px 0px 0px 0px; text-decoration:none;">'+
											' <img src="app/assets/img_css/compra.svg" alt="Contratar fondo" width="16" height="16">'+
										'</button>'+
									'</div>';
						return celda;
					}
				},
			],
		};

		var opt_grilla_ranking = {
			columns:[
				{
					title:"Fondo", 
					field:"nombre_fondo", 
					sorter:"string",
					width:200,
					frozen:false,
					formatter:function(cell, formatterParams){
						var value = cell.getValue();
						var celda = '<div>'+
										'<button class="btn btn-link text-renta4-alt fondo-detalle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Ver detalle" style="font-size: 12px;padding:0px 0px 0px 0px; text-decoration:none;">'+
											value +
											' <i class="icon ni ni-info-fill ms-1 text-renta4-alt fs-6"></i>'+
										'</button>'+
										'<span class="position-absolute top-0 end-0 translate-middle badge bg-'+_.first(_.shuffle(["rojo", "amarillo", "verde"]))+' rounded-2 rounded-top-0" style="margin-top:8px;margin-right:-6px;padding:3px;border-bottom-right-radius: 0 !important;">'+
											'R'+
										'</span>'+
									'</div>';
						//var celda = '<celda-fondo texto="'+value+'"></celda-fondo>';
						return celda;
					}
				},
				{title: "Año Actual", field: "pctrank_ini_anno", sorter: "number", hozAlign:"right", formatter:"money", formatterParams: {decimal:",", thousand:".", negativeSign:true}},
				{title: "1 mes", field: "pctrank_1m", sorter: "number", hozAlign:"right", formatter:"money", formatterParams: {decimal:",", thousand:".", negativeSign:true}},
				{title: "3 meses", field: "pctrank_3m", sorter: "number", hozAlign:"right", formatter:"money", formatterParams: {decimal:",", thousand:".", negativeSign:true}},
				{title: "6 meses", field: "pctrank_6m", sorter: "number", hozAlign:"right", formatter:"money", formatterParams: {decimal:",", thousand:".", negativeSign:true}},
				{title: "1 año", field: "pctrank_1a", sorter: "number", hozAlign:"right", formatter:"money", formatterParams: {decimal:",", thousand:".", negativeSign:true}},
				{title: "3 años", field: "pctrank_3a", sorter: "number", hozAlign:"right", formatter:"money", formatterParams: {decimal:",", thousand:".", negativeSign:true}},
				{title: "5 años", field: "pctrank_5a", sorter: "number", hozAlign:"right", formatter:"money", formatterParams: {decimal:",", thousand:".", negativeSign:true}},
				{title: "10 años", field: "pctrank_10a", sorter: "number", hozAlign:"right", formatter:"money", formatterParams: {decimal:",", thousand:".", negativeSign:true}},
				{
					title:" ", 
					field:"sec_id", 
					headerSort:false,
					width:50,
					hozAlign:"center",
					formatter:function(cell, formatterParams){
						var value = cell.getValue();
						var celda = '<div>'+
										'<button class="btn btn-link text-renta4-alt fondo-comprar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Contratar fondo" style="font-size: 12px;padding:0px 0px 0px 0px; text-decoration:none;">'+
											' <img src="app/assets/img_css/compra.svg" alt="Contratar fondo" width="16" height="16">'+
										'</button>'+
									'</div>';
						return celda;
					}
				},
			],
		};

		var opt_grilla_general = {
			columns:[
				{
					title:"Fondo", 
					field:"nombre_fondo", 
					sorter:"string",
					width:200,
					frozen:false,
					formatter:function(cell, formatterParams){
						var value = cell.getValue();
						var celda = '<div>'+
										'<button class="btn btn-link text-renta4-alt fondo-detalle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Ver detalle" style="font-size: 12px;padding:0px 0px 0px 0px; text-decoration:none;">'+
											value +
											' <i class="icon ni ni-info-fill ms-1 text-renta4-alt fs-6"></i>'+
										'</button>'+
										'<span class="position-absolute top-0 end-0 translate-middle badge bg-'+_.first(_.shuffle(["rojo", "amarillo", "verde"]))+' rounded-2 rounded-top-0" style="margin-top:8px;margin-right:-6px;padding:3px;border-bottom-right-radius: 0 !important;">'+
											'R'+
										'</span>'+
									'</div>';
						//var celda = '<celda-fondo texto="'+value+'"></celda-fondo>';
						return celda;
					}
				},
				{title: "cod_isin", field: "cod_isin", sorter: "string"},
				{title: "categoria_desc_r4", field: "categoria_desc_r4", sorter: "string"},
				{title: "sector_desc_r4", field: "sector_desc_r4", sorter: "string"},
				{title: "categoria_desc", field: "categoria_desc", sorter: "string"},
				{title: "area_geografica_desc", field: "area_geografica_desc", sorter: "string"},
				{
					title:" ", 
					field:"sec_id", 
					headerSort:false,
					width:50,
					frozen:true,
					hozAlign:"center",
					formatter:function(cell, formatterParams){
						var value = cell.getValue();
						var celda = '<div>'+
										'<button class="btn btn-link text-renta4-alt fondo-comprar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Contratar fondo" style="font-size: 12px;padding:0px 0px 0px 0px; text-decoration:none;">'+
											' <img src="app/assets/img_css/compra.svg" alt="Contratar fondo" width="16" height="16">'+
										'</button>'+
									'</div>';
						return celda;
					}
				},
			],
		};

		function get_opt_grilla(id_grilla=""){
			switch (id_grilla) {
				case "basico":
					opt_grilla = opt_grilla_basico;
					break;
				case "rentabilidad":
					opt_grilla = opt_grilla_rentabilidad;
					break;
				case "ratios":
					opt_grilla = opt_grilla_ratios;
					break;
				case "ranking":
					opt_grilla = opt_grilla_ranking;
					break;
				case "general":
					opt_grilla = opt_grilla_general;
					break;
				default:
					break;
			}
			return {...opt_base, ...opt_grilla};
		}

		function get_sparklineFormatter(){
			return sparklineFormatter;
		}

		var service = {
			get_opt_grilla: get_opt_grilla,
			get_sparklineFormatter: get_sparklineFormatter,
        };
        return service;

	}

})();
