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

	homeService.$inject = ['$http', '$q'];

	function homeService($http, $q) {
		var datos = [
			{
				firstName: "Cox",
				lastName: "Carney",
				company: "Enormo",
				employed: true,
				line: _.shuffle(_.range(10, 375, 1)),
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Lorraine",
				lastName: "Wise",
				company: "Comveyer",
				employed: false,
				line: _.shuffle(_.range(10, 100, 1)),
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Nancy",
				lastName: "Waters",
				company: "Fuelton",
				employed: false,
				line: _.shuffle(_.range(10, 100, 1)),
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Cox",
				lastName: "Carney",
				company: "Enormo",
				employed: true,
				line: _.shuffle(_.range(10, 100, 1)),
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Lorraine",
				lastName: "Wise",
				company: "Comveyer",
				employed: false,
				line: _.shuffle(_.range(10, 100, 1)),
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Nancy",
				lastName: "Waters",
				company: "Fuelton",
				employed: false,
				line: _.shuffle(_.range(10, 100, 1)),
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Cox",
				lastName: "Carney",
				company: "Enormo",
				employed: true,
				line: _.shuffle(_.range(10, 100, 1)),
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Lorraine",
				lastName: "Wise",
				company: "Comveyer",
				employed: false,
				line: _.shuffle(_.range(10, 100, 1)),
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Nancy",
				lastName: "Waters",
				company: "Fuelton",
				employed: false,
				line: _.shuffle(_.range(10, 100, 1)),
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Cox",
				lastName: "Carney",
				company: "Enormo",
				employed: true,
				line: _.shuffle(_.range(10, 100, 1)),
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Lorraine",
				lastName: "Wise",
				company: "Comveyer",
				employed: false,
				line: _.shuffle(_.range(10, 100, 1)),
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Nancy",
				lastName: "Waters",
				company: "Fuelton",
				employed: false,
				line: _.shuffle(_.range(10, 100, 1)),
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Cox",
				lastName: "Carney",
				company: "Enormo",
				employed: true,
				line: _.shuffle(_.range(10, 100, 1)),
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Lorraine",
				lastName: "Wise",
				company: "Comveyer",
				employed: false,
				line: _.shuffle(_.range(10, 100, 1)),
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Nancy",
				lastName: "Waters",
				company: "Fuelton",
				employed: false,
				line: _.shuffle(_.range(10, 100, 1)),
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Cox",
				lastName: "Carney",
				company: "Enormo",
				employed: true,
				line: _.shuffle(_.range(10, 100, 1)),
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Lorraine",
				lastName: "Wise",
				company: "Comveyer",
				employed: false,
				line: _.shuffle(_.range(10, 100, 1)),
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Nancy",
				lastName: "Waters",
				company: "Fuelton",
				employed: false,
				line: _.shuffle(_.range(10, 100, 1)),
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Cox",
				lastName: "Carney",
				company: "Enormo",
				employed: true,
				line: _.shuffle(_.range(10, 100, 1)),
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Lorraine",
				lastName: "Wise",
				company: "Comveyer",
				employed: false,
				line: _.shuffle(_.range(10, 100, 1)),
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Nancy",
				lastName: "Waters",
				company: "Fuelton",
				employed: false,
				line: _.shuffle(_.range(10, 100, 1)),
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Cox",
				lastName: "Carney",
				company: "Enormo",
				employed: true,
				line: _.shuffle(_.range(10, 100, 1)),
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Lorraine",
				lastName: "Wise",
				company: "Comveyer",
				employed: false,
				line: _.shuffle(_.range(10, 100, 1)),
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Nancy",
				lastName: "Waters",
				company: "Fuelton",
				employed: false,
				line: _.shuffle(_.range(10, 100, 1)),
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Cox",
				lastName: "Carney",
				company: "Enormo",
				employed: true,
				line: _.shuffle(_.range(10, 100, 1)),
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Lorraine",
				lastName: "Wise",
				company: "Comveyer",
				employed: false,
				line: _.shuffle(_.range(10, 100, 1)),
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			},
			{
				firstName: "Nancy",
				lastName: "Waters",
				company: "Fuelton",
				employed: false,
				line: _.shuffle(_.range(10, 100, 1)),
				gender: ["M", "F"][_.random(0,1)],
				creation_date: '2025-0'+_.random(1, 9)+'-'+_.random(10, 28),
				rating: _.random(0, 5)
			}
		];

		var filtros_menu = [
			{
				titulo: "GESTORA",
				icono: "list-round",
				collapsed: true,
				opciones: [
					{
						titulo: "Opcion 1",
						checked: false,
						value: ""
					},{
						titulo: "Opcion 2",
						checked: false,
						value: ""
					},{
						titulo: "Opcion 3",
						checked: false,
						value: ""
					},{
						titulo: "Opcion 4",
						checked: false,
						value: ""
					}
				]
			},
			{
				titulo: "ÁREA GEOGRÁFICA",
				icono: "list-round",
				collapsed: true,
				opciones: [
					{
						titulo: "Opcion 1",
						checked: false,
						value: ""
					}
				]
			},
			{
				titulo: "CATEGORÍA",
				icono: "list-round",
				collapsed: true,
				opciones: [
					{
						titulo: "Opcion 1",
						checked: false,
						value: ""
					}
				]
			},
			{
				titulo: "DIVISA",
				icono: "list-round",
				collapsed: true,
				opciones: [
					{
						titulo: "Opcion 1",
						checked: false,
						value: ""
					}
				]
			},
			{
				titulo: "RATING",
				icono: "list-round",
				collapsed: true,
				opciones: [
					{
						titulo: "Opcion 1",
						checked: false,
						value: ""
					}
				]
			},
			{
				titulo: "RENTABILIDAD",
				icono: "list-round",
				collapsed: true,
				opciones: [
					{
						titulo: "Opcion 1",
						checked: false,
						value: ""
					}
				]
			},
			{
				titulo: "RATIOS",
				icono: "list-round",
				collapsed: true,
				opciones: [
					{
						titulo: "Opcion 1",
						checked: false,
						value: ""
					}
				]
			},
			{
				titulo: "CARACTERÍSTICAS",
				icono: "list-round",
				collapsed: true,
				opciones: [
					{
						titulo: "Opcion 1",
						checked: false,
						value: ""
					}
				]
			}

		];

		function get_data(success = true) {
			var respuesta = {};
			var deferred = $q.defer();
			var data = datos;
			
			if (success) {
				respuesta = {
					'data': data,
					'status': 200,
					'mensaje': "✅ Task finished successfully!"
				};
				deferred.resolve(respuesta);
			} else {
				respuesta = {
					'data': [],
					'status': 500,
					'mensaje': "❌ Task failed!"
				};
				deferred.reject(respuesta);
			}

			return deferred.promise;
		}

		function get_filtros_menu() {
			var respuesta = {};
			var deferred = $q.defer();
			var data = filtros_menu;
			
			if (data.length > 0) {
				respuesta = {
					'data': data,
					'status': 200,
					'mensaje': "✅ Task finished successfully!"
				};
				deferred.resolve(respuesta);
			} else {
				respuesta = {
					'data': [],
					'status': 500,
					'mensaje': "❌ Task failed!"
				};
				deferred.reject(respuesta);
			}

			return deferred.promise;
		}

		var chartFormatter = function(cell, formatterParams, onRendered){
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
				//peity(content, formatterParams.type,  options);
				var bar_opt = {
                    type: 'bar', barColor: '#43629c',
                    barWidth: 15,
                    //width: 500,
                    tooltipOffsetX: -100,
                    tooltipFormatter: function (sp, options, fields) {
                        var color = options.userOptions.barColor;
                        return '<i class="fa fa-lg fa-bar-chart" style="color:' + color + ';background:#FFF;padding:2px;"></i> Monto: ' + $.number(fields[0].value, 0, ',', '.');
                    }
                };

				var line_opt = {
                    type: 'line', fillColor: false, lineColor: '#dd4b39',
                    minSpotColor: 'red', maxSpotColor: '#73C7A5', lineWidth: 2, composite: true,
                    //defaultPixelsPerValue:15, 
                    //width: 500,
					height: '30px',
                    tooltipOffsetX: -100,
                    tooltipFormatter: function (sp, options, fields) {
                        var color = options.userOptions.lineColor;
                        return '<br /><i class="fa fa-lg fa-line-chart" style="color:' + color + ';background:#FFF;padding:2px;"></i> Spread: ' + $.number(fields.y, 2, ',', '.');
                    }
                };
				
				$(cell.getElement()).sparkline(_.map(values, function(value){return value*2.2;}), bar_opt);
				$(cell.getElement()).sparkline(values, line_opt);
			});

			return content;
		};

		var opt_grilla = {
			height:"400px",
			layout:"fitColumns",
			//ajaxURL:"/exampledata/ajaxprogressive",
			headerVisible:true,
			progressiveLoad:"scroll",
			paginationSize:20,
			placeholder:"Sin datos",
			dependencies:{
				DateTime:luxon.DateTime,
			},
			persistence:{
				sort:true,
				filter:true,
				columns:true,
			},
			persistenceID:"examplePerststance",
			//enable range selection
			selectableRange:1,
			selectableRangeColumns:true,
			selectableRangeRows:true,
			selectableRangeClearCells:true,
			//change edit trigger mode to make cell navigation smoother
			editTriggerEvent:"dblclick",

			//configure clipboard to allow copy and paste of range format data
			clipboard:true,
			clipboardCopyStyled:false,
			clipboardCopyConfig:{
				rowHeaders:false,
				columnHeaders:false,
			},
			clipboardCopyRowRange:"range",
			clipboardPasteParser:"range",
			clipboardPasteAction:"range",

			//rowHeader:{
			//	resizable: false, 
			//	frozen: true, 
			//	width:40, 
			//	hozAlign:"center", 
			//	formatter: "rownum", 
			//	cssClass:"range-header-col bg-rojo", 
			//	editor:true
			//},

			rowHeader:{
				width:40,
				headerSort:false, 
				resizable: false, 
				frozen:true, 
				headerHozAlign:"center", 
				hozAlign:"center", 
				formatter:"rowSelection", 
				titleFormatter:"rowSelection", cellClick:function(e, cell){
					cell.getRow().toggleSelect();
				}
			},

			//setup cells to work as a spreadsheet
			columnDefaults:{
				//headerSort:false,
				//headerHozAlign:"center",
				//editor:"input",
				resizable:false,
				//width:100,
			},
			
			columns:[
				{title:"Nombre", field:"firstName", sorter:"string"},
				{title:"Apellido", field:"lastName", sorter:"string"},
				{title:"Line Chart", field:"line", cssClass: 'sparkline', width:160, formatter:chartFormatter, formatterParams:{type:"line"}},
				{title:"Gender", field:"gender", hozAlign:"center", sorter:"string", width:100},
				{title:"Rating", field:"rating", formatter:"star", hozAlign:"center", width:100}, //
				{title:"Empresa", field:"company", sorter:"string"},
				{title:"Fecha ingreso", field:"creation_date", width:120, formatter:"datetime", hozAlign:"center", formatterParams:{
					inputFormat:"yyyy-MM-dd",
					outputFormat:"dd/MM/yyyy",
					invalidPlaceholder:"(fecha no válida)",
					timezone:"America/Santiago",
				}},
				{title:"Empleado", field:"employed", formatter:"tickCross", width:120, hozAlign:"center", sorter:"boolean"},
			],
		};

		function get_opt_grilla(){
			return opt_grilla;
		}

		var service = {
            get_data: get_data,
			get_filtros_menu: get_filtros_menu,
			chartFormatter: chartFormatter,
			get_opt_grilla: get_opt_grilla,
        };
        return service;

	}

})();
